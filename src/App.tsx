import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HeroNew from './components/HeroNew';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
        t={t}
      />
      <main className="flex-1">
        <HeroNew lang={currentLanguage} />
        <ProjectsSection lang={currentLanguage} />
        <ContactSection lang={currentLanguage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
