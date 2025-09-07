'use client';

import { motion } from 'framer-motion';

export default function ComingSoonSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-br from-[#FFE66D] to-[#A8E6CF] rounded-full blur-3xl animate-pulse delay-1000 opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#FFB74D] to-[#FF6B6B] rounded-full blur-3xl animate-pulse delay-2000 opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Main Content - Modern Banner Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mb-16"
          >
            {/* Floating Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, type: "spring", stiffness: 200 }}
              className="text-8xl mb-8 inline-block"
            >
              🚀
            </motion.div>

            {/* Main Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D] bg-clip-text text-transparent"
            >
              More Content Coming Soon
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We're continuously developing more exciting art style exploration features!
            </motion.p>

            {/* Feature List - Horizontal Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-2xl">🎨</span>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">More Art Styles</div>
                  <div className="text-sm text-gray-600">Baroque, Rococo, Romanticism, Realism</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-2xl">🌍</span>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Regional Arts</div>
                  <div className="text-sm text-gray-600">Chinese, Japanese, Indian, African Art</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-2xl">🔍</span>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Deep Exploration</div>
                  <div className="text-sm text-gray-600">Analysis, Techniques, Influences</div>
                </div>
              </div>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-full p-4 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Development Progress</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
                    className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Decoration - Minimalist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-4 text-gray-400">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent"></div>
              <span className="text-sm font-medium tracking-wider">STAY TUNED</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#4ECDC4] to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}