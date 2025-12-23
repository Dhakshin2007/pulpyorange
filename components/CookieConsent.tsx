
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pulp_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pulp_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-10 left-6 right-6 md:left-12 md:right-auto md:w-[400px] z-[9000]"
        >
          <div className="bg-[#111]/80 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 blur-[40px] rounded-full" />
            
            <h4 className="font-display text-lg font-black text-white uppercase tracking-tight mb-3">Cookie Preferences</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              We use cookies to enhance your experience and deliver personalized citrus vibes. By clicking accept, you agree to our use of tracking for performance and marketing.
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={handleAccept}
                className="flex-1 interactive bg-orange-500 text-black py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-colors"
              >
                Accept All
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="flex-1 interactive bg-white/5 border border-white/10 text-white py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
