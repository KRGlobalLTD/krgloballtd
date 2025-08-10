import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../data/translations';

interface AboutSectionProps {
  t: Translation;
  isRTL: boolean;
}

export function AboutSection({ t, isRTL }: AboutSectionProps) {
  return (
    <section id="about" className="py-10 md:py-20 bg-white dz-bg dz-fg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fs-xl md:text-4xl font-bold text-black mb-6 break-words dz-fg">
              {t.about.title}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="fs-base text-neutral-600 leading-relaxed break-words dz-fg">
              {t.about.content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}