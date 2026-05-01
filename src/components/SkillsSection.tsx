import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Code, Settings, Wrench, Database, BarChart } from 'lucide-react';
interface Skill {
  name: string;
  level: number;
}
interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}
const skillCategories: SkillCategory[] = [
{
  title: 'Programming',
  icon: <Code size={24} />,
  skills: [
  {
    name: 'Java',
    level: 80
  },
  {
    name: 'Python',
    level: 70
  },
  {
    name: 'JavaScript',
    level: 75
  },
  {
    name: 'C',
    level: 55
  },
  {
    name: 'C#',
    level: 50
  }]

},
{
  title: 'DevOps',
  icon: <Settings size={24} />,
  skills: [
  {
    name: 'Docker',
    level: 20
  },
  {
    name: 'Linux',
    level: 50
  },
  {
    name: 'CI/CD',
    level: 40
  },
  {
    name: 'AWS',
    level: 25
  }]

},
{
  title: 'Tools',
  icon: <Wrench size={24} />,
  skills: [
  {
    name: 'Git',
    level: 85
  },
  {
    name: 'GitHub',
    level: 80
  },
  {
    name: 'Postman',
    level: 65
  },
  {
    name: 'VS Code',
    level: 90
  }]

},
{
  title: 'Databases',
  icon: <Database size={24} />,
  skills: [
  {
    name: 'MongoDB',
    level: 60
  },
  {
    name: 'MSSQL',
    level: 50
  },
  {
    name: 'Firebase',
    level: 55
  }]

},
{
  title: 'Data Tools',
  icon: <BarChart size={24} />,
  skills: [
  {
    name: 'R',
    level: 45
  },
  {
    name: 'SPSS',
    level: 40
  },
  {
    name: 'Power BI',
    level: 50
  }]

}];

const SkillBar = ({
  skill,
  animate,
  staggerDelay




}: {skill: Skill;animate: boolean;staggerDelay: number;}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
        <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/[0.06] rounded-full h-1.5 relative overflow-visible">
        <motion.div
          initial={{
            width: 0
          }}
          animate={{
            width: animate ? `${skill.level}%` : 0
          }}
          transition={{
            duration: 1,
            delay: staggerDelay,
            ease: 'easeOut'
          }}
          className="h-full rounded-full bg-gradient-to-r from-darkRed to-neonRed shadow-[0_0_10px_rgba(255,42,42,0.5)] relative overflow-visible">
          
          {/* Ball at the end of the bar */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-neonRed shadow-[0_0_8px_rgba(255,42,42,0.8),0_0_16px_rgba(255,42,42,0.4)]" />
        </motion.div>
      </div>
    </div>);

};
const SkillCard = ({
  category,
  index,
  hoveredIndex,
  onHover,
  onLeave,
  globalKey







}: {category: SkillCategory;index: number;hoveredIndex: number | null;onHover: () => void;onLeave: () => void;globalKey: number;}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const isHovered = hoveredIndex === index;
  const isFaded = hoveredIndex !== null && hoveredIndex !== index;
  // When this card is hovered, use a local key to restart its animation
  const [localKey, setLocalKey] = useState(0);
  const handleMouseEnter = () => {
    setLocalKey((prev) => prev + 1);
    onHover();
  };
  const animKey = isHovered ? `local-${localKey}` : `global-${globalKey}`;
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={
      isInView ?
      {
        opacity: isFaded ? 0.35 : 1,
        y: 0,
        scale: isHovered ? 1.05 : isFaded ? 0.97 : 1,
        filter: isFaded ? 'blur(1px)' : 'blur(0px)'
      } :
      {
        opacity: 0,
        y: 20
      }
      }
      transition={{
        duration: 0.35,
        ease: 'easeOut'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
      className={`bg-white/[0.04] backdrop-blur-2xl border rounded-2xl p-6 transition-colors duration-300 cursor-pointer ${isHovered ? 'border-neonRed/50 shadow-[0_0_40px_rgba(255,42,42,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'}`}>
      
      <div className="flex items-center gap-3 mb-8">
        <div
          className={`p-2 rounded-lg border transition-colors duration-300 ${isHovered ? 'bg-neonRed/20 text-neonRed border-neonRed/40' : 'bg-darkRed/20 text-neonRed border-neonRed/20'}`}>
          
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
      </div>

      <div className="space-y-5" key={animKey}>
        {category.skills.map((skill, skillIndex) =>
        <SkillBar
          key={skill.name}
          skill={skill}
          animate={isInView && (isHovered || hoveredIndex === null)}
          staggerDelay={skillIndex * 0.08} />

        )}
      </div>
    </motion.div>);

};
export const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [globalKey, setGlobalKey] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-50px'
  });
  // Auto-loop: reset all cards every ~5 seconds when nothing is hovered
  useEffect(() => {
    if (!isInView || hoveredIndex !== null) return;
    const interval = setInterval(() => {
      setGlobalKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isInView, hoveredIndex]);
  return (
    <section id="skills" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with" />
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) =>
          <SkillCard
            key={category.title}
            category={category}
            index={index}
            hoveredIndex={hoveredIndex}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
            globalKey={globalKey} />

          )}
        </div>
      </div>
    </section>);

};