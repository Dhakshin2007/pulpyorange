
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CampaignMoment: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.7, 1], [-100, 100]);
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 1.2]);

  return (
    <section id="campaign" className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1517593922312-3023e6027376?q=80&w=1600&auto=format&fit=crop" 
          alt="Campaign Visual" 
          className="w-full h-full object-cover brightness-[0.3] contrast-150 saturate-[0.5]"
        />
      </motion.div>

      {/* Epic Center Logo/Text */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <motion.div 
             animate={{ opacity: [0.4, 1, 0.4] }} 
             transition={{ duration: 4, repeat: Infinity }}
             className="text-orange-500 font-black tracking-[1em] text-sm md:text-xl uppercase mb-10"
          >
            Now Streaming Everywhere
          </motion.div>
          
          <h2 className="font-display text-[15vw] md:text-[20vw] font-black text-white leading-none tracking-tighter mix-blend-difference overflow-hidden">
             <motion.span 
               style={{ display: 'inline-block', y }}
             >
               AURA.
             </motion.span>
          </h2>

          <div className="flex items-center justify-center gap-12 pt-20">
             <div className="h-px w-24 bg-white/20" />
             <button className="interactive group relative overflow-hidden bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:pr-16">
                <span className="relative z-10">Discover Campaign</span>
                <motion.span 
                  className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  →
                </motion.span>
             </button>
             <div className="h-px w-24 bg-white/20" />
          </div>
        </motion.div>
      </div>

      {/* Background Grid for Tech Feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    </section>
  );
};
