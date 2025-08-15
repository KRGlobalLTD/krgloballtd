import React from "react";
import { useTranslation } from "react-i18next";

interface CalendlyButtonProps {
  className?: string;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({ className }) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  const calendlyLinks: Record<string, string> = {
    en: "https://calendly.com/krglobalsolutionsltd/30-minute-meeting-clone",
    fr: "https://calendly.com/krglobalsolutionsltd/30min",
  };

  const calendlyUrl = calendlyLinks[lang] || calendlyLinks.en;

  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/80 transition-colors ${className}`}
    >
      {t("bookMeeting")}
    </a>
  );
};

export default CalendlyButton;

