import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../data/translations';

interface AboutSectionProps {
  t: Translation;
  isRTL: boolean;
}

export function AboutSection({ t, isRTL }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t.about.title}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-neutral-600 leading-relaxed">
              {t.about.content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}