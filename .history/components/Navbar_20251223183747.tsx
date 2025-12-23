
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_COPY } from '../constants';
import { Magnetic } from './Magnetic';
import { useSound } from './SoundManager';

export const Navbar: React.FC = () => {
  const { playPop } = useSound();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inside', href: '#product' },
    { name: 'Products', href: '#products' },
    { name: 'Our Story', href: '#story' },
    { name: 'Campaign', href: '#campaign' },
  ];

  return (
    <>
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
              className="h-10 md:h-14 w-auto object-contain brightness-110 drop-shadow-lg"
            />
          </div>
          <div className="hidden sm:flex items-center gap-2 opacity-60 ml-1">
            <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/50">Part of</span>
            <img 
              src={BRAND_COPY.corporate.logoUrl} 
              alt="Coca-Cola" 
              className="h-2.5 grayscale invert brightness-200" 
            />
          </div>
        </div>
        
        <div className="hidden lg:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-orange-500 transition-all hover:tracking-[0.4em]">
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Magnetic strength={0.2}>
            <motion.button 
              onMouseEnter={playPop}
              whileHover={{ scale: 1.05, backgroundColor: '#f97316', color: '#000' }}
              whileTap={{ scale: 0.95 }}
              className="interactive bg-white/10 border border-white/20 hover:border-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[10px] font-bold transition-all uppercase tracking-[0.2em]"
            >
              Buy Now
            </motion.button>
          </Magnetic>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[60]"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-black flex flex-col items-center justify-center lg:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)] pointer-events-none" />
            <div className="flex flex-col items-center gap-10">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-4xl font-display font-black text-white hover:text-orange-500 transition-colors uppercase tracking-tighter"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <div className="absolute bottom-10 flex flex-col items-center gap-4 opacity-40">
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold">The Global Standard</span>
              <img src={BRAND_COPY.corporate.logoUrl} className="h-6 invert" alt="Coca-Cola" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
