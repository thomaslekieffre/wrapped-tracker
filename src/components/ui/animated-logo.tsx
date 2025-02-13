'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Headphones } from 'lucide-react';
import React from 'react';

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

const AnimatedLogo = ({ size = 40, className }: AnimatedLogoProps) => {
  return (
    <motion.div
      className={cn('relative flex items-center justify-center', className)}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Headphones size={size} className="relative text-primary" />
    </motion.div>
  );
};

export default AnimatedLogo;
