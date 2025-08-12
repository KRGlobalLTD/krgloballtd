import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import PricingSection from '@/sections/Pricing';
import CategoriesGrid from '@/components/Pricing/CategoriesGrid';
import { ENABLE_DZ_PARTICLES, SHOW_PRICING } from './featureFlags';

const DarkZoneParticles = React.lazy(() => import('./components/DarkZoneParticles'));
// FAQ
const FAQAccordion = React.lazy(() => import('@/components/faq/FAQAccordion'));

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
        {SHOW_PRICING && <PricingSection />}
        <AboutSection t={t} isRTL={isRTL} />
        {SHOW_PRICING && (
          <>
            <CategoriesGrid />
            {/* FAQ */}
            <Suspense fallback={null}>
              <FAQAccordion locale="fr" />
            </Suspense>
          </>
        )}
      </main>

      <Footer />
      {ENABLE_DZ_PARTICLES && showParticles && (
        <Suspense fallback={null}>
          <DarkZoneParticles />
        </Suspense>
      )}
    </motion.div>
  );
}

export default App;
