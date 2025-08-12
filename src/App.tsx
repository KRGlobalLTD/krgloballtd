import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CategoriesGrid from '@/components/Pricing/CategoriesGrid';
import FAQAccordion from '@/components/FAQ/FAQAccordion';
import { ENABLE_DZ_PARTICLES, SHOW_PRICING } from '@/featureFlags';

const DarkZoneParticles = React.lazy(() => import('./components/DarkZoneParticles'));

function App() {
  const { currentLanguage, changeLanguage, t, isRTL } = useLanguage();
  const [showParticles, setShowParticles] = React.useState(false);

  React.useEffect(() => {
    if (!ENABLE_DZ_PARTICLES) return;
    const body = document.body;
    const update = () => setShowParticles(body.classList.contains('dark-zone'));
    const observer = new MutationObserver(update);
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });
    update();
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white dz-bg dz-fg"
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
        <HeroSection t={t} />
        <AboutSection t={t} isRTL={isRTL} />
        {SHOW_PRICING && (
          <>
            <CategoriesGrid />
            <FAQAccordion />
          </>
        )}
        {SHOW_PRICING ? <div data-test="pricing-on" /> : <div data-test="pricing-off" />}
      </main>

      <Footer />
      <WhatsAppButton />
      {ENABLE_DZ_PARTICLES && showParticles && (
        <React.Suspense fallback={null}>
          <DarkZoneParticles />
        </React.Suspense>
      )}
    </motion.div>
  );
}

export default App;
