import React from 'react';
import { SocialLinks } from './SocialLinks';
import SocialIcons from '@/components/SocialIcons';

export function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-start text-sm">
        <p>
          Contact :{' '}
          <a
            href="mailto:contact@krglobalsolutionsltd.com"
            className="underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 rounded"
            aria-label="Envoyer un e-mail à contact@krglobalsolutionsltd.com"
          >
            contact@krglobalsolutionsltd.com
          </a>
        </p>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-5">
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
