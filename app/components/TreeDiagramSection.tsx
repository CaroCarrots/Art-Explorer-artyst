'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as d3 from 'd3';

interface TreeNode {
  id: string;
  name: string;
  imageUrl: string;
  children?: TreeNode[];
}

interface TreeDiagramProps {
  rootNode: TreeNode;
  onAddNode: (parentId: string, imageUrl: string) => void;
}

export default function TreeDiagramSection({ rootNode, onAddNode }: TreeDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [treeData, setTreeData] = useState<TreeNode>(rootNode);

  useEffect(() => {
    setTreeData(rootNode);
  }, [rootNode]);

  useEffect(() => {
    if (!svgRef.current || !treeData) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const width = 1000;
    const height = 600;
    const margin = { top: 40, right: 120, bottom: 40, left: 120 };

    // Create a tree layout
    const treeLayout = d3.tree<TreeNode>()
      .size([height - margin.top - margin.bottom, width - margin.left - margin.right]);

    // Create hierarchy from data
    const root = d3.hierarchy(treeData);
    
    // Assign positions to nodes
    const treeData2 = treeLayout(root);
    const nodes = treeData2.descendants();
    const links = treeData2.links();

    // Create a group element that will contain all nodes and links
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create links
    g.selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#aaa")
      .attr("stroke-width", 1.5)
      .attr("d", d3.linkHorizontal<d3.HierarchyPointLink<TreeNode>, d3.HierarchyPointNode<TreeNode>>()
        .x((d: any) => d.y)
        .y((d: any) => d.x)
      );

    // Create nodes
    const node = g.selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d: any) => `translate(${d.y},${d.x})`)
      .attr("cursor", "pointer")
      .on("click", (_event: any, d: any) => {
        setSelectedNode(d.data);
      });

    // Add circular background for images
    node.append("circle")
      .attr("r", 25)
      .attr("fill", "#fff")
      .attr("stroke", "#ddd")
      .attr("stroke-width", 2);

    // Add clipPath for circular images
    const defs = svg.append("defs");
    
    node.each(function(d: any) {
      const clipId = `clip-${d.data.id}`;
      
      defs.append("clipPath")
        .attr("id", clipId)
        .append("circle")
        .attr("r", 23)
        .attr("cx", 0)
        .attr("cy", 0);
      
      // Add images
      d3.select(this as Element)
        .append("image")
        .attr("xlink:href", d.data.imageUrl)
        .attr("x", -23)
        .attr("y", -23)
        .attr("width", 46)
        .attr("height", 46)
        .attr("clip-path", `url(#${clipId})`)
        .attr("preserveAspectRatio", "xMidYMid slice");
    });

    // Add text labels
    node.append("text")
      .attr("dy", 40)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .text((d: any) => d.data.name.length > 15 ? d.data.name.substring(0, 15) + '...' : d.data.name);

    // Add zoom capability
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 2])
      .on("zoom", (event: any) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Center the tree initially
    const initialTransform = d3.zoomIdentity.translate(margin.left, margin.top);
    svg.call(zoom.transform, initialTransform);

  }, [treeData]);

  return (
    <section id="tree-diagram-section" className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Art Exploration Tree</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Click on any artwork to view details or add related works
        </p>
        
        <div className="bg-foreground/5 rounded-lg p-4 mb-8 overflow-hidden">
          <svg 
            ref={svgRef} 
            width="100%" 
            height="600px" 
            className="bg-white rounded-lg shadow-sm"
          ></svg>
        </div>
        
        {selectedNode && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-foreground/5 rounded-lg p-6 shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <img 
                  src={selectedNode.imageUrl} 
                  alt={selectedNode.name}
                  className="w-full h-auto rounded-lg shadow-sm" 
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-2">{selectedNode.name}</h3>
                
                <div className="mt-6">
                  <button 
                    className="px-4 py-2 bg-foreground text-background rounded-lg hover:bg-opacity-90 transition-colors"
                    onClick={() => {
                      // In a real app, this would open a modal to select an image to add
                      const newImageUrl = prompt('Enter image URL to add as a child node:');
                      if (newImageUrl && selectedNode) {
                        onAddNode(selectedNode.id, newImageUrl);
                      }
                    }}
                  >
                    Add Related Artwork
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
} 