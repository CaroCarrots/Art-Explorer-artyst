'use client';

import { motion } from 'framer-motion';
import { ArtStyle } from '../../types/artwork';

interface ComingSoonSectionProps {
  style: ArtStyle;
  isActive: boolean;
}

export default function ComingSoonSection({ style, isActive }: ComingSoonSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* 艺术风格标题 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
            {style.name}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {style.description}
          </p>
        </motion.div>

        {/* 敬请期待内容 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20"
        >
          <div className="text-6xl mb-6">🚀</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            更多内容，敬请期待！
          </h3>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            我们正在为 <span className="font-semibold text-[#FF6B6B]">{style.name}</span> 准备更丰富的内容，
            <br />
            包括代表作品、历史发展、相关流派等详细信息。
          </p>
          
          {/* 即将推出的功能 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10 rounded-xl p-6 border border-[#FF6B6B]/20">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">代表作品</h4>
              <p className="text-sm text-gray-600">
                精选该艺术风格的经典代表作，深入了解其艺术特色和技法。
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-[#FFE66D]/10 rounded-xl p-6 border border-[#4ECDC4]/20">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">历史发展</h4>
              <p className="text-sm text-gray-600">
                探索该艺术风格的发展历程，了解其在艺术史中的重要地位。
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FFE66D]/10 to-[#A8E6CF]/10 rounded-xl p-6 border border-[#FFE66D]/20">
              <div className="text-4xl mb-3">🔗</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">相关流派</h4>
              <p className="text-sm text-gray-600">
                发现与该艺术风格相关的其他流派，了解艺术风格的传承关系。
              </p>
            </div>
          </div>

          {/* 返回按钮 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <button
              onClick={() => window.history.back()}
              className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              ← 返回时间轴
            </button>
          </motion.div>
        </motion.div>

        {/* 底部提示 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-8 text-sm text-gray-500"
        >
          感谢您的耐心等待，我们将持续为您带来更精彩的艺术内容！
        </motion.p>
      </div>
    </motion.div>
  );
}