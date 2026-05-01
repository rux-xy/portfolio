import React from 'react';
import { motion } from 'framer-motion';
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  delay = 0,
  hoverEffect = false
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay
      }}
      className={`bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-2xl p-6 ${hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,42,42,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-neonRed/40' : ''} ${className}`}>
      
      {children}
    </motion.div>);

};