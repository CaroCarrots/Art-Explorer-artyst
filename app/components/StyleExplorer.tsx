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
  
  // Filter state
  const [filters, setFilters] = useState({
    timeRange: { start: 'all', end: 'all' },
    region: 'all',
    characteristics: [] as string[],
    searchTerm: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const allStyles = getAvailableStyles();
  
  // Preset year options
  const yearOptions = [
    { value: 'all', label: 'All Periods' },
    { value: '1000', label: '1000 AD' },
    { value: '1200', label: '1200 AD' },
    { value: '1400', label: '1400 AD' },
    { value: '1600', label: '1600 AD' },
    { value: '1800', label: '1800 AD' },
    { value: '1900', label: '1900 AD' },
    { value: '2000', label: '2000 AD' },
    { value: '2024', label: '2024 AD' }
  ];

  // Filtered style list
  const availableStyles = allStyles.filter(style => {
    // Time range filter
    if (filters.timeRange.start !== 'all' || filters.timeRange.end !== 'all') {
      const startYear = filters.timeRange.start === 'all' ? 0 : parseInt(filters.timeRange.start);
      const endYear = filters.timeRange.end === 'all' ? 2024 : parseInt(filters.timeRange.end);
      
      // Check if the art style's time range overlaps with the selected time range
      if (style.endYear < startYear || style.startYear > endYear) {
        return false;
      }
    }
    
    // Region filter
    if (filters.region !== 'all' && style.region !== filters.region) {
      return false;
    }
    
    // Feature filter
    if (filters.characteristics.length > 0) {
      const hasMatchingCharacteristic = filters.characteristics.some(char => 
        style.characteristics.some(styleChar => 
          styleChar.toLowerCase().includes(char.toLowerCase())
        )
      );
      if (!hasMatchingCharacteristic) return false;
    }
    
    // Search term filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      const matchesSearch = style.name.toLowerCase().includes(searchLower) ||
                           style.description.toLowerCase().includes(searchLower) ||
                           style.characteristics.some(char => char.toLowerCase().includes(searchLower));
      if (!matchesSearch) return false;
    }
    
    return true;
  });

  // Client-side check and mount check
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use native scroll listener
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      
      setScrollProgress(progress);
      
      // Determine current section based on scroll progress
      if (explorationData) {
        const sections = explorationData.waterfallSections;
        let newSection = 0;
        for (let i = sections.length - 1; i >= 0; i--) {
          if (progress >= sections[i].scrollTrigger) {
            newSection = i;
            break;
          }
        }
        
        // Debug info
        console.log('Scroll Progress:', progress, 'Current Section:', newSection, 'Sections:', sections.map(s => ({ id: s.id, trigger: s.scrollTrigger })));
        
        setCurrentSection(newSection);
      }
    };

    // Listen to window scroll events
    window.addEventListener('scroll', handleScroll);
    // Initial call once
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [explorationData, isMounted]);

  const handleStyleSelect = async (style: ArtStyle) => {
    setSelectedStyle(style);
    
    // If it's High Renaissance, Impressionism, Cubism, or Contemporary Art, get real image data
    if (style.id === 'high-renaissance' || style.id === 'impressionism' || style.id === 'cubism' || style.id === 'contemporary-art') {
      try {
        const styleName = style.id === 'high-renaissance' ? 'High Renaissance' : 
                         style.id === 'impressionism' ? 'Impressionism' : 
                         style.id === 'cubism' ? 'Cubism' : 'Contemporary Art';
        const response = await fetch(`http://localhost:8000/style/${styleName}/artworks?count=3`);
        if (response.ok) {
          const styleData = await response.json();
          const artworks = styleData.artworks;
          
          // Create exploration data with real images
          const data = generateStyleExplorationData(style.id);
          
          // Update masterpieces data with real images
          if (data && data.waterfallSections.length > 0) {
            data.waterfallSections[0].data = artworks.map((artwork: any) => ({
              id: artwork.id,
              title: artwork.title,
              artist: artwork.artist,
              year: artwork.year,
              url: `http://localhost:8000${artwork.url}`,
              description: artwork.description
            }));
          }
          
          setExplorationData(data);
        } else {
          // If API call fails, use default data
          const data = generateStyleExplorationData(style.id);
          setExplorationData(data);
        }
      } catch (error) {
        console.error(`Error fetching ${style.name} artworks:`, error);
        // If error occurs, use default data
        const data = generateStyleExplorationData(style.id);
        setExplorationData(data);
      }
    } else {
      // Other styles use default data
      const data = generateStyleExplorationData(style.id);
      setExplorationData(data);
    }
    setCurrentSection(0);
    
    // Delay scroll check to ensure DOM is updated
    setTimeout(() => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      
      if (explorationData) {
        const sections = explorationData.waterfallSections;
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

  // Ensure component is fully mounted before rendering
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B6B] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If showing timeline
  if (showTimeline) {
    return (
      <ArtTimeline 
        nodes={timelineNodes}
        onNodeClick={(node) => {
          // If node has related styles, select the first style
          if (node.styles.length > 0) {
            handleStyleSelect(node.styles[0]);
            setShowTimeline(false);
          } else {
            // If no detailed content, create a temporary art style object
            const tempStyle: ArtStyle = {
              id: node.id,
              name: node.title,
              description: node.description,
              period: `${node.year} AD`,
              startYear: node.year,
              endYear: node.year + 50, // Assume duration of 50 years
              region: 'Global',
              influence: node.significance,
              characteristics: ['Historical Style', 'Art Development', 'Cultural Influence'],
              representativeWork: {
                id: `${node.id}-work`,
                title: `${node.title} Masterpiece`,
                artist: node.representativeArtists[0] || 'Anonymous',
                year: `${node.year}`,
                style: node.title,
                url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
                source: 'Historical Records',
                description: `This is a masterpiece from the ${node.title} period, showcasing the characteristics of this art style.`,
                styleLabels: [node.title, 'Historical Art'],
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

  // If no style selected yet, show style selection interface
  if (!selectedStyle || !explorationData) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#F7FAFC] to-[#EDF2F7]">
        {/* Background decoration - matching homepage design */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-br from-[#FFE66D] to-[#A8E6CF] rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#FFB74D] to-[#FF6B6B] rounded-full blur-3xl animate-pulse delay-2000 opacity-40"></div>
        </div>
        
        {/* Floating particles */}
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
        {/* Back button - top left */}
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
              <span>Back to Home</span>
            </button>
          </motion.div>
        )}
        
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Art Style Exploration
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Select an art style and we'll take you on a deep dive into its development, masterpieces, and related branches
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setShowTimeline(true)}
                className="px-6 py-3 bg-gradient-to-r from-[#4ECDC4] to-[#45B7B8] text-white text-lg font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                📅 View Art Timeline
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white text-lg font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                🔍 Filter Styles
              </button>
            </div>
          </motion.div>

          {/* Filter panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-lg border border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Search box */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <input
                    type="text"
                    placeholder="Search style names or features..."
                    value={filters.searchTerm}
                    onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent"
                  />
                </div>

                {/* Time range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
                  <div className="flex items-end space-x-2">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">Start Time</label>
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
                      <span className="text-sm">to</span>
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">End Time</label>
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

                {/* Region filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                  <select
                    value={filters.region}
                    onChange={(e) => setFilters(prev => ({ ...prev, region: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent"
                  >
                    <option value="all">All Regions</option>
                    <option value="意大利">Italy</option>
                    <option value="法国">France</option>
                    <option value="德国">Germany</option>
                    <option value="美国">United States</option>
                    <option value="欧洲">Europe</option>
                    <option value="全球">Global</option>
                  </select>
                </div>

                {/* Feature filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Art Features</label>
                  <div className="flex flex-wrap gap-2">
                    {['Perspective', 'Color', 'Geometry', 'Emotion', 'Abstract', 'Realistic', 'Decorative', 'Religious'].map(char => (
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

              {/* Filter results statistics and action buttons */}
              <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-600">
                  Found <span className="font-semibold text-[#4ECDC4]">{availableStyles.length}</span> art styles
                  {filters.searchTerm && ` (search: "${filters.searchTerm}")`}
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
                    Reset Filters
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-4 py-2 text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    Collapse Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Style selection grid */}
          {availableStyles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No matching art styles found</h3>
              <p className="text-gray-600 mb-6">Please try adjusting your filter criteria or search keywords</p>
              <button
                onClick={() => setFilters({
                  timeRange: { start: 'all', end: 'all' },
                  region: 'all',
                  characteristics: [],
                  searchTerm: ''
                })}
                className="px-6 py-3 bg-gradient-to-r from-[#4ECDC4] to-[#45B7B8] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Reset Filters
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
                  {/* Representative artwork image */}
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

                  {/* Style information */}
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

  // Waterfall exploration interface
  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[#F7FAFC] to-[#EDF2F7]">
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Version notice */}
      {selectedStyle && !['high-renaissance', 'impressionism', 'cubism', 'contemporary-art'].includes(selectedStyle.id) && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#FFB74D] to-[#FF8C00] text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">ℹ️</span>
              <span className="text-sm font-medium">Currently a simplified version, full content coming soon</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Section navigation */}
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

      {/* Back button and timeline button */}
      <div className="fixed top-8 left-8 z-40 space-x-3">
        <button
          onClick={handleBackToSelection}
          className="px-6 py-3 bg-white/90 backdrop-blur-md text-gray-700 rounded-xl hover:bg-white transition-colors duration-200 shadow-lg"
        >
          ← Select Other Style
        </button>
        <button
          onClick={() => setShowTimeline(true)}
          className="px-6 py-3 bg-gradient-to-r from-[#4ECDC4] to-[#45B7B8] text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          📅 Timeline
        </button>
      </div>

      {/* Waterfall content */}
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