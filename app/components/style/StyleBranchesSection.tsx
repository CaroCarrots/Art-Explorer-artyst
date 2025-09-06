'use client';

import { motion } from 'framer-motion';
import { ArtStyle } from '../../types/artwork';

interface BranchData {
  name: string;
  description: string;
  artists: string[];
  characteristics: string[];
}

interface StyleBranchesSectionProps {
  style: ArtStyle;
  branches: BranchData[];
  isActive: boolean;
}

export default function StyleBranchesSection({ style, branches, isActive }: StyleBranchesSectionProps) {
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
              {style.name} 相关分支
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              探索与{style.name}相关的其他艺术流派，了解艺术风格的相互影响
            </p>
          </motion.div>

          {/* 分支网格 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isActive ? 1 : 0.6, 
              scale: isActive ? 1 : 0.9 
            }}
            transition={{ delay: 0.4, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {branches.map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.6, 
                  y: isActive ? 0 : 30 
                }}
                transition={{ 
                  delay: 0.6 + index * 0.2, 
                  duration: 0.8 
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  {/* 分支标题 */}
                  <div 
                    className="p-6 text-white"
                    style={{ backgroundColor: style.color }}
                  >
                    <h3 className="text-2xl font-bold mb-2">{branch.name}</h3>
                    <p className="text-white/90 leading-relaxed">{branch.description}</p>
                  </div>

                  {/* 分支内容 */}
                  <div className="p-6">
                    {/* 代表艺术家 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: style.color }}></span>
                        代表艺术家
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {branch.artists.map((artist, artistIndex) => (
                          <span
                            key={artistIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                          >
                            {artist}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 艺术特征 */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: style.color }}></span>
                        艺术特征
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {branch.characteristics.map((characteristic, charIndex) => (
                          <span
                            key={charIndex}
                            className="px-3 py-1 rounded-full text-sm font-medium border"
                            style={{
                              color: style.color,
                              borderColor: `${style.color}40`,
                              backgroundColor: `${style.color}10`
                            }}
                          >
                            {characteristic}
                          </span>
                        ))}
                      </div>
                    </div>
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
              <span className="text-sm font-medium">相关分支</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B]"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}