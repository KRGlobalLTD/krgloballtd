"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Feature = { label: string };
type Plan = {
  id: "starter" | "growth" | "custom";
  name: string;
  tagline: string;
  priceFrom?: string;
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
  features: Feature[];
  extraGroups?: { title: string; items: string[] }[]; // pour “voir tout”
};

const plans: Plan[] = [
  {
    id: "starter",
    name: "Pack Découverte",
    tagline: "Pour démarrer rapidement et tester nos services",
    priceFrom: "49€",
    ctaLabel: "Commander",
    ctaHref: "#commande-starter",
    features: [
      { label: "Visuel unique (logo simple / bannière / 3 posts)" },
      { label: "Landing 1 section (Héros + CTA + formulaire)" },
      { label: "Mini‑workflow (Form → Email)" },
      { label: "Montage vidéo ≤45s ou 10 retouches photo" },
      { label: "Visio 30 min + notes d’actions" },
      { label: "FAQ IA basique (widget 20 Q/R)" },
    ],
    extraGroups: [
      {
        title: "Autres inclus possibles (selon besoin)",
        items: [
          "6 posts (texte + visuel 1 réseau)",
          "Mini‑identité (logo + palette + 6 posts)",
        ],
      },
    ],
  },
  {
    id: "growth",
    name: "Pack Croissance",
    tagline: "Meilleur rapport valeur/prix, livrables concrets",
    priceFrom: "249€",
    ctaLabel: "Commander",
    ctaHref: "#commande-growth",
    popular: true,
    features: [
      { label: "Mini‑site 3 sections (SEO base + analytics)" },
      { label: "15 posts + 1 micro‑vidéo (calendrier Notion)" },
      { label: "Workflow utile (Form → Sheets + email + notif)" },
      { label: "Vidéo ≤90s ou 20 retouches (cut + transitions)" },
      { label: "Audit express + plan 30/60/90 (visio 45 min)" },
      { label: "Chatbot FAQ IA (50 Q/R + capture email)" },
    ],
    extraGroups: [
      {
        title: "En option (add‑ons)",
        items: [
          "Livraison express 48h",
          "Copywriting premium",
          "A/B test visuels",
          "Pack contenu 1 mois (8 vidéos + 20 visuels)",
        ],
      },
    ],
  },
  {
    id: "custom",
    name: "Pack Sur‑mesure",
    tagline: "Projets avancés, intégrations et automatisations",
    priceFrom: "799€",
    ctaLabel: "Demander un devis",
    ctaHref: "#devis-sur-mesure",
    features: [
      { label: "Site 5–7 sections / Petite boutique (Stripe + 2 automatisations)" },
      { label: "Gestion réseaux 1 mois (30 posts, 4 reels, 1 ads)" },
      { label: "Ops simple (x3 workflows) + dashboard Notion/Sheets" },
      { label: "Agent IA avancé (RAG + multi‑langues)" },
      { label: "Accompagnement 1 mois (4 visios, roadmap Notion)" },
      { label: "Setup express (checklists + modèles + banques)" },
    ],
    extraGroups: [
      {
        title: "Peut inclure selon devis",
        items: [
          "Identité complète (logo, mini‑charte, 20 templates)",
          "E‑commerce complet, intégrations paiement et logistique",
          "Automatisations no‑code multi‑apps",
          "Gouvernance & analytics personnalisés",
        ],
      },
    ],
  },
];

function Card({ plan }: { plan: Plan }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      className="relative flex flex-col justify-between rounded-2xl border border-[#2A2A2A] bg-[#121212] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {plan.popular && (
        <span
          className="absolute -top-3 left-4 rounded-full border border-white/20 bg-gradient-to-r from-white to-gray-300 px-3 py-1 text-[11px] font-semibold tracking-wide text-black shadow-md"
          aria-label="Offre populaire"
        >
          Populaire
        </span>
      )}

      <header className="mb-4">
        <h3 className="text-[18px] font-semibold text-white">{plan.name}</h3>
        <p className="mt-1 text-sm text-gray-300">{plan.tagline}</p>
      </header>

      <div className="mb-4">
        <span className="text-3xl font-extrabold text-white">à partir de {plan.priceFrom}</span>
      </div>

      <ul className="mb-4 space-y-2 text-sm text-gray-200">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span>{f.label}</span>
          </li>
        ))}
      </ul>

      {plan.extraGroups?.length ? (
        <div className="mb-4">
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-xs text-gray-300 underline underline-offset-4 hover:text-white"
            aria-expanded={open}
          >
            {open ? "Masquer le détail" : "Voir tout le contenu"}
          </button>
          {open && (
            <div className="mt-3 space-y-3">
              {plan.extraGroups.map((g, idx) => (
                <div key={idx}>
                  <p className="mb-1 text-xs font-semibold text-gray-400">{g.title}</p>
                  <ul className="space-y-1 text-xs text-gray-300">
                    {g.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span aria-hidden className="mt-[6px] inline-block h-1 w-1 rounded-full bg-gray-400" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}

      <div className="mt-auto">
        <a
          href={plan.ctaHref}
          className="inline-flex h-10 items-center justify-center rounded-xl border border-white/30 px-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black focus:outline-none"
          aria-label={plan.ctaLabel}
        >
          {plan.ctaLabel}
        </a>
      </div>
    </motion.article>
  );
}

export default function PricingSection() {
  return (
    <section aria-labelledby="pricing-title" className="w-full bg-[#0B0B0C] py-12">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 text-center">
          <h2 id="pricing-title" className="text-3xl font-extrabold tracking-tight text-white">
            Offres &amp; Prestations
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-300">
            Choisissez un pack en fonction de votre objectif. Tous les services restent disponibles,
            classés par niveau d’accompagnement. Les tarifs affichés sont “à partir de”.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.id} plan={p} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 text-sm font-medium text-gray-200 hover:bg-white hover:text-black"
          >
            Vous hésitez ? Devis express en 24h
          </a>
        </div>
      </div>
    </section>
  );
}

