import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import LegalPage from './app/mentions-legales/page.tsx';
import BookPage from './app/book/page.tsx';
import './index.css';
import { setLang } from '@/i18n/adapter';

try {
  if (!localStorage.getItem('lang')) setLang('en');
} catch {
  /* ignore */
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
