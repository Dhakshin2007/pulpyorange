
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BRAND_COPY } from '../constants';

const MagneticCard = ({ children, idx }: { children: React.ReactNode, idx: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 20 }}
      className="group cursor-pointer py-10 border-b border-white/5 last:border-0"
    >
      {children}
    </motion.div>
  );
};

export const ProductHighlight: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotateImg = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scaleImg = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);

  return (
    <section id="product" className="relative py-24 md:py-48 bg-[#0a0a0a] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 md:order-1">
            <motion.div 
              style={{ rotate: rotateImg, scale: scaleImg }}
              className="relative z-10 w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop" 
                alt="Fresh Squeezed"
                className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute bottom-12 left-12"
              >
                <span className="text-orange-500 font-black text-6xl opacity-20">01</span>
              </motion.div>
            </motion.div>
            
            {/* Decorative Floating Text */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 z-20 bg-orange-500 text-black p-8 rounded-full font-black text-xl shadow-2xl"
            >
              100% REAL
            </motion.div>
          </div>

          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h2 className="font-display text-5xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
                UNMATCHED <br/> <span className="text-orange-500 italic">TEXTURE.</span>
              </h2>
              <div className="h-1 w-32 bg-orange-500" />
            </motion.div>

            <div className="flex flex-col">
              {BRAND_COPY.benefits.map((benefit, idx) => (
                <MagneticCard key={idx} idx={idx}>
                  <div className="flex items-start gap-8">
                    <span className="font-display text-2xl text-orange-500/40 mt-1">0{idx + 1}</span>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-widest mb-4 group-hover:text-orange-500 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-500 text-lg leading-relaxed max-w-md group-hover:text-gray-300 transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </MagneticCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
