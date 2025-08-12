"use client";
import React from "react";
import { faqFR, faqEN, QA } from "@/data/faq";

type Props = { locale?: "fr" | "en"; className?: string };

function Item({ qa, idx }: { qa: QA; idx: number }) {
  const id = `faq-${idx}`;
  return (
    <details className="rounded-2xl border bg-white/60 dark:bg-zinc-900/60 p-4 md:p-5">
      <summary
        className="cursor-pointer list-none select-none flex items-center justify-between gap-3 text-base md:text-lg font-medium"
        aria-controls={`${id}-panel`}
        aria-expanded="false"
      >
        <span>{qa.q}</span>
        <span aria-hidden className="inline-flex h-7 w-7 items-center justify-center rounded-full border">+</span>
      </summary>
      <div id={`${id}-panel`} className="pt-3 text-sm md:text-base opacity-90">
        {qa.a}
      </div>
    </details>
  );
}

export default function FAQAccordion({ locale = "fr", className }: Props) {
  const data = locale === "en" ? faqEN : faqFR;
  return (
    <section id="faq" aria-labelledby="faq-title" className={["w-full", className].filter(Boolean).join(" ")}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <header className="mb-5 md:mb-7">
          <h2 id="faq-title" className="text-3xl md:text-4xl font-extrabold">FAQ</h2>
        </header>
        <div className="space-y-3 md:space-y-4">
          {data.map((qa, i) => <Item key={i} qa={qa} idx={i} />)}
        </div>
      </div>
    </section>
  );
}

