"use client";
import { useEffect, useRef } from 'react';

export default function WhatsAppButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      const btn = buttonRef.current;
      if (!btn) return;

      if (window.innerWidth >= 1024) {
        const footer = document.getElementById('site-footer');
        const footerRect = footer?.getBoundingClientRect();
        const baseBottom = 16; // Tailwind bottom-4
        let bottom = baseBottom;

        if (footerRect) {
          const overlap = window.innerHeight - footerRect.top;
          if (overlap > 0) {
            bottom = overlap + baseBottom;
          }
        }

        btn.style.bottom = `${bottom}px`;
      } else {
        btn.style.bottom = '';
      }
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href="https://wa.me/message/LWWQOYH6PZN5M1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Business"
      className="fixed left-4 bottom-4 z-50 rounded-full shadow-lg px-4 py-3 bg-black text-white hover:opacity-90 transition"
    >
      WhatsApp
    </a>
  );
}

