import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../data/translations';

const FloatingShape = lazy(() => import('./three/FloatingShape'));

const content: Record<Language, { tagline: string; company: string; cta: string }> = {
  fr: {
    tagline: 'Solutions digitales & IA pour les entreprises modernes.',
    company: 'KR Global Solutions LTD · Londres, UK',
    cta: 'Voir nos projets',
  },
  en: {
    tagline: 'Digital solutions & AI for modern businesses.',
    company: 'KR Global Solutions LTD · London, UK',
    cta: 'See our projects',
  },
};

export default function HeroNew({ lang }: { lang: Language }) {
  const c = content[lang];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 w-full py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <h1
              className="font-bold tracking-tight leading-[0.92]"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
            >
              KR<br />Global<br />LTD
            </h1>

            <p className="mt-6 text-neutral-500 leading-relaxed max-w-xs" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.1rem)' }}>
              {c.tagline}
            </p>

            <p className="mt-3 text-xs text-neutral-400 tracking-wide">
              {c.company}
            </p>

            <a
              href="#projects"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-0.5 hover:opacity-40 transition-opacity"
            >
              {c.cta}
              <span aria-hidden>↓</span>
            </a>
          </motion.div>

          {/* 3D Canvas */}
          <motion.div
            className="h-64 sm:h-80 md:h-[520px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
          >
            <Suspense fallback={null}>
              <FloatingShape />
            </Suspense>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
