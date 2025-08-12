export type Language = 'fr' | 'en';

export interface Translation {
  nav: {
    language: string;
    darkZone: string; // SAFE-GUARD: additive key for Dark Zone label
    menu: {
      open: string;
      close: string;
    };
    social: {
      tiktok: string;
      instagram: string;
      fiverr: string;
      linkedin: string;
      github: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    buttons: {
      boutique: string;
      services: string;
      blog: string;
      equipe: string;
      invest: string;
    };
  };
  about: {
    title: string;
    content: string;
  };
  common: {
    links: {
      blog: string;
      shop: string;
      team: string;
      services: string;
      investors: string;
    };
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    whatsapp: string;
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
    };
  };
  footer: {
    legal: string;
    copyright: string;
    legalNotice: string;
    social: {
      tiktok: string;
      instagram: string;
      fiverr: string;
      linkedin: string;
      github: string;
    };
  };
  offers: {
    title: string;
    subtitle: string;
    whichPack: string;
    tag: { basique: string; populaire: string; premium: string };
    badge: {
      fast: string;
      basic: string;
      onboarding: string;
      site: string;
      social: string;
      ai: string;
      integrations: string;
      aiAdvanced: string;
      automations: string;
    };
    cta: {
      startNow: string;
      bookPack: string;
      quote: string;
      bookMeeting: string;
      whatsapp: string;
    };
    starter: {
      title: string;
      subtitle: string;
      price: string;
      perMonth: string;
      b1: string;
      b2: string;
      b3: string;
      b4: string;
      b5: string;
    };
    growth: {
      title: string;
      subtitle: string;
      price: string;
      perMonth: string;
      b1: string;
      b2: string;
      b3: string;
      b4: string;
      b5: string;
    };
    custom: {
      title: string;
      subtitle: string;
      price: string;
      perMonth: string;
      b1: string;
      b2: string;
      b3: string;
      b4: string;
      b5: string;
    };
  };
  portfolio: {
    karim: string;
    raphael: string;
  };
}

export const translations: Record<Language, Translation> = {
  fr: {
    nav: {
      language: 'Langue',
      darkZone: 'Dark Zone',
      menu: { open: 'Ouvrir le menu', close: 'Fermer le menu' },
      social: {
        tiktok: 'TikTok',
        instagram: 'Instagram',
        fiverr: 'Fiverr',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    hero: {
      title: 'KR Global LTD — Connecter l\'innovation au monde',
      subtitle: 'Solutions digitales, e-commerce et technologies pour demain.',
      buttons: {
        boutique: 'Notre Boutique',
        services: 'Nos Services',
        blog: 'Blog & Actus',
        equipe: 'Notre Équipe',
        invest: 'Espace Investisseurs',
      },
    },
    about: {
      title: 'À propos de KR Global Solutions LTD',
      content: 'KR Global LTD est une entreprise innovante spécialisée dans les solutions digitales et l\'e-commerce. Nous connectons les technologies de pointe aux besoins du marché mondial, offrant des services sur mesure pour accompagner nos clients dans leur transformation numérique. Notre équipe passionnée développe des solutions performantes qui favorisent la croissance et l\'innovation. Nous nous engageons à créer un impact positif en rendant la technologie accessible et utile pour tous, partout dans le monde.',
    },
    common: {
      links: {
        blog: 'Blog & Actus',
        shop: 'Notre Boutique',
        team: 'Notre Équipe',
        services: 'Nos Services',
        investors: 'Espace investisseurs',
      },
    },
    contact: {
      title: 'Contactez-nous',
      name: 'Nom complet',
      email: 'Adresse e-mail',
      message: 'Votre message',
      submit: 'Envoyer le message',
      success: 'Message envoyé avec succès ! Nous vous recontacterons bientôt.',
      whatsapp: 'WhatsApp Business',
      errors: {
        nameRequired: 'Le nom est requis',
        emailRequired: 'L\'e-mail est requis',
        emailInvalid: 'Format d\'e-mail invalide',
        messageRequired: 'Le message est requis',
      },
    },
    footer: {
      legal: 'Mentions légales',
      copyright: '© KR Global LTD 2025',
      legalNotice: 'KR GLOBAL SOLUTIONS LTD · Company No. 16517532 · 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK · Private Limited Company\nDirectors: Karim Hammouche & Raphaël Theuillon · SIC: 46190 · 47910 · 62012 · 62090 · Email: karim@karimhammouche.com',
      social: {
        tiktok: 'TikTok',
        instagram: 'Instagram',
        fiverr: 'Fiverr',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    offers: {
      title: 'Offres & Prestations',
      subtitle: 'Choisissez un pack selon votre objectif. Les tarifs sont “à partir de” et ajustés selon votre contexte.',
      whichPack: 'Quel pack est fait pour vous ?',
      tag: { basique: 'Basique', populaire: 'Populaire', premium: 'Premium' },
      badge: {
        fast: 'Rapide',
        basic: 'Basique',
        onboarding: 'Prise en main',
        site: 'Site',
        social: 'Social',
        ai: 'IA',
        integrations: 'Intégrations',
        aiAdvanced: 'IA avancée',
        automations: 'Automations',
      },
      cta: {
        startNow: 'Je commence aujourd’hui',
        bookPack: 'Réserver ce pack',
        quote: 'Obtenir mon devis gratuit',
        bookMeeting: 'Réserver un RDV',
        whatsapp: 'WhatsApp',
      },
      starter: {
        title: 'Pack Découverte',
        subtitle: 'Lancez-vous dès aujourd’hui',
        price: 'à partir de 49€',
        perMonth: '',
        b1: 'Visuel unique (logo simple / bannière / 3 posts)',
        b2: 'Landing 1 section (Héros + CTA + formulaire)',
        b3: 'Mini-workflow (Form → Email)',
        b4: 'Montage vidéo ≤45s ou 10 retouches photo',
        b5: 'Visio 30 min + notes d’actions',
      },
      growth: {
        title: 'Pack Croissance',
        subtitle: 'Passez à la vitesse supérieure',
        price: 'à partir de 249€',
        perMonth: 'ou 3× 89€/mois',
        b1: 'Mini-site 3 sections (SEO base + analytics)',
        b2: '15 posts + 1 micro‑vidéo (calendrier Notion)',
        b3: 'Workflow utile (Form → Sheets + email + notif)',
        b4: 'Vidéo ≤90s ou 20 retouches (cut + transitions)',
        b5: 'Audit express + plan 30/60/90 (visio 45 min)',
      },
      custom: {
        title: 'Pack Sur‑mesure',
        subtitle: 'Votre projet clé en main',
        price: 'à partir de 799€',
        perMonth: 'ou 3× 270€/mois',
        b1: 'Site 5–7 sections / Petite boutique (Stripe + 2 automatisations)',
        b2: 'Gestion réseaux 1 mois (30 posts, 4 reels, 1 ads)',
        b3: 'Ops simple (x3 workflows) + dashboard Notion/Sheets',
        b4: 'Agent IA avancé (RAG + multi‑langues)',
        b5: 'Setup express (checklists + modèles + banques)',
      },
    },
    portfolio: {
      karim: 'Portfolio Karim',
      raphael: 'Portfolio Raphaël',
    },
  },
  en: {
    nav: {
      language: 'Language',
      darkZone: 'Dark Zone',
      menu: { open: 'Open menu', close: 'Close menu' },
      social: {
        tiktok: 'TikTok',
        instagram: 'Instagram',
        fiverr: 'Fiverr',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    hero: {
      title: 'KR Global LTD — Connecting innovation to the world',
      subtitle: 'Digital solutions, e-commerce and technologies for tomorrow.',
      buttons: {
        boutique: 'Our Store',
        services: 'Our Services',
        blog: 'Blog & News',
        equipe: 'Our Team',
        invest: 'Investor Space',
      },
    },
    about: {
      title: 'About KR Global Solutions LTD',
      content: 'KR Global LTD is an innovative company specializing in digital solutions and e-commerce. We connect cutting-edge technologies to global market needs, offering tailored services to support our clients in their digital transformation. Our passionate team develops high-performance solutions that drive growth and innovation. We are committed to creating positive impact by making technology accessible and useful for everyone, everywhere in the world.',
    },
    common: {
      links: {
        blog: 'Blog & News',
        shop: 'Our Shop',
        team: 'Our Team',
        services: 'Our Services',
        investors: 'Investors Space',
      },
    },
    contact: {
      title: 'Contact us',
      name: 'Full name',
      email: 'Email address',
      message: 'Your message',
      submit: 'Send message',
      success: 'Message sent successfully! We will get back to you soon.',
      whatsapp: 'WhatsApp Business',
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email format',
        messageRequired: 'Message is required',
      },
    },
    footer: {
      legal: 'Legal notice',
      copyright: '© KR Global LTD 2025',
      legalNotice: 'KR GLOBAL SOLUTIONS LTD · Company No. 16517532 · 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK · Private Limited Company\nDirectors: Karim Hammouche & Raphaël Theuillon · SIC: 46190 · 47910 · 62012 · 62090 · Email: karim@karimhammouche.com',
      social: {
        tiktok: 'TikTok',
        instagram: 'Instagram',
        fiverr: 'Fiverr',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    offers: {
      title: 'Offers & Services',
      subtitle: 'Pick a pack for your goal. Prices are “from” and adjusted to your context.',
      whichPack: 'Which pack is right for you?',
      tag: { basique: 'Basic', populaire: 'Popular', premium: 'Premium' },
      badge: {
        fast: 'Fast',
        basic: 'Basic',
        onboarding: 'Onboarding',
        site: 'Website',
        social: 'Social',
        ai: 'AI',
        integrations: 'Integrations',
        aiAdvanced: 'Advanced AI',
        automations: 'Automations',
      },
      cta: {
        startNow: 'Start today',
        bookPack: 'Book this pack',
        quote: 'Get my free quote',
        bookMeeting: 'Book a meeting',
        whatsapp: 'WhatsApp',
      },
      starter: {
        title: 'Starter Pack',
        subtitle: 'Get launched today',
        price: 'from €49',
        perMonth: '',
        b1: 'One visual (simple logo / banner / 3 posts)',
        b2: 'One-section landing (Hero + CTA + form)',
        b3: 'Mini-workflow (Form → Email)',
        b4: 'Video edit ≤45s or 10 photo edits',
        b5: '30-min call + action notes',
      },
      growth: {
        title: 'Growth Pack',
        subtitle: 'Shift into higher gear',
        price: 'from €249',
        perMonth: 'or 3× €89/mo',
        b1: 'Mini-site 3 sections (basic SEO + analytics)',
        b2: '15 posts + 1 micro-video (Notion calendar)',
        b3: 'Useful workflow (Form → Sheets + email + notif)',
        b4: 'Video ≤90s or 20 edits (cuts + transitions)',
        b5: 'Express audit + 30/60/90 plan (45-min call)',
      },
      custom: {
        title: 'Custom Pack',
        subtitle: 'Turn-key project',
        price: 'from €799',
        perMonth: 'or 3× €270/mo',
        b1: '5–7-section site / Small shop (Stripe + 2 automations)',
        b2: '1-month social mgmt (30 posts, 4 reels, 1 ad)',
        b3: 'Simple ops (x3 workflows) + Notion/Sheets dashboard',
        b4: 'Advanced AI agent (RAG + multi-language)',
        b5: 'Express setup (checklists + templates + banks)',
      },
    },
    portfolio: {
      karim: "Karim's Portfolio",
      raphael: "Raphaël's Portfolio",
    },
  },
};
