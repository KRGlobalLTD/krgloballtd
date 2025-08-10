import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import InfiniteHeadline from '@/components/InfiniteHeadline';
import { Translation } from '../data/translations';
import HeroVideoURL from '@/components/HeroVideoURL';

interface HeroSectionProps {
  t: Translation;
}

const orbitalButtons = [
  { key: 'blog', url: 'https://blog.krglobal.com' },
  { key: 'boutique', url: 'https://laboutique.krglobal.com' },
  { key: 'equipe', url: 'https://equipe.krglobal.com' },
  { key: 'services', url: 'https://services.krglobal.com' },
  { key: 'invest', url: 'https://invest.krglobal.com' },
];
const radius = 120;

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-10 sm:py-20 bg-gradient-to-br from-white to-neutral-50 dz-bg dz-fg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <InfiniteHeadline />
          <p className="mt-6 fs-base md:text-xl text-neutral-600 max-w-3xl mx-auto break-words">
            {t.hero.subtitle}
          </p>

          {/* --- Video placed directly under the subtitle --- */}
          <div className="mt-6 md:mt-8">
            <HeroVideoURL />
          </div>
        </motion.div>

        {/* Interactive Planet with Orbital Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto mb-16 w-72 h-72 sm:w-80 sm:h-80 mt-14 md:mt-20 lg:mt-24"
        >
          <div className="absolute inset-0 animate-orbit will-change-transform">
            {orbitalButtons.map((button, index) => {
              const angle = (index / orbitalButtons.length) * 360;
              return (
                <a
                  key={button.key}
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <span className="group block w-32 h-12 -mt-6 -ml-16 bg-white/80 backdrop-blur-md border border-neutral-200 rounded-full shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center text-sm font-medium text-black">
                    <span className="truncate px-2">
                      {t.hero.buttons[button.key as keyof typeof t.hero.buttons]}
                    </span>
                    <ExternalLink size={12} className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              );
            })}
          </div>

          {/* Central Planet */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="w-40 h-40 bg-gradient-to-br from-neutral-800 to-black rounded-full shadow-2xl relative overflow-hidden"
            >
              {/* Planet surface details */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-8 h-8 bg-white rounded-full absolute top-6 left-8"></div>
                <div className="w-4 h-4 bg-white rounded-full absolute bottom-12 right-6"></div>
                <div className="w-6 h-6 bg-white rounded-full absolute top-16 right-12"></div>
              </div>

              {/* Stylized Hand Silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M12 2C13.1 2 14 2.9 14 4V8L15.5 8C16.3 8 17 8.7 17 9.5S16.3 11 15.5 11L14 11V13L15.5 13C16.3 13 17 13.7 17 14.5S16.3 16 15.5 16L14 16V18C14 19.1 13.1 20 12 20S10 19.1 10 18V16L8.5 16C7.7 16 7 15.3 7 14.5S7.7 13 8.5 13L10 13V11L8.5 11C7.7 11 7 10.3 7 9.5S7.7 8 8.5 8L10 8V4C10 2.9 10.9 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}