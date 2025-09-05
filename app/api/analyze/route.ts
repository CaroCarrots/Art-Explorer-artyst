import { NextRequest, NextResponse } from 'next/server';

// This is a mock API endpoint for demonstration purposes
export async function POST(request: NextRequest) {
  try {
    // In a real application, you would:
    // 1. Parse the FormData to get the uploaded image
    // 2. Process the image or send it to an AI service
    // 3. Return the analysis results
    
    // For demo purposes, we'll return mock data after a short delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock response data
    const mockResponse = {
      uploaded_image_url: 'https://picsum.photos/800/600', // Using a random image from Lorem Picsum
      style_tags: [
        { name: 'High Contrast', confidence: 0.92 },
        { name: 'Geometric Composition', confidence: 0.87 },
        { name: 'Bold Colors', confidence: 0.85 },
        { name: 'Abstract', confidence: 0.78 },
        { name: 'Minimalist', confidence: 0.65 },
        { name: 'Expressionist', confidence: 0.52 },
      ],
      similar_images: [
        {
          url: 'https://picsum.photos/800/600?random=1',
          style_labels: ['Abstract', 'Geometric', 'Bold Colors'],
          source: 'Museum of Modern Art',
          similarity: 0.95
        },
        {
          url: 'https://picsum.photos/800/600?random=2',
          style_labels: ['High Contrast', 'Minimalist'],
          source: 'Tate Modern',
          similarity: 0.89
        },
        {
          url: 'https://picsum.photos/800/600?random=3',
          style_labels: ['Geometric', 'Abstract', 'Expressionist'],
          source: 'Centre Pompidou',
          similarity: 0.82
        },
        {
          url: 'https://picsum.photos/800/600?random=4',
          style_labels: ['Bold Colors', 'Expressionist'],
          source: 'MoMA PS1',
          similarity: 0.78
        },
        {
          url: 'https://picsum.photos/800/600?random=5',
          style_labels: ['Minimalist', 'Geometric'],
          source: 'Guggenheim Museum',
          similarity: 0.75
        },
        {
          url: 'https://picsum.photos/800/600?random=6',
          style_labels: ['High Contrast', 'Abstract'],
          source: 'Whitney Museum',
          similarity: 0.72
        }
      ]
    };
    
    return NextResponse.json(mockResponse);
  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json(
      { error: 'Failed to analyze image' },
      { status: 500 }
    );
  }
} 