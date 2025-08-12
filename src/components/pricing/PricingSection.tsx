"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CALENDAR_URL, WHATSAPP_NUMBER, WHATSAPP_MSG_DEFAULT } from "@/lib/siteConfig";

type Feature = { label: string };
type Plan = {
  id: "starter" | "growth" | "custom";
  name: string;
  subtitle: string;
  priceFrom?: string;
  prevPrice?: string;
  monthlySplit?: string;
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
  premium?: boolean;
  tags?: string[];
  features: Feature[];
  extraGroups?: { title: string; items: string[] }[];
};

const plans: Plan[] = [
  {
    id: "starter",
    name: "Pack Découverte",
    subtitle: "Lancez‑vous dès aujourd’hui",
    priceFrom: "49€",
    ctaLabel: "Je commence aujourd’hui",
    ctaHref: "#commande-starter",
    tags: ["🎯 Rapide", "🧩 Basique", "⚡ Prise en main"],
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
        title: "Autres inclus possibles",
        items: ["6 posts (texte + visuel 1 réseau)", "Mini‑identité (logo + palette + 6 posts)"],
      },
    ],
  },
  {
    id: "growth",
    name: "Pack Croissance",
    subtitle: "Passez à la vitesse supérieure",
    priceFrom: "249€",
    prevPrice: "399€",
    monthlySplit: "ou 3× 89€/mois",
    ctaLabel: "Réserver ce pack",
    ctaHref: "#commande-growth",
    popular: true,
    tags: ["🛍️ Site", "📱 Social", "🤖 IA"],
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
        title: "Add‑ons recommandés",
        items: ["Livraison express 48h", "Copywriting premium", "A/B test visuels", "Pack contenu 1 mois"],
      },
    ],
  },
  {
    id: "custom",
    name: "Pack Sur‑mesure",
    subtitle: "Votre projet clé en main",
    priceFrom: "799€",
    monthlySplit: "ou 3× 270€/mois",
    ctaLabel: "Obtenir mon devis gratuit",
    ctaHref: "#devis-sur-mesure",
    premium: true,
    tags: ["🏗️ Intégrations", "🧠 IA avancée", "📈 Automations"],
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
          "E‑commerce complet (paiement, logistique)",
          "Automatisations no‑code multi‑apps",
          "Gouvernance & analytics personnalisés",
        ],
      },
    ],
  },
];


const wa = (msg?: string) => {
  const n = WHATSAPP_NUMBER.replace(/\D/g, "");
  const m = encodeURIComponent(msg || WHATSAPP_MSG_DEFAULT);
  return `https://wa.me/${n}?text=${m}`;
};

function Badge({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "premium" }) {
  const cls =
    tone === "premium"
      ? "from-white to-gray-300 text-black border-white/20"
      : "from-gray-200 to-white text-black border-white/10";
  return (
    <span className={`absolute -top-3 left-4 rounded-full border bg-gradient-to-r ${cls} px-3 py-1 text-[11px] font-semibold tracking-wide shadow-md`}>
      {children}
    </span>
  );
}

function Card({
  plan,
  open,
  onToggle,
  htmlId,
}: {
  plan: Plan;
  open: boolean;
  onToggle: () => void;
  htmlId: string;
}) {
  return (
    <motion.article
      id={htmlId}
      className="relative flex flex-col justify-between rounded-2xl border border-[#2A2A2A] bg-[#121212] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)] hover:outline hover:outline-1 hover:outline-white/10"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {plan.popular && <Badge>Populaire</Badge>}
      {plan.premium && <Badge tone="premium">Premium</Badge>}

      <header className="mb-4">
        <h3 className="text-[18px] font-semibold text-white">{plan.name}</h3>
        <p className="mt-1 text-sm text-gray-300">{plan.subtitle}</p>
      </header>

      <div className="mb-3">
        <div className="flex items-baseline gap-2">
          {plan.prevPrice && <span className="text-sm text-gray-400 line-through">{plan.prevPrice}</span>}
          <span className="text-3xl font-extrabold text-white">à partir de {plan.priceFrom}</span>
        </div>
        {plan.monthlySplit && <div className="mt-1 text-sm text-gray-300">{plan.monthlySplit}</div>}
      </div>

      {plan.tags?.length ? (
        <ul className="mb-3 flex flex-wrap gap-2 text-xs text-gray-200">
          {plan.tags.map((t, i) => (
            <li key={i} className="rounded-full border border-white/10 bg-white/5 px-2 py-1">{t}</li>
          ))}
        </ul>
      ) : null}

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
            onClick={onToggle}
            className="text-xs text-gray-300 underline underline-offset-4 hover:text-white"
            aria-expanded={open}
          >
            {open ? "Masquer le détail" : "Voir tout le contenu"}
          </button>

          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            className="overflow-hidden"
          >
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
          </motion.div>
        </div>
      ) : (
        <div className="mb-4" />
      )}

      <div className="mt-auto flex items-center">
        <a
          href={plan.ctaHref}
          className="inline-flex h-10 items-center justify-center rounded-xl border border-white/30 px-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black"
          aria-label={plan.ctaLabel}
        >
          {plan.ctaLabel}
        </a>
        <a
          href={wa(`Bonjour KR Global, je veux avancer sur ${plan.name}.`)}
          target="_blank"
          rel="noreferrer"
          className="ml-2 inline-flex h-10 items-center justify-center rounded-xl border border-[#25D366]/40 px-3 text-sm font-semibold text-[#25D366] hover:bg-[#25D366] hover:text-black"
          aria-label="WhatsApp devis rapide"
        >
          WhatsApp
        </a>
      </div>

      <p className="mt-3 text-[12px] text-gray-400">+50 projets réalisés • Satisfaction 98%</p>
    </motion.article>
  );
}

export default function PricingSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <section aria-labelledby="pricing-title" className="w-full bg-[#0B0B0C] pt-8 pb-12">
      <div className="mx-auto max-w-6xl px-4">

        <header className="mb-8 text-center">
          <h2 id="pricing-title" className="text-3xl font-extrabold tracking-tight text-white">
            Offres &amp; Prestations
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-300">
            Choisissez un pack selon votre objectif. Les tarifs sont “à partir de” et ajustés selon votre contexte.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#pack-quiz');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              if (history?.replaceState) history.replaceState(null, '', '#pack-quiz');
            }}
            className="mt-3 inline-flex h-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 text-xs text-gray-200 hover:bg-white hover:text-black"
            aria-controls="pack-quiz"
          >
            Quel pack est fait pour vous ?
          </button>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.id}
              plan={p}
              open={openId === p.id}
              onToggle={() => toggle(p.id)}
              htmlId={`plan-${p.id}`}
            />
          ))}
        </div>

        {/* Double CTA global : Calendrier + WhatsApp */}
        <div className="mt-8 flex justify-center gap-3">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 text-sm font-medium text-gray-200 hover:bg-white hover:text-black"
          >
            Réserver un RDV
          </a>
          <a
            href={wa("Bonjour KR Global, je souhaite un devis express via WhatsApp.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-[#25D366]/40 px-4 text-sm font-semibold text-[#25D366] hover:bg-[#25D366] hover:text-black"
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
