'use client';

import { motion } from 'framer-motion';

interface ProductIntroProps {
  onStartSimilarityFinder?: () => void;
  onStartStyleExplorer?: () => void;
}

export default function ProductIntro({ onStartSimilarityFinder, onStartStyleExplorer }: ProductIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7FAFC] via-[#FFF5F5] to-[#F0FFF4] relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-br from-[#FFE66D] to-[#A8E6CF] rounded-full blur-3xl animate-pulse delay-1000 opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#FFB74D] to-[#FF6B6B] rounded-full blur-3xl animate-pulse delay-2000 opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D] bg-clip-text text-transparent">
              Art Explorer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the hidden connections between artworks, explore the DNA of art
          </p>
        </motion.div>

        {/* 功能卡片 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Free Exploration Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Free Exploration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Upload your artwork and our AI will find the most similar artworks for you, exploring the inheritance and evolution of artistic styles
              </p>
              <motion.button
                onClick={onStartSimilarityFinder}
                className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Exploration
              </motion.button>
            </div>
          </motion.div>

          {/* Style Exploration Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#4ECDC4] to-[#FFE66D] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Style Exploration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Deep dive into the development history of various artistic styles, from classical to modern, exploring the evolution of artistic styles
              </p>
              <motion.button
                onClick={onStartStyleExplorer}
                className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#FFE66D] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Style Exploration
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Product Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Product Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Smart Recognition</h3>
              <p className="text-gray-600 text-sm">Based on advanced CLIP model, accurately identify artistic styles and features</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4ECDC4] to-[#FFE66D] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rich Database</h3>
              <p className="text-gray-600 text-sm">Covers 500+ classic artworks, spanning different eras and styles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFE66D] to-[#A8E6CF] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Association</h3>
              <p className="text-gray-600 text-sm">Discover hidden connections between artworks, explore artistic heritage</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Let AI be your art exploration partner, discover the infinite possibilities of art
          </p>
        </motion.div>
      </div>
    </div>
  );
}
