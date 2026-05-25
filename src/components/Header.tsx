import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import SocialLinks from '@/components/SocialLinks';
import { Language, Translation } from '../data/translations';
import KRLogoKR from '@/components/KRLogoKR';
import { Menu, X } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translation;
}

export function Header({ currentLanguage, onLanguageChange, t }: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  const { openBooking } = useBooking();
  const { t: tI18n } = useTranslation();

  return (
    <header className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-neutral-100">
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
        </div>

        <div className="flex items-center justify-end flex-1 overflow-hidden gap-4">
          <SocialLinks variant="header" size={15} className="hidden lg:flex" />
          <button
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-black px-4 py-1.5 text-xs font-medium hover:bg-black hover:text-white transition-colors whitespace-nowrap"
            onClick={openBooking}
          >
            {tI18n('booking.buttonCall')}
          </button>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition-colors focus-visible:outline-none"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {open && (
        <nav className="md:hidden border-t border-neutral-100 bg-white">
          <div className="container mx-auto px-4 py-5 flex flex-col gap-5">
            <SocialLinks variant="header" size={16} className="flex-wrap" />
            <button
              className="self-start rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
              onClick={() => { setOpen(false); openBooking(); }}
            >
              {tI18n('booking.buttonCall')}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
