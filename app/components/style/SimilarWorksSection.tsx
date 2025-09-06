'use client';

import { motion } from 'framer-motion';
import { ArtworkData, ArtStyle } from '../../types/artwork';

interface SimilarWorksSectionProps {
  artworks: ArtworkData[];
  style: ArtStyle;
  isActive: boolean;
}

export default function SimilarWorksSection({ artworks, style, isActive }: SimilarWorksSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* 章节标题 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              {style.name}代表作
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              探索更多{style.name}风格的经典作品，感受这一艺术流派的丰富内涵
            </p>
          </motion.div>

          {/* 作品网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.4, 
                  y: isActive ? 0 : 30,
                  scale: isActive ? 1 : 0.95
                }}
                transition={{ 
                  delay: 0.4 + index * 0.1, 
                  duration: 0.8,
                  ease: 'easeOut'
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* 作品图片 */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={artwork.url}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* 悬停时显示的信息 */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-center p-4">
                        <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                        <p className="text-sm opacity-90">{artwork.artist}</p>
                      </div>
                    </div>
                  </div>

                  {/* 作品信息 */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#FF6B6B] transition-colors duration-300">
                      {artwork.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{artwork.artist}</p>
                    <p className="text-sm text-gray-500 mb-4">{artwork.year} · {artwork.source}</p>
                    
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                      {artwork.description}
                    </p>

                    {/* 风格标签 */}
                    <div className="flex flex-wrap gap-2">
                      {artwork.styleLabels.slice(0, 3).map((label, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    {/* 相似度指示器 */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500">相似度</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: isActive ? `${(artwork.similarity || 0) * 100}%` : 0 }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                            className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {Math.round((artwork.similarity || 0) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 章节说明 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 30 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                探索{style.name}的多样性
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                这些作品展现了{style.name}风格的丰富性和多样性。每一件作品都承载着艺术家的独特视角和时代背景，
                共同构成了这一艺术流派的完整图景。通过对比分析这些作品，我们可以更深入地理解{style.name}的核心特征和发展脉络。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}