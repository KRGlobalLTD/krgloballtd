import React from 'react';
import { motion } from 'framer-motion';
import { LanguageSelector } from './LanguageSelector';
import { SocialLinks } from './SocialLinks';
import { Language } from '../data/translations';
import BrandKR from '@/components/BrandKR';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
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
            {/* Logo KR animé */}
            <motion.a
              href="https://fiverr.com/karimhammouche"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="text-2xl font-bold tracking-widest text-black"
                animate={{ 
                  scale: [1, 1.1, 1], 
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                KR
              </motion.span>
            </motion.a>

            {/* Liens sociaux */}
            <div className="hidden lg:block">
              <SocialLinks />
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