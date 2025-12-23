
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductHighlight } from './components/ProductHighlight';
import { Products } from './components/Products';
import { BrandStory } from './components/BrandStory';
import { CampaignMoment } from './components/CampaignMoment';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { CookieConsent } from './components/CookieConsent';
import { LegalModal } from './components/LegalModal';
import { ScrollPath } from './components/ScrollPath';
import { SoundInitializer } from './components/SoundManager';
import { LEGAL_TEXT } from './constants';

function App() {
  const [activeModal, setActiveModal] = useState<null | 'privacy' | 'terms' | 'cookies'>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Cinematic Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9998] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <SoundInitializer />
      <CustomCursor />
      <CookieConsent />
      <ScrollPath />
      
      <LegalModal 
        isOpen={activeModal !== null} 
        onClose={() => setActiveModal(null)}
        title={activeModal ? LEGAL_TEXT[activeModal].title : ''}
        content={activeModal ? LEGAL_TEXT[activeModal].content : ''}
      />

      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <ProductHighlight />
        <Products />
        <BrandStory />
        <CampaignMoment />
      </main>
      <Footer onLegalClick={setActiveModal} />
    </div>
  );
}

export default App;
