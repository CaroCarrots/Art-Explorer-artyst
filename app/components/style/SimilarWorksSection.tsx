'use client';

import { motion } from 'framer-motion';
import { ArtStyle } from '../../types/artwork';

interface SimilarWorkData {
  id: string;
  title: string;
  artist: string;
  year: string;
  url: string;
  description: string;
}

interface SimilarWorksSectionProps {
  style: ArtStyle;
  similarWorks: SimilarWorkData[];
  isActive: boolean;
}

export default function SimilarWorksSection({ style, similarWorks, isActive }: SimilarWorksSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* 主标题 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              {style.name} 相关作品
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              探索更多{style.name}时期的经典作品，感受这一艺术风格的独特魅力
            </p>
          </motion.div>

          {/* 作品网格 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isActive ? 1 : 0.6, 
              scale: isActive ? 1 : 0.9 
            }}
            transition={{ delay: 0.4, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {similarWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.6, 
                  y: isActive ? 0 : 30 
                }}
                transition={{ 
                  delay: 0.6 + index * 0.1, 
                  duration: 0.8 
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* 作品图片 */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={work.url}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold mb-1">{work.title}</h3>
                      <p className="text-sm opacity-90">{work.artist} · {work.year}</p>
                    </div>
                  </div>

                  {/* 作品信息 */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#4ECDC4] transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{work.artist} · {work.year}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 底部装饰 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0.3 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-2 text-gray-500">
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"></div>
              <span className="text-sm font-medium">相似作品</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B]"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}