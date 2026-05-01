import React from 'react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { Briefcase, Calendar } from 'lucide-react';
export const ExperienceSection = () => {
  const experiences = [
  {
    title: 'Data Validation & Monitoring Intern',
    company: 'Velaris',
    period: 'Nov 2025 – Feb 2026',
    responsibilities: [
    'Automated workflows',
    'Monitored production pipelines',
    'API data validation']

  },
  {
    title: 'PR Coordinator',
    company: 'AWS Cloud Club',
    period: 'Past',
    responsibilities: ['Organized events', 'Promoted cloud initiatives']
  },
  {
    title: 'Tutor',
    company: 'Freelance',
    period: 'Past',
    responsibilities: ['Maths, ICT, Science']
  }];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" />

        <div className="relative ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) =>
          <div key={index} className="mb-12 relative pl-8 md:pl-0">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-6 w-2.5 h-2.5 rounded-full bg-neonRed shadow-[0_0_10px_rgba(255,42,42,0.8)] z-10"></div>

              <div
              className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
              
                <GlassCard delay={index * 0.2} hoverEffect className="relative">
                  {/* Connecting line for desktop */}
                  <div
                  className={`hidden md:block absolute top-7 w-12 h-px bg-white/10 ${index % 2 === 0 ? '-right-12' : '-left-12'}`}>
                </div>

                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <Briefcase
                    size={20}
                    className="text-neonRed/70 hidden sm:block" />
                  
                  </div>

                  <h4 className="text-neonRed font-medium mb-2">
                    {exp.company}
                  </h4>

                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) =>
                  <li
                    key={idx}
                    className="text-gray-300 text-sm flex items-start gap-2">
                    
                        <span className="text-neonRed mt-1">•</span>
                        {resp}
                      </li>
                  )}
                  </ul>
                </GlassCard>
              </div>
            </div>
          )}

          {/* Center line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -ml-px"></div>
        </div>
      </div>
    </section>);

};