'use client';

import { motion } from 'framer-motion';

interface StyleTag {
  name: string;
  confidence: number;
}

export default function StyleCardSection({ styleTags }: { styleTags: StyleTag[] }) {
  if (!styleTags || styleTags.length === 0) {
    return null;
  }

  return (
    <section id="style-section" className="min-h-screen flex flex-col items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Artistic Style Analysis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styleTags.map((tag, index) => (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-foreground/5 backdrop-blur-sm rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">{tag.name}</h3>
              
              <div className="w-full h-2 bg-foreground/10 rounded-full mb-2">
                <motion.div 
                  className="h-full bg-foreground rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tag.confidence * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              
              <div className="flex justify-between text-sm opacity-70">
                <span>Confidence</span>
                <span>{Math.round(tag.confidence * 100)}%</span>
              </div>
              
              <div className="mt-4">
                <CircleProgress progress={tag.confidence} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function CircleProgress({ progress }: { progress: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);
  
  return (
    <div className="flex justify-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="8"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            transformOrigin: 'center',
            transform: 'rotate(-90deg)',
          }}
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
          fontWeight="bold"
        >
          {Math.round(progress * 100)}%
        </text>
      </svg>
    </div>
  );
} 