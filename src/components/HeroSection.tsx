import React from 'react';
import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';
import InfiniteHeadline from '@/components/InfiniteHeadline';
import { Translation } from '../data/translations';
import HeroVideoCompat from '@/components/HeroVideoCompat';
import { useBooking } from '@/context/BookingContext';
import { useTranslation } from 'react-i18next';

  interface HeroSectionProps {
    t: Translation;
  }

  export function HeroSection({ t }: HeroSectionProps) {
    const { openBooking } = useBooking();
    const { t: tI18n } = useTranslation();
    return (
    <section className="flex items-center justify-center py-10 sm:py-20 bg-gradient-to-br from-white to-neutral-50 dz-bg dz-fg md:min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <InfiniteHeadline />
          <p className="mt-6 text-[clamp(0.95rem,2.6vw,1.05rem)] leading-relaxed text-neutral-600 max-w-3xl mx-auto break-words hyphens-auto">
            {t.hero.subtitle}
          </p>

          {/* --- Video placed directly under the subtitle --- */}
          <div className="mt-6 md:mt-8">
            <HeroVideoCompat />
          </div>
            <div className="mt-6">
              <button className="btn-primary" onClick={openBooking}>
                {tI18n("booking.button30")}
              </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
