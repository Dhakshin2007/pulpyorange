
import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_COPY } from '../constants';
import { Magnetic } from './Magnetic';
import { useSound } from './SoundManager';

export const Navbar: React.FC = () => {
  const { playPop } = useSound();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md md:backdrop-blur-none"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-1">
          <img 
            src={BRAND_COPY.logoUrl} 
            alt={BRAND_COPY.brandName} 
            className="h-12 md:h-14 w-auto object-contain brightness-110 drop-shadow-lg"
          />
        </div>
        <div className="flex items-center gap-2 opacity-60 ml-1">
          <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/50">Part of</span>
          <img 
            src={BRAND_COPY.corporate.logoUrl} 
            alt="Coca-Cola" 
            className="h-2.5 grayscale invert brightness-200" 
          />
        </div>
      </div>
      
      <div className="hidden lg:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
        <a href="#product" className="hover:text-orange-500 transition-all hover:tracking-[0.4em]">Inside</a>
        <a href="#products" className="hover:text-orange-500 transition-all hover:tracking-[0.4em]">Products</a>
        <a href="#story" className="hover:text-orange-500 transition-all hover:tracking-[0.4em]">Our Story</a>
        <a href="#campaign" className="hover:text-orange-500 transition-all hover:tracking-[0.4em]">Campaign</a>
      </div>

      <Magnetic strength={0.2}>
        <motion.button 
          onMouseEnter={playPop}
          whileHover={{ scale: 1.05, backgroundColor: '#f97316', color: '#000' }}
          whileTap={{ scale: 0.95 }}
          className="interactive bg-white/10 border border-white/20 hover:border-orange-500 text-white px-8 py-3 rounded-full text-[10px] font-bold transition-all uppercase tracking-[0.2em]"
        >
          Buy Now
        </motion.button>
      </Magnetic>
    </motion.nav>
  );
};
