"use client";

import { useEffect, useRef, useState } from "react";

type Lang = "en" | "fr";

const URLS: Record<Lang, string> = {
  en: "https://calendly.com/krglobalsolutionsltd/30-minute-meeting-clone",
  fr: "https://calendly.com/krglobalsolutionsltd/30min",
};

const TXT = {
  en: { button: "Book a 30‑min call", badge: "Book a call" },
  fr: { button: "Réserver 30 min", badge: "Réserver un appel" },
};

function detectLang(): Lang {
  try {
    const fromLS = (typeof localStorage !== "undefined" && localStorage.getItem("lang")) || "";
    if (/^(en|fr)$/i.test(fromLS)) return fromLS.toLowerCase() as Lang;
  } catch { /* ignore */ }
  const fromHtml = document.documentElement.getAttribute("lang") || "";
  if (/^(en|fr)$/i.test(fromHtml)) return fromHtml.toLowerCase() as Lang;
  const fromData =
    (document.body?.dataset?.lang || document.documentElement?.dataset?.lang || "").toString();
  if (/^(en|fr)$/i.test(fromData)) return fromData.toLowerCase() as Lang;
  return "en";
}

declare global {
  interface CalendlyWidget {
    initPopupWidget: (opts: { url: string }) => void;
    initBadgeWidget: (opts: {
      url: string;
      text: string;
      color: string;
      textColor: string;
      branding: boolean;
    }) => void;
  }

  interface Window {
    Calendly?: CalendlyWidget;
    openCalendly?: () => boolean;
    setSiteLang?: (lang: Lang) => void;
  }
}

export default function CalendlyLoader() {
  const [lang, setLang] = useState<Lang>("en");
  const moRef = useRef<MutationObserver | null>(null);

  // Load external Calendly script once
  useEffect(() => {
    const id = "calendly-widget-js";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.async = true;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      document.body.appendChild(s);
    }
  }, []);

  // Expose openCalendly()
  useEffect(() => {
    window.openCalendly = () => {
      const url = URLS[lang];
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url });
        return false;
      }
      window.location.href = url; // fallback
      return false;
    };
  }, [lang]);

  // Initialize + react to language changes
  useEffect(() => {
    function applyLanguage(next: Lang) {
      setLang(next);
      // When Calendly is ready, (re)init badge
      const tick = setInterval(() => {
        if (window.Calendly) {
          // Remove old badges (Calendly n'a pas d'API destroy officielle)
          document.querySelectorAll("[data-calendly-badge]").forEach((n) => n.remove());
          // marker pour clean possible
          const marker = document.createElement("div");
          marker.setAttribute("data-calendly-badge", "1");
          document.body.appendChild(marker);
          window.Calendly.initBadgeWidget({
            url: URLS[next],
            text: TXT[next].badge,
            color: "#111111",
            textColor: "#ffffff",
            branding: true,
          });
          clearInterval(tick);
        }
      }, 100);
      setTimeout(() => clearInterval(tick), 8000);
      // Update any data-i18n label on buttons
      document.querySelectorAll<HTMLElement>("[data-calendly-btn]").forEach((el) => {
        el.innerText = TXT[next].button;
      });
    }

    // initial
    applyLanguage(detectLang());

    // observe <html lang="..">
    if (!moRef.current) {
      moRef.current = new MutationObserver(() => {
        const d = detectLang();
        if (d !== lang) applyLanguage(d);
      });
      moRef.current.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["lang", "data-lang"],
      });
    }

    // intercept localStorage('lang') changes
    const orig = localStorage.setItem;
    // @ts-expect-error override for lang change detection
    localStorage.setItem = function (k: string, v: string) {
      const res = orig.apply(this, [k, v]);
      if (k === "lang") {
        const d = detectLang();
        if (d !== lang) applyLanguage(d);
      }
      return res;
    };

    // manual API if needed
    window.setSiteLang = (l: Lang) => {
      document.documentElement.setAttribute("lang", l);
      try { localStorage.setItem("lang", l); } catch { /* ignore */ }
      applyLanguage(l);
    };

    return () => {
      if (moRef.current) moRef.current.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null; // loader invisible
}

