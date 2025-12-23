
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { BRAND_COPY } from '../constants';
import { Magnetic } from './Magnetic';
import { useSound } from './SoundManager';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { playPop } = useSound();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 40);
    mouseY.set((clientY / innerHeight - 0.5) * 40);
  };

  const { scrollY } = useScroll();
  const bottleY = useTransform(scrollY, [0, 500], [0, 150]);
  const textScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] md:perspective-1000 pt-32 pb-16 md:py-0"
    >
      {/* Liquid Physics Filter */}
      <svg className="absolute w-0 h-0">
        <filter id="liquid">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise">
            <animate attributeName="baseFrequency" values="0.01;0.015;0.01" dur="10s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
        </filter>
      </svg>

      {/* The God Aura: Dynamic Background Glow */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(249, 115, 22, 0.18) 0%, transparent 75%)`,
          x: useTransform(springX, (v) => v * -0.5),
          y: useTransform(springY, (v) => v * -0.5),
        }}
      />

      {/* Main Visual Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          style={{ x: useTransform(springX, (v) => v * 0.2), scale: textScale }}
          className="w-full md:w-1/2 mb-16 md:mb-0 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 md:mb-8 flex justify-center md:justify-start"
          >
            <img 
              src={BRAND_COPY.logoUrl} 
              alt={BRAND_COPY.brandName} 
              className="h-16 md:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            />
          </motion.div>
          
          <div className="overflow-hidden" style={{ filter: 'url(#liquid)' }}>
            <motion.h1 
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter text-white drop-shadow-2xl"
            >
              {BRAND_COPY.hero.title}
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 md:mt-8 text-lg md:text-2xl font-light tracking-[0.2em] md:tracking-[0.4em] text-orange-500 uppercase"
          >
            {BRAND_COPY.hero.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 md:mt-12"
          >
            <Magnetic strength={0.2}>
              <motion.button 
                onMouseEnter={playPop}
                whileHover={{ scale: 1.05, backgroundColor: '#f97316', color: '#000', boxShadow: '0 0 40px rgba(249, 115, 22, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="interactive border-2 border-orange-500 text-orange-500 px-8 md:px-12 py-4 md:py-5 rounded-full text-xs md:text-sm font-black tracking-[0.3em] uppercase transition-all shadow-[0_0_30px_rgba(249,115,22,0.2)]"
              >
                {BRAND_COPY.hero.cta}
              </motion.button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <motion.div 
            style={{ 
              x: useTransform(springX, (v) => v * 0.8), 
              y: useTransform(springY, (v) => v * 0.8),
              opacity: useTransform(scrollY, [0, 500], [0.6, 0])
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-orange-500/20 blur-[80px] md:blur-[130px] rounded-full z-10"
          />

          <motion.div
            style={{ 
              y: bottleY,
              rotateX: useTransform(springY, (v) => v * -0.2),
              rotateY: useTransform(springX, (v) => v * 0.2),
            }}
            className="relative z-20 group"
          >
            <motion.img 
              initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600&auto=format&fit=crop" 
              alt="Minute Maid Pulpy Bottle"
              className="w-48 sm:w-64 md:w-[480px] drop-shadow-[0_0_50px_rgba(249,115,22,0.4)] rounded-[40px] md:rounded-[60px] grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex items-center gap-4 md:gap-6 text-[8px] md:text-[9px] tracking-[0.4em] font-black uppercase text-white/40"
      >
        <span>Global Standard</span>
        <div className="w-1 h-1 bg-white/20 rounded-full" />
        <img src={BRAND_COPY.corporate.logoUrl} className="h-3 md:h-4 invert opacity-60" alt="Coca-Cola" />
      </motion.div>

      <motion.div 
        className="hidden md:flex absolute bottom-10 right-12 flex-col items-center gap-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[9px] font-black tracking-[0.5em] uppercase rotate-90 origin-right translate-x-12 mb-20 text-orange-500/40">Pure Pulp Experience</span>
        <div className="w-px h-32 bg-gradient-to-b from-orange-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};
