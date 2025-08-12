export type Pack = {
  id: "starter" | "growth" | "custom";
  title: string;
  tagline: string;
  priceLine: string;
  features: string[]; // visibles en liste
  extras: string[];   // masquées tant que "Voir tout le contenu" n’est pas ouvert
};

export const packs: Pack[] = [
  {
    id: "starter",
    title: "Pack Découverte",
    tagline: "Lancez-vous dès aujourd’hui",
    priceLine: "à partir de 49€",
    features: [
      "Visuel unique (logo simple / bannière / 3 posts)",
      "Landing 1 section (Héros + CTA + formulaire)",
      "Mini‑workflow (Form → Email)",
      "Montage vidéo ≤45s ou 10 retouches photo",
      "Visio 30 min + notes d’actions",
      "FAQ IA basique (widget 20 Q/R)"
    ],
    extras: [
      "SEO base : titles/meta, balises, Open Graph, favicon",
      "Sitemap.xml + robots.txt",
      "Accessibilité AA de base (contrastes, aria, keyboard)",
      "Perf & qualité : images optimisées, lazy‑load, audit rapide",
      "Analytics léger (pageview) + consentement cookies basique",
      "Formulaire relié à Email (ou webhook) + capture Notion/Sheets",
      "Hébergement & déploiement (Netlify/Vercel) + domaine/DNS",
      "Page Mentions légales & Politique de confidentialité (modèles)",
      "Petit kit de marque : variations logo + 1 template post",
      "Onboarding 30 min + vidéo récap / mini‑doc utilisateur"
    ]
  },
  {
    id: "growth",
    title: "Pack Croissance",
    tagline: "Passez à la vitesse supérieure",
    priceLine: "à partir de 249€ (ou 3× 89€/mois)",
    features: [
      "Mini‑site 3 sections (SEO base + analytics)",
      "15 posts + 1 micro‑vidéo (calendrier Notion)",
      "Workflow utile (Form → Sheets + email + notif)",
      "Vidéo ≤90s ou 20 retouches (cut + transitions)",
      "Audit express + plan 30/60/90 (visio 45 min)",
      "Chatbot FAQ IA (50 Q/R + capture email)"
    ],
    extras: [
      "Blog léger (MDX/Notion) + plan de contenu 1 mois",
      "Automations no‑code : Zapier/Make (CRM Notion/Sheets)",
      "CRM pipeline simple (acquisition → devis → suivi)",
      "Emailing transactionnel (EmailJS/Resend) + modèles",
      "SEO renforcé : plan sémantique, maillage, redirections",
      "Performance : code‑split, images responsives, pré‑fetch",
      "Formulaires multi‑étapes + validation + anti‑spam",
      "Calendly/Meet intégré (prise de RDV) + page Merci",
      "Tableau de bord Notion : KPIs trafic + pipeline + contenu",
      "Kit social : 15 posts programmables + 1 gabarit vidéo",
      "Onboarding 1h + 1 semaine de support email"
    ]
  },
  {
    id: "custom",
    title: "Pack Sur‑mesure",
    tagline: "Votre projet clé en main",
    priceLine: "à partir de 799€ (ou 3× 270€/mois)",
    features: [
      "Site 5–7 sections / Petite boutique (Stripe + 2 automatisations)",
      "Gestion réseaux 1 mois (30 posts, 4 reels, 1 ads)",
      "Ops simple (×3 workflows) + dashboard Notion/Sheets",
      "Agent IA avancé (RAG + multi‑langues)",
      "Accompagnement 1 mois (4 visios, roadmap Notion)",
      "Setup express (checklists + modèles + banques)"
    ],
    extras: [
      "E‑commerce : Stripe (produits, checkout, coupons, webhooks)",
      "Internationalisation FR/EN (i18n) + SEO multilingue",
      "Recherche & Chat IA (RAG) : corpus Notion/Docs/URL",
      "Intégrations : Supabase/DB, stockage, email, webhooks",
      "Sécurité : en‑têtes, rate‑limit de base, honeypot, logs",
      "Accessibilité avancée, tests, audits Lighthouse",
      "Animations Framer Motion, sections premium (Hero 3D/Canvas)",
      "Pages légales complètes (RGPD/UK) + bandeau cookies",
      "Monitoring & alertes (uptime, erreurs) + sauvegardes",
      "CI/CD & environnements (preview/staging) + secrets",
      "Formation équipe (2h) + support 1 mois (SLA léger)"
    ]
  }
];
