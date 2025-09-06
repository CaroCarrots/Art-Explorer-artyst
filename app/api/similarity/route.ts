import { NextRequest, NextResponse } from 'next/server';

const PYTHON_API_URL = process.env.PYTHON_API_URL || 'http://localhost:8000';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;
    const topK = formData.get('top_k') as string || '3';

    if (!file) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Create FormData for Python API
    const pythonFormData = new FormData();
    pythonFormData.append('file', file);
    pythonFormData.append('top_k', topK);

    // Call Python API
    const response = await fetch(`${PYTHON_API_URL}/find_similar`, {
      method: 'POST',
      body: pythonFormData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { 
          error: 'Failed to process image', 
          details: errorData.detail || 'Unknown error' 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error in similarity API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Health check - ping the Python service
    const response = await fetch(`${PYTHON_API_URL}/health`);
    
    if (!response.ok) {
      return NextResponse.json(
        { 
          status: 'unhealthy', 
          error: 'Python service not responding' 
        },
        { status: 503 }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      status: 'healthy',
      python_service: data
    });

  } catch (error) {
    console.error('Error checking Python service health:', error);
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        error: 'Cannot connect to Python service' 
      },
      { status: 503 }
    );
  }
}
