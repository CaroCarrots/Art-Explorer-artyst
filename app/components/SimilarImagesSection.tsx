'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

interface SimilarImage {
  url: string;
  style_labels: string[];
  source?: string;
  similarity: number;
}

export default function SimilarImagesSection({ 
  initialImages,
  uploadedImageUrl,
  onImageSelect
}: { 
  initialImages: SimilarImage[];
  uploadedImageUrl: string;
  onImageSelect: (image: SimilarImage) => void;
}) {
  const [similarityThreshold, setSimilarityThreshold] = useState(0.5);
  const [images, setImages] = useState<SimilarImage[]>(initialImages);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setImages(initialImages);
  }, [initialImages]);

  const handleSliderChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newThreshold = parseFloat(e.target.value);
    setSimilarityThreshold(newThreshold);
    
    // Debounce this in a real application
    setIsLoading(true);
    try {
      const response = await axios.get('/api/similar-images', {
        params: { 
          threshold: newThreshold,
          image_url: uploadedImageUrl
        }
      });
      setImages(response.data.images);
    } catch (error) {
      console.error('Error fetching similar images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="similar-images-section" className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Similar Artworks</h2>
        
        <div className="max-w-xl mx-auto mb-12">
          <label htmlFor="similarity" className="block text-sm font-medium mb-2">
            Adjust Similarity Threshold: {Math.round(similarityThreshold * 100)}%
          </label>
          <input
            type="range"
            id="similarity"
            min="0"
            max="1"
            step="0.05"
            value={similarityThreshold}
            onChange={handleSliderChange}
            className="w-full h-2 bg-foreground/20 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs mt-1 text-foreground/70">
            <span>Less Similar</span>
            <span>More Similar</span>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-foreground"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={`${image.url}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-foreground/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                onClick={() => onImageSelect(image)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={`Similar artwork ${index + 1}`}
                    className="w-full h-full object-cover transition-transform hover:scale-105 cursor-pointer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">
                        Similarity: {Math.round(image.similarity * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {image.style_labels.slice(0, 3).map((label, i) => (
                      <span 
                        key={i} 
                        className="inline-block bg-foreground/10 rounded-full px-2 py-1 text-xs"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  {image.source && (
                    <p className="text-xs text-foreground/60 truncate">
                      Source: {image.source}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
} 