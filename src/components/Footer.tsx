import React from 'react';
import SocialLinks from '@/components/SocialLinks';

export function Footer() {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const prefix = pathname.startsWith('/en') ? '/en' : '';

  return (
    <footer id="site-footer" className="bg-black border-t border-white/[0.06] py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">

          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-700 mb-3">
              KR Global Solutions LTD
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              71–75 Shelton Street<br />
              Covent Garden, London<br />
              WC2H 9JQ, UK<br />
              No. 16517532
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-700 mb-3">Liens</p>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li>
                <a
                  href="mailto:contact@krglobalsolutionsltd.com"
                  className="hover:text-white transition-colors break-all"
                >
                  contact@krglobalsolutionsltd.com
                </a>
              </li>
              <li>
                <a
                  href={`${prefix}/mentions-legales`}
                  className="hover:text-white transition-colors"
                >
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-700 mb-3">
              Réseaux sociaux
            </p>
            <SocialLinks variant="footer" className="flex-col items-start gap-2.5" />
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[10px] text-neutral-700">
          <span>© KR Global Solutions LTD 2025 · London, UK</span>
          <span>SIC: 46190 · 47910 · 62012 · 62090</span>
        </div>

      </div>
    </footer>
  );
}
