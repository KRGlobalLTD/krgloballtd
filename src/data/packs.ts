export type Pack = {
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

export const packs: Pack[] = [
  {
    id: "starter",
    tag: "Basique",
    titleKey: "offers.starter.title",
    subtitleKey: "offers.starter.subtitle",
    priceKey: "offers.starter.price",
    badges: ["offers.badge.fast", "offers.badge.basic", "offers.badge.onboarding"],
    bullets: [
      "offers.starter.b1",
      "offers.starter.b2",
      "offers.starter.b3",
      "offers.starter.b4",
      "offers.starter.b5"
    ],
    ctas: {
      primary: { labelKey: "offers.cta.startNow", href: "#contact" },
      whatsapp: { labelKey: "offers.cta.whatsapp", href: "https://wa.me/33743561304" }
    }
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
      "offers.growth.b5"
    ],
    ctas: {
      primary: { labelKey: "offers.cta.bookPack", href: "#contact" },
      whatsapp: { labelKey: "offers.cta.whatsapp", href: "https://wa.me/33743561304" }
    }
  },
  {
    id: "custom",
    tag: "Premium",
    titleKey: "offers.custom.title",
    subtitleKey: "offers.custom.subtitle",
    priceKey: "offers.custom.price",
    perMonthKey: "offers.custom.perMonth",
    badges: ["offers.badge.integrations", "offers.badge.aiAdvanced", "offers.badge.automations"],
    bullets: [
      "offers.custom.b1",
      "offers.custom.b2",
      "offers.custom.b3",
      "offers.custom.b4",
      "offers.custom.b5"
    ],
    ctas: {
      primary: { labelKey: "offers.cta.quote", href: "#contact" },
      secondary: { labelKey: "offers.cta.bookMeeting", href: "#contact" },
      whatsapp: { labelKey: "offers.cta.whatsapp", href: "https://wa.me/33743561304" }
    }
  }
];
