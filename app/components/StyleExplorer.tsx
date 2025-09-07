'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArtStyle, StyleExplorationData, WaterfallSection } from '../types/artwork';
import { generateStyleExplorationData, getAvailableStyles, timelineNodes } from '../lib/styleData';
import MasterpieceSection from './style/MasterpieceSection';
import SimilarWorksSection from './style/SimilarWorksSection';
import TimelineSection from './style/TimelineSection';
import StyleBranchesSection from './style/StyleBranchesSection';
import ArtTimeline from './style/ArtTimeline';

interface StyleExplorerProps {
  onBack?: () => void;
  showTimeline?: boolean;
}

export default function StyleExplorer({ onBack, showTimeline: initialShowTimeline = false }: StyleExplorerProps) {
  const [selectedStyle, setSelectedStyle] = useState<ArtStyle | null>(null);
  const [explorationData, setExplorationData] = useState<StyleExplorationData | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [showTimeline, setShowTimeline] = useState(initialShowTimeline);
  
  // 筛选状态
  const [filters, setFilters] = useState({
    timeRange: { start: 'all', end: 'all' },
    region: 'all',
    characteristics: [] as string[],
    searchTerm: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const allStyles = getAvailableStyles();
  
  // 预设年份选项
  const yearOptions = [
    { value: 'all', label: '不限' },
    { value: '1000', label: '1000年' },
    { value: '1200', label: '1200年' },
    { value: '1400', label: '1400年' },
    { value: '1600', label: '1600年' },
    { value: '1800', label: '1800年' },
    { value: '1900', label: '1900年' },
    { value: '2000', label: '2000年' },
    { value: '2024', label: '2024年' }
  ];

  // 筛选后的风格列表
  const availableStyles = allStyles.filter(style => {
    // 时间范围筛选
    if (filters.timeRange.start !== 'all' || filters.timeRange.end !== 'all') {
      const startYear = filters.timeRange.start === 'all' ? 0 : parseInt(filters.timeRange.start);
      const endYear = filters.timeRange.end === 'all' ? 2024 : parseInt(filters.timeRange.end);
      
      // 检查艺术风格的时间范围是否与选择的时间范围有重叠
      if (style.endYear < startYear || style.startYear > endYear) {
        return false;
      }
    }
    
    // 地区筛选
    if (filters.region !== 'all' && style.region !== filters.region) {
      return false;
    }
    
    // 特征筛选
    if (filters.characteristics.length > 0) {
      const hasMatchingCharacteristic = filters.characteristics.some(char => 
        style.characteristics.some(styleChar => 
          styleChar.toLowerCase().includes(char.toLowerCase())
        )
      );
      if (!hasMatchingCharacteristic) return false;
    }
    
    // 搜索词筛选
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      const matchesSearch = style.name.toLowerCase().includes(searchLower) ||
                           style.description.toLowerCase().includes(searchLower) ||
                           style.characteristics.some(char => char.toLowerCase().includes(searchLower));
      if (!matchesSearch) return false;
    }
    
    return true;
  });

  // 客户端检查和挂载检查
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 使用原生滚动监听
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      
      setScrollProgress(progress);
      
      // 根据滚动进度确定当前章节
      if (explorationData) {
        const sections = explorationData.waterfallSections;
        let newSection = 0;
        for (let i = sections.length - 1; i >= 0; i--) {
          if (progress >= sections[i].scrollTrigger) {
            newSection = i;
            break;
          }
        }
        
        // 调试信息
        console.log('Scroll Progress:', progress, 'Current Section:', newSection, 'Sections:', sections.map(s => ({ id: s.id, trigger: s.scrollTrigger })));
        
        setCurrentSection(newSection);
      }
    };

    // 监听window滚动事件
    window.addEventListener('scroll', handleScroll);
    // 初始调用一次
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [explorationData, isMounted]);

  const handleStyleSelect = (style: ArtStyle) => {
    setSelectedStyle(style);
    const data = generateStyleExplorationData(style);
    setExplorationData(data);
    setCurrentSection(0);
    
    // 延迟触发滚动检查，确保DOM已更新
    setTimeout(() => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      
      if (data) {
        const sections = data.waterfallSections;
        for (let i = sections.length - 1; i >= 0; i--) {
          if (progress >= sections[i].scrollTrigger) {
            setCurrentSection(i);
            break;
          }
        }
      }
    }, 100);
  };

  const handleBackToSelection = () => {
    setSelectedStyle(null);
    setExplorationData(null);
    setCurrentSection(0);
  };

  // 确保组件完全挂载后再渲染
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B6B] mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  // 如果显示时间轴
  if (showTimeline) {
    return (
      <ArtTimeline 
        nodes={timelineNodes}
        onNodeClick={(node) => {
          // 如果节点有相关风格，选择第一个风格
          if (node.styles.length > 0) {
            handleStyleSelect(node.styles[0]);
            setShowTimeline(false);
          } else {
            // 如果没有详细内容，创建一个临时的艺术风格对象
            const tempStyle: ArtStyle = {
              id: node.id,
              name: node.title,
              description: node.description,
              period: `${node.year}年`,
              startYear: node.year,
              endYear: node.year + 50, // 假设持续50年
              region: '全球',
              influence: node.significance,
              characteristics: ['历史风格', '艺术发展', '文化影响'],
              representativeWork: {
                id: `${node.id}-work`,
                title: `${node.title}代表作品`,
                artist: node.representativeArtists[0] || '匿名',
                year: `${node.year}`,
                style: node.title,
                url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
                source: '历史资料',
                description: `这是${node.title}时期的代表作品，展现了该艺术风格的特征。`,
                styleLabels: [node.title, '历史艺术'],
                similarity: 1.0
              },
              relatedStyles: [],
              color: node.color
            };
            handleStyleSelect(tempStyle);
            setShowTimeline(false);
          }
        }}
        onBack={() => setShowTimeline(false)}
      />
    );
  }

  // 如果还没有选择风格，显示风格选择界面
  if (!selectedStyle || !explorationData) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#F7FAFC] to-[#EDF2F7]">
        {/* 背景装饰 - 匹配主页设计 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-br from-[#FFE66D] to-[#A8E6CF] rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#FFB74D] to-[#FF6B6B] rounded-full blur-3xl animate-pulse delay-2000 opacity-40"></div>
        </div>
        
        {/* 浮动粒子 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${(i * 7.3) % 100}%`,
                top: `${(i * 11.7) % 100}%`,
                background: `linear-gradient(45deg, ${['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FFB74D'][i % 5]}, transparent)`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 p-8">
        {/* 返回按钮 - 左上角 */}
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
              <span>返回主页</span>
            </button>
          </motion.div>
        )}
        
        <div className="max-w-6xl mx-auto">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              艺术风格探索
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              选择一个艺术风格，我们将带您深入了解其发展历程、代表作品和相关分支
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setShowTimeline(true)}
                className="px-6 py-3 bg-gradient-to-r from-[#4ECDC4] to-[#45B7B8] text-white text-lg font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                📅 查看艺术时间轴
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white text-lg font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                🔍 筛选风格
              </button>
            </div>
          </motion.div>

          {/* 筛选面板 */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-lg border border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 搜索框 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">搜索</label>
                  <input
                    type="text"
                    placeholder="搜索风格名称或特征..."
                    value={filters.searchTerm}
                    onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent"
                  />
                </div>

                {/* 时间范围 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">时间范围</label>
                  <div className="flex items-end space-x-2">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">开始时间</label>
                      <select
                        value={filters.timeRange.start}
                        onChange={(e) => setFilters(prev => ({ 
                          ...prev, 
                          timeRange: { ...prev.timeRange, start: e.target.value }
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-sm"
                      >
                        {yearOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-shrink-0 px-2 py-2 text-gray-400">
                      <span className="text-sm">至</span>
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">结束时间</label>
                      <select
                        value={filters.timeRange.end}
                        onChange={(e) => setFilters(prev => ({ 
                          ...prev, 
                          timeRange: { ...prev.timeRange, end: e.target.value }
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-sm"
                      >
                        {yearOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* 地区筛选 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">地区</label>
                  <select
                    value={filters.region}
                    onChange={(e) => setFilters(prev => ({ ...prev, region: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent"
                  >
                    <option value="all">全部地区</option>
                    <option value="意大利">意大利</option>
                    <option value="法国">法国</option>
                    <option value="德国">德国</option>
                    <option value="美国">美国</option>
                    <option value="欧洲">欧洲</option>
                    <option value="全球">全球</option>
                  </select>
                </div>

                {/* 特征筛选 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">艺术特征</label>
                  <div className="flex flex-wrap gap-2">
                    {['透视法', '色彩', '几何', '情感', '抽象', '写实', '装饰', '宗教'].map(char => (
                      <button
                        key={char}
                        onClick={() => {
                          const newCharacteristics = filters.characteristics.includes(char)
                            ? filters.characteristics.filter(c => c !== char)
                            : [...filters.characteristics, char];
                          setFilters(prev => ({ ...prev, characteristics: newCharacteristics }));
                        }}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          filters.characteristics.includes(char)
                            ? 'bg-[#4ECDC4] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 筛选结果统计和操作按钮 */}
              <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-600">
                  找到 <span className="font-semibold text-[#4ECDC4]">{availableStyles.length}</span> 个艺术风格
                  {filters.searchTerm && ` (搜索: "${filters.searchTerm}")`}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFilters({
                      timeRange: { start: 'all', end: 'all' },
                      region: 'all',
                      characteristics: [],
                      searchTerm: ''
                    })}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    重置筛选
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-4 py-2 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    收起筛选
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* 风格选择网格 */}
          {availableStyles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">未找到匹配的艺术风格</h3>
              <p className="text-gray-600 mb-6">请尝试调整筛选条件或搜索关键词</p>
              <button
                onClick={() => setFilters({
                  timeRange: { start: 'all', end: 'all' },
                  region: 'all',
                  characteristics: [],
                  searchTerm: ''
                })}
                className="px-6 py-3 bg-gradient-to-r from-[#4ECDC4] to-[#45B7B8] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
              >
                重置筛选
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {availableStyles.map((style, index) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleStyleSelect(style)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* 代表作品图片 */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={style.representativeWork.url}
                      alt={style.representativeWork.title}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        style.representativeWork.id === 'last-supper' 
                          ? 'object-center' 
                          : 'object-center'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{style.representativeWork.title}</h3>
                      <p className="text-sm opacity-90">{style.representativeWork.artist}</p>
                    </div>
                  </div>

                  {/* 风格信息 */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{style.name}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{style.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {style.characteristics.slice(0, 3).map((char, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {char}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{style.period}</span>
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: style.color }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          )}

        </div>
        </div>
      </div>
    );
  }

  // 瀑布流探索界面
  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[#F7FAFC] to-[#EDF2F7]">
      {/* 进度指示器 */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* 版本提示 */}
      {selectedStyle && !['high-renaissance', 'impressionism', 'cubism', 'contemporary-art'].includes(selectedStyle.id) && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#FFB74D] to-[#FF8C00] text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">ℹ️</span>
              <span className="text-sm font-medium">当前为简化版本，完整内容敬请期待</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* 章节导航 */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-4">
          {explorationData.waterfallSections.map((section, index) => (
            <button
              key={section.id}
              className={`block w-4 h-4 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] shadow-lg scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => {
                const element = document.getElementById(section.id);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              title={section.title}
            />
          ))}
        </div>
      </div>

      {/* 返回按钮和时间轴按钮 */}
      <div className="fixed top-8 left-8 z-40 space-x-3">
        <button
          onClick={handleBackToSelection}
          className="px-6 py-3 bg-white/90 backdrop-blur-md text-gray-700 rounded-xl hover:bg-white transition-colors duration-200 shadow-lg"
        >
          ← 选择其他风格
        </button>
        <button
          onClick={() => setShowTimeline(true)}
          className="px-6 py-3 bg-gradient-to-r from-[#4ECDC4] to-[#45B7B8] text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          📅 时间轴
        </button>
      </div>

      {/* 瀑布流内容 */}
      <div className="relative">
        {explorationData.waterfallSections.map((section, index) => (
          <div key={section.id} id={section.id} className="min-h-screen">
            {section.component === 'MasterpieceSection' && (
              <MasterpieceSection
                style={selectedStyle}
                masterpieces={section.data || []}
                isActive={currentSection === index}
              />
            )}
            {section.component === 'SimilarWorksSection' && (
              <SimilarWorksSection
                style={selectedStyle}
                similarWorks={section.data || []}
                isActive={currentSection === index}
              />
            )}
            {section.component === 'TimelineSection' && (
              <TimelineSection
                style={selectedStyle}
                timeline={section.data || []}
                isActive={currentSection === index}
              />
            )}
            {section.component === 'StyleBranchesSection' && (
              <StyleBranchesSection
                style={selectedStyle}
                branches={section.data || []}
                isActive={currentSection === index}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}