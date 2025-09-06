'use client';

import { motion } from 'framer-motion';
import { ArtworkData, ArtStyle } from '../../types/artwork';

interface MasterpieceSectionProps {
  artwork: ArtworkData;
  style: ArtStyle;
  isActive: boolean;
}

export default function MasterpieceSection({ artwork, style, isActive }: MasterpieceSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* 主标题 */}
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

          {/* 代表作品展示 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isActive ? 1 : 0.6, 
              scale: isActive ? 1 : 0.9 
            }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
              {/* 作品图片 */}
              <div className="relative">
                <img
                  src={artwork.url}
                  alt={artwork.title}
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* 作品信息覆盖层 */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 20 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-3xl md:text-4xl font-bold mb-2"
                  >
                    {artwork.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 15 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-xl md:text-2xl mb-2"
                  >
                    {artwork.artist}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 10 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-lg opacity-90"
                  >
                    {artwork.year} · {artwork.source}
                  </motion.p>
                </div>
              </div>

              {/* 作品描述 */}
              <div className="p-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 20 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                >
                  {artwork.description}
                </motion.p>

                {/* 风格特征标签 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 0 : 20 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  className="flex flex-wrap gap-3"
                >
                  {style.characteristics.map((characteristic, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-full text-sm font-medium"
                    >
                      {characteristic}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* 滚动提示 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-16"
          >
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-lg mb-2">向下滚动探索更多</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}