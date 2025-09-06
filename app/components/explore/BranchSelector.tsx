'use client';

import { motion } from 'framer-motion';
import { ExploreResponse } from '../../types/artwork';

interface BranchSelectorProps {
  exploreData: ExploreResponse;
  onBranchSelect: (branch: 'similarity' | 'style') => void;
}

export default function BranchSelector({ exploreData, onBranchSelect }: BranchSelectorProps) {
  const similarityImage = exploreData.similarityBranch.artworks[0];
  const styleImage = exploreData.styleBranch.styleGroups[0]?.artworks[0];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 简化的根图片展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            选择探索路径
          </h2>
          <div className="inline-block bg-gray-50 rounded-2xl p-4 shadow-sm mb-6">
            <img
              src={exploreData.rootImage.url}
              alt={exploreData.rootImage.title}
              className="w-32 h-32 object-cover rounded-xl"
            />
            <h3 className="text-lg font-medium text-gray-900 mt-3">{exploreData.rootImage.title}</h3>
            <p className="text-gray-600 text-sm">{exploreData.rootImage.artist}</p>
          </div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            基于这幅作品，选择您想要的探索方式
          </p>
        </motion.div>

        {/* 简化的分支选择卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 相似度探索 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group cursor-pointer"
            onClick={() => onBranchSelect('similarity')}
          >
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-gray-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={similarityImage?.url || 'https://picsum.photos/600/400?random=10'}
                  alt="相似度探索"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* 简化的浮动标题 */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">相似度探索</h3>
                    <p className="text-sm text-gray-600">
                      发现视觉上最相似的艺术作品
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 简化的卡片内容 */}
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-gray-800 rounded-full" />
                  <span className="text-sm font-medium text-gray-900">基于视觉相似性</span>
                </div>
                <p className="text-sm text-gray-600">
                  通过AI算法分析色彩、构图、风格等视觉特征，为您推荐最相似的作品
                </p>
              </div>
            </div>
          </motion.div>

          {/* 风格探索 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group cursor-pointer"
            onClick={() => onBranchSelect('style')}
          >
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-gray-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={styleImage?.url || 'https://picsum.photos/600/400?random=20'}
                  alt="风格探索"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* 简化的浮动标题 */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">风格探索</h3>
                    <p className="text-sm text-gray-600">
                      按艺术风格分类浏览作品
                    </p>
                  </div>
                </div>
              </div>
              
              {/* 简化的卡片内容 */}
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-gray-800 rounded-full" />
                  <span className="text-sm font-medium text-gray-900">基于艺术风格</span>
                </div>
                <p className="text-sm text-gray-600">
                  探索不同艺术流派和风格，了解各个时期的艺术特色和表现手法
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 简化的操作提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500">
            点击任意卡片开始您的艺术探索之旅
          </p>
        </motion.div>
      </div>
    </div>
  );
}
