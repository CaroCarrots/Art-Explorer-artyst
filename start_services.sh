#!/bin/bash

# Start both Next.js and Python services for the Art Similarity Finder

echo "🎨 Starting Art Similarity Finder Services..."
echo ""

# Function to check if a port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        echo "❌ Port $1 is already in use"
        return 1
    else
        echo "✅ Port $1 is available"
        return 0
    fi
}

# Check if ports are available
echo "Checking ports..."
check_port 3000 || exit 1
check_port 8000 || exit 1
echo ""

# Check if Python dependencies are installed
echo "Checking Python dependencies..."
cd app/image_finder
if ! python -c "import fastapi, uvicorn, torch, transformers, faiss" 2>/dev/null; then
    echo "❌ Python dependencies not installed"
    echo "Installing dependencies..."
    pip install -r requirements.txt
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Python dependencies"
        exit 1
    fi
fi
echo "✅ Python dependencies OK"

# Check if index files exist
if [ ! -f "subset_index/index.faiss" ] || [ ! -f "subset_index/meta.json" ]; then
    echo "❌ Index files not found in subset_index/"
    echo "Please run build_index.py first to create the index"
    exit 1
fi
echo "✅ Index files found"

# Go back to project root
cd ../..

# Check if Node.js dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing Node.js dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Node.js dependencies"
        exit 1
    fi
fi
echo "✅ Node.js dependencies OK"
echo ""

# Start Python service in background
echo "🚀 Starting Python API service (port 8000)..."
cd app/image_finder
python start_server.py &
PYTHON_PID=$!
cd ../..

# Wait a moment for Python service to start
sleep 3

# Check if Python service is running
if ! curl -s http://localhost:8000/health > /dev/null; then
    echo "❌ Python service failed to start"
    kill $PYTHON_PID 2>/dev/null
    exit 1
fi
echo "✅ Python service started successfully"

# Start Next.js service
echo "🚀 Starting Next.js frontend (port 3000)..."
npm run dev &
NEXTJS_PID=$!

# Wait a moment for Next.js to start
sleep 5

echo ""
echo "🎉 Services started successfully!"
echo ""
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Python API: http://localhost:8000"
echo "📚 API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop both services"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping services..."
    kill $PYTHON_PID 2>/dev/null
    kill $NEXTJS_PID 2>/dev/null
    echo "✅ Services stopped"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for user to stop services
wait
