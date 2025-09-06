'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArtworkData } from '../../types/artwork';

interface SimilarityScrollProps {
  artworks: ArtworkData[];
  title: string;
  description: string;
}

export default function SimilarityScroll({ artworks, title, description }: SimilarityScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 使用 spring 让滚动更加丝滑
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 为每个进度指示器创建独立的动画值
  const progressIndicators = artworks.map((_, index) => 
    useTransform(
      smoothProgress,
      [index / artworks.length, (index + 1) / artworks.length],
      ["#000000", "#e5e5e5"]
    )
  );

  return (
    <div ref={containerRef} className="relative">
      {/* 连续滚动的艺术作品序列 */}
      <div className="space-y-0">
        {artworks.map((artwork, index) => (
          <ArtworkSection
            key={artwork.id}
            artwork={artwork}
            index={index}
            totalCount={artworks.length}
            scrollProgress={smoothProgress}
          />
        ))}
      </div>

      {/* 简约的进度指示器 */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-1 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {artworks.map((_, index) => (
          <motion.div
            key={index}
            className="w-1 h-6 rounded-full bg-gray-300"
            style={{
              backgroundColor: progressIndicators[index]
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

interface ArtworkSectionProps {
  artwork: ArtworkData;
  index: number;
  totalCount: number;
  scrollProgress: ReturnType<typeof useSpring>;
}

function ArtworkSection({ artwork, index, totalCount, scrollProgress }: ArtworkSectionProps) {
  // 计算当前section的进度
  const sectionStart = index / totalCount;
  const sectionEnd = (index + 1) / totalCount;
  
  // 图片变换
  const imageScale = useTransform(
    scrollProgress,
    [sectionStart - 0.1, sectionStart, sectionEnd, sectionEnd + 0.1],
    [0.8, 1, 1, 0.8]
  );
  
  const imageOpacity = useTransform(
    scrollProgress,
    [sectionStart - 0.1, sectionStart, sectionEnd, sectionEnd + 0.1],
    [0.3, 1, 1, 0.3]
  );

  const imageY = useTransform(
    scrollProgress,
    [sectionStart - 0.1, sectionStart, sectionEnd, sectionEnd + 0.1],
    [100, 0, 0, -100]
  );

  // 文字变换
  const textX = useTransform(
    scrollProgress,
    [sectionStart - 0.1, sectionStart, sectionEnd, sectionEnd + 0.1],
    [100, 0, 0, -100]
  );

  const textOpacity = useTransform(
    scrollProgress,
    [sectionStart - 0.05, sectionStart + 0.05, sectionEnd - 0.05, sectionEnd + 0.05],
    [0, 1, 1, 0]
  );

  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧图片 */}
          <motion.div
            className="flex items-center justify-center"
            style={{
              scale: imageScale,
              opacity: imageOpacity,
              y: imageY
            }}
          >
            <div className="relative max-w-lg w-full">
              {/* 简约的图片容器 - 去掉过多装饰 */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={artwork.url}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* 最小化的相似度指示器 */}
              <motion.div 
                className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1"
                style={{ opacity: imageOpacity }}
              >
                <span className="text-sm font-medium text-white">
                  {Math.round((artwork.similarity || 0) * 100)}%
                </span>
              </motion.div>

              {/* 简化的作品编号 */}
              <motion.div 
                className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1"
                style={{ opacity: imageOpacity }}
              >
                <span className="text-sm font-medium text-white">
                  {index + 1}/{totalCount}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* 右侧信息 */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            style={{
              x: textX,
              opacity: textOpacity
            }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                {artwork.title}
              </h2>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                {artwork.artist}
              </h3>
              <p className="text-base text-gray-600 mb-4">
                {artwork.year} • {artwork.source}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed max-w-lg">
                {artwork.description}
              </p>
              
              {/* 简化的风格标签 */}
              <div className="flex flex-wrap gap-2">
                {artwork.styleLabels.slice(0, 3).map((label: string, labelIndex: number) => (
                  <span
                    key={labelIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* 简化的相似度分析 */}
              <div className="pt-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">相似度</span>
                  <div className="flex-1 max-w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gray-800"
                      style={{
                        width: useTransform(
                          scrollProgress,
                          [sectionStart, sectionStart + 0.1],
                          ["0%", `${(artwork.similarity || 0) * 100}%`]
                        )
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {Math.round((artwork.similarity || 0) * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* 简化的滚动提示 */}
            {index < totalCount - 1 && (
              <motion.div
                className="flex items-center space-x-2 text-gray-400 mt-8"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm">继续滚动</span>
                <span className="text-xs">↓</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
