import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle
}) => {
  return (
    <div className="mb-12">
      <motion.h2
        initial={{
          opacity: 0,
          x: -20
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true
        }}
        className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
        
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-neonRed to-transparent rounded-full"></span>
      </motion.h2>
      {subtitle &&
      <motion.p
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          delay: 0.2
        }}
        className="text-gray-400 mt-4 max-w-2xl">
        
          {subtitle}
        </motion.p>
      }
    </div>);

};