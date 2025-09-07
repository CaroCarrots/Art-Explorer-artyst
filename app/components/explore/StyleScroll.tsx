'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { StyleGroup } from '../../types/artwork';

interface StyleScrollProps {
  styleGroups: StyleGroup[];
  title: string;
  description: string;
}

export default function StyleScroll({ styleGroups, title, description }: StyleScrollProps) {
  const [hoveredArtwork, setHoveredArtwork] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Simplified title area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Style groups */}
        <div className="space-y-16">
          {styleGroups.map((group, groupIndex) => (
            <motion.section
              key={group.styleName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Simplified style title */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {group.styleName}
                </h3>
                <p className="text-base text-gray-600 max-w-xl">
                  {group.description}
                </p>
              </div>

              {/* Minimalist horizontal scrolling gallery */}
              <div className="relative">
                <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                  {group.artworks.map((artwork, artworkIndex) => (
                    <motion.div
                      key={artwork.id}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: artworkIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex-none w-64 group cursor-pointer"
                      onMouseEnter={() => setHoveredArtwork(artwork.id)}
                      onMouseLeave={() => setHoveredArtwork(null)}
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-102">
                        <div className="aspect-[3/4] relative overflow-hidden">
                          <img
                            src={artwork.url}
                            alt={artwork.title}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          
                          {/* 简化的悬停信息 */}
                          <motion.div
                            animate={{ 
                              opacity: hoveredArtwork === artwork.id ? 1 : 0 
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-black/60"
                          >
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                              <h4 className="text-base font-medium mb-1">{artwork.title}</h4>
                              <p className="text-sm opacity-90">{artwork.artist}</p>
                            </div>
                          </motion.div>
                        </div>

                        {/* 简化的卡片底部信息 */}
                        <div className="p-4">
                          <h4 className="text-base font-medium text-gray-900 mb-1">{artwork.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{artwork.artist} • {artwork.year}</p>
                          
                          {/* 简化的风格标签 */}
                          <div className="flex gap-1">
                            {artwork.styleLabels.slice(0, 2).map((label, labelIndex) => (
                              <span
                                key={labelIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                              >
                                {label}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* 简化的结束提示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            风格探索完成
          </h3>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            您已经浏览了所有相关的艺术风格。每种风格都有其独特的表现形式和历史背景。
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
