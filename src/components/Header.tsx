import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import SocialLinks from "@/components/SocialLinks";
import { Language, Translation } from '../data/translations';
import KRLogo from '@/components/KRLogo';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translation;
}

export function Header({ currentLanguage, onLanguageChange, t }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <KRLogo t={t} />
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
            t={t}
          />
        </div>
        <div className="flex items-center justify-end flex-1 overflow-hidden">
          <SocialLinks variant="header" size={20} className="justify-end" />
        </div>
      </div>
    </header>
  );
}
