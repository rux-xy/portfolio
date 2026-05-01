import React from 'react';
import { MatrixRain } from './components/MatrixRain';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="relative min-h-screen bg-deepBlack text-white font-sans selection:bg-neonRed/30">
      <MatrixRain />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>);

}