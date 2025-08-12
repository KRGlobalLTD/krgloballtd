"use client";

import React from "react";

type Props = {
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
  ariaLabel?: string;
};

export default function WhatsAppButton({
  showOnMobile = true,
  showOnDesktop = true,
  ariaLabel = "Contact WhatsApp",
}: Props) {
  const href = (import.meta.env as Record<string, string>).VITE_WHATSAPP_URL || "https://wa.me/33743561304";

  const visibility =
    (showOnMobile ? "" : " hidden sm:inline") +
    (showOnDesktop ? "" : " sm:hidden");

  return (
    <div
      className={`fixed ${visibility} left-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 pointer-events-none`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="pointer-events-auto relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 text-white shadow-lg ring-2 ring-white flex items-center justify-center transition hover:shadow-2xl hover:scale-105 active:scale-95"
      >
        {/* Icône WhatsApp (blanc via currentColor) */}
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.38c-.28-.14-1.64-.8-1.9-.89-.26-.1-.45-.14-.64.14-.19.28-.73.89-.9 1.07-.17.19-.33.21-.61.07-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.39-1.65-1.56-1.93-.17-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.87-2.11-.23-.55-.47-.47-.64-.47h-.55c-.19 0-.49.07-.75.35-.26.28-1 1-1 2.43 0 1.42 1.02 2.8 1.16 2.99.14.19 2.01 3.16 4.86 4.43.68.29 1.21.46 1.62.59.68.22 1.31.19 1.8.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.12-.26-.19-.54-.33zM16.02 4C9.94 4 5 8.93 5 15.01c0 1.94.5 3.76 1.37 5.35L5 28l7.82-2.06c1.55.85 3.33 1.35 5.2 1.35 6.08 0 11.02-4.94 11.02-11.02C29.04 8.93 24.1 4 18.02 4h-1.99zM18 25.11c-1.67 0-3.23-.49-4.53-1.33l-.33-.21-4.64 1.23 1.24-4.52-.22-.35A8.9 8.9 0 0 1 7.9 15c0-4.47 3.63-8.1 8.1-8.1 4.47 0 8.1 3.63 8.1 8.1 0 4.48-3.63 8.11-8.1 8.11z" />
        </svg>
      </a>
    </div>
  );
}
