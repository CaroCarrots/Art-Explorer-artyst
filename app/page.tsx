'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import LandingSection from './components/LandingSection';
import SimilarImagesSection from './components/SimilarImagesSection';
import ExportSection from './components/ExportSection';
import ComingSoonSection from './components/ComingSoonSection';

// 动态导入StyleExplorer，禁用SSR
const StyleExplorer = dynamic(() => import('./components/StyleExplorer'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B6B] mx-auto mb-4"></div>
        <p className="text-gray-600">加载中...</p>
      </div>
    </div>
  )
});

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [showStyleExplorer, setShowStyleExplorer] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
      
      // Update current section based on scroll position
      const sections = ['landing-section', 'explore-section', 'style-explorer', 'export-section', 'coming-soon-section'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      let current = 0;
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = index;
          }
        }
      });
      
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section data for navigation
  const sections = [
    { id: 'landing-section', name: '开始探索', icon: '🎨' },
    { id: 'explore-section', name: '艺术发现', icon: '🔍' },
    { id: 'style-explorer', name: '风格探索', icon: '🎭' },
    { id: 'export-section', name: '保存作品', icon: '💾' },
    { id: 'coming-soon-section', name: '敬请期待', icon: '🚀' }
  ];

  // 如果显示时间轴，渲染它
  if (showTimeline) {
    return (
      <StyleExplorer 
        onBack={() => setShowTimeline(false)} 
        showTimeline={true}
      />
    );
  }

  // 如果显示风格探索器，渲染它
  if (showStyleExplorer) {
    return (
      <StyleExplorer onBack={() => setShowStyleExplorer(false)} />
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" ref={contentRef}>
      {/* 统一的主页背景装饰 */}
      <div className="fixed inset-0 z-0">
        {/* 主背景渐变 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7FAFC] via-[#FFF5F5] to-[#F0FFF4]"></div>
        
        {/* 大型装饰圆形 - 营造整体氛围 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-3xl animate-pulse opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-br from-[#FFE66D] to-[#A8E6CF] rounded-full blur-3xl animate-pulse delay-1000 opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#FFB74D] to-[#FF6B6B] rounded-full blur-3xl animate-pulse delay-2000 opacity-10"></div>
          <div className="absolute top-3/4 left-1/4 w-72 h-72 bg-gradient-to-br from-[#A8E6CF] to-[#4ECDC4] rounded-full blur-3xl animate-pulse delay-3000 opacity-12"></div>
          <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-br from-[#FFB74D] to-[#FFE66D] rounded-full blur-3xl animate-pulse delay-4000 opacity-18"></div>
        </div>
        
        {/* 浮动粒子 - 增加动态感 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${(i * 3.3) % 100}%`,
                top: `${(i * 5.7) % 100}%`,
                background: `linear-gradient(45deg, ${['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FFB74D'][i % 5]}, transparent)`,
              }}
              animate={{
                y: [-10, -50, -10],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`block w-4 h-4 rounded-full mb-4 transition-all duration-300 ${
              currentSection === index
                ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] shadow-lg scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => {
              const element = document.getElementById(section.id);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            title={section.name}
          />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg">
          <div className="flex space-x-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                className={`flex flex-col items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                  currentSection === index
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => {
                  const element = document.getElementById(section.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="text-xs font-medium">{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Landing Section */}
        <div id="landing-section">
          <LandingSection />
        </div>
        
        {/* Art Explore Section - 这是主要功能 */}
        <div id="explore-section">
          <SimilarImagesSection />
        </div>
        
        {/* Style Explorer Section */}
        <div id="style-explorer" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              艺术风格探索
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              选择一个艺术风格，我们将带您深入了解其发展历程、代表作品和相关分支
            </p>
            <button
              onClick={() => setShowStyleExplorer(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white text-xl font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              开始风格探索 🎭
            </button>
          </div>
        </div>
        
        {/* Export Section */}
        <div id="export-section">
          <ExportSection contentRef={contentRef} />
        </div>
        
        {/* Coming Soon Section */}
        <div id="coming-soon-section">
          <ComingSoonSection />
        </div>
      </div>
    </div>
  );
}
