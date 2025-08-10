import React from 'react';
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
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <BrandKR />
          </div>
          
          <div className="flex items-center gap-6">
            {/* Liens sociaux */}
            <div className="hidden lg:block">
              <SocialIcons />
            </div>

            {/* Sélecteur de langue */}
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              t={t}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
