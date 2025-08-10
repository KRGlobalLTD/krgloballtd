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
      title: 'À propos de KR Global LTD',
      content: 'KR Global LTD est une entreprise innovante spécialisée dans les solutions digitales et l\'e-commerce. Nous connectons les technologies de pointe aux besoins du marché mondial, offrant des services sur mesure pour accompagner nos clients dans leur transformation numérique. Notre équipe passionnée développe des solutions performantes qui favorisent la croissance et l\'innovation. Nous nous engageons à créer un impact positif en rendant la technologie accessible et utile pour tous, partout dans le monde.',
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
      title: 'About KR Global LTD',
      content: 'KR Global LTD is an innovative company specializing in digital solutions and e-commerce. We connect cutting-edge technologies to global market needs, offering tailored services to support our clients in their digital transformation. Our passionate team develops high-performance solutions that drive growth and innovation. We are committed to creating positive impact by making technology accessible and useful for everyone, everywhere in the world.',
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
    portfolio: {
      karim: "Karim's Portfolio",
      raphael: "Raphaël's Portfolio",
    },
  },
};