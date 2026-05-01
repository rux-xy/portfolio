import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Experience',
    href: '#experience'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-deepBlack/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.5)] py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          className="text-xl font-bold text-white tracking-wider">
          
          RUMETH<span className="text-neonRed">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) =>
          <motion.a
            key={link.name}
            href={link.href}
            initial={{
              opacity: 0,
              y: -10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: index * 0.1
            }}
            className="text-sm text-gray-300 hover:text-neonRed transition-colors">
            
              {link.name}
            </motion.a>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white">
            
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          height: 0
        }}
        animate={{
          opacity: 1,
          height: 'auto'
        }}
        className="md:hidden bg-deepBlack/95 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-neonRed py-2 border-b border-white/5">
            
                {link.name}
              </a>
          )}
          </div>
        </motion.div>
      }
    </nav>);

};