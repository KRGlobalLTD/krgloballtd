import React from 'react';
import { SocialLinks } from './SocialLinks';

interface FooterProps {
  t: any;
  isRTL: boolean;
}

export function Footer({ t, isRTL }: FooterProps) {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="text-sm text-neutral-300">
            {t.footer.legal}
          </div>
          
          {/* Liens sociaux dans le footer */}
          <div className="flex items-center gap-4">
            <SocialLinks t={t} showLabels={false} />
          </div>
          
          <div className="text-sm">
            {t.footer.copyright}
          </div>
        </div>
        
        {/* Mentions légales UK */}
        <div className="border-t border-neutral-800 pt-6">
          <div className="text-xs text-neutral-400 text-center leading-relaxed">
            {t.footer.legalNotice.split('\n').map((line, index) => (
              <div key={index} className="mb-1">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}