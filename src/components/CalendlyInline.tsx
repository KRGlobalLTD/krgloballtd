"use client";
import { useEffect, useRef } from "react";

type Props = { url?: string; minHeight?: number; className?: string };

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

export default function CalendlyInline({ url, minHeight = 740, className }: Props) {
  const loadedRef = useRef(false);

  const resolvedUrl =
    url ||
    (typeof document !== "undefined" &&
      (document.documentElement.lang?.toLowerCase().startsWith("en")
        ? process.env.NEXT_PUBLIC_CALENDLY_URL_EN
        : process.env.NEXT_PUBLIC_CALENDLY_URL_FR)) ||
    process.env.NEXT_PUBLIC_CALENDLY_URL_FR;

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  if (!resolvedUrl) {
    return <div className={className}>Calendly URL manquante. Configurez NEXT_PUBLIC_CALENDLY_URL_FR / EN.</div>;
  }

  return (
    <div
      className={`calendly-inline-widget ${className || ""}`}
      data-url={resolvedUrl}
      style={{ minWidth: "320px", height: `${minHeight}px` }}
    />
  );
}
