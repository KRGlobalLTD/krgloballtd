"use client";
import { useEffect, useRef, useState } from "react";

type Lang = "en" | "fr";

const URLS: Record<Lang, string> = {
  en: "https://calendly.com/krglobalsolutionsltd/30-minute-meeting-clone",
  fr: "https://calendly.com/krglobalsolutionsltd/30min",
};

function detectLang(): Lang {
  try {
    const ls = localStorage.getItem("lang");
    if (ls && /^(en|fr)$/i.test(ls)) return ls.toLowerCase() as Lang;
  } catch { /* empty */ }
  const html = document.documentElement.getAttribute("lang");
  if (html && /^(en|fr)$/i.test(html)) return html.toLowerCase() as Lang;
  const data =
    (document.body?.dataset?.lang || document.documentElement?.dataset?.lang || "").toString();
  if (data && /^(en|fr)$/i.test(data)) return data.toLowerCase() as Lang;
  return "fr";
}

interface CalendlyWidget {
  initPopupWidget?: (opts: { url: string }) => void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
    openCalendly?: (prefer?: "popup" | "tab") => boolean;
    getCalendlyUrl?: () => string;
  }
}

export default function CalendlyManager() {
  const [lang, setLang] = useState<Lang>("fr");
  const moRef = useRef<MutationObserver | null>(null);

  // charger script Calendly une seule fois
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

  // --- FIX scroll lock : Calendly ajoute overflow:hidden sur <html>/<body>.
  function unlockScroll() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    // retire overlay si resté orphelin
    document.querySelectorAll(".calendly-overlay, [data-calendly-badge]").forEach((n) => {
      // ne supprime pas le badge officiel, juste les overlays restants
      if ((n as HTMLElement).classList.contains("calendly-overlay")) n.remove();
    });
  }

  // Observe l’overlay pour détecter fermeture et débloquer le scroll
  useEffect(() => {
    const obs = new MutationObserver(() => {
      const overlay = document.querySelector(".calendly-overlay");
      if (!overlay) unlockScroll();
    });
    obs.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setTimeout(unlockScroll, 50);
    });
    return () => obs.disconnect();
  }, []);

  // expose helpers
  useEffect(() => {
    window.getCalendlyUrl = () => URLS[lang];
    window.openCalendly = (prefer: "popup" | "tab" = "popup") => {
      const url = URLS[lang];
      if (prefer === "tab") {
        window.open(url, "_blank", "noopener,noreferrer");
        return false;
      }
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({ url });
        // Calendly ferme tout seul, mais on planifie un cleanup de sécurité
        setTimeout(unlockScroll, 4000);
        return false;
      }
      // fallback : nouvelle page
      window.open(url, "_blank", "noopener,noreferrer");
      return false;
    };
  }, [lang]);

  // sync langue + écouter changements
  useEffect(() => {
    const apply = () => setLang(detectLang());
    apply();
    if (!moRef.current) {
      moRef.current = new MutationObserver(apply);
      moRef.current.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["lang", "data-lang"],
      });
    }
    const orig = localStorage.setItem;
    // @ts-expect-error override for lang change detection
    localStorage.setItem = function (k: string, v: string) {
      const r = orig.apply(this, [k, v]);
      if (k === "lang") apply();
      return r;
    };
    return () => moRef.current?.disconnect();
  }, []);

  return null;
}

