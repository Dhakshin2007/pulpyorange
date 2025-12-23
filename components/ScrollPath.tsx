
import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const ScrollPath: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-visible">
      <svg className="w-full h-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
        <motion.path
          d="M 50,0 Q 80,150 50,300 T 50,600 T 50,900 T 50,1000"
          fill="none"
          stroke="#f97316"
          strokeWidth="0.2"
          strokeOpacity="0.2"
          style={{ pathLength, opacity }}
        />
        <motion.path
          d="M 50,0 Q 80,150 50,300 T 50,600 T 50,900 T 50,1000"
          fill="none"
          stroke="#f97316"
          strokeWidth="0.05"
          strokeOpacity="0.5"
          style={{ pathLength, opacity }}
        />
      </svg>
    </div>
  );
};
