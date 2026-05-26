import { useState, useEffect } from 'react';
import { Language, translations } from '../data/translations';

const STORAGE_KEY = 'kr_lang';

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'fr' || stored === 'en') return stored;
  } catch {}
  return 'fr';
}

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(getInitialLanguage);

  const t = translations[currentLanguage];
  const isRTL = false;

  useEffect(() => {
    document.documentElement.dir = 'ltr';
  }, []);

  const changeLanguage = (lang: Language) => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
    setCurrentLanguage(lang);
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
    isRTL,
  };
}