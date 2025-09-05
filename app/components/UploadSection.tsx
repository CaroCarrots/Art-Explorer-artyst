'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function UploadSection({ onAnalysisComplete }: { onAnalysisComplete: (data: any) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type.startsWith('image/')) {
        handleFileSelect(droppedFile);
      } else {
        setError('Please upload an image file');
      }
    }
  }, []);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setError(null);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setIsLoading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      onAnalysisComplete(response.data);
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to analyze image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="upload-section" className="min-h-screen flex flex-col items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Upload Your Artwork</h2>
        
        <div
          className={`border-2 border-dashed rounded-lg p-8 mb-6 flex flex-col items-center justify-center cursor-pointer transition-colors
            ${isDragging ? 'border-foreground bg-foreground/5' : 'border-foreground/30'}
            ${preview ? 'bg-foreground/5' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerFileInput}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileInputChange}
          />
          
          {preview ? (
            <div className="w-full flex flex-col items-center">
              <img 
                src={preview} 
                alt="Preview" 
                className="max-h-80 max-w-full object-contain mb-4" 
              />
              <p className="text-sm opacity-70">{file?.name}</p>
            </div>
          ) : (
            <div className="text-center py-10">
              <svg className="mx-auto h-12 w-12 text-foreground/50" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-2 text-sm text-foreground/70">
                Drag and drop an image, or click to select
              </p>
              <p className="mt-1 text-xs text-foreground/50">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        
        <div className="flex justify-center">
          <motion.button
            className={`px-8 py-3 rounded-full text-lg font-medium transition-colors
              ${file && !isLoading 
                ? 'bg-foreground text-background hover:bg-opacity-90' 
                : 'bg-foreground/30 text-background cursor-not-allowed'}`}
            onClick={handleUpload}
            disabled={!file || isLoading}
            whileHover={file && !isLoading ? { scale: 1.03 } : {}}
            whileTap={file && !isLoading ? { scale: 0.98 } : {}}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </div>
            ) : 'Analyze Artwork'}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
} 