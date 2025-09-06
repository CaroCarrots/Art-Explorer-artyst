'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';

export default function ExportSection({ contentRef }: { contentRef: React.RefObject<HTMLDivElement | null> }) {
  const handleExport = async () => {
    if (!contentRef.current) return;
    
    try {
      const canvas = await html2canvas(contentRef.current, {
        allowTaint: true,
        useCORS: true,
      });
      
      // Convert to PNG and download
      const link = document.createElement('a');
      link.download = 'art-exploration.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Export error:', error);
      alert('Failed to export image. Please try again.');
    }
  };

  return (
    <section id="export-section" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
          Save Your Art Journey
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-[#4A5568] text-lg">
          Export your art exploration as an image to share or save for reference
        </p>
        
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={handleExport}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          🎨 Export as PNG
        </motion.button>
      </motion.div>
    </section>
  );
} 