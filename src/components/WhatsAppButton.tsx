"use client";

import React from "react";

type Props = {
  phone?: string;
  message?: string;
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
  ariaLabel?: string;
};

export default function WhatsAppButton({
  phone = process.env.NEXT_PUBLIC_WAPP_PHONE || "33781579222",
  message = "Bonjour ! Je viens du site KR Global Solutions et j’aimerais en savoir plus.",
  showOnMobile = true,
  showOnDesktop = true,
  ariaLabel = "Contacter sur WhatsApp",
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const visibility =
    (showOnMobile ? "" : " hidden sm:inline") +
    (showOnDesktop ? "" : " sm:hidden");

  return (
    <div
      className={`fixed ${visibility} left-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-[9999] pointer-events-none`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="pointer-events-auto group inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-xl ring-1 ring-black/10 dark:ring-white/10 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl transition-transform duration-200 hover:scale-105"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 sm:w-9 sm:h-9 text-green-500 dark:text-green-400"
        >
          <path
            d="M19.11 17.52c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14s-.73.94-.89 1.13-.33.21-.61.07a7.69 7.69 0 0 1-2.27-1.4 8.5 8.5 0 0 1-1.57-1.95c-.16-.27 0-.41.12-.55.12-.12.26-.33.39-.5a1.8 1.8 0 0 0 .26-.48.5.5 0 0 0 0-.48c0-.14-.64-1.54-.88-2.12-.23-.56-.47-.49-.64-.49h-.55a1 1 0 0 0-.73.34A3 3 0 0 0 7 11.3a5.19 5.19 0 0 0 1.09 2.77 11.85 11.85 0 0 0 4.54 4.12 15.51 15.51 0 0 0 1.55.57 3.74 3.74 0 0 0 1.71.11 2.79 2.79 0 0 0 1.83-1.27 2.25 2.25 0 0 0 .16-1.25c-.06-.12-.22-.18-.37-.27Z"
            fill="currentColor"
          />
          <path
            d="M26.85 5.15A13.9 13.9 0 0 0 4.26 22.54L3 29l6.6-1.73A13.9 13.9 0 0 0 28.2 16a13.8 13.8 0 0 0-1.35-10.85Zm-1.88 16.56a11.39 11.39 0 0 1-9.21 3.11 11.45 11.45 0 0 1-4.89-1.48l-.35-.19-3.92 1 1-3.82-.2-.39a11.34 11.34 0 0 1 1.6-13.63 11.33 11.33 0 0 1 19 9.4 11.26 11.26 0 0 1-2.99 6.02Z"
            fill="currentColor"
          />
        </svg>
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 dark:bg-green-400 shadow group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}

