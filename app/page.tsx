'use client';

import { useState, useRef } from 'react';
import LandingSection from './components/LandingSection';
import UploadSection from './components/UploadSection';
import StyleCardSection from './components/StyleCardSection';
import SimilarImagesSection from './components/SimilarImagesSection';
import TreeDiagramSection from './components/TreeDiagramSection';
import ExportSection from './components/ExportSection';

// Types
interface StyleTag {
  name: string;
  confidence: number;
}

interface SimilarImage {
  url: string;
  style_labels: string[];
  source?: string;
  similarity: number;
}

interface TreeNode {
  id: string;
  name: string;
  imageUrl: string;
  children?: TreeNode[];
}

export default function Home() {
  const [analysisData, setAnalysisData] = useState<{
    styleTags: StyleTag[];
    similarImages: SimilarImage[];
    uploadedImageUrl: string;
  } | null>(null);
  
  const [treeRoot, setTreeRoot] = useState<TreeNode | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleAnalysisComplete = (data: any) => {
    setAnalysisData({
      styleTags: data.style_tags || [],
      similarImages: data.similar_images || [],
      uploadedImageUrl: data.uploaded_image_url || '',
    });

    // Initialize tree with uploaded image as root
    setTreeRoot({
      id: 'root',
      name: 'Uploaded Artwork',
      imageUrl: data.uploaded_image_url,
      children: [],
    });
  };

  const handleImageSelect = (image: SimilarImage) => {
    // Scroll to tree diagram section
    document.getElementById('tree-diagram-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddNode = (parentId: string, imageUrl: string) => {
    if (!treeRoot) return;

    // Create a new node
    const newNode: TreeNode = {
      id: `node-${Date.now()}`,
      name: 'Related Artwork',
      imageUrl,
      children: [],
    };

    // Function to recursively find and update the parent node
    const addChildToNode = (node: TreeNode): TreeNode => {
      if (node.id === parentId) {
        return {
          ...node,
          children: [...(node.children || []), newNode],
        };
      }

      if (!node.children) return node;

      return {
        ...node,
        children: node.children.map(child => addChildToNode(child)),
      };
    };

    // Update the tree
    setTreeRoot(addChildToNode(treeRoot));
  };

  return (
    <div ref={contentRef} className="font-sans min-h-screen">
      <LandingSection />
      
      <UploadSection onAnalysisComplete={handleAnalysisComplete} />
      
      {analysisData && (
        <>
          <StyleCardSection styleTags={analysisData.styleTags} />
          
          <SimilarImagesSection 
            initialImages={analysisData.similarImages}
            uploadedImageUrl={analysisData.uploadedImageUrl}
            onImageSelect={handleImageSelect}
          />
          
          {treeRoot && (
            <TreeDiagramSection 
              rootNode={treeRoot}
              onAddNode={handleAddNode}
            />
          )}
          
          <ExportSection contentRef={contentRef} />
        </>
      )}
    </div>
  );
} 