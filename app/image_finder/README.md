# Image Similarity Finder

This is a Python FastAPI service that provides image similarity search using CLIP (Contrastive Language-Image Pre-training) and FAISS (Facebook AI Similarity Search).

## Features

- Upload an image and find the most similar images in the dataset
- Uses CLIP model for image embeddings
- FAISS index for fast similarity search
- RESTful API with automatic documentation
- CORS enabled for Next.js frontend integration

## Setup

### 1. Install Dependencies

```bash
cd app/image_finder
pip install -r requirements.txt
```

### 2. Prepare the Index

You need to have the following files in the `subset_index/` directory:
- `index.faiss` - FAISS index file
- `meta.json` - Metadata for the indexed images

If you don't have these files, you can build them using the `build_index.py` script:

```bash
python build_index.py --meta_csv your_metadata.csv --index_dir subset_index
```

The metadata CSV should have columns: `image_path`, `artist`, `genre`, `title`

### 3. Start the Server

```bash
python start_server.py
```

Or manually:

```bash
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

The API will be available at:
- Main API: http://localhost:8000
- Documentation: http://localhost:8000/docs
- Health check: http://localhost:8000/health

## API Endpoints

### POST /find_similar
Upload an image and find similar images.

**Parameters:**
- `file`: Image file (multipart/form-data)
- `top_k`: Number of similar images to return (default: 3, max: 10)

**Response:**
```json
{
  "query_image": "filename.jpg",
  "similar_images": [
    {
      "rank": 1,
      "similarity_score": 0.95,
      "title": "Artwork Title",
      "artist": "Artist Name",
      "genre": "Genre",
      "image_path": "/path/to/image.jpg"
    }
  ],
  "total_found": 3
}
```

### GET /health
Check if the service is running and healthy.

### GET /image/{image_path}
Serve images from the dataset (for displaying results).

## Integration with Next.js

The Next.js frontend communicates with this service through:
1. `/api/similarity` route in Next.js (acts as a proxy)
2. Frontend component `ImageSimilarityFinder.tsx`

Make sure both services are running:
- Next.js: `npm run dev` (port 3000)
- Python API: `python start_server.py` (port 8000)

## Troubleshooting

### Common Issues

1. **"Model or index not loaded" error**
   - Check if `subset_index/index.faiss` and `subset_index/meta.json` exist
   - Ensure the files are not corrupted

2. **CUDA/GPU issues**
   - The service automatically detects available devices (CUDA, MPS, CPU)
   - For CPU-only: The service will work but may be slower

3. **Memory issues**
   - Reduce batch size in `build_index.py` if you encounter memory errors
   - Use smaller CLIP model variants if needed

4. **CORS errors**
   - Ensure the frontend URL is added to CORS origins in `app.py`
   - Default: `http://localhost:3000` for Next.js dev server

### Performance Tips

- Use GPU if available (CUDA or MPS for Apple Silicon)
- Pre-build the index for faster startup
- Consider using smaller CLIP models for faster inference
- Batch multiple requests if processing many images
