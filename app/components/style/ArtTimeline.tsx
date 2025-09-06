'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TimelineNode } from '../../types/artwork';

interface ArtTimelineProps {
  nodes: TimelineNode[];
  onNodeClick?: (node: TimelineNode) => void;
  onBack?: () => void;
}

export default function ArtTimeline({ nodes, onNodeClick, onBack }: ArtTimelineProps) {
  const [activeNode, setActiveNode] = useState<TimelineNode | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B6B]"></div>
      </div>
    );
  }

  // 按年份排序
  const sortedNodes = [...nodes].sort((a, b) => a.year - b.year);

  // 计算年份范围
  const minYear = Math.min(...sortedNodes.map(n => n.year));
  const maxYear = Math.max(...sortedNodes.map(n => n.year));
  const yearRange = maxYear - minYear;

  const handleNodeClick = (node: TimelineNode) => {
    setActiveNode(node);
    onNodeClick?.(node);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] opacity-10"></div>
      
      {/* 装饰性圆形 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#4ECDC4] to-[#FFE66D] rounded-full blur-2xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-[#FFE66D] to-[#A8E6CF] rounded-full blur-3xl opacity-15 animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-[#A8E6CF] to-[#FFB74D] rounded-full blur-2xl opacity-25 animate-pulse delay-3000"></div>
      
      {/* 装饰性线条 */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4ECDC4] to-transparent opacity-30"></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent opacity-30"></div>
      
      {/* 装饰性点 */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#4ECDC4] rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-[#FF6B6B] rounded-full opacity-50 animate-ping delay-500"></div>
      <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-[#FFE66D] rounded-full opacity-70 animate-ping delay-1000"></div>
      
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
        {/* 返回按钮 */}
        {onBack && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <button
              onClick={onBack}
              className="px-6 py-3 bg-white/90 backdrop-blur-md text-gray-700 rounded-xl hover:bg-white transition-colors duration-200 shadow-lg flex items-center space-x-2"
            >
              <span>←</span>
              <span>返回风格选择</span>
            </button>
          </motion.div>
        )}

        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            🎨 西方艺术风格时间线
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            探索约1000年西方艺术风格的历史发展脉络
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            从中世纪罗曼式到当代艺术，了解不同时期的艺术特征、代表作品和历史影响
          </p>
        </motion.div>

        {/* 时间轴容器 */}
        <div ref={timelineRef} className="relative">
          {/* 时间轴主线 */}
          <div className="absolute left-10 top-0 w-2 h-full bg-gradient-to-b from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D] rounded-full shadow-lg"></div>
          
          {/* 时间轴发光效果 */}
          <div className="absolute left-9 top-0 w-4 h-full bg-gradient-to-b from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D] rounded-full opacity-30 blur-sm"></div>

          {/* 时间轴节点 */}
          <div className="space-y-20">
            {sortedNodes.map((node, index) => {
              const position = yearRange > 0 ? (node.year - minYear) / yearRange : 0.5;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="relative flex items-center"
                >
                  {/* 左侧时间轴节点 */}
                  <div className="relative z-10 flex-shrink-0 mr-8">
                    {/* 节点发光效果 */}
                    <div 
                      className="absolute inset-0 w-20 h-20 rounded-full blur-md opacity-60 animate-pulse"
                      style={{ backgroundColor: node.color }}
                    ></div>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNodeClick(node)}
                      className={`relative w-20 h-20 rounded-full border-4 border-white shadow-2xl flex flex-col items-center justify-center text-white font-bold transition-all duration-300 ${
                        activeNode?.id === node.id ? 'ring-4 ring-white/50 scale-110' : 'hover:shadow-3xl'
                      }`}
                      style={{ 
                        backgroundColor: node.color,
                        boxShadow: `0 0 20px ${node.color}40, 0 0 40px ${node.color}20`
                      }}
                    >
                      <div className="text-lg leading-tight drop-shadow-lg">
                        {node.year < 0 ? `${Math.abs(node.year)}` : node.year}
                      </div>
                      <div className="text-xs opacity-90 drop-shadow-lg">
                        {node.year < 0 ? 'BC' : 'AD'}
                      </div>
                    </motion.button>
                  </div>

                  {/* 连接线 */}
                  <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full"></div>
                  <div 
                    className="absolute left-10 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-r rounded-full opacity-50"
                    style={{ 
                      background: `linear-gradient(to right, ${node.color}80, transparent)`
                    }}
                  ></div>

                  {/* 右侧内容卡片 - 艺术形式 */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer border-l-4 relative"
                      onClick={() => handleNodeClick(node)}
                      style={{
                        borderLeftColor: node.color,
                        boxShadow: `0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.2)`
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <div 
                          className="w-6 h-6 rounded-full mr-3 shadow-md"
                          style={{ 
                            backgroundColor: node.color
                          }}
                        ></div>
                        <h3 className="text-2xl font-bold text-gray-800">{node.title}</h3>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{node.description}</p>
                      
                      <div 
                        className="rounded-lg p-4 mb-4 bg-gray-50"
                        style={{
                          borderLeft: `3px solid ${node.color}`
                        }}
                      >
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: node.color }}></span>
                          代表作家
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {node.representativeArtists.map((artist, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-white border"
                              style={{
                                color: node.color,
                                borderColor: `${node.color}40`
                              }}
                            >
                              {artist}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div 
                        className="rounded-lg p-4 bg-gray-50"
                        style={{
                          borderLeft: `3px solid ${node.color}`
                        }}
                      >
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: node.color }}></span>
                          历史意义
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{node.significance}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 底部信息 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">西方艺术发展的连续性</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              从1000年的罗曼式艺术到今天的当代艺术，每个艺术风格都不是孤立存在的。
              它们相互影响、相互传承，形成了西方艺术史的完整脉络。
            </p>
            <p className="text-gray-600 leading-relaxed">
              从宗教艺术的庄严神圣，到文艺复兴的人文主义觉醒，
              从巴洛克的戏剧性表达，到印象派的光影革命，
              再到20世纪前卫艺术的彻底革新，
              艺术始终在反映着人类文明的发展历程和思想变迁。
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}