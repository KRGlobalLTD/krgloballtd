import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HeroNew from './components/HeroNew';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import CompanySection from './components/CompanySection';
import LegalPage from './app/mentions-legales/page';

const FAQAccordion = lazy(() => import('@/components/faq/FAQAccordion'));

function MainPage() {
  const { currentLanguage, t } = useLanguage();
  return (
    <>
      <HeroNew lang={currentLanguage} />
      <CompanySection lang={currentLanguage} />
      <ProjectsSection lang={currentLanguage} />
      <Suspense fallback={null}>
        <section id="faq" className="py-24 sm:py-32 border-t border-neutral-100 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-400 mb-12">
              {currentLanguage === 'fr' ? 'Questions fréquentes' : 'FAQ'}
            </p>
            <FAQAccordion locale={currentLanguage} />
          </div>
        </section>
      </Suspense>
      <ContactSection lang={currentLanguage} />
    </>
  );
}

function App() {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
        t={t}
      />
      <main className="flex-1">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="mentions-legales" element={<LegalPage />} />
          <Route path="en/mentions-legales" element={<LegalPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
