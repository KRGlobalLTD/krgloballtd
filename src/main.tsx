import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import LegalPage from './app/mentions-legales/page.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    {window.location.pathname === '/mentions-legales' ? <LegalPage /> : <App />}
  </StrictMode>,
);
