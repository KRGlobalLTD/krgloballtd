"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "fr";

const LABEL = {
  en: "Book a 30‑min call",
  fr: "Réserver 30 min",
};

function detectLang(): Lang {
  try {
    const fromLS = localStorage.getItem("lang") || "";
    if (/^(en|fr)$/i.test(fromLS)) return fromLS.toLowerCase() as Lang;
  } catch { /* ignore */ }
  const fromHtml = document.documentElement.getAttribute("lang") || "";
  if (/^(en|fr)$/i.test(fromHtml)) return fromHtml.toLowerCase() as Lang;
  const fromData =
    (document.body?.dataset?.lang || document.documentElement?.dataset?.lang || "").toString();
  if (/^(en|fr)$/i.test(fromData)) return fromData.toLowerCase() as Lang;
  return "en";
}

export default function CalendlyButton({ className = "" }: { className?: string }) {
  const [label, setLabel] = useState(LABEL.en);

  useEffect(() => {
    const lang = detectLang();
    setLabel(LABEL[lang]);

    // observe changes
    const mo = new MutationObserver(() => {
      const d = detectLang();
      setLabel(LABEL[d]);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["lang", "data-lang"] });
    return () => mo.disconnect();
  }, []);

  return (
    <button
      data-calendly-btn
      onClick={() => window.openCalendly?.()}
      className={`px-4 py-2 rounded-full border border-neutral-900 bg-neutral-900 text-white hover:opacity-90 transition ${className}`}
      aria-label="Open Calendly popup"
      type="button"
    >
      {label}
    </button>
  );
}

