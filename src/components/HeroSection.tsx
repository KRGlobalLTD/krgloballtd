import React from 'react';
import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';
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
          className="mb-8"
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

      </div>
    </section>
  );
}
