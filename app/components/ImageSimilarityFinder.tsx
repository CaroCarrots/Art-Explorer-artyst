'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

interface SimilarImage {
  rank: number;
  similarity_score: number;
  title: string;
  artist: string;
  genre: string;
  image_path: string;
}

interface InputImageInfo {
  title: string;
  artist: string;
  genre: string;
  image_path: string;
  similarity_score: number;
}

interface SimilarityResult {
  query_image: string;
  has_perfect_match: boolean;
  input_image_info: InputImageInfo | null;
  similar_images: SimilarImage[];
  total_found: number;
}

interface ImageSimilarityFinderProps {
  onBack?: () => void;
}

export default function ImageSimilarityFinder({ onBack }: ImageSimilarityFinderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SimilarityResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResults(null);
      setError(null);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResults(null);
      setError(null);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('top_k', '3');

      const response = await fetch('/api/similarity', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process image');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResults(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        {onBack && (
          <motion.button
            onClick={onBack}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">←</span>
            <span>返回主页</span>
          </motion.button>
        )}
        <div className="flex-1"></div>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Art Similarity Finder
        </h1>
        <p className="text-lg text-gray-600">
          Upload an image to find similar artworks in our collection
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            selectedFile
              ? 'border-green-400 bg-green-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {previewUrl ? (
            <div className="space-y-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-64 mx-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600">{selectedFile?.name}</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-6xl text-gray-400">📷</div>
              <div>
                <p className="text-lg font-medium text-gray-700">
                  Drop an image here or click to browse
                </p>
                <p className="text-sm text-gray-500">
                  Supports JPG, PNG, and other image formats
                </p>
              </div>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="mt-6 space-x-4">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {selectedFile ? 'Change Image' : 'Select Image'}
            </button>
            
            {selectedFile && (
              <button
                onClick={resetForm}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {selectedFile && (
          <div className="mt-6 text-center">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <span className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Finding Similar Images...</span>
                </span>
              ) : (
                'Find Similar Images'
              )}
            </button>
          </div>
        )}
      </div>

      {/* Error Display */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-red-50 border border-red-200 rounded-lg p-4"
          >
            <div className="flex items-center space-x-2">
              <div className="text-red-500">⚠️</div>
              <p className="text-red-700">{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Section - Scroll Style */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative"
          >
            <SimilarityResultsScroll 
              results={results}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Scroll-style results component similar to SimilarityScroll
interface SimilarityResultsScrollProps {
  results: SimilarityResult;
}

function SimilarityResultsScroll({ results }: SimilarityResultsScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 使用 spring 让滚动更加丝滑
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 为每个进度指示器创建独立的动画值
  const progressIndicators = results.similar_images.map((_, index) => 
    useTransform(
      smoothProgress,
      [index / results.similar_images.length, (index + 1) / results.similar_images.length],
      ["#000000", "#e5e5e5"]
    )
  );

  return (
    <div ref={containerRef} className="relative">
      {/* 标题 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {results.has_perfect_match ? '作品识别结果' : '找到相似作品'}
        </h2>
        <p className="text-lg text-gray-600">
          {results.has_perfect_match 
            ? '我们识别出了您上传的作品！' 
            : `基于您上传的图片，我们找到了 ${results.total_found} 个相似的艺术作品`
          }
        </p>
      </div>

      {/* 输入图片信息（当有完美匹配时显示在顶部） */}
      {results.has_perfect_match && results.input_image_info && (
        <div className="mb-16">
          <InputImageSection inputInfo={results.input_image_info} />
        </div>
      )}

      {/* 未收录图片提示卡片（当没有完美匹配时显示，在相似作品上方） */}
      {!results.has_perfect_match && (
        <div className="mb-16">
          <NotInDatabaseCard />
        </div>
      )}

      {/* 连续滚动的艺术作品序列 */}
      <div className="space-y-0">
        {results.similar_images.map((image, index) => (
          <SimilarityArtworkSection
            key={index}
            image={image}
            index={index}
            totalCount={results.similar_images.length}
            scrollProgress={smoothProgress}
          />
        ))}
      </div>

      {/* 简约的进度指示器 */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-1 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {results.similar_images.map((_, index) => (
          <motion.div
            key={index}
            className="w-1 h-6 rounded-full bg-gray-300"
            style={{
              backgroundColor: progressIndicators[index]
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

interface InputImageSectionProps {
  inputInfo: InputImageInfo;
}

function NotInDatabaseCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg border border-gray-200">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* 图标 */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-2xl bg-gray-200 flex items-center justify-center shadow-lg">
              <div className="text-6xl text-gray-500">🔍</div>
            </div>
          </div>
          
          {/* 信息 */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 mb-3">
                ℹ️ 未收录作品
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              我们暂未收录此作品
            </h3>
            
            <div className="text-xl text-gray-600 mb-4">
              但为您找到了相似的艺术作品
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              很抱歉，我们目前还没有收录您上传的这幅作品。不过，我们的AI算法为您找到了风格和主题相似的艺术作品，
              希望这些推荐能够帮助您发现更多精彩的艺术内容。
            </p>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">💡 小贴士：</span>
                如果您知道这幅作品的信息，欢迎告诉我们，我们会考虑将其加入我们的艺术数据库！
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InputImageSection({ inputInfo }: InputImageSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 shadow-lg border border-green-200">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* 图片 */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`http://localhost:8000/image/${encodeURIComponent(inputInfo.image_path)}`}
                alt={inputInfo.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-100"><div class="text-6xl text-gray-400">🖼️</div></div>';
                  }
                }}
              />
            </div>
          </div>
          
          {/* 信息 */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-3">
                ✅ 完美匹配 ({(inputInfo.similarity_score * 100).toFixed(1)}%)
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              {inputInfo.title}
            </h3>
            
            <div className="text-xl text-gray-700 mb-4">
              <span className="font-semibold">{inputInfo.artist}</span>
              <span className="mx-2">•</span>
              <span className="text-gray-600">{Array.isArray(inputInfo.genre) ? inputInfo.genre.join(', ') : inputInfo.genre}</span>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              这是一件来自 <span className="font-semibold text-gray-800">{inputInfo.artist}</span> 的 
              <span className="font-semibold text-gray-800">{Array.isArray(inputInfo.genre) ? inputInfo.genre.join('、') : inputInfo.genre}</span> 风格作品。
              我们成功识别出了这幅作品！
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface SimilarityArtworkSectionProps {
  image: SimilarImage;
  index: number;
  totalCount: number;
  scrollProgress: ReturnType<typeof useSpring>;
}

function SimilarityArtworkSection({ image, index, totalCount, scrollProgress }: SimilarityArtworkSectionProps) {
  // 计算当前section的进度
  const sectionStart = index / totalCount;
  const sectionEnd = (index + 1) / totalCount;
  
  // 图片变换
  const imageScale = useTransform(
    scrollProgress,
    [sectionStart - 0.1, sectionStart, sectionEnd, sectionEnd + 0.1],
    [0.8, 1, 1, 0.8]
  );
  
  const imageOpacity = useTransform(
    scrollProgress,
    [sectionStart - 0.1, sectionStart, sectionEnd, sectionEnd + 0.1],
    [0.3, 1, 1, 0.3]
  );

  const imageY = useTransform(
    scrollProgress,
    [sectionStart - 0.1, sectionStart, sectionEnd, sectionEnd + 0.1],
    [100, 0, 0, -100]
  );

  // 文字变换
  const textX = useTransform(
    scrollProgress,
    [sectionStart - 0.1, sectionStart, sectionEnd, sectionEnd + 0.1],
    [100, 0, 0, -100]
  );

  const textOpacity = useTransform(
    scrollProgress,
    [sectionStart - 0.05, sectionStart + 0.05, sectionEnd - 0.05, sectionEnd + 0.05],
    [0, 1, 1, 0]
  );

  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧图片 */}
          <motion.div
            className="flex items-center justify-center"
            style={{
              scale: imageScale,
              opacity: imageOpacity,
              y: imageY
            }}
          >
            <div className="relative max-w-lg w-full">
              {/* 简约的图片容器 */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                <img
                  src={`http://localhost:8000/image/${encodeURIComponent(image.image_path)}`}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><div class="text-6xl text-gray-400">🖼️</div></div>';
                    }
                  }}
                />
              </div>
              
              {/* 相似度指示器 */}
              <motion.div 
                className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1"
                style={{ opacity: imageOpacity }}
              >
                <span className="text-sm font-medium text-white">
                  {Math.round(image.similarity_score * 100)}%
                </span>
              </motion.div>

              {/* 作品编号 */}
              <motion.div 
                className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1"
                style={{ opacity: imageOpacity }}
              >
                <span className="text-sm font-medium text-white">
                  {index + 1}/{totalCount}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* 右侧信息 */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            style={{
              x: textX,
              opacity: textOpacity
            }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                {image.title}
              </h2>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                {image.artist}
              </h3>
              <p className="text-base text-gray-600 mb-4">
                {image.genre}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed max-w-lg">
                这是一件来自 {image.artist} 的 {image.genre} 风格作品。通过我们的AI算法分析，这件作品与您上传的图片在视觉特征上具有很高的相似性。
              </p>
              
              {/* 风格标签 */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {image.genre}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {image.artist}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  相似度: {Math.round(image.similarity_score * 100)}%
                </span>
              </div>

              {/* 相似度分析 */}
              <div className="pt-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">相似度</span>
                  <div className="flex-1 max-w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gray-800"
                      style={{
                        width: useTransform(
                          scrollProgress,
                          [sectionStart, sectionStart + 0.1],
                          ["0%", `${image.similarity_score * 100}%`]
                        )
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {Math.round(image.similarity_score * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* 滚动提示 */}
            {index < totalCount - 1 && (
              <motion.div
                className="flex items-center space-x-2 text-gray-400 mt-8"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm">继续滚动查看下一个作品</span>
                <span className="text-xs">↓</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
