'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExploreMode } from '../../types/artwork';

interface ExploreToolbarProps {
  currentMode: ExploreMode;
  onModeChange: (mode: ExploreMode) => void;
  onBackToSelection: () => void;
}

export default function ExploreToolbar({
  currentMode,
  onModeChange,
  onBackToSelection
}: ExploreToolbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const viewOptions = [
    {
      id: 'selection' as const,
      name: '分支入口',
      icon: '🌳',
      description: '选择探索方式'
    },
    {
      id: 'similarity' as const,
      name: '相似度',
      icon: '📊',
      description: '按相似度排序'
    },
    {
      id: 'style' as const,
      name: '风格',
      icon: '🎨',
      description: '按风格分组'
    },
    {
      id: 'overview' as const,
      name: '概览',
      icon: '📋',
      description: 'Masonry布局'
    }
  ];

  const shareOptions = [
    { name: '复制链接', icon: '🔗', action: () => navigator.clipboard.writeText(window.location.href) },
    { name: '下载图片', icon: '📷', action: () => {} },
    { name: '分享到社交', icon: '📱', action: () => {} }
  ];

  return (
    <>
      {/* 主工具栏 */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40"
      >
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-2">
          <div className="flex items-center space-x-2">
            {/* 视图切换按钮 */}
            {viewOptions.map((option) => (
              <motion.button
                key={option.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => option.id === 'selection' ? onBackToSelection() : onModeChange(option.id)}
                className={`group relative px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  currentMode === option.id
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white shadow-lg'
                    : 'text-[#4A5568] hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{option.icon}</span>
                <span className="hidden md:inline">{option.name}</span>
                
                {/* 悬停提示 */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                    {option.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              </motion.button>
            ))}

            {/* 分隔线 */}
            <div className="w-px h-8 bg-gray-300"></div>

            {/* 功能按钮 */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="px-4 py-3 text-[#4A5568] hover:bg-gray-100 rounded-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span className="text-lg">📤</span>
              <span className="hidden md:inline">分享</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBackToSelection}
              className="px-4 py-3 text-[#4A5568] hover:bg-gray-100 rounded-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span className="text-lg">🔄</span>
              <span className="hidden md:inline">重置</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-3 text-[#4A5568] hover:bg-gray-100 rounded-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span className="text-lg">⚙️</span>
              <span className="hidden md:inline">设置</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* 分享菜单 */}
      <AnimatePresence>
        {showShareMenu && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-3">
              <div className="flex space-x-2">
                {shareOptions.map((option, index) => (
                  <motion.button
                    key={option.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      option.action();
                      setShowShareMenu(false);
                    }}
                    className="px-4 py-3 text-[#4A5568] hover:bg-gray-100 rounded-xl transition-all duration-300 flex flex-col items-center space-y-1 min-w-[80px]"
                  >
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-xs">{option.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 扩展设置面板 */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80">
              <h3 className="text-lg font-bold text-[#2D3748] mb-4">探索设置</h3>
              
              {/* 快捷操作 */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onModeChange('similarity');
                    setIsExpanded(false);
                  }}
                  className="w-full text-left px-4 py-3 bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10 rounded-xl hover:from-[#FF6B6B]/20 hover:to-[#4ECDC4]/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-[#2D3748]">按相似度浏览</div>
                      <div className="text-sm text-[#4A5568]">查看最相似的作品</div>
                    </div>
                    <span className="text-lg">📊</span>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onModeChange('style');
                    setIsExpanded(false);
                  }}
                  className="w-full text-left px-4 py-3 bg-gradient-to-r from-[#FFE66D]/10 to-[#FF6B6B]/10 rounded-xl hover:from-[#FFE66D]/20 hover:to-[#FF6B6B]/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-[#2D3748]">按风格分组</div>
                      <div className="text-sm text-[#4A5568]">探索不同艺术风格</div>
                    </div>
                    <span className="text-lg">🎨</span>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onModeChange('overview');
                    setIsExpanded(false);
                  }}
                  className="w-full text-left px-4 py-3 bg-gradient-to-r from-[#4ECDC4]/10 to-[#45B7D1]/10 rounded-xl hover:from-[#4ECDC4]/20 hover:to-[#45B7D1]/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-[#2D3748]">概览模式</div>
                      <div className="text-sm text-[#4A5568]">查看所有发现的作品</div>
                    </div>
                    <span className="text-lg">📋</span>
                  </div>
                </motion.button>
              </div>

              {/* 关闭按钮 */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsExpanded(false)}
                className="w-full mt-4 bg-gray-100 text-[#4A5568] py-3 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
              >
                关闭
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 点击外部关闭菜单 */}
      {(showShareMenu || isExpanded) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setShowShareMenu(false);
            setIsExpanded(false);
          }}
        />
      )}

      {/* 进度指示器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 right-6 z-40"
      >
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="url(#progress-gradient)"
                  strokeWidth="2"
                  strokeDasharray="75, 100"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="100%" stopColor="#4ECDC4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-[#2D3748]">75%</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-[#2D3748]">探索进度</div>
              <div className="text-xs text-[#4A5568]">艺术发现</div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
