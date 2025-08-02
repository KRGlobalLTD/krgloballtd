import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  const { currentLanguage, changeLanguage, t, isRTL } = useLanguage();

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
        t={t}
      />
      
      <main>
        <HeroSection t={t} isRTL={isRTL} />
        <AboutSection t={t} isRTL={isRTL} />
        <ContactSection t={t} isRTL={isRTL} />
      </main>
      
      <Footer t={t} isRTL={isRTL} />
    </motion.div>
  );
}

export default App;