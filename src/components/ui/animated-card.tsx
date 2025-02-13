'use client';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard = ({ children, className, delay = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Card
        className={cn(
          'border-border/50 bg-background/95 shadow-xl backdrop-blur-md',
          'p-6 transition-all duration-300 sm:p-8 md:p-12 lg:p-16',
          'hover:border-border/80 hover:shadow-lg hover:shadow-primary/5',
          className
        )}
      >
        <CardContent className="p-0">{children}</CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;
