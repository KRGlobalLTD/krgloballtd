import React, { useEffect, useState } from 'react';
import { LanguageSelector } from './LanguageSelector';
import SocialIcons from "@/components/SocialIcons";
import { Language, Translation } from '../data/translations';
import BrandKR from '@/components/BrandKR';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translation;
}

export function Header({ currentLanguage, onLanguageChange, t }: HeaderProps) {
  const [open, setOpen] = useState(false);

  // SAFE-GUARD: prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <BrandKR />
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <SocialIcons />
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              t={t}
            />
          </nav>

          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.menu.close : t.nav.menu.open}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
            <SocialIcons />
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              t={t}
            />
            <button
              onClick={() => setOpen(false)}
              className="w-full min-h-[44px] rounded-lg border border-neutral-200"
            >
              {t.nav.menu.close}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
