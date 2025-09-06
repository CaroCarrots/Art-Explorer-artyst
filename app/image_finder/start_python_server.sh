#!/bin/bash

# 确保在正确的目录中
cd "$(dirname "$0")"

echo "🚀 Starting Python FastAPI server..."

# 检查端口是否被占用
if lsof -i :8000 > /dev/null 2>&1; then
    echo "❌ Port 8000 is already in use. Killing existing processes..."
    pkill -f "uvicorn.*app:app"
    sleep 2
fi

# 启动服务
echo "✅ Starting uvicorn server..."
python -m uvicorn app:app --host 0.0.0.0 --port 8000 --reload

echo "🛑 Server stopped."
