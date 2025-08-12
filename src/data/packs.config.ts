export type PackTier = 'essential' | 'advanced' | 'premium';
export interface PackItem { title: string; price: 49 | 99 | 999; short: string; bullets: string[]; }
export interface Category { id: string; title: string; icon?: string; packs: Record<PackTier, PackItem>; }

export const CATEGORIES: Category[] = [
  {
    id: 'design',
    title: 'Design & Création',
    packs: {
      essential: { price: 49, title: 'Visuel unique', short: 'Logo simple/Bannière/3 posts', bullets: ['1 livrable', '1 révision', 'Livraison 48h'] },
      advanced:  { price: 99, title: 'Mini‑identité', short: 'Logo + palette + 6 posts', bullets: ['Templates Canva', '2 révisions', 'Fichiers source'] },
      premium:   { price: 999, title: 'Identité complète', short: 'Logo, mini‑charte, 20 templates', bullets: ['Révisions 30j', 'Kit web', 'Dossier final Drive'] }
    }
  },
  {
    id: 'web',
    title: 'Développement Web (no‑code)',
    packs: {
      essential: { price: 49, title: 'Landing 1 section', short: 'Héros+CTA + formulaire', bullets: ['EmailJS', 'Responsive', 'SEO basique'] },
      advanced:  { price: 99, title: 'Mini‑site 3 sections', short: 'SEO base + analytics', bullets: ['Formulaire', 'Responsive', '1 intégration'] },
      premium:   { price: 999, title: 'Site 5–7 sections / Petite boutique', short: 'Stripe + 2 automatisations', bullets: ['Stripe Checkout', 'Zapier/Make', 'Support 30j'] }
    }
  },
  {
    id: 'marketing',
    title: 'Marketing & Réseaux sociaux',
    packs: {
      essential: { price: 49, title: '6 posts', short: 'Texte+visuel 1 réseau', bullets: ['Plan hebdo', 'Hashtags', 'Canva'] },
      advanced:  { price: 99, title: '15 posts + 1 micro‑vidéo', short: 'Calendrier Notion', bullets: ['Descriptions optimisées', '1 reel 15–30s', 'Analyse simple'] },
      premium:   { price: 999, title: 'Gestion 1 mois (3 réseaux)', short: '30 posts, 4 reels, 1 ads', bullets: ['Reporting', 'Optimisation', '2 itérations stratégiques'] }
    }
  },
  {
    id: 'consulting',
    title: 'Consulting & Stratégie (100% IA)',
    packs: {
      essential: { price: 49, title: 'Visio 30 min', short: 'Notes d’actions', bullets: ['Checklist', 'Email récap', 'Conseils rapides'] },
      advanced:  { price: 99, title: 'Audit express + plan 30/60/90', short: 'Visio 45 min', bullets: ['PDF livrable', 'Priorités', 'Outils IA'] },
      premium:   { price: 999, title: 'Accompagnement 1 mois', short: '4 visios, roadmap Notion', bullets: ['KPIs', 'Templates', 'Ajustements'] }
    }
  },
  {
    id: 'audiovisuel',
    title: 'Audiovisuel (sans tournage)',
    packs: {
      essential: { price: 49, title: 'Montage court ≤45s', short: 'ou 10 retouches photo', bullets: ['Sous‑titres auto', 'Musique libre'] },
      advanced:  { price: 99, title: 'Vidéo ≤90s / 20 retouches', short: 'Cut + transitions', bullets: ['CapCut/VEED', 'Export MP4', '2 révisions'] },
      premium:   { price: 999, title: 'Kit contenu 1 mois', short: '8 vidéos + 20 visuels', bullets: ['Planning', 'Templates', 'Accompagn.'] }
    }
  },
  {
    id: 'automation',
    title: 'Automatisation & Outils (no‑code)',
    packs: {
      essential: { price: 49, title: 'Mini‑workflow', short: 'Form → email', bullets: ['EmailJS', 'Testé', 'Doc courte'] },
      advanced:  { price: 99, title: 'Workflow utile', short: 'Form → Sheets + email + notif', bullets: ['Zapier/Make', 'WhatsApp link', 'Doc courte'] },
      premium:   { price: 999, title: 'Ops simple (x3 workflows)', short: 'Dashboard Notion/Sheets', bullets: ['Monitoring 30j', 'Lead, facture, suivi', 'Support'] }
    }
  },
  {
    id: 'business',
    title: 'Business & Admin (accompagnement)',
    packs: {
      essential: { price: 49, title: 'Orientation & checklist', short: 'PDF', bullets: ['Liens officiels', 'Comparatifs', 'Non‑juridique'] },
      advanced:  { price: 99, title: 'Aide formulaires + visio', short: 'UK LTD / micro‑entreprise…', bullets: ['Guidage 30 min', 'Modèles Notion'] },
      premium:   { price: 999, title: 'Setup express', short: 'Checklists + modèles + banques', bullets: ['Mises en relation', 'Sans conseil fiscal/juridique', 'Suivi 30j'] }
    }
  },
  {
    id: 'ia-chatbots',
    title: 'IA & Chatbots',
    packs: {
      essential: { price: 49, title: 'FAQ IA basique', short: 'Widget 20 Q/R', bullets: ['Intégration widget', '1 révision', 'Livraison 48h'] },
      advanced:  { price: 99, title: 'Chatbot FAQ IA', short: '50 Q/R + capture email', bullets: ['Widget multi‑pages', 'Form lead', 'Analytics simple'] },
      premium:   { price: 999, title: 'Agent IA avancé', short: 'RAG + multi‑langues', bullets: ['Base connaissances', 'FR/EN/AR', 'Intégrations (site/WhatsApp)', '30j ajustements'] }
    }
  }
];
