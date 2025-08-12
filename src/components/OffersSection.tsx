"use client";
import { packs } from "@/data/packs";
import { useMemo } from "react";
import { useLanguage } from "@/hooks/useLanguage";

function translate(obj: Record<string, unknown>, key: string): string {
  return key.split(".").reduce<unknown>((o, k) => (o && typeof o === "object" ? (o as Record<string, unknown>)[k] : undefined), obj) as string ?? key;
}

export default function OffersSection() {
  const { t } = useLanguage();
  const data = useMemo(() => packs, []);
  const tr = (key: string) => translate(t, key);

  return (
    <section id="offers" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">{tr("offers.title")}</h2>
          <p className="mt-2 text-base sm:text-lg opacity-80">{tr("offers.subtitle")}</p>
          <div className="mt-4">
            <a href="#quiz-budget" className="inline-block rounded-2xl border px-4 py-2 text-sm">
              {tr("offers.whichPack")}
            </a>
          </div>
        </header>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((p) => (
            <article
              key={p.id}
              className="rounded-3xl border shadow-lg p-6 sm:p-8 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            >
              {p.tag && (
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                  {tr(`offers.tag.${p.tag.toLowerCase()}`)}
                </span>
              )}

              <h3 className="text-2xl font-semibold">{tr(p.titleKey)}</h3>
              <p className="mt-1 opacity-80">{tr(p.subtitleKey)}</p>

              <div className="mt-4">
                <div className="text-3xl sm:text-4xl font-extrabold">{tr(p.priceKey)}</div>
                {p.perMonthKey && <div className="opacity-70">{tr(p.perMonthKey)}</div>}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.badges.map((b) => (
                  <span key={b} className="rounded-full border px-3 py-1 text-xs">
                    {tr(b)}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full border shrink-0" />
                    <span>{tr(b)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={p.ctas.primary.href} className="button type1" aria-label={tr(p.ctas.primary.labelKey)}>
                  <span className="btn-txt">{tr(p.ctas.primary.labelKey)}</span>
                </a>

                {p.ctas.secondary && (
                  <a href={p.ctas.secondary.href} className="rounded-2xl border px-4 py-2 text-sm">
                    {tr(p.ctas.secondary.labelKey)}
                  </a>
                )}

                {p.ctas.whatsapp && (
                  <a
                    href={p.ctas.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border px-4 py-2 text-sm"
                  >
                    {tr(p.ctas.whatsapp.labelKey)}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
