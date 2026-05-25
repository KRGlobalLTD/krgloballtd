import { motion } from 'framer-motion';
import { Language, translations } from '../data/translations';

export default function CompanySection({ lang }: { lang: Language }) {
  const t = translations[lang];
  const label = lang === 'fr' ? 'À propos' : 'About';

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-neutral-100 bg-white">
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
            <p className="text-neutral-600 leading-relaxed text-base">
              {t.about.content}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">
                  {lang === 'fr' ? 'Fondateurs' : 'Founders'}
                </p>
                <p className="text-black font-medium">
                  <a href="https://www.karimhammouche.com/" target="_blank" rel="noreferrer" className="hover:underline">Karim Hammouche</a>
                  {' & '}
                  <a href="https://rthportofolio.com/" target="_blank" rel="noreferrer" className="hover:underline">Raphaël Theuillon</a>
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">
                  {lang === 'fr' ? 'Siège social' : 'Registered office'}
                </p>
                <p className="text-black">London, UK · No. 16517532</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
