'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArtworkData } from '../../types/artwork';
import { classicArtworks } from '../../lib/mockData-simple';

interface ClassicImageSelectorProps {
  onImageSelect: (imageUrl?: string, uploadedFile?: File) => void;
}

export default function ClassicImageSelector({ onImageSelect }: ClassicImageSelectorProps) {
  const [classicImages, setClassicImages] = useState<ArtworkData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchClassicImages();
  }, []);

  const fetchClassicImages = async () => {
    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // 使用测试数据
      setClassicImages(classicArtworks);
      setIsLoading(false);
    } catch (error) {
      console.error('获取经典图片失败:', error);
      setIsLoading(false);
    }
  };

  const handleImageSelect = (artwork: ArtworkData) => {
    onImageSelect(artwork.url);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(undefined, file);
    }
  };

  const categories = [
    { id: 'all', name: '全部', icon: '🎨' },
    { id: 'renaissance', name: '文艺复兴', icon: '🏛️' },
    { id: 'impressionism', name: '印象派', icon: '🌅' },
    { id: 'modern', name: '现代艺术', icon: '🎭' },
    { id: 'traditional', name: '传统艺术', icon: '🖼️' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? classicImages 
    : classicImages.filter(image => 
        image.styleLabels.some(label => 
          label.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* 动态背景 - 参考Music DNA的多彩背景 */}
      <div className="absolute inset-0">
        {/* 流动的渐变背景 */}
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, #FF6B6B 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #4ECDC4 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, #FFE66D 0%, transparent 50%),
              radial-gradient(circle at 60% 80%, #A8E6CF 0%, transparent 50%),
              radial-gradient(circle at 90% 60%, #FFB74D 0%, transparent 50%)
            `
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 80%, #FF6B6B 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, #4ECDC4 0%, transparent 50%),
               radial-gradient(circle at 40% 40%, #FFE66D 0%, transparent 50%),
               radial-gradient(circle at 60% 80%, #A8E6CF 0%, transparent 50%),
               radial-gradient(circle at 90% 60%, #FFB74D 0%, transparent 50%)`,
              `radial-gradient(circle at 40% 20%, #FF6B6B 0%, transparent 50%),
               radial-gradient(circle at 60% 40%, #4ECDC4 0%, transparent 50%),
               radial-gradient(circle at 80% 80%, #FFE66D 0%, transparent 50%),
               radial-gradient(circle at 20% 60%, #A8E6CF 0%, transparent 50%),
               radial-gradient(circle at 70% 20%, #FFB74D 0%, transparent 50%)`,
              `radial-gradient(circle at 60% 60%, #FF6B6B 0%, transparent 50%),
               radial-gradient(circle at 20% 40%, #4ECDC4 0%, transparent 50%),
               radial-gradient(circle at 90% 20%, #FFE66D 0%, transparent 50%),
               radial-gradient(circle at 80% 90%, #A8E6CF 0%, transparent 50%),
               radial-gradient(circle at 30% 80%, #FFB74D 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* 浮动的艺术元素 */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full opacity-30"
            style={{
              background: `linear-gradient(45deg, ${
                ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FFB74D'][i % 5]
              }, transparent)`,
              left: `${(i * 8.7) % 100}%`,
              top: `${(i * 13.2) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6 + (i * 0.4) % 4,
              repeat: Infinity,
              delay: (i * 0.3) % 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8"
            animate={{
              background: [
                "linear-gradient(45deg, #FF6B6B, #4ECDC4, #FFE66D)",
                "linear-gradient(45deg, #4ECDC4, #FFE66D, #A8E6CF)",
                "linear-gradient(45deg, #FFE66D, #A8E6CF, #FFB74D)",
                "linear-gradient(45deg, #A8E6CF, #FFB74D, #FF6B6B)",
                "linear-gradient(45deg, #FFB74D, #FF6B6B, #4ECDC4)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% 200%"
            }}
          >
            开始艺术探索
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30"
            style={{ color: "#2D3748" }}
            whileHover={{ scale: 1.02, backdropFilter: "blur(8px)" }}
            transition={{ duration: 0.3 }}
          >
            选择一幅经典艺术作品或上传您自己的图片，开始您的艺术发现之旅
          </motion.p>
        </motion.div>

        {/* 上传区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-md bg-white/10 rounded-3xl p-8 shadow-2xl mb-12 border border-white/20"
        >
          <motion.div 
            className="border-2 border-dashed border-white/40 rounded-2xl p-8 text-center transition-all duration-300"
            whileHover={{ 
              borderColor: "rgba(255, 255, 255, 0.6)",
              backgroundColor: "rgba(255, 255, 255, 0.05)"
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center space-y-4"
            >
              <motion.div 
                className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 107, 107, 0.8), rgba(78, 205, 196, 0.8))"
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white text-2xl">📤</span>
              </motion.div>
              <div>
                <p className="text-lg font-semibold text-white mb-2">上传您的图片</p>
                <p className="text-white/80">点击或拖拽图片到这里开始分析</p>
              </div>
            </label>
          </motion.div>
        </motion.div>

        {/* 分类过滤器 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 backdrop-blur-md border ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white border-white/40 shadow-lg'
                  : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/15 hover:border-white/30'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: selectedCategory === category.id 
                  ? `linear-gradient(135deg, 
                      rgba(255, 107, 107, 0.3), 
                      rgba(78, 205, 196, 0.3), 
                      rgba(255, 230, 109, 0.3))`
                  : undefined
              }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* 经典作品网格 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-lg animate-pulse">
                  <div className="bg-gray-200 aspect-square rounded-xl mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-3 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleImageSelect(artwork)}
                >
                  <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                      <img
                        src={artwork.url}
                        alt={artwork.title}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                          artwork.id === 'last-supper' 
                            ? 'object-center' 
                            : 'object-center'
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#2D3748] mb-2 line-clamp-1">
                      {artwork.title}
                    </h3>
                    <p className="text-[#4A5568] mb-1">{artwork.artist}</p>
                    <p className="text-sm text-[#718096] mb-3">{artwork.year}</p>
                    <div className="flex flex-wrap gap-2">
                      {artwork.styleLabels.slice(0, 2).map((label, labelIndex) => (
                        <span
                          key={labelIndex}
                          className="px-3 py-1 bg-gradient-to-r from-[#FF6B6B]/20 to-[#4ECDC4]/20 text-[#2D3748] rounded-full text-sm font-medium"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {filteredImages.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-[#4A5568]">该分类下暂无作品</p>
          </motion.div>
        )}
      </div>

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
