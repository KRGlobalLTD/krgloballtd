import { useState, useEffect } from 'react';
import { Language, translations } from '../data/translations';
import { getLang, setLang } from '@/i18n/adapter';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    (getLang().startsWith('en') ? 'en' : 'fr') as Language,
  );

  const t = translations[currentLanguage];
  
  const isRTL = false; // No RTL languages in the reduced set

  useEffect(() => {
    // Update document direction for RTL languages
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    setLang(lang);
  };

  useEffect(() => {
    setCurrentLanguage((getLang().startsWith('en') ? 'en' : 'fr') as Language);
  }, []);

  return {
    currentLanguage,
    changeLanguage,
    t,
    isRTL,
  };
}