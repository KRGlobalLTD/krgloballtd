import React from 'react';
import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';
import OrbitMenuDynamic from '@/components/OrbitMenuDynamic';
import InfiniteHeadline from '@/components/InfiniteHeadline';
import { Translation } from '../data/translations';
import HeroVideoCompat from '@/components/HeroVideoCompat';

interface HeroSectionProps {
  t: Translation;
}

// const orbitalButtons = [
//   { key: 'blog', url: 'https://blog.krglobal.com' },
//   { key: 'boutique', url: 'https://laboutique.krglobal.com' },
//   { key: 'equipe', url: 'https://equipe.krglobal.com' },
//   { key: 'services', url: 'https://services.krglobal.com' },
//   { key: 'invest', url: 'https://invest.krglobal.com' },
// ];
// const radius = 120;
// const attractionThreshold = 160; // distance in px for attraction effect

export function HeroSection({ t }: HeroSectionProps) {
  // Track pointer proximity to center for attraction effect
  // const containerRef = useRef<HTMLDivElement>(null);
  // const [proximity, setProximity] = useState(0);

  // const handlePointer = (x: number, y: number) => {
  //   const rect = containerRef.current?.getBoundingClientRect();
  //   if (!rect) return;
  //   const dx = x - (rect.left + rect.width / 2);
  //   const dy = y - (rect.top + rect.height / 2);
  //   const distance = Math.sqrt(dx * dx + dy * dy);
  //   const p = Math.max(0, 1 - distance / attractionThreshold);
  //   setProximity(p);
  // };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   handlePointer(e.clientX, e.clientY);
  // };

  // const handleTouchMove = (e: React.TouchEvent) => {
  //   const touch = e.touches[0];
  //   handlePointer(touch.clientX, touch.clientY);
  // };

  // const currentRadius = radius - 20 * proximity;

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
        </motion.div>

        {/* Interactive Planet with Orbital Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto mb-16 w-full max-w-[18rem] aspect-square sm:max-w-[20rem] mt-14 md:mt-20 lg:mt-24"
        >
          {/* <div className="absolute inset-0 animate-orbit will-change-transform">
            {orbitalButtons.map((button, index) => {
              const angle = (index / orbitalButtons.length) * 360;
              return (
                <motion.a
                  key={button.key}
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${currentRadius}px) rotate(-${angle}deg)`,
                    transition: 'transform 0.3s ease-out',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, transition: { type: 'spring', stiffness: 500, damping: 20 } }}
                >
                  <span className="relative block w-32 h-12 -mt-6 -ml-16 bg-white/80 backdrop-blur-md border border-neutral-200 rounded-full shadow-md flex items-center justify-center text-sm font-medium text-black overflow-hidden before:absolute before:inset-0 before:rounded-full before:ring-2 before:ring-white/60 before:opacity-0 before:scale-100 group-hover:before:opacity-100 group-hover:before:scale-110 group-focus:before:opacity-100 group-focus:before:scale-110 group-active:before:opacity-100 group-active:before:scale-110 before:transition-all">
                    <span className="truncate pl-6 pr-2">
                      {t.hero.buttons[button.key as keyof typeof t.hero.buttons]}
                    </span>
                    <ExternalLink size={12} className="ml-1 opacity-60 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity" />
                    <span className="pointer-events-none absolute left-2 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100 group-active:translate-x-0 group-active:opacity-100 transition-all">→</span>
                  </span>
                  <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 text-xs text-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 group-active:opacity-100 group-active:translate-y-0 translate-y-1 transition-all">Voir plus</span>
                </motion.a>
              );
            })}
          </div> */}
          {/* Central Planet */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="w-40 h-40 bg-gradient-to-br from-neutral-800 to-black rounded-full shadow-2xl relative overflow-hidden"
            >
              {/* Pulsing outline */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating particles */}
              <div className="absolute inset-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className={`absolute w-1 h-1 rounded-full ${i % 2 ? 'bg-white' : 'bg-black'}`}
                    style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                    animate={{ y: ['0%', '-20%', '0%'], opacity: [1, 0, 1] }}
                    transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </div>

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

          <OrbitMenuDynamic
            className="absolute inset-0 z-10"
            items={[
              { label: t.hero.buttons.services, href: 'https://services.krglobal.com', external: true },
              { label: t.hero.buttons.invest, href: 'https://invest.krglobal.com', external: true },
              { label: t.hero.buttons.blog, href: 'https://blog.krglobal.com', external: true },
              { label: t.hero.buttons.boutique, href: 'https://laboutique.krglobal.com', external: true },
              { label: t.hero.buttons.equipe, href: 'https://equipe.krglobal.com', external: true },
            ]}
          />
        </motion.div>

      </div>
    </section>
  );
}