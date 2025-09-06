#!/usr/bin/env python3
"""
Startup script for the Image Similarity Finder API
"""
import subprocess
import sys
import os
from pathlib import Path

def main():
    # Get the directory where this script is located
    script_dir = Path(__file__).parent
    
    # Check if requirements are installed
    try:
        import fastapi
        import uvicorn
        import torch
        import transformers
        import faiss
    except ImportError as e:
        print(f"Missing dependency: {e}")
        print("Please install requirements first:")
        print(f"cd {script_dir} && pip install -r requirements.txt")
        sys.exit(1)
    
    # Check if index files exist
    index_dir = script_dir / "subset_index"
    if not (index_dir / "index.faiss").exists() or not (index_dir / "meta.json").exists():
        print("Error: Index files not found!")
        print(f"Please ensure the following files exist:")
        print(f"  - {index_dir / 'index.faiss'}")
        print(f"  - {index_dir / 'meta.json'}")
        print("\nIf you need to build the index, run:")
        print(f"python build_index.py --meta_csv your_metadata.csv --index_dir {index_dir}")
        sys.exit(1)
    
    print("Starting Image Similarity Finder API...")
    print("API will be available at: http://localhost:8000")
    print("API documentation at: http://localhost:8000/docs")
    print("Press Ctrl+C to stop the server")
    
    # Start the server
    try:
        subprocess.run([
            sys.executable, "-m", "uvicorn", 
            "app:app", 
            "--host", "0.0.0.0", 
            "--port", "8000", 
            "--reload"
        ], cwd=script_dir)
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == "__main__":
    main()
