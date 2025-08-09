import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import LegalPage from './LegalPage.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    {window.location.pathname === '/legal' ? <LegalPage /> : <App />}
  </StrictMode>,
);
