'use client';

import { motion } from 'framer-motion';
import { StyleBranch, ArtStyle } from '../../types/artwork';

interface StyleBranchesSectionProps {
  branches: StyleBranch[];
  style: ArtStyle;
  isActive: boolean;
}

export default function StyleBranchesSection({ branches, style, isActive }: StyleBranchesSectionProps) {
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
              {style.name}相关分支
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              探索与{style.name}相关的艺术风格分支，了解艺术流派的相互影响和演变关系
            </p>
          </motion.div>

          {/* 分支网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.4, 
                  y: isActive ? 0 : 30,
                  scale: isActive ? 1 : 0.95
                }}
                transition={{ 
                  delay: 0.4 + index * 0.2, 
                  duration: 0.8,
                  ease: 'easeOut'
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                  {/* 分支头部 */}
                  <div 
                    className="p-6 text-white relative overflow-hidden"
                    style={{ backgroundColor: branch.color }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2">{branch.name}</h3>
                      <p className="text-lg opacity-90 mb-4">{branch.description}</p>
                      
                      {/* 影响力标签 */}
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                          影响力
                        </span>
                        <span className="text-sm opacity-90">
                          {branch.influence}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 分支内容 */}
                  <div className="p-6">
                    {/* 代表作品 */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-4">代表作品</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {branch.artworks.slice(0, 2).map((artwork, artworkIndex) => (
                          <motion.div
                            key={artwork.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ 
                              opacity: isActive ? 1 : 0.7, 
                              scale: isActive ? 1 : 0.95
                            }}
                            transition={{ 
                              delay: 0.8 + index * 0.2 + artworkIndex * 0.1, 
                              duration: 0.5 
                            }}
                            className="group/artwork cursor-pointer"
                          >
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src={artwork.url}
                                alt={artwork.title}
                                className="w-full h-32 object-cover group-hover/artwork:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/artwork:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white text-center p-2">
                                  <h5 className="font-semibold text-sm">{artwork.title}</h5>
                                  <p className="text-xs opacity-90">{artwork.artist}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* 风格特征 */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">风格特征</h4>
                      <div className="flex flex-wrap gap-2">
                        {['创新技法', '独特构图', '色彩运用', '主题表达'].map((feature, featureIndex) => (
                          <motion.span
                            key={feature}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: isActive ? 1 : 0.7, 
                              scale: isActive ? 1 : 0.9
                            }}
                            transition={{ 
                              delay: 1 + index * 0.2 + featureIndex * 0.05, 
                              duration: 0.3 
                            }}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* 探索按钮 */}
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.7, 
                        y: isActive ? 0 : 10
                      }}
                      transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
                      className="w-full py-3 px-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      深入了解 {branch.name}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 分支关系图 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 30 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                艺术风格的相互影响
              </h3>
              
              {/* 关系图 */}
              <div className="relative mb-8">
                <div className="flex items-center justify-center space-x-8">
                  {/* 中心风格 */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isActive ? 1 : 0.8 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold text-sm text-center"
                  >
                    {style.name}
                  </motion.div>
                  
                  {/* 分支风格 */}
                  {branches.map((branch, index) => (
                    <motion.div
                      key={branch.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.6, 
                        scale: isActive ? 1 : 0.8
                      }}
                      transition={{ 
                        delay: 2 + index * 0.1, 
                        duration: 0.5 
                      }}
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-medium text-xs text-center"
                      style={{ backgroundColor: branch.color }}
                    >
                      {branch.name}
                    </motion.div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                艺术风格之间存在着复杂的相互影响关系。{style.name}作为核心风格，
                不仅影响了这些相关分支的发展，同时也从其他艺术流派中汲取养分。
                这种相互影响的过程体现了艺术发展的连续性和创新性，每一代艺术家都在前人的基础上进行新的探索和突破。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}