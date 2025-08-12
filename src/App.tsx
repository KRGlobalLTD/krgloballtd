import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import CardsSection from './components/CardsSection';
import FAQSection from '@/components/FAQSection';

function App() {
  return (
    <motion.div
      className="min-h-screen bg-white dz-bg dz-fg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <HeroSection />
        <CardsSection />
        <FAQSection />
      </main>
    </motion.div>
  );
}

export default App;
