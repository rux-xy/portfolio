import React from 'react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { GraduationCap, Award } from 'lucide-react';
export const EducationSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Education" />
            <div className="space-y-6">
              <GlassCard delay={0.1} hoverEffect>
                <div className="flex gap-4">
                  <div className="mt-1 text-neonRed">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      BSc Computer Science & Statistics
                    </h3>
                    <p className="text-neonRed text-sm mb-2">
                      University of Kelaniya
                    </p>
                    <p className="text-gray-400 text-sm">GPA: 3.3</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.2} hoverEffect>
                <div className="flex gap-4">
                  <div className="mt-1 text-neonRed">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Diploma in ICT
                    </h3>
                    <p className="text-gray-400 text-sm">Grade: A+</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <div>
            <SectionHeading title="Achievements" />
            <div className="space-y-4">
              {[
              'National Boxing Player',
              'BASL Tournament Runner-up',
              'Former National Wushu Player & Coach'].
              map((achievement, index) =>
              <GlassCard
                key={index}
                delay={0.3 + index * 0.1}
                hoverEffect
                className="p-4">
                
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-neonRed shadow-[0_0_8px_rgba(255,42,42,0.8)]"></div>
                    <span className="text-gray-200 font-medium">
                      {achievement}
                    </span>
                  </div>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};