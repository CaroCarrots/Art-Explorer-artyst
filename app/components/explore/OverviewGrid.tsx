'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArtworkData } from '../../types/artwork';

interface OverviewGridProps {
  artworks: ArtworkData[];
  rootImage: ArtworkData | null;
}

export default function OverviewGrid({ artworks, rootImage }: OverviewGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkData | null>(null);
  const [filter, setFilter] = useState('all');

  // 获取所有风格标签
  const allStyles = Array.from(
    new Set(artworks.flatMap(artwork => artwork.styleLabels))
  );

  // 过滤作品
  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.styleLabels.includes(filter));

  // Masonry 布局计算
  const getMasonryClassName = (index: number) => {
    const patterns = [
      'md:row-span-2', // 高
      'md:col-span-2', // 宽
      '', // 普通
      'md:row-span-2 md:col-span-2', // 大
      '', // 普通
      'md:row-span-2', // 高
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* 标题和根图片 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
              探索概览
            </span>
          </h2>
          
          {rootImage && (
            <div className="inline-block bg-white rounded-3xl p-6 shadow-2xl mb-8">
              <img
                src={rootImage.url}
                alt={rootImage.title}
                className="w-32 h-32 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-lg font-bold text-[#2D3748]">{rootImage.title}</h3>
              <p className="text-[#4A5568]">{rootImage.artist}</p>
            </div>
          )}
          
          <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
            基于您的选择，我们发现了 {artworks.length} 件相关艺术作品
          </p>
        </motion.div>

        {/* 过滤器 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white shadow-lg'
                : 'bg-white/80 text-[#4A5568] hover:bg-white hover:shadow-md'
            }`}
          >
            全部 ({artworks.length})
          </button>
          {allStyles.slice(0, 6).map((style) => (
            <button
              key={style}
              onClick={() => setFilter(style)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === style
                  ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white shadow-lg'
                  : 'bg-white/80 text-[#4A5568] hover:bg-white hover:shadow-md'
              }`}
            >
              {style} ({artworks.filter(a => a.styleLabels.includes(style)).length})
            </button>
          ))}
        </motion.div>

        {/* Masonry 网格 */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]"
        >
          <AnimatePresence>
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group cursor-pointer ${getMasonryClassName(index)}`}
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <div className="relative h-full">
                    <img
                      src={artwork.url}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* 悬停信息 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h4 className="text-sm font-bold mb-1 line-clamp-1">{artwork.title}</h4>
                        <p className="text-xs opacity-90 line-clamp-1">{artwork.artist}</p>
                        {artwork.similarity && (
                          <div className="mt-2 flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                            <span className="text-xs">{Math.round(artwork.similarity * 100)}% 相似</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 风格标签 */}
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {artwork.styleLabels.slice(0, 2).map((label, labelIndex) => (
                        <span
                          key={labelIndex}
                          className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-[#2D3748] rounded-full"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 统计信息 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#FF6B6B] mb-2">{artworks.length}</div>
            <div className="text-[#4A5568]">发现的作品</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#4ECDC4] mb-2">{allStyles.length}</div>
            <div className="text-[#4A5568]">艺术风格</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#FFE66D] mb-2">
              {new Set(artworks.map(a => a.artist)).size}
            </div>
            <div className="text-[#4A5568]">艺术家</div>
          </div>
        </motion.div>
      </div>

      {/* 详情模态框 */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArtwork(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-square lg:aspect-auto">
                  <img
                    src={selectedArtwork.url}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-cover rounded-l-3xl"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[#2D3748] mb-4">
                    {selectedArtwork.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-[#4A5568] mb-2">
                    {selectedArtwork.artist}
                  </h4>
                  <p className="text-lg text-[#718096] mb-6">
                    {selectedArtwork.year} • {selectedArtwork.source}
                  </p>
                  <p className="text-[#4A5568] leading-relaxed mb-6">
                    {selectedArtwork.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {selectedArtwork.styleLabels.map((label, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-[#FF6B6B]/20 to-[#4ECDC4]/20 text-[#2D3748] rounded-full text-sm font-medium"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  {selectedArtwork.similarity && (
                    <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[#4A5568]">与原图相似度</span>
                        <span className="text-xl font-bold text-[#FF6B6B]">
                          {Math.round(selectedArtwork.similarity * 100)}%
                        </span>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedArtwork(null)}
                    className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300"
                  >
                    关闭
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
