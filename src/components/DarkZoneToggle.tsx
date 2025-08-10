import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface DarkZoneToggleProps {
  label?: string;
}

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

  return (
    <motion.button
      type="button"
      aria-pressed={enabled}
      aria-label={label}
      onClick={toggle}
      className="ml-2 rounded-full dz-card dz-fg dz-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      style={{
        width: 44,
        height: 44,
        backgroundColor: '#fff',
        color: '#000',
        border: '1px solid #e5e5e5',
      }}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        animate={{ rotate: enabled ? 45 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.2 }}
      >
        {/* SAFE-GUARD: minimalistic circle icon to match N&B requirement */}
        <circle cx="12" cy="12" r="9" />
      </motion.svg>
    </motion.button>
  );
}

export default DarkZoneToggle;
