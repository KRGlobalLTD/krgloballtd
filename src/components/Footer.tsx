import React from 'react';
import SocialLinks from '@/components/SocialLinks';

export function Footer() {
  return (
    <footer id="site-footer" className="bg-black text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start text-sm">
        <div className="flex flex-col gap-2 w-full min-w-0">
          <p className="break-words truncate">
            <a
              href="mailto:contact@krglobalsolutionsltd.com"
              className="block truncate break-all underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 rounded"
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
          <a
            href="/book"
            className="underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 rounded"
          >
            {typeof document !== 'undefined' && document.documentElement.lang?.startsWith('fr')
              ? 'Prendre rendez-vous'
              : 'Book a call'}
          </a>
        </div>
        <div className="flex flex-col sm:items-end gap-2 w-full min-w-0">
          <SocialLinks variant="footer" size={22} className="justify-center sm:justify-end" />
        </div>
      </div>
    </footer>
  );
}
