'use client';

import { motion } from 'framer-motion';

export default function ComingSoonSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* 更多内容提示 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-2xl p-8 max-w-4xl mx-auto text-white mb-16"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold mb-4">更多内容，后续更新</h3>
            <p className="text-lg leading-relaxed mb-6">
              我们正在持续开发更多精彩的艺术风格探索功能！
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-semibold mb-2">🎨 更多艺术风格</div>
                <p>巴洛克、洛可可、浪漫主义、现实主义等</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-semibold mb-2">🌍 地区艺术</div>
                <p>中国、日本、印度、非洲等世界艺术</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-semibold mb-2">🔍 深度探索</div>
                <p>作品分析、技法解析、影响关系等</p>
              </div>
            </div>
            <div className="mt-6 text-sm opacity-80">
              敬请期待更多精彩内容！
            </div>
          </motion.div>

          {/* 底部装饰 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 text-gray-500">
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"></div>
              <span className="text-sm font-medium">敬请期待</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B]"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}