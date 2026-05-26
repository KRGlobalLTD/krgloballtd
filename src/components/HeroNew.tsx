import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import InfiniteHeadline from './InfiniteHeadline';
import type { Language } from '../data/translations';

const content: Record<Language, {
  label: string;
  titleWords: string[];
  tagline: string;
  ctaBook: string;
  ctaExplore: string;
}> = {
  fr: {
    label: 'Londres · Royaume-Uni · Est. 2025',
    titleWords: ['KR', 'Global', 'Solutions'],
    tagline: 'Nous concevons des produits digitaux et des systèmes IA pour les entreprises modernes.',
    ctaBook: 'Réserver un appel',
    ctaExplore: 'Découvrir',
  },
  en: {
    label: 'London · United Kingdom · Est. 2025',
    titleWords: ['KR', 'Global', 'Solutions'],
    tagline: 'We design digital products and AI systems for modern businesses.',
    ctaBook: 'Book a call',
    ctaExplore: 'Explore',
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 48, skewY: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { delay: 0.1 + i * 0.14, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroNew({ lang }: { lang: Language }) {
  const c = content[lang];
  const { openBooking } = useBooking();

  return (
    <div className="bg-white">
      <section className="min-h-screen bg-white flex flex-col relative overflow-hidden">

        {/* Top ambient label */}
        <motion.div
          className="absolute top-8 left-0 right-0 flex justify-between items-center px-6 sm:px-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            KR Global Solutions LTD
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 hidden sm:block">
            {c.label}
          </span>
        </motion.div>

        {/* Main hero content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-10 py-24 text-center">

          {/* Animated title */}
          <h1
            className="font-bold tracking-tight leading-[0.92] text-black overflow-hidden"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
          >
            {c.titleWords.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.22em] last:mr-0"
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* LTD sub-label */}
          <motion.p
            className="mt-4 text-[11px] uppercase tracking-[0.35em] text-neutral-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
          >
            Limited · Company No. 16517532
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="mt-8 text-base sm:text-lg text-neutral-500 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
          >
            {c.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <button
              onClick={openBooking}
              className="rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              {c.ctaBook}
            </button>
            <a
              href="#about"
              className="rounded-full border border-black/20 text-black px-8 py-3 text-sm font-medium hover:border-black/60 transition-colors"
            >
              {c.ctaExplore}
            </a>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          className="flex justify-center pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <a
            href="#about"
            className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 hover:text-black transition-colors flex items-center gap-3"
          >
            <span className="w-8 h-px bg-neutral-300 inline-block" />
            <span>↓</span>
            <span className="w-8 h-px bg-neutral-300 inline-block" />
          </a>
        </motion.div>

      </section>

      {/* Marquee strip — full width, between hero and next section */}
      <InfiniteHeadline speed={28} switchEvery={4500} />
    </div>
  );
}
