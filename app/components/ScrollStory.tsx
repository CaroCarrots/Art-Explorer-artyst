'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StoryStep {
  id: string;
  title: string;
  content: string;
  visual?: React.ReactNode;
}

interface ScrollStoryProps {
  steps: StoryStep[];
  className?: string;
}

export default function ScrollStory({ steps, className = '' }: ScrollStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const stepIndex = Math.floor(latest * steps.length);
      const clampedIndex = Math.max(0, Math.min(stepIndex, steps.length - 1));
      setCurrentStep(clampedIndex);
    });

    return unsubscribe;
  }, [scrollYProgress, steps.length]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Fixed visual area */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: currentStep === index ? 1 : 0.3,
                  x: currentStep === index ? 0 : -20,
                  scale: currentStep === index ? 1 : 0.95
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-[#4A5568] text-lg leading-relaxed">
                  {step.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual content */}
          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={`visual-${step.id}`}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: currentStep === index ? 1 : 0,
                  scale: currentStep === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {step.visual}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to enable scrolling */}
      <div style={{ height: `${steps.length * 100}vh` }} />
    </div>
  );
}
