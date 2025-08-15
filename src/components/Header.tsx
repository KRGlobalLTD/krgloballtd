import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import SocialLinks from "@/components/SocialLinks";
import { Language, Translation } from '../data/translations';
import KRLogoKR from "@/components/KRLogoKR";
import { DarkZoneToggle } from './DarkZoneToggle';
import { Menu, X } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translation;
}

export function Header({ currentLanguage, onLanguageChange, t }: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-neutral-200 dz-card dz-border dz-fg">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <KRLogoKR
            intensity="max"
            hrefK="https://www.karimhammouche.com/"
            hrefR="https://rthportofolio.com/"
          />
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
            t={t}
          />
          {/* SAFE-GUARD: isolated toggle to avoid interfering with existing nav */}
          <DarkZoneToggle label={t.nav.darkZone} />
        </div>
        <div className="flex items-center justify-end flex-1 overflow-hidden gap-2">
          <CalendlyButton className="ml-4 hidden sm:inline-flex text-sm" />
          <SocialLinks variant="header" size={20} className="justify-end hidden md:flex" />
          <button
            className="md:hidden inline-flex items-center justify-center min-h-11 px-4 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-neutral-200 dz-border bg-white dz-card">
          <SocialLinks variant="header" size={20} className="flex-col items-start p-4 gap-2" />
        </nav>
      )}
    </header>
  );
}
