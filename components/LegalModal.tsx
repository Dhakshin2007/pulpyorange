
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-[2rem] p-10 md:p-16 overflow-hidden shadow-2xl"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full" />
            
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors uppercase font-black text-xs tracking-widest"
            >
              Close [X]
            </button>

            <h2 className="font-display text-4xl md:text-5xl font-black mb-8 text-white tracking-tighter uppercase">
              {title}
            </h2>
            
            <div className="text-gray-400 text-lg leading-relaxed font-light space-y-6 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
              {content.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-1 bg-orange-500" />
              <span className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em]">Official Corporate Disclosure</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
