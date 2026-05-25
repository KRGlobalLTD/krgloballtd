import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../data/translations';

const FloatingShape = lazy(() => import('./three/FloatingShape'));

const content: Record<Language, { tagline: string; company: string; cta: string }> = {
  fr: {
    tagline: 'Solutions digitales & IA pour les entreprises modernes.',
    company: 'KR Global Solutions LTD · Londres, UK',
    cta: 'Découvrir nos projets',
  },
  en: {
    tagline: 'Digital solutions & AI for modern businesses.',
    company: 'KR Global Solutions LTD · London, UK',
    cta: 'Explore our projects',
  },
};

export default function HeroNew({ lang }: { lang: Language }) {
  const c = content[lang];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 w-full py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <h1
              className="font-bold tracking-tight leading-[0.90] text-black"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
            >
              KR<br />Global<br />LTD
            </h1>

            <p
              className="mt-7 text-neutral-500 leading-relaxed max-w-[18rem]"
              style={{ fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)' }}
            >
              {c.tagline}
            </p>

            <p className="mt-2 text-[11px] text-neutral-400 tracking-widest uppercase">
              {c.company}
            </p>

            <a
              href="#projects"
              className="mt-10 inline-flex items-center gap-2 text-sm text-black font-medium border-b border-black/20 pb-px hover:border-black transition-colors"
            >
              {c.cta}
              <span aria-hidden>↓</span>
            </a>
          </motion.div>

          <motion.div
            className="h-72 sm:h-[420px] md:h-[640px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.25 }}
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
