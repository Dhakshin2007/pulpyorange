
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BRAND_COPY } from '../constants';

export const BrandStory: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const xLeft = useTransform(scrollYProgress, [0.3, 0.8], [0, -1000]);
  const xRight = useTransform(scrollYProgress, [0.3, 0.8], [-1000, 0]);

  return (
    <section id="story" className="relative py-24 md:py-48 bg-[#0a0a0a] overflow-hidden">
      {/* God Aura Marquee - Dual Layer */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none gap-20 py-20 opacity-[0.05]">
        <motion.div style={{ x: xLeft }} className="whitespace-nowrap font-display text-[15vw] font-black uppercase tracking-tighter">
          PURE ENERGY PULP VITALITY SUN KISSED REAL AUTHENTIC
        </motion.div>
        <motion.div style={{ x: xRight }} className="whitespace-nowrap font-display text-[15vw] font-black uppercase tracking-tighter text-orange-500">
          THE COCA COLA COMPANY GLOBAL STANDARD PREMIUM CITRUS
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(249,115,22,0.5)]"
          >
            <div className="w-10 h-10 border-2 border-black rounded-full animate-ping" />
          </motion.div>
          
          <motion.h2 ></motion.h2>
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-[10rem] font-black leading-none tracking-tighter mb-12"
          >
            BORN FROM <br/> THE <span className="text-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">SUN.</span>
          </h2 >
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl md:text-3xl text-gray-400 max-w-4xl leading-relaxed font-light italic"
          >
            "{BRAND_COPY.story.content}"
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1547517023-7ca0c162f816?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=400&auto=format&fit=crop"
          ].map((url, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -20, scale: 1.02 }}
              className="h-[500px] overflow-hidden rounded-3xl relative group cursor-none"
            >
              <img src={url} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt="Lifestyle" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-display text-2xl font-black text-white uppercase tracking-widest">Moment {i+1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
