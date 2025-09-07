'use client';

import { motion } from 'framer-motion';
import { ArtworkData, ArtStyle } from '../../types/artwork';

interface MasterpieceData {
  id: string;
  title: string;
  artist: string;
  year: string;
  url: string;
  description: string;
}

interface MasterpieceSectionProps {
  style: ArtStyle;
  masterpieces: MasterpieceData[];
  isActive: boolean;
}

export default function MasterpieceSection({ style, masterpieces, isActive }: MasterpieceSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
          >
            {style.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto"
          >
            {style.description}
          </motion.p>

          {/* Representative artworks display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isActive ? 1 : 0.6, 
              scale: isActive ? 1 : 0.9 
            }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {masterpieces.map((masterpiece, index) => (
              <motion.div
                key={masterpiece.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.6, 
                  y: isActive ? 0 : 30 
                }}
                transition={{ 
                  delay: 0.8 + index * 0.2, 
                  duration: 0.8 
                }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Artwork image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={masterpiece.url}
                    alt={masterpiece.title}
                    className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                      masterpiece.id === 'last-supper' 
                        ? 'object-center' 
                        : 'object-center'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{masterpiece.title}</h3>
                    <p className="text-sm opacity-90">{masterpiece.artist} · {masterpiece.year}</p>
                  </div>
                </div>

                {/* Artwork details */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {masterpiece.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0.3 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-2 text-gray-500">
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"></div>
              <span className="text-sm font-medium">Masterpieces</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B]"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}