"use client";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

type PopupProps = { label?: string; url?: string; className?: string };

export function CalendlyPopupButton({ label = "Book a call", url, className }: PopupProps) {
  const resolvedUrl =
    url ||
    (typeof document !== "undefined" &&
      (document.documentElement.lang?.toLowerCase().startsWith("en")
        ? process.env.NEXT_PUBLIC_CALENDLY_URL_EN
        : process.env.NEXT_PUBLIC_CALENDLY_URL_FR)) ||
    process.env.NEXT_PUBLIC_CALENDLY_URL_FR;

  function openCalendly() {
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]') as HTMLScriptElement | null;
    const open = () => {
      if (window.Calendly && resolvedUrl) window.Calendly.initPopupWidget({ url: resolvedUrl });
    };
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.onload = open;
      document.body.appendChild(s);
    } else {
      open();
    }
  }

  if (!resolvedUrl) return null;

  return (
    <button onClick={openCalendly} className={className || "px-4 py-2 rounded-2xl border text-sm"}>
      {label}
    </button>
  );
}
