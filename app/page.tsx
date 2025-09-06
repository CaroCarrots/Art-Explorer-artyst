'use client';

import { useState, useRef, useEffect } from 'react';
import LandingSection from './components/LandingSection';
import ImageSimilarityFinder from './components/ImageSimilarityFinder';
import ExportSection from './components/ExportSection';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
      
      // Update current section based on scroll position
      const sections = ['landing-section', 'explore-section', 'export-section'];
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
    { id: 'export-section', name: '保存作品', icon: '💾' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7FAFC] to-[#EDF2F7]" ref={contentRef}>
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
      <div className="relative">
        {/* Landing Section */}
        <div id="landing-section">
          <LandingSection />
        </div>
        
        {/* Art Explore Section - 这是主要功能 */}
        <div id="explore-section">
          <ImageSimilarityFinder />
        </div>
        
        {/* Export Section */}
        <div id="export-section">
          <ExportSection contentRef={contentRef} />
        </div>
      </div>
    </div>
  );
}
