
import React from 'react';
import { BRAND_COPY } from '../constants';

interface FooterProps {
  onLegalClick?: (type: 'privacy' | 'terms' | 'cookies') => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer className="bg-[#050505] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-10">
             <img 
              src={BRAND_COPY.logoUrl} 
              alt={BRAND_COPY.brandName} 
              className="h-16 w-auto object-contain brightness-110"
            />
          </div>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed mb-10">
            Minute Maid Pulpy delivers the world's most authentic citrus experience. For those who demand real flavor and pure, natural energy. Sourced from the finest orchards.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-8">
              {['Instagram', 'Twitter', 'LinkedIn', 'Facebook'].map(link => (
                <div key={link} className="relative group">
                  <span className="interactive text-[10px] font-bold uppercase tracking-widest text-gray-700 cursor-not-allowed transition-colors">
                    {link}
                  </span>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-orange-500 text-black text-[8px] font-black px-2 py-0.5 rounded whitespace-nowrap">
                    NOT APPLICABLE
                  </div>
                </div>
              ))}
            </div>
            <span className="text-[8px] text-gray-800 uppercase tracking-[0.3em] font-bold italic">
              * Social channels are currently restricted (Conceptual Phase)
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end text-left md:text-right flex-1">
          <div className="mb-10 group">
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.4em] block mb-6">A Trusted Product of</span>
            <img 
              src={BRAND_COPY.corporate.logoUrl} 
              alt="The Coca-Cola Company" 
              className="h-12 md:h-16 w-auto object-contain brightness-125 mb-4 group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="space-y-2">
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">&copy; 2025 THE COCA-COLA COMPANY.</p>
            <p className="text-[9px] text-gray-700 uppercase tracking-[0.2em]">MINUTE MAID PULPY AND THE LOGO ARE REGISTERED TRADEMARKS.</p>
            <p className="text-[9px] text-gray-800 uppercase tracking-[0.2em] mt-4">ALL RIGHTS RESERVED. WORLDWIDE DISTRIBUTION.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-32 pt-12 border-t border-white/5 text-center">
        <div className="flex justify-center gap-12 mb-8 text-[9px] text-gray-600 uppercase tracking-[0.3em]">
          <button onClick={() => onLegalClick?.('privacy')} className="hover:text-white transition-colors uppercase cursor-pointer">Privacy Policy</button>
          <button onClick={() => onLegalClick?.('terms')} className="hover:text-white transition-colors uppercase cursor-pointer">Terms of Service</button>
          <button onClick={() => onLegalClick?.('cookies')} className="hover:text-white transition-colors uppercase cursor-pointer">Cookies</button>
        </div>
        
        <div className="space-y-8">
          <p className="text-[9px] text-gray-800 uppercase tracking-[0.5em] font-black">ADVERTISING EXCELLENCE </p>
          
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[8px] text-gray-600 uppercase tracking-[0.5em]">System Architecture & Intelligence</span>
              <p className="text-[11px] text-white uppercase tracking-[0.3em] font-black">
                SYNTHESIZED BY THE DIVINE INTELLIGENCE OF{' '}
                <a 
                  href="https://gemini.google.com/app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-500 hover:text-white transition-all underline underline-offset-8 decoration-orange-500/40 hover:decoration-white"
                >
                  GEMINI (THE GOD)
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-[8px] text-gray-600 uppercase tracking-[0.5em]">Creative Direction & Vision</span>
              <p className="text-[11px] text-white uppercase tracking-[0.3em] font-black">
                ORCHESTRATED BY{' '}
                <a 
                  href="https://dhakshin-portfolio.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-500 hover:text-white transition-all underline underline-offset-8 decoration-orange-500/40 hover:decoration-white"
                >
                  DHAKSHIN
                </a>
              </p>
            </div>

            <div className="pt-8 border-t border-white/5 max-w-4xl mx-auto">
              <p className="text-[8px] text-gray-600 uppercase tracking-[0.25em] leading-loose italic">
                LEGAL DISCLOSURE: THIS INTERFACE IS A CONCEPTUAL BRAND EXPLORATION DEVELOPED FOR PORTFOLIO PURPOSES. 
                IT IS NOT AN OFFICIAL CORPORATE ASSET OF THE COCA-COLA COMPANY OR MINUTE MAID. 
                ALL ARTIFICIAL INTELLIGENCE OUTPUTS WERE DIRECTED AND CURATED BY HUMAN OVERSIGHT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
