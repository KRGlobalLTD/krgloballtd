"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useBooking } from "@/context/BookingContext";

/** Types locaux (évite les imports qui cassent le build) */
type Pack = {
  id: string;
  tag?: "Basique" | "Populaire" | "Premium";
  titleKey: string;
  subtitleKey: string;
  priceKey: string;
  perMonthKey?: string;
  badges: string[];
  bullets: string[];
  ctas: {
    primary: { labelKey: string; href: string };
    secondary?: { labelKey: string; href: string };
    whatsapp?: { labelKey: string; href: string };
  };
};

/** Dictionnaires de secours (FR/EN) */
const FALLBACK_DICT = {
  fr: {
    offers: {
      title: "Offres & Prestations",
      subtitle:
        "Choisissez un pack selon votre objectif. Les tarifs sont “à partir de” et ajustés selon votre contexte.",
      whichPack: "Quel pack est fait pour vous ?",
      tag: { basique: "Basique", populaire: "Populaire", premium: "Premium" },
      badge: {
        fast: "Rapide",
        basic: "Basique",
        onboarding: "Prise en main",
        site: "Site",
        social: "Social",
        ai: "IA",
        integrations: "Intégrations",
        aiAdvanced: "IA avancée",
        automations: "Automations",
      },
      cta: {
        startNow: "Je commence aujourd’hui",
        bookPack: "Réserver ce pack",
        quote: "Obtenir mon devis gratuit",
        bookMeeting: "RDV 30 min",
        whatsapp: "WhatsApp",
      },
      starter: {
        title: "Pack Découverte",
        subtitle: "Lancez-vous dès aujourd’hui",
        price: "à partir de 49€",
        perMonth: "",
        b1: "Visuel unique (logo simple / bannière / 3 posts)",
        b2: "Landing 1 section (Héros + CTA + formulaire)",
        b3: "Mini-workflow (Form → Email)",
        b4: "Montage vidéo ≤45s ou 10 retouches photo",
        b5: "Visio 30 min + notes d’actions",
      },
      growth: {
        title: "Pack Croissance",
        subtitle: "Passez à la vitesse supérieure",
        price: "à partir de 249€",
        perMonth: "ou 3× 89€/mois",
        b1: "Mini-site 3 sections (SEO base + analytics)",
        b2: "15 posts + 1 micro‑vidéo (calendrier Notion)",
        b3: "Workflow utile (Form → Sheets + email + notif)",
        b4: "Vidéo ≤90s ou 20 retouches (cut + transitions)",
        b5: "Audit express + plan 30/60/90 (visio 45 min)",
      },
      custom: {
        title: "Pack Sur‑mesure",
        subtitle: "Votre projet clé en main",
        price: "à partir de 799€",
        perMonth: "ou 3× 270€/mois",
        b1: "Site 5–7 sections / Petite boutique (Stripe + 2 automatisations)",
        b2: "Gestion réseaux 1 mois (30 posts, 4 reels, 1 ads)",
        b3: "Ops simple (x3 workflows) + dashboard Notion/Sheets",
        b4: "Agent IA avancé (RAG + multi‑langues)",
        b5: "Setup express (checklists + modèles + banques)",
      },
    },
  },
  en: {
    offers: {
      title: "Offers & Services",
      subtitle:
        "Pick a pack for your goal. Prices are “from” and adjusted to your context.",
      whichPack: "Which pack is right for you?",
      tag: { basique: "Basic", populaire: "Popular", premium: "Premium" },
      badge: {
        fast: "Fast",
        basic: "Basic",
        onboarding: "Onboarding",
        site: "Website",
        social: "Social",
        ai: "AI",
        integrations: "Integrations",
        aiAdvanced: "Advanced AI",
        automations: "Automations",
      },
        cta: {
          startNow: "Start today",
          bookPack: "Book this pack",
          quote: "Get my free quote",
          bookMeeting: "Book 30 min",
          whatsapp: "WhatsApp",
        },
      starter: {
        title: "Starter Pack",
        subtitle: "Get launched today",
        price: "from €49",
        perMonth: "",
        b1: "One visual (simple logo / banner / 3 posts)",
        b2: "One‑section landing (Hero + CTA + form)",
        b3: "Mini‑workflow (Form → Email)",
        b4: "Video edit ≤45s or 10 photo edits",
        b5: "30‑min call + action notes",
      },
      growth: {
        title: "Growth Pack",
        subtitle: "Shift into higher gear",
        price: "from €249",
        perMonth: "or 3× €89/mo",
        b1: "Mini‑site 3 sections (basic SEO + analytics)",
        b2: "15 posts + 1 micro‑video (Notion calendar)",
        b3: "Useful workflow (Form → Sheets + email + notif)",
        b4: "Video ≤90s or 20 edits (cuts + transitions)",
        b5: "Express audit + 30/60/90 plan (45‑min call)",
      },
      custom: {
        title: "Custom Pack",
        subtitle: "Turn‑key project",
        price: "from €799",
        perMonth: "or 3× €270/mo",
        b1: "5–7‑section site / Small shop (Stripe + 2 automations)",
        b2: "1‑month social mgmt (30 posts, 4 reels, 1 ad)",
        b3: "Simple ops (x3 workflows) + Notion/Sheets dashboard",
        b4: "Advanced AI agent (RAG + multi‑language)",
        b5: "Express setup (checklists + templates + banks)",
      },
    },
  },
};

/** Packs par défaut (utilisent les mêmes keys i18n) */
const PACKS_FALLBACK: Pack[] = [
  {
    id: "starter",
    tag: "Basique",
    titleKey: "offers.starter.title",
    subtitleKey: "offers.starter.subtitle",
    priceKey: "offers.starter.price",
    badges: [
      "offers.badge.fast",
      "offers.badge.basic",
      "offers.badge.onboarding",
    ],
    bullets: [
      "offers.starter.b1",
      "offers.starter.b2",
      "offers.starter.b3",
      "offers.starter.b4",
      "offers.starter.b5",
    ],
    ctas: {
      primary: { labelKey: "offers.cta.startNow", href: "#contact" },
      whatsapp: {
        labelKey: "offers.cta.whatsapp",
        href: "https://wa.me/33743561304",
      },
    },
  },
  {
    id: "growth",
    tag: "Populaire",
    titleKey: "offers.growth.title",
    subtitleKey: "offers.growth.subtitle",
    priceKey: "offers.growth.price",
    perMonthKey: "offers.growth.perMonth",
    badges: ["offers.badge.site", "offers.badge.social", "offers.badge.ai"],
    bullets: [
      "offers.growth.b1",
      "offers.growth.b2",
      "offers.growth.b3",
      "offers.growth.b4",
      "offers.growth.b5",
    ],
    ctas: {
      primary: { labelKey: "offers.cta.bookPack", href: "#contact" },
      whatsapp: {
        labelKey: "offers.cta.whatsapp",
        href: "https://wa.me/33743561304",
      },
    },
  },
  {
    id: "custom",
    tag: "Premium",
    titleKey: "offers.custom.title",
    subtitleKey: "offers.custom.subtitle",
    priceKey: "offers.custom.price",
    perMonthKey: "offers.custom.perMonth",
    badges: [
      "offers.badge.integrations",
      "offers.badge.aiAdvanced",
      "offers.badge.automations",
    ],
    bullets: [
      "offers.custom.b1",
      "offers.custom.b2",
      "offers.custom.b3",
      "offers.custom.b4",
      "offers.custom.b5",
    ],
    ctas: {
      primary: { labelKey: "offers.cta.quote", href: "#contact" },
      secondary: { labelKey: "offers.cta.bookMeeting", href: "#contact" },
      whatsapp: {
        labelKey: "offers.cta.whatsapp",
        href: "https://wa.me/33743561304",
      },
    },
  },
];

/** Utils */
const getLang = () => {
  if (typeof document !== "undefined") {
    const html = document.documentElement.lang?.toLowerCase() || "";
    if (html.startsWith("en")) return "en";
    if (html.startsWith("fr")) return "fr";
  }
  return "fr";
};

const tf = (key: string) => {
  const lang = getLang();
  const base = lang === "en" ? FALLBACK_DICT.en : FALLBACK_DICT.fr;
  return (
    key
      .split(".")
      .reduce<unknown>(
        (acc, k) =>
          acc && typeof acc === "object"
            ? (acc as Record<string, unknown>)[k]
            : undefined,
        base,
      ) ?? key
  ) as string;
};

export default function OffersSection() {
  const { openBooking } = useBooking();
  const [packs, setPacks] = useState<Pack[]>(PACKS_FALLBACK);

  useEffect(() => {
    // Essayer plusieurs chemins d'imports pour éviter les soucis d'alias
    const load = async () => {
      const tryImport = async (path: string) => {
        try {
          return await import(/* @vite-ignore */ path);
        } catch {
          /* ignore */
          return null;
        }
      };

      let mod: unknown = await tryImport("@/data/packs");
      if (!mod) mod = await tryImport("../data/packs");
      if (!mod) mod = await tryImport("../../data/packs");
      if (!mod) mod = await tryImport("../../../../data/packs");

      const maybe = mod as { packs?: Pack[]; default?: Pack[] };
      if (maybe && (maybe.packs || maybe.default)) {
        const data = (maybe.packs || maybe.default) as Pack[];
        if (Array.isArray(data) && data.length) {
          console.info(
            "[offers] packs chargés depuis data/packs (",
            data.length,
            ")"
          );
          setPacks(data);
          return;
        }
      }
      console.warn("[offers] fallback packs utilisé");
    };
    load();
  }, []);

  const data = useMemo(() => packs, [packs]);

  return (
    <section id="offers" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {tf("offers.title")}
          </h2>
          <p className="mt-2 text-base sm:text-lg opacity-80">
            {tf("offers.subtitle")}
          </p>
          <div className="mt-4">
            <a
              href="#quiz-budget"
              className="inline-block rounded-2xl border px-4 py-2 text-sm"
            >
              {tf("offers.whichPack")}
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
                  {tf(`offers.tag.${p.tag.toLowerCase()}`)}
                </span>
              )}

              <h3 className="text-2xl font-semibold">{tf(p.titleKey)}</h3>
              <p className="mt-1 opacity-80">{tf(p.subtitleKey)}</p>

              <div className="mt-4">
                <div className="text-3xl sm:text-4xl font-extrabold">
                  {tf(p.priceKey)}
                </div>
                {p.perMonthKey && (
                  <div className="opacity-70">{tf(p.perMonthKey)}</div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.badges.map((b) => (
                  <span key={b} className="rounded-full border px-3 py-1 text-xs">
                    {tf(b)}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full border shrink-0" />
                    <span>{tf(b)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={p.ctas.primary.href}
                  className="button type1"
                  aria-label={tf(p.ctas.primary.labelKey)}
                >
                  <span className="btn-txt">{tf(p.ctas.primary.labelKey)}</span>
                </a>
                {p.ctas.secondary && (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openBooking();
                        }}
                        className="rounded-2xl border px-4 py-2 text-sm"
                      >
                        {tf(p.ctas.secondary.labelKey)}
                      </a>
                  )}
                {p.ctas.whatsapp && (
                  <a
                    href={p.ctas.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border px-4 py-2 text-sm"
                  >
                    {tf(p.ctas.whatsapp.labelKey)}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
          {/* Retiré : lien "Voir le calendrier intégré" */}
      </div>
      </section>
  );
}

