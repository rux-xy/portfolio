import React from 'react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { Code2, Cpu, Network } from 'lucide-react';
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" />

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard className="md:col-span-2" delay={0.1}>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Background
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a Computer Science and Statistics undergraduate with a strong
              passion for building robust systems. My experience spans across
              backend development, automation scripting, and cloud deployment. I
              thrive in environments where I can solve complex problems and
              optimize processes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently, I'm focused on deepening my knowledge in DevOps
              practices and cloud architecture, aiming to bridge the gap between
              development and operations to deliver seamless, scalable
              applications.
            </p>
          </GlassCard>

          <div className="space-y-4">
            <GlassCard delay={0.2} className="flex items-center gap-4 p-4">
              <div className="p-3 bg-darkRed/30 rounded-lg text-neonRed">
                <Network size={24} />
              </div>
              <div>
                <h4 className="font-medium text-white">DevOps</h4>
                <p className="text-xs text-gray-400">CI/CD & Automation</p>
              </div>
            </GlassCard>

            <GlassCard delay={0.3} className="flex items-center gap-4 p-4">
              <div className="p-3 bg-darkRed/30 rounded-lg text-neonRed">
                <Cpu size={24} />
              </div>
              <div>
                <h4 className="font-medium text-white">Cloud Infrastructure</h4>
                <p className="text-xs text-gray-400">AWS & Deployment</p>
              </div>
            </GlassCard>

            <GlassCard delay={0.4} className="flex items-center gap-4 p-4">
              <div className="p-3 bg-darkRed/30 rounded-lg text-neonRed">
                <Code2 size={24} />
              </div>
              <div>
                <h4 className="font-medium text-white">Scalable Systems</h4>
                <p className="text-xs text-gray-400">Backend Architecture</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>);

};