"use client";
import React, { useMemo } from "react";
import { faqFR, faqEN, QA } from "@/data/faq";

// Optionnel : si le projet expose un hook de langue globale, on l'utilise sans casser le build
// Essaie d'importer l'un de ces hooks ; si non présent, ignore proprement.
// import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

type Props = { locale?: "fr" | "en"; className?: string };

function Item({ qa, idx }: { qa: QA; idx: number }) {
  const id = `faq-${idx}`;
  // On s'appuie sur <details> natif + event onToggle pour connaître l'état ouvert/fermé
  const [open, setOpen] = React.useState(false);
  const onToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    setOpen((e.currentTarget as HTMLDetailsElement).open);
  };

  return (
    <details
      onToggle={onToggle}
      className="rounded-2xl border bg-white/60 dark:bg-zinc-900/60 p-4 md:p-5"
    >
      <summary
        className="cursor-pointer list-none select-none flex items-center justify-between gap-3 text-base md:text-lg font-medium"
        aria-controls={`${id}-panel`}
        aria-expanded={open}
      >
        <span>{qa.q}</span>
        <span aria-hidden className="inline-flex h-7 w-7 items-center justify-center rounded-full border">
          {open ? "–" : "+"}
        </span>
      </summary>
      <div id={`${id}-panel`} className="pt-3 text-sm md:text-base opacity-90">
        {qa.a}
      </div>
    </details>
  );
}

export default function FAQAccordion({ locale = "fr", className }: Props) {
  // 1) Source de vérité = langue globale si dispo, sinon prop locale
  const { currentLanguage } = useLanguage();
  const currentLocale: "fr" | "en" = currentLanguage === "en" ? "en" : locale;

  const data = useMemo(() => (currentLocale === "en" ? faqEN : faqFR), [currentLocale]);

  return (
    <section id="faq" aria-labelledby="faq-title" className={["w-full", className].filter(Boolean).join(" ")}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <header className="mb-5 md:mb-7">
          <h2 id="faq-title" className="text-3xl md:text-4xl font-extrabold">FAQ</h2>
        </header>
        <div className="space-y-3 md:space-y-4">
          {data.map((qa, i) => (
            <Item key={i} qa={qa} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

