'use client';

import { motion } from 'framer-motion';
import { TimelineEra, ArtStyle } from '../../types/artwork';

interface TimelineSectionProps {
  eras: TimelineEra[];
  style: ArtStyle;
  isActive: boolean;
}

export default function TimelineSection({ eras, style, isActive }: TimelineSectionProps) {
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
              {style.name}发展历程
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              追溯{style.name}风格的历史发展脉络，了解其在不同时期的演变和影响
            </p>
          </motion.div>

          {/* 时间线容器 */}
          <div className="relative">
            {/* 时间线主线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF6B6B] to-[#4ECDC4] rounded-full" />

            {/* 时间线节点 */}
            <div className="space-y-24">
              {eras.map((era, index) => (
                <motion.div
                  key={era.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.4, 
                    x: isActive ? 0 : (index % 2 === 0 ? -50 : 50)
                  }}
                  transition={{ 
                    delay: 0.4 + index * 0.2, 
                    duration: 0.8,
                    ease: 'easeOut'
                  }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* 时间线节点 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: isActive ? 1 : 0.8 }}
                      transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                      className="w-6 h-6 bg-white border-4 border-[#FF6B6B] rounded-full shadow-lg"
                    />
                  </div>

                  {/* 时代卡片 */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isActive ? 1 : 0.6, y: isActive ? 0 : 20 }}
                      transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                    >
                      {/* 时代标题 */}
                      <div className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{era.name}</h3>
                        <p className="text-lg opacity-90">
                          {era.startYear} - {era.endYear}
                        </p>
                      </div>

                      {/* 时代内容 */}
                      <div className="p-6">
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {era.description}
                        </p>

                        {/* 历史意义 */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                          <h4 className="font-semibold text-gray-800 mb-2">历史意义</h4>
                          <p className="text-sm text-gray-600">{era.significance}</p>
                        </div>

                        {/* 关键作品 */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-4">关键作品</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {era.keyArtworks.slice(0, 2).map((artwork, artworkIndex) => (
                              <motion.div
                                key={artwork.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ 
                                  opacity: isActive ? 1 : 0.7, 
                                  scale: isActive ? 1 : 0.95
                                }}
                                transition={{ 
                                  delay: 1 + index * 0.2 + artworkIndex * 0.1, 
                                  duration: 0.5 
                                }}
                                className="group cursor-pointer"
                              >
                                <div className="relative overflow-hidden rounded-lg">
                                  <img
                                    src={artwork.url}
                                    alt={artwork.title}
                                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 时间线总结 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 30 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {style.name}的历史影响
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                通过时间线的梳理，我们可以看到{style.name}风格在不同历史时期的演变和发展。
                从早期的探索到成熟期的辉煌，再到后期的传承与影响，这一艺术风格不仅反映了时代的变迁，
                也为后世艺术发展奠定了重要基础。每一件作品都是历史的见证，承载着艺术家对美的追求和对时代的思考。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}