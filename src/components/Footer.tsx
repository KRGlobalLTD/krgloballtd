import React from 'react';
import { SocialLinks } from './SocialLinks';
import SocialIcons from '@/components/SocialIcons';

export function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start gap-6 text-sm">
        <p className="break-words">
          Contact :{' '}
          <a
            href="mailto:contact@krglobalsolutionsltd.com"
            className="underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 rounded"
            aria-label="Envoyer un e-mail à contact@krglobalsolutionsltd.com"
          >
            contact@krglobalsolutionsltd.com
          </a>
        </p>
        <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto">
          <div className="flex items-center justify-between sm:justify-end gap-5 w-full">
            <a
              href="/mentions-legales"
              className="underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 rounded"
            >
              Mentions légales
            </a>
            <SocialIcons />
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
