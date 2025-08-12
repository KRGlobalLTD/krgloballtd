import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./en/index.json";
import frCommon from "./fr/index.json";
import enCards from "./en/cards.json";
import frCards from "./fr/cards.json";
import enFaq from "./en/faq.json";
import frFaq from "./fr/faq.json";

const resources = {
  en: { translation: { ...enCommon, cards: enCards, faq: enFaq } },
  fr: { translation: { ...frCommon, cards: frCards, faq: frFaq } },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "fr",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    returnEmptyString: false,
  });
}
export default i18n;
