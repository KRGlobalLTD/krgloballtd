import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { attachCalendlyEnhancer } from './bookingEnhancer';

// IMPORTANT : charger l'initialisation i18n AVANT tout hook/useTranslation
import './i18n';

// Optionnel : I18nextProvider au cas où tu préfères expliciter le provider.
// -> Si tu veux l'activer, décommente les 3 lignes correspondantes.
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('#root not found in index.html');
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* 
      // Si tu veux forcer le provider explicite :
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
      */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

requestAnimationFrame(() => attachCalendlyEnhancer());
