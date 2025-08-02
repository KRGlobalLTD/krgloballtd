import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  t: any;
  isRTL: boolean;
}

const orbitalButtons = [
  { key: 'boutique', url: 'https://laboutique.krglobal.com', angle: 0 },
  { key: 'services', url: 'https://services.krglobal.com', angle: 72 },
  { key: 'blog', url: 'https://blog.krglobal.com', angle: 144 },
  { key: 'equipe', url: 'https://equipe.krglobal.com', angle: 216 },
  { key: 'invest', url: 'https://invest.krglobal.com', angle: 288 },
];

const portfolioButtons = [
  { 
    key: 'karimPortfolio', 
    url: 'https://www.karimhammouche.com/', 
    position: 'left',
    className: 'button type1'
  },
  { 
    key: 'raphaelPortfolio', 
    url: 'https://rthportofolio.com/', 
    position: 'right',
    className: 'button type1'
  },
];
export function HeroSection({ t, isRTL }: HeroSectionProps) {
  const [centeredButton, setCenteredButton] = useState<string | null>(null);

  const handleButtonClick = (buttonKey: string, url: string) => {
    setCenteredButton(buttonKey);
    // Délai pour l'animation avant redirection
    setTimeout(() => {
      window.open(url, '_blank');
    }, 800);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
        </motion.div>

        {/* Interactive Planet with Orbital Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto mb-16"
          style={{ width: '400px', height: '400px' }}
        >
          {/* Boutons Portfolio - Gauche et Droite */}
          {portfolioButtons.map((button, index) => (
            <motion.button
              key={button.key}
              onClick={() => handleButtonClick(button.key, button.url)}
              className={`absolute top-1/2 -translate-y-1/2 ${
                button.position === 'left' ? '-left-32' : '-right-32'
              } ${button.className} bg-white/90 backdrop-blur-md border border-neutral-300 rounded-lg px-6 py-3 font-medium text-black hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg z-10`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: button.position === 'left' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
            >
              <span className="btn-txt text-sm">
                {t.hero.buttons[button.key as keyof typeof t.hero.buttons]}
              </span>
            </motion.button>
          ))}
          {/* Central Planet */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="w-40 h-40 mx-auto mt-32 bg-gradient-to-br from-neutral-800 to-black rounded-full shadow-2xl relative overflow-hidden"
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

          {/* Orbital Buttons */}
          {orbitalButtons.map((button, index) => (
            <motion.div
              key={button.key}
              className={`absolute transition-all duration-500 ${
                centeredButton === button.key 
                  ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 scale-110' 
                  : ''
              }`}
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
              }}
              animate={centeredButton === button.key ? {} : {
                rotate: button.angle + (index * 360) / orbitalButtons.length,
              }}
              transition={{
                duration: 20 + index * 5,
                repeat: centeredButton === button.key ? 0 : Infinity,
                ease: 'linear',
              }}
            >
              <motion.a
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleButtonClick(button.key, button.url);
                }}
                className={`group block w-32 h-12 -mt-6 -ml-16 bg-white/80 backdrop-blur-md border border-neutral-200 rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:bg-white transition-all duration-300 flex items-center justify-center text-sm font-medium text-black hover:text-neutral-700 ${
                  centeredButton === button.key ? 'bg-black text-white scale-125' : ''
                }`}
                style={{
                  transform: centeredButton === button.key 
                    ? 'translate(0, 0)' 
                    : `translate(${Math.cos((button.angle * Math.PI) / 180) * 150}px, ${Math.sin((button.angle * Math.PI) / 180) * 150}px)`,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={t.hero.buttons[button.key as keyof typeof t.hero.buttons]}
              >
                <span className="truncate px-2">
                  {t.hero.buttons[button.key as keyof typeof t.hero.buttons]}
                </span>
                <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Grid for Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:hidden"
        >
          {orbitalButtons.map((button, index) => (
            <motion.a
              key={button.key}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/80 backdrop-blur-md border border-neutral-200 rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center text-sm font-medium text-black hover:text-neutral-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <span className="text-center">
                {t.hero.buttons[button.key as keyof typeof t.hero.buttons]}
              </span>
              <ExternalLink size={12} className="ml-2 opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
          
          {/* Portfolio buttons for mobile */}
          {portfolioButtons.map((button, index) => (
            <motion.a
              key={button.key}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/80 backdrop-blur-md border border-neutral-200 rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center text-sm font-medium text-black hover:text-neutral-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <span className="text-center">
                {t.hero.buttons[button.key as keyof typeof t.hero.buttons]}
              </span>
              <ExternalLink size={12} className="ml-2 opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}