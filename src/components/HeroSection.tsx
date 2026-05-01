import React from 'react';
import { motion } from 'framer-motion';
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          boxShadow: 'inset 0 0 150px rgba(0,0,0,0.8)'
        }}>
      </div>

      {/* Subtle red radial glow behind image */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-darkRed/15 blur-[180px] rounded-full pointer-events-none"></div>

      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-darkRed/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid md:grid-cols-5 gap-4 items-center relative z-10">
        {/* LEFT SIDE - Text (60%) */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="md:col-span-3 order-2 md:order-1 text-center md:text-left py-12 md:py-0">
          
          <p className="text-gray-300 text-lg md:text-xl mb-3 font-light italic">
            Hi! I'm
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-1 tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10 px-3 py-1">Rumeth</span>
              <span className="absolute inset-0 bg-neonRed skew-x-[-2deg] rounded shadow-[0_0_20px_rgba(255,42,42,0.4)]"></span>
            </span>
            <span className="block mt-1">DevOps & Backend</span>
            <span className="block">Engineer</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-200 font-light mt-3 mb-6">
            Based in Sri Lanka.
          </h2>

          <p className="text-gray-400 max-w-lg leading-relaxed mb-8 text-base md:text-lg mx-auto md:mx-0">
            Building scalable systems, automating workflows, and exploring cloud
            infrastructure.
          </p>

          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255,42,42,0.6)'
            }}
            whileTap={{
              scale: 0.95
            }}
            className="inline-block px-8 py-4 bg-neonRed text-white font-semibold rounded text-sm tracking-wider uppercase shadow-[0_0_15px_rgba(255,42,42,0.3)] hover:bg-red-600 transition-colors duration-300">
            
            View Portfolio
          </motion.a>
        </motion.div>

        {/* RIGHT SIDE - Image (40%) */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="md:col-span-2 order-1 md:order-2 relative flex justify-center md:justify-end">
          
          {/* Gradient overlay — soft fade on left edge only */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-transparent hidden md:block"></div>

          <img
            src="/Portrait.png"
            alt="Rumeth Wijethunge"
            className="relative w-96 h-auto md:w-full md:h-[95vh] md:max-h-[900px] object-contain object-bottom mt-12" />
          
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-deepBlack to-transparent z-20 pointer-events-none"></div>
    </section>);

};