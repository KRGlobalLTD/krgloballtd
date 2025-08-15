import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enBase from './i18n/en.json';
import frBase from './i18n/fr.json';

// Si tu as déjà des JSON complets, importe-les ici.
// À défaut, on fournit un jeu minimal de clés pour éviter les erreurs.
const en = {
  common: {
    brand: 'KR Global Solutions LTD',
    tagline: 'Digital solutions, e\u2011commerce & tech for tomorrow.',
    cta: 'Contact us',
  },
  ...enBase,
};
const fr = {
  common: {
    brand: 'KR Global Solutions LTD',
    tagline: 'Solutions digitales, e\u2011commerce & technologies pour demain.',
    cta: 'Nous contacter',
  },
  ...frBase,
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        fr: { translation: fr },
      },
      lng: 'en',           // tu peux changer en 'fr' si besoin
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      // react: { useSuspense: false }, // décommente si tu veux éviter Suspense
    })
    .catch((e) => {
      // Log doux pour ne pas casser le rendu en prod
      console.error('[i18n] init error:', e);
    });
}

export default i18n;
