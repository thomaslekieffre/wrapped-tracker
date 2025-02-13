'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface WavyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const WavyBackground = ({ children, className, ...props }: WavyBackgroundProps) => {
  return (
    <div className={cn('relative h-full w-full overflow-hidden', className)} {...props}>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, rgba(var(--primary) / 0.15) 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, rgba(var(--primary) / 0.1) 0%, transparent 60%)`,
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default WavyBackground;
