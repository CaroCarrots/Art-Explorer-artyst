'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArtworkData, ExploreResponse, ExploreMode } from '../types/artwork';
import { classicArtworks, generateMockExploreResponse } from '../lib/mockData-simple';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import {
  ClassicImageSelector,
  BranchSelector,
  SimilarityScroll,
  StyleScroll,
  OverviewGrid,
  ExploreToolbar
} from './explore';

interface SimilarImagesSectionProps {
  initialImages?: ArtworkData[];
  uploadedImageUrl?: string;
  onImageSelect?: (image: ArtworkData) => void;
}

export default function SimilarImagesSection({ 
  initialImages = [],
  uploadedImageUrl,
  onImageSelect
}: SimilarImagesSectionProps) {
  const [exploreMode, setExploreMode] = useState<ExploreMode>('selection');
  const [exploreData, setExploreData] = useState<ExploreResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRootImage, setSelectedRootImage] = useState<ArtworkData | null>(null);

  // 启用丝滑滚动优化
  useSmoothScroll();

  // 处理经典图片选择或上传图片
  const handleImageSelection = async (imageUrl?: string, uploadedFile?: File) => {
    setIsLoading(true);
    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 使用测试数据
      let selectedArtwork: ArtworkData;
      
      if (imageUrl) {
        // 如果是选择的经典图片，找到对应的艺术作品
        selectedArtwork = classicArtworks.find(artwork => artwork.url === imageUrl) || classicArtworks[0];
      } else if (uploadedFile) {
        // 如果是上传的文件，创建一个临时艺术作品对象
        selectedArtwork = {
          id: 'uploaded-image',
          title: '您上传的图片',
          artist: '用户上传',
          year: new Date().getFullYear().toString(),
          style: '待分析',
          url: URL.createObjectURL(uploadedFile),
          source: '用户上传',
          description: '这是您上传的图片，我们将基于它来寻找相似的艺术作品。',
          styleLabels: ['用户上传'],
          similarity: 1.0
        };
      } else {
        selectedArtwork = classicArtworks[0];
      }

      // 生成探索数据
      const exploreData = generateMockExploreResponse(selectedArtwork);
      
      setExploreData(exploreData);
      setSelectedRootImage(exploreData.rootImage);
      setExploreMode('selection'); // 显示分支选择
    } catch (error) {
      console.error('探索失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 处理分支选择
  const handleBranchSelect = (branch: 'similarity' | 'style') => {
    setExploreMode(branch);
  };

  // 处理模式切换
  const handleModeChange = (mode: ExploreMode) => {
    setExploreMode(mode);
  };

  // 如果有上传的图片，自动开始探索
  useEffect(() => {
    if (uploadedImageUrl && !exploreData) {
      handleImageSelection(uploadedImageUrl);
    }
  }, [uploadedImageUrl]);

  return (
    <section id="similar-images-section" className="min-h-screen relative">
      {/* 工具栏 */}
      {exploreData && (
        <ExploreToolbar
          currentMode={exploreMode}
          onModeChange={handleModeChange}
          onBackToSelection={() => setExploreMode('selection')}
        />
      )}

      {/* 加载状态 */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-[#4ECDC4]"></div>
                <span className="text-lg font-medium text-[#2D3748]">探索艺术作品中...</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 主要内容区域 */}
      <div className="relative z-10">
        {/* 模式渲染 */}
        <AnimatePresence mode="wait">
          {exploreMode === 'selection' && !exploreData && (
            <motion.div
              key="classic-selector"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ClassicImageSelector onImageSelect={handleImageSelection} />
            </motion.div>
          )}

          {exploreMode === 'selection' && exploreData && (
            <motion.div
              key="branch-selector"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <BranchSelector
                exploreData={exploreData}
                onBranchSelect={handleBranchSelect}
              />
            </motion.div>
          )}

          {exploreMode === 'similarity' && exploreData && (
            <motion.div
              key="similarity-scroll"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <SimilarityScroll
                artworks={exploreData.similarityBranch.artworks}
                title={exploreData.similarityBranch.title}
                description={exploreData.similarityBranch.description}
              />
            </motion.div>
          )}

          {exploreMode === 'style' && exploreData && (
            <motion.div
              key="style-scroll"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <StyleScroll
                styleGroups={exploreData.styleBranch.styleGroups}
                title={exploreData.styleBranch.title}
                description={exploreData.styleBranch.description}
              />
            </motion.div>
          )}

          {exploreMode === 'overview' && exploreData && (
            <motion.div
              key="overview-grid"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <OverviewGrid
                artworks={exploreData.overview}
                rootImage={selectedRootImage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
