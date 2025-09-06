import base64
import json
import logging
import os
import tempfile
from pathlib import Path
from typing import List, Dict, Any

import faiss
import numpy as np
import torch
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from PIL import Image, ImageOps
from transformers import CLIPModel, CLIPProcessor

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Image Similarity Finder", version="1.0.0")

# Add CORS middleware to allow Next.js frontend to communicate
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variables for model and index
model = None
processor = None
index = None
metadata = None
device = None

def pick_device():
    """Automatically select the best available device"""
    try:
        if torch.cuda.is_available():
            return "cuda"
        if hasattr(torch.backends, "mps") and torch.backends.mps.is_available():
            return "mps"
    except Exception:
        pass
    return "cpu"

def load_model_and_index():
    """Load the CLIP model and FAISS index"""
    global model, processor, index, metadata, device
    
    device = pick_device()
    logger.info(f"Using device: {device}")
    
    # Load CLIP model
    model_name = "openai/clip-vit-base-patch32"
    logger.info(f"Loading CLIP model: {model_name}")
    model = CLIPModel.from_pretrained(model_name).to(device).eval()
    processor = CLIPProcessor.from_pretrained(model_name)
    
    # Load FAISS index and metadata
    index_dir = Path(__file__).parent / "subset_index"
    index_path = index_dir / "index.faiss"
    meta_path = index_dir / "meta.json"
    
    if not index_path.exists() or not meta_path.exists():
        raise FileNotFoundError(f"Index files not found in {index_dir}")
    
    index = faiss.read_index(str(index_path))
    with open(meta_path, 'r', encoding='utf-8') as f:
        metadata = json.load(f)
    
    logger.info(f"Loaded index with {index.ntotal} vectors and {len(metadata)} metadata entries")

def preprocess_image(image: Image.Image) -> Image.Image:
    """Preprocess image for CLIP model"""
    return ImageOps.exif_transpose(image.convert("RGB"))

@torch.no_grad()
def get_image_embedding(image: Image.Image) -> np.ndarray:
    """Get CLIP embedding for an image"""
    inputs = processor(images=image, return_tensors="pt").to(device)
    features = model.get_image_features(**inputs)
    # Normalize the features
    features = torch.nn.functional.normalize(features, p=2, dim=1)
    return features.cpu().numpy().astype("float32")

@app.on_event("startup")
async def startup_event():
    """Initialize model and index on startup"""
    try:
        load_model_and_index()
        logger.info("Model and index loaded successfully")
    except Exception as e:
        logger.error(f"Failed to load model/index: {e}")
        raise

@app.get("/")
async def root():
    return {"message": "Image Similarity Finder API", "status": "running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "index_size": index.ntotal if index else 0}

@app.post("/find_similar")
async def find_similar_images(
    file: UploadFile = File(...),
    top_k: int = 3
) -> Dict[str, Any]:
    """
    Find the most similar images to the uploaded image
    """
    if not model or not index or not metadata:
        raise HTTPException(status_code=500, detail="Model or index not loaded")
    
    if top_k <= 0 or top_k > 10:
        raise HTTPException(status_code=400, detail="top_k must be between 1 and 10")
    
    try:
        # Read and process the uploaded image
        image_data = await file.read()
        
        # Create a temporary file to save the image
        with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as tmp_file:
            tmp_file.write(image_data)
            tmp_path = tmp_file.name
        
        try:
            # Load and preprocess the image
            image = Image.open(tmp_path)
            image = preprocess_image(image)
            
            # Get embedding
            query_embedding = get_image_embedding(image)
            
            # Search for similar images
            scores, indices = index.search(query_embedding, top_k)
            
            # Prepare results
            results = []
            for i, (score, idx) in enumerate(zip(scores[0], indices[0])):
                if idx < len(metadata):
                    result = {
                        "rank": i + 1,
                        "similarity_score": float(score),
                        "title": metadata[idx]["title"],
                        "artist": metadata[idx]["artist"],
                        "genre": metadata[idx]["genre"],
                        "image_path": metadata[idx]["image_path"]
                    }
                    results.append(result)
            
            return {
                "query_image": file.filename,
                "similar_images": results,
                "total_found": len(results)
            }
            
        finally:
            # Clean up temporary file
            os.unlink(tmp_path)
            
    except Exception as e:
        logger.error(f"Error processing image: {e}")
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

@app.get("/image/{image_path:path}")
async def serve_image(image_path: str):
    """
    Serve images from the dataset
    """
    try:
        # Decode base64 path if needed
        if image_path.startswith("b64:"):
            decoded_path = base64.b64decode(image_path[4:]).decode("utf-8")
        else:
            decoded_path = image_path
        
        full_path = Path(decoded_path)
        
        if not full_path.exists():
            raise HTTPException(status_code=404, detail="Image not found")
        
        from fastapi.responses import FileResponse
        return FileResponse(str(full_path))
        
    except Exception as e:
        logger.error(f"Error serving image: {e}")
        raise HTTPException(status_code=500, detail="Error serving image")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)