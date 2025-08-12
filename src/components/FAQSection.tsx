"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const keys = ["q1", "q2"];

export default function FAQSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-black">FAQ</h2>
        <ul className="space-y-3">
          {keys.map((k, i) => {
            const isOpen = open === i;
            return (
              <li key={k} className="rounded-2xl border border-black/10 bg-black/[0.03]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                >
                  <span className="text-sm font-semibold text-black">{t(`faq.${k}.question`)}</span>
                  <span
                    aria-hidden
                    className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-md border border-black/10 bg-white text-black"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`px-4 pt-0 transition-all duration-200 ease-out ${
                    isOpen ? "max-h-40 pb-4" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-sm text-neutral-700">{t(`faq.${k}.answer`)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
