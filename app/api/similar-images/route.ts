import { NextRequest, NextResponse } from 'next/server';

// This is a mock API endpoint for demonstration purposes
export async function GET(request: NextRequest) {
  try {
    // Get the threshold parameter from the URL
    const { searchParams } = new URL(request.url);
    const threshold = parseFloat(searchParams.get('threshold') || '0.5');
    
    // In a real application, you would:
    // 1. Get the image_url parameter
    // 2. Query a database or AI service for similar images based on the threshold
    // 3. Return the filtered results
    
    // For demo purposes, we'll return mock data after a short delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate a different number of results based on threshold
    // Lower threshold = more results (less similar)
    const resultCount = Math.max(3, Math.floor((1 - threshold) * 12));
    
    // Generate mock similar images
    const mockImages = Array.from({ length: resultCount }, (_, i) => ({
      url: `https://picsum.photos/800/600?random=${i + 10}`, // Using random images
      style_labels: getRandomStyleLabels(),
      source: getRandomSource(),
      similarity: Math.max(0.5, Math.min(0.98, 1 - (i * 0.05) - (Math.random() * 0.05)))
    }));
    
    // Sort by similarity (highest first)
    mockImages.sort((a, b) => b.similarity - a.similarity);
    
    return NextResponse.json({ images: mockImages });
  } catch (error) {
    console.error('Error fetching similar images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch similar images' },
      { status: 500 }
    );
  }
}

// Helper functions to generate random data
function getRandomStyleLabels(): string[] {
  const allStyles = [
    'Abstract', 'Geometric', 'Bold Colors', 'High Contrast', 
    'Minimalist', 'Expressionist', 'Cubist', 'Surrealist',
    'Pop Art', 'Impressionist', 'Post-Impressionist', 'Realism'
  ];
  
  // Pick 1-3 random styles
  const count = Math.floor(Math.random() * 3) + 1;
  const result: string[] = [];
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * allStyles.length);
    const style = allStyles[randomIndex];
    
    if (!result.includes(style)) {
      result.push(style);
    }
  }
  
  return result;
}

function getRandomSource(): string {
  const sources = [
    'Museum of Modern Art', 'Tate Modern', 'Centre Pompidou',
    'Guggenheim Museum', 'Whitney Museum', 'Metropolitan Museum of Art',
    'National Gallery', 'Louvre Museum', 'Uffizi Gallery'
  ];
  
  return sources[Math.floor(Math.random() * sources.length)];
} 