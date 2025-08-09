import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm">
          Contact :{' '}
          <a
            href="mailto:contact@krglobalsolutionsltd.com"
            className="underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 rounded"
            aria-label="Envoyer un e-mail à contact@krglobalsolutionsltd.com"
          >
            contact@krglobalsolutionsltd.com
          </a>
        </p>
      </div>
    </footer>
  );
}
