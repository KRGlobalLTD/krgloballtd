export type CTA = { label: string; href: string; variant?: "primary"|"outline" };
export type Link = { label: string; href: string };

export type Pack = {
  id: "decouverte" | "croissance" | "surmesure";
  badges: string[];
  title: string;
  subtitle?: string;
  priceFrom: string;
  installment?: string;
  features: string[];
  ctas: CTA[];
  footerLinks?: Link[];
};

export const packsFR: Pack[] = [
  {
    id: "decouverte",
    badges: ["Rapide", "Basique", "Prise en main"],
    title: "Pack Découverte",
    subtitle: "Lancez-vous dès aujourd’hui",
    priceFrom: "à partir de 49€",
    features: [
      "Visuel unique (logo simple / bannière / 3 posts)",
      "Landing 1 section (Héros + CTA + formulaire)",
      "Mini-workflow (Form → Email)",
      "Montage vidéo ≤45s ou 10 retouches photo",
      "Visio 30 min + notes d’actions",
      "FAQ IA basique (widget 20 Q/R)"
    ],
    ctas: [
      { label: "Je commence aujourd’hui", href: "#contact", variant: "primary" },
      { label: "WhatsApp", href: "https://wa.me/33743561304", variant: "outline" }
    ],
    footerLinks: [{ label: "Voir tout le contenu", href: "#pack-decouverte" }]
  },
  {
    id: "croissance",
    badges: ["Site", "Social", "IA"],
    title: "Pack Croissance",
    subtitle: "Passez à la vitesse supérieure",
    priceFrom: "à partir de 249€",
    installment: "ou 3× 89€/mois",
    features: [
      "Mini-site 3 sections (SEO base + analytics)",
      "15 posts + 1 micro-vidéo (calendrier Notion)",
      "Workflow utile (Form → Sheets + email + notif)",
      "Vidéo ≤90s ou 20 retouches (cut + transitions)",
      "Audit express + plan 30/60/90 (visio 45 min)",
      "Chatbot FAQ IA (50 Q/R + capture email)"
    ],
    ctas: [
      { label: "Réserver ce pack", href: "#contact", variant: "primary" },
      { label: "WhatsApp", href: "https://wa.me/33743561304", variant: "outline" }
    ],
    footerLinks: [{ label: "Voir tout le contenu", href: "#pack-croissance" }]
  },
  {
    id: "surmesure",
    badges: ["Intégrations", "IA avancée", "Automations"],
    title: "Pack Sur-mesure",
    subtitle: "Votre projet clé en main",
    priceFrom: "à partir de 799€",
    installment: "ou 3× 270€/mois",
    features: [
      "Site 5–7 sections / Petite boutique (Stripe + 2 automatisations)",
      "Gestion réseaux 1 mois (30 posts, 4 reels, 1 ads)",
      "Ops simple (x3 workflows) + dashboard Notion/Sheets",
      "Agent IA avancé (RAG + multi-langues)",
      "Accompagnement 1 mois (4 visios, roadmap Notion)",
      "Setup express (checklists + modèles + banques)"
    ],
    ctas: [
      { label: "Obtenir mon devis gratuit", href: "#devis", variant: "primary" },
      { label: "WhatsApp", href: "https://wa.me/33743561304", variant: "outline" }
    ],
    footerLinks: [
      { label: "Réserver un RDV", href: "#rdv" },
      { label: "Voir tout le contenu", href: "#pack-surmesure" }
    ]
  }
];

export const packsEN: Pack[] = [
  {
    id: "decouverte",
    badges: ["Fast", "Basic", "Onboarding"],
    title: "Starter Pack",
    subtitle: "Launch today",
    priceFrom: "from €49",
    features: [
      "Single visual (simple logo / banner / 3 posts)",
      "One-section landing (Hero + CTA + form)",
      "Mini-workflow (Form → Email)",
      "Video edit ≤45s or 10 photo touch-ups",
      "30-min call + action notes",
      "Basic AI FAQ (20 Q&A widget)"
    ],
    ctas: [
      { label: "Start now", href: "#contact", variant: "primary" },
      { label: "WhatsApp", href: "https://wa.me/33743561304", variant: "outline" }
    ],
    footerLinks: [{ label: "See all details", href: "#pack-decouverte" }]
  },
  {
    id: "croissance",
    badges: ["Website", "Social", "AI"],
    title: "Growth Pack",
    subtitle: "Shift up a gear",
    priceFrom: "from €249",
    installment: "or 3× €89/mo",
    features: [
      "3-section mini-site (base SEO + analytics)",
      "15 posts + 1 micro-video (Notion calendar)",
      "Useful workflow (Form → Sheets + email + notif)",
      "Video ≤90s or 20 edits (cuts + transitions)",
      "Express audit + 30/60/90 plan (45‑min call)",
      "AI FAQ chatbot (50 Q&A + email capture)"
    ],
    ctas: [
      { label: "Book this pack", href: "#contact", variant: "primary" },
      { label: "WhatsApp", href: "https://wa.me/33743561304", variant: "outline" }
    ],
    footerLinks: [{ label: "See all details", href: "#pack-croissance" }]
  },
  {
    id: "surmesure",
    badges: ["Integrations", "Advanced AI", "Automations"],
    title: "Custom Pack",
    subtitle: "Your turnkey project",
    priceFrom: "from €799",
    installment: "or 3× €270/mo",
    features: [
      "5–7 section site / Small shop (Stripe + 2 automations)",
      "1‑month social management (30 posts, 4 reels, 1 ad)",
      "Simple ops (x3 workflows) + Notion/Sheets dashboard",
      "Advanced AI agent (RAG + multilingual)",
      "1‑month guidance (4 calls, Notion roadmap)",
      "Express setup (checklists + templates + banks)"
    ],
    ctas: [
      { label: "Get my free quote", href: "#devis", variant: "primary" },
      { label: "Message on WhatsApp", href: "https://wa.me/33743561304", variant: "outline" }
    ],
    footerLinks: [
      { label: "Book a meeting", href: "#rdv" },
      { label: "See all details", href: "#pack-surmesure" }
    ]
  }
];
