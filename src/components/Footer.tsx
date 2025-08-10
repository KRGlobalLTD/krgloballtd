import React from 'react';
import SocialLinks from '@/components/SocialLinks';

export function Footer() {
  return (
    <footer id="site-footer" className="bg-black text-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start gap-6 text-sm">
        <div className="flex flex-col gap-2 w-full sm:w-auto">
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
          <a
            href="/mentions-legales"
            className="underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 rounded"
          >
            Mentions légales
          </a>
        </div>
        <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto">
          <SocialLinks variant="footer" size={22} className="justify-center sm:justify-end" />
        </div>
      </div>
    </footer>
  );
}
