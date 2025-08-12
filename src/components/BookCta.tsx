import { useTranslation } from "react-i18next";

export default function BookCta() {
  const { t } = useTranslation();
  return (
    <a href="/book" className="btn btn-primary">
      {t('buttons.bookCall')}
    </a>
  );
}
