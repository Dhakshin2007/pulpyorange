
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { useSound } from './SoundManager';

export const Products: React.FC = () => {
  const { playFizz } = useSound();

  return (
    <section id="products" className="relative py-24 md:py-48 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-black tracking-[0.5em] text-xs uppercase block mb-4"
          >
            The Full Lineup
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-8xl font-black text-white leading-none tracking-tighter"
          >
            CHOOSE YOUR <br/> <span className="text-orange-500">VITALITY.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -15 }}
              className="group relative bg-[#111] rounded-[3rem] p-8 border border-white/5 overflow-hidden transition-all duration-500 hover:border-orange-500/30 shadow-2xl"
            >
              {product.popular && (
                <div className="absolute top-8 right-8 z-20">
                  <span className="bg-orange-500 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                    Top Pick
                  </span>
                </div>
              )}

              <div className="relative h-64 mb-10 overflow-hidden rounded-[2rem]">
                <motion.div 
                  className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors z-10" 
                />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="relative z-20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                    {product.variant}
                  </h3>
                  <span className="text-orange-500 font-display text-xl font-black">{product.price}</span>
                </div>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-8">
                  Size: {product.size}
                </p>

                <div className="flex items-center justify-between">
                  <button 
                    onClick={playFizz}
                    className="interactive w-full py-4 rounded-2xl bg-white/5 hover:bg-orange-500 text-white hover:text-black font-black text-xs uppercase tracking-[0.2em] border border-white/10 hover:border-orange-500 transition-all duration-300"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* God Aura Glow for Card */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-500/5 blur-[80px] rounded-full group-hover:bg-orange-500/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
