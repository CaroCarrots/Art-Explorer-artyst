'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface LandingSectionProps {
  onStartSimilarityFinder?: () => void;
  onStartStyleExplorer?: () => void;
}

export default function LandingSection({ onStartSimilarityFinder, onStartStyleExplorer }: LandingSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const handleStartSimilarityFinder = () => {
    if (onStartSimilarityFinder) {
      onStartSimilarityFinder();
    }
  };

  const handleStartStyleExplorer = () => {
    if (onStartStyleExplorer) {
      onStartStyleExplorer();
    }
  };

  return (
    <section 
      ref={ref}
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden sticky top-0"
    >
      
      <motion.div
        style={{ y, opacity, scale }}
        className="text-center relative z-10 max-w-4xl px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D] bg-clip-text text-transparent">
              Art
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#A8E6CF] via-[#FFB74D] to-[#FF6B6B] bg-clip-text text-transparent">
              Explorer
            </span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-[#4A5568] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Discover the hidden connections between artworks. 
          <br />
          Upload your creation and explore its artistic DNA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Free Exploration Button */}
            <motion.button
              className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-8 py-4 rounded-full text-lg font-medium shadow-2xl hover:shadow-3xl transition-all duration-500 group min-w-[200px]"
              onClick={handleStartSimilarityFinder}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center space-x-3">
                <span>Free Exploration</span>
                <motion.span
                  className="text-xl"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🔍
                </motion.span>
              </span>
            </motion.button>

            {/* Style Exploration Button */}
            <motion.button
              className="bg-gradient-to-r from-[#4ECDC4] to-[#FFE66D] text-white px-8 py-4 rounded-full text-lg font-medium shadow-2xl hover:shadow-3xl transition-all duration-500 group min-w-[200px]"
              onClick={handleStartStyleExplorer}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center space-x-3">
                <span>Style Exploration</span>
                <motion.span
                  className="text-xl"
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  🎭
                </motion.span>
              </span>
            </motion.button>
          </div>
          
          <motion.div
            className="text-sm text-[#718096] mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            Scroll to continue ↓
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="w-6 h-10 border-2 border-[#4ECDC4] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[#4ECDC4] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
} 