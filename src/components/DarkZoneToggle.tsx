import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface DarkZoneToggleProps {
  label?: string;
}

// Minimal sun icon – only black and white strokes
const SunIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// Minimal moon icon
const MoonIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

/**
 * Toggle for the experimental Dark Zone mode.
 * SAFE-GUARD: independent component; avoids altering existing theming logic.
 */
export function DarkZoneToggle({ label = 'Dark Zone' }: DarkZoneToggleProps) {
  const [enabled, setEnabled] = React.useState(false);
  const reduceMotion = useReducedMotion();

  // Initialize from localStorage
  React.useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('dark-zone') : null;
    const isOn = stored === 'on';
    setEnabled(isOn);
    if (isOn) {
      document.body.classList.add('dark-zone');
    }
  }, []);

  // Apply class to body and persist
  React.useEffect(() => {
    if (enabled) {
      document.body.classList.add('dark-zone');
      localStorage.setItem('dark-zone', 'on');
    } else {
      document.body.classList.remove('dark-zone');
      localStorage.setItem('dark-zone', 'off');
    }
  }, [enabled]);

  const toggle = () => setEnabled((v) => !v);

  // Base + theme styles keep button tiny and monochrome
  const baseClasses =
    'ml-2 w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200 focus:outline-none';
  const themeClasses = enabled
    ? 'bg-black text-white border-white hover:bg-neutral-900'
    : 'bg-white text-black border-black hover:bg-neutral-100';

  return (
    <motion.button
      type="button"
      aria-pressed={enabled}
      aria-label={label}
      onClick={toggle}
      className={`${baseClasses} ${themeClasses} dz-glow`}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        key={enabled ? 'moon' : 'sun'}
        animate={{ rotate: enabled ? 180 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.4 }}
        className="block"
      >
        {enabled ? <MoonIcon /> : <SunIcon />}
      </motion.span>
    </motion.button>
  );
}

export default DarkZoneToggle;
