"use client";
import React, { useMemo } from "react";
import { faqFR, faqEN, QA } from "@/data/faq";
import { useLanguage } from "@/hooks/useLanguage";

type Props = { locale?: "fr" | "en"; className?: string };

function Item({ qa, idx }: { qa: QA; idx: number }) {
  const id = `faq-${idx}`;
  const [open, setOpen] = React.useState(false);
  const onToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    setOpen((e.currentTarget as HTMLDetailsElement).open);
  };

  return (
    <details
      onToggle={onToggle}
      className="border-b border-white/[0.07] py-5"
    >
      <summary
        className="cursor-pointer list-none select-none flex items-center justify-between gap-3 text-sm md:text-base font-medium text-white"
        aria-controls={`${id}-panel`}
        aria-expanded={open}
      >
        <span>{qa.q}</span>
        <span
          aria-hidden
          className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-white/60 shrink-0 text-xs"
        >
          {open ? "–" : "+"}
        </span>
      </summary>
      <div id={`${id}-panel`} className="pt-4 text-sm text-neutral-500 leading-relaxed">
        {qa.a}
      </div>
    </details>
  );
}

export default function FAQAccordion({ locale = "fr", className }: Props) {
  const { currentLanguage } = useLanguage();
  const currentLocale: "fr" | "en" = currentLanguage === "en" ? "en" : locale;
  const data = useMemo(() => (currentLocale === "en" ? faqEN : faqFR), [currentLocale]);

  return (
    <section id="faq" aria-labelledby="faq-title" className={["w-full", className].filter(Boolean).join(" ")}>
      <div className="max-w-3xl">
        <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-white mb-10">
          FAQ
        </h2>
        <div>
          {data.map((qa, i) => (
            <Item key={i} qa={qa} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
