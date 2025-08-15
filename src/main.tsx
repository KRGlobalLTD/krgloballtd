import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import LegalPage from './app/mentions-legales/page.tsx';
import BookPage from './app/book/page.tsx';
import './index.css';
import { attachCalendlyEnhancer } from './bookingEnhancer';

interface CalendlyWindow extends Window {
  __calendlyEnhancerLoaded?: boolean;
}

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    {window.location.pathname === '/mentions-legales'
      ? <LegalPage />
      : window.location.pathname === '/book'
        ? <BookPage />
        : <App />}
  </StrictMode>,
);

const w = window as CalendlyWindow;
if (!w.__calendlyEnhancerLoaded) {
  w.__calendlyEnhancerLoaded = true;
  // Lance une seule fois
  requestAnimationFrame(() => attachCalendlyEnhancer());
}
