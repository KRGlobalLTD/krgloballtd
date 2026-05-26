import { motion } from 'framer-motion';
import { Language, translations } from '../data/translations';

export default function CompanySection({ lang }: { lang: Language }) {
  const t = translations[lang];
  const label = lang === 'fr' ? 'À propos' : 'About';

  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-t border-black/[0.06]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-400 mb-5">
              {label}
            </p>
            <h2
              className="font-bold tracking-tight text-black leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}
            >
              {t.about.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-neutral-500 leading-relaxed text-base">
              {t.about.content}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
