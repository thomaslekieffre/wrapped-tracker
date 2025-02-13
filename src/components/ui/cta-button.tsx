'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import React from 'react';

const CTAButton = ({ className, children, ...props }: ButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        className={cn(
          'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg',
          'hover:opacity-90 hover:shadow-xl',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default CTAButton;
