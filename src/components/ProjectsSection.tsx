import React from 'react';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
export const ProjectsSection = () => {
  const projects = [
  {
    title: 'Cloud-Native Task Management API',
    tech: ['Docker', 'AWS', 'CI/CD'],
    description:
    'RESTful API with containerized deployment and automated CI/CD pipeline.',
    github: '#',
    demo: '#'
  },
  {
    title: 'Freelancer Marketplace System',
    tech: ['Spring Boot', 'React', 'MongoDB'],
    description:
    'Full-stack marketplace connecting freelancers with clients.',
    github: '#',
    demo: '#'
  },
  {
    title: 'GPA Management System',
    tech: ['React', 'Firebase'],
    description: 'Student GPA tracking and management application.',
    github: '#',
    demo: '#'
  },
  {
    title: 'Expense Manager',
    tech: ['Java'],
    description: 'Desktop application for personal expense tracking.',
    github: '#',
    demo: '#'
  }];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some things I've built" />
        

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) =>
          <GlassCard
            key={index}
            delay={index * 0.1}
            hoverEffect
            className="flex flex-col h-full">
            
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-darkRed/20 rounded-lg text-neonRed">
                  <FolderGit2 size={24} />
                </div>
                <div className="flex gap-3">
                  <a
                  href={project.github}
                  className="text-gray-400 hover:text-neonRed transition-colors">
                  
                    <Github size={20} />
                  </a>
                  <a
                  href={project.demo}
                  className="text-gray-400 hover:text-neonRed transition-colors">
                  
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neonRed transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.tech.map((tech) =>
              <span
                key={tech}
                className="text-xs font-medium text-neonRed/80 bg-neonRed/10 px-2 py-1 rounded">
                
                    {tech}
                  </span>
              )}
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </section>);

};