import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../data/translations';

const FloatingShape = lazy(() => import('./three/FloatingShape'));

const content: Record<Language, { label: string; tagline: string; cta: string }> = {
  fr: {
    label: 'Solutions Digitales & IA',
    tagline: 'Nous concevons des produits digitaux et des systèmes IA pour les entreprises modernes.',
    cta: 'Découvrir',
  },
  en: {
    label: 'Digital Solutions & AI',
    tagline: 'We design digital products and AI systems for modern businesses.',
    cta: 'Explore',
  },
};

export default function HeroNew({ lang }: { lang: Language }) {
  const c = content[lang];

  return (
    <section className="min-h-screen bg-black flex flex-col relative overflow-hidden">

      {/* Top ambient label */}
      <motion.div
        className="absolute top-8 left-0 right-0 flex justify-between items-center px-6 sm:px-10 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-700">
          KR Global Solutions LTD
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-700 hidden sm:block">
          London · UK · Est. 2025
        </span>
      </motion.div>

      {/* Center: stacked title + cube + tagline */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">

        {/* Title above cube */}
        <motion.h1
          className="text-white font-bold tracking-[0.04em] leading-none text-center mb-10 sm:mb-14"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          KR Global LTD
        </motion.h1>

        {/* The cube — main visual */}
        <motion.div
          className="w-full max-w-xl"
          style={{ height: 'clamp(300px, 52vh, 520px)' }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.3, ease: 'easeOut' }}
        >
          <Suspense fallback={null}>
            <FloatingShape />
          </Suspense>
        </motion.div>

        {/* Tagline below cube */}
        <motion.p
          className="mt-10 sm:mt-14 text-neutral-600 text-sm text-center max-w-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {c.tagline}
        </motion.p>

      </div>

      {/* Scroll hint */}
      <motion.div
        className="flex justify-center pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <a
          href="#about"
          className="text-[10px] uppercase tracking-[0.3em] text-neutral-700 hover:text-white transition-colors flex items-center gap-3"
        >
          <span className="w-8 h-px bg-neutral-800 inline-block" />
          {c.cta}
          <span className="w-8 h-px bg-neutral-800 inline-block" />
        </a>
      </motion.div>

    </section>
  );
}
