export const CALENDLY = {
  fr: "https://calendly.com/krglobalsolutionsltd/30min",
  en: "https://calendly.com/krglobalsolutionsltd/30-minute-meeting-clone",
  /**
   * Sélecteur CSS optionnel pour cibler le bouton de la DERNIÈRE CARD (Pack Sur‑mesure)
   * afin d'ouvrir le MODAL au lieu d'un nouvel onglet.
   * 
   * Exemples possibles (n'en garder qu'UN, ajuste si tu as un data-attr) :
   * - '[data-pack="surmesure"] [data-calendly="30min"]'
   * - '.pricing-grid .card:last-of-type [data-calendly="30min"]'
   */
  modalTargetSelector: '.pricing-grid .card:last-of-type [data-calendly="30min"]',
};
