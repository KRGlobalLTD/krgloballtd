import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import type { Language } from '../data/translations';

const content: Record<Language, { label: string; title: string; subtitle: string; calendly: string }> = {
  fr: {
    label: 'Contact',
    title: 'On est disponibles.',
    subtitle: 'Une question, un projet ? Écrivez-nous ou réservez un appel.',
    calendly: 'Réserver un appel (30 min)',
  },
  en: {
    label: 'Contact',
    title: "We're available.",
    subtitle: 'A question, a project? Write to us or book a call.',
    calendly: 'Book a call (30 min)',
  },
};

export default function ContactSection({ lang }: { lang: Language }) {
  const c = content[lang];
  const { openBooking } = useBooking();

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-t border-black/[0.06]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-400">
            {c.label}
          </p>
          <h2
            className="mt-5 font-bold tracking-tight text-black"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {c.title}
          </h2>
          <p className="mt-3 text-neutral-500 text-sm">{c.subtitle}</p>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <button
              onClick={openBooking}
              className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              {c.calendly}
            </button>
            <a
              href="https://wa.me/33743561304"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-black/15 text-black rounded-full px-7 py-3 text-sm font-medium hover:border-black/50 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:contact@krglobalsolutionsltd.com"
              className="inline-flex items-center justify-center gap-2 border border-black/15 text-black rounded-full px-7 py-3 text-sm font-medium hover:border-black/50 transition-colors"
            >
              contact@krglobalsolutionsltd.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
