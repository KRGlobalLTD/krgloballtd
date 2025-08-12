import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../data/translations';
const AboutOrbLinks = React.lazy(() => import('@/components/AboutOrbLinks'));

interface AboutSectionProps {
  t: Translation;
  isRTL: boolean;
}

export function AboutSection({ t, isRTL }: AboutSectionProps) {
  return (
    <section id="about" className="py-10 md:py-20 mb-32 bg-white dz-bg dz-fg scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(1.3rem,3.5vw,1.875rem)] font-bold text-black mb-6 break-words dz-fg">
              {t.about.title}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[clamp(0.95rem,2.6vw,1.05rem)] leading-relaxed break-words hyphens-auto text-neutral-600 dz-fg">
              {t.about.content}
            </p>
          </motion.div>
        </div>
        <Suspense fallback={null}>
          <AboutOrbLinks t={t} />
        </Suspense>
      </div>
    </section>
  );
}