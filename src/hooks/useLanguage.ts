import { useState, useEffect } from 'react';
import { Language, translations } from '../data/translations';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');

  const t = translations[currentLanguage];
  
  const isRTL = false; // No RTL languages in the reduced set

  useEffect(() => {
    // Update document direction for RTL languages
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
    isRTL,
  };
}