'use client';

import { motion } from 'framer-motion';
import { ArtStyle } from '../../types/artwork';

interface TimelineEventData {
  year: number;
  event: string;
  description: string;
}

interface TimelineSectionProps {
  style: ArtStyle;
  timeline: TimelineEventData[];
  isActive: boolean;
}

export default function TimelineSection({ style, timeline, isActive }: TimelineSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
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
              {style.name} 发展历程
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              了解{style.name}在艺术史中的重要时刻和发展脉络
            </p>
          </motion.div>

          {/* 时间轴 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isActive ? 1 : 0.6, 
              scale: isActive ? 1 : 0.9 
            }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative"
          >
            {/* 时间轴线 */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D] rounded-full"></div>

            {/* 时间轴事件 */}
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.6, 
                    x: isActive ? 0 : -30 
                  }}
                  transition={{ 
                    delay: 0.6 + index * 0.2, 
                    duration: 0.8 
                  }}
                  className="relative flex items-start"
                >
                  {/* 时间点 */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                      style={{ backgroundColor: style.color }}
                    >
                      {event.year}
                    </div>
                  </div>

                  {/* 事件内容 */}
                  <div className="ml-8 flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.6, 
                        y: isActive ? 0 : 20 
                      }}
                      transition={{ 
                        delay: 0.8 + index * 0.2, 
                        duration: 0.8 
                      }}
                      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {event.event}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* 连接线 */}
                  {index < timeline.length - 1 && (
                    <div 
                      className="absolute left-15 top-16 w-0.5 h-12 opacity-30"
                      style={{ backgroundColor: style.color }}
                    ></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 底部装饰 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0.3 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-2 text-gray-500">
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"></div>
              <span className="text-sm font-medium">历史时间轴</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B]"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}