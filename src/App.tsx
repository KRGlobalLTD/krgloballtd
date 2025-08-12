import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import PricingSection from '@/components/pricing/PricingSection';
import QuizPack from '@/components/pricing/QuizPack';
import RotatingLinks from '@/components/RotatingLinks';
import FAQSection from '@/components/FAQSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ENABLE_DZ_PARTICLES } from '@/featureFlags';

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
        <PricingSection />
        <QuizPack />
        <RotatingLinks />
        <FAQSection />
        <AboutSection t={t} isRTL={isRTL} />
      </main>

      <Footer />
      {ENABLE_DZ_PARTICLES && showParticles && (
        <React.Suspense fallback={null}>
          <DarkZoneParticles />
        </React.Suspense>
      )}
    </motion.div>
  );
}

export default App;
