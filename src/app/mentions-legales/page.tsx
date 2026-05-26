import React, { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

function LegalFR() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-10">Mentions légales</h1>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">1. Éditeur du site</h2>
        <p>Raison sociale : <strong>KR GLOBAL SOLUTIONS LTD</strong></p>
        <p>Forme juridique : Private Limited Company (Angleterre &amp; Pays de Galles)</p>
        <p>Numéro d'immatriculation (Companies House) : <strong>16517532</strong></p>
        <p>Date d'immatriculation : 13 juin 2025</p>
        <p>Siège social : 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, Royaume-Uni</p>
        <p>Activités (codes SIC) : 46190 · 47910 · 62012 · 62090</p>
        <p>
          E-mail :{' '}
          <a href="mailto:contact@krglobalsolutionsltd.com" className="text-white/70 hover:text-white underline">
            contact@krglobalsolutionsltd.com
          </a>
        </p>
        <p>
          Site web :{' '}
          <a href="https://krglobalsolutionsltd.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white underline">
            https://krglobalsolutionsltd.com
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">2. Hébergement</h2>
        <p>
          Ce site est hébergé sur une infrastructure cloud professionnelle. L'hébergeur met en œuvre
          les mesures techniques nécessaires pour assurer la continuité de service et la sécurité des
          données conformément aux pratiques du secteur.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">3. Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site (textes, images, visuels, code source,
          logotypes) sont la propriété exclusive de KR GLOBAL SOLUTIONS LTD ou de ses concédants de
          licence. Toute reproduction, représentation, modification, publication ou adaptation, totale
          ou partielle, est strictement interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">4. Limitation de responsabilité</h2>
        <p>
          KR GLOBAL SOLUTIONS LTD s'efforce d'assurer l'exactitude et la mise à jour des informations
          diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, l'exhaustivité ou
          l'actualité des informations, et décline toute responsabilité pour tout dommage direct ou
          indirect résultant de l'accès au site ou de son utilisation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">5. Liens hypertextes</h2>
        <p>
          Ce site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre
          informatif uniquement. KR GLOBAL SOLUTIONS LTD n'exerce aucun contrôle sur ces sites et
          décline toute responsabilité quant à leur contenu, leur disponibilité ou leur politique de
          confidentialité.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">6. Données personnelles &amp; cookies</h2>
        <p>
          KR GLOBAL SOLUTIONS LTD collecte uniquement les données strictement nécessaires au bon
          fonctionnement du site et au traitement des demandes de contact. Ces données ne sont pas
          cédées à des tiers à des fins commerciales. Conformément au Règlement Général sur la
          Protection des Données (RGPD – Règlement UE 2016/679) et au UK GDPR, vous disposez d'un
          droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour
          exercer ces droits, contactez-nous à{' '}
          <a href="mailto:contact@krglobalsolutionsltd.com" className="text-white/70 hover:text-white underline">
            contact@krglobalsolutionsltd.com
          </a>.
        </p>
        <p className="mt-3">
          Des cookies techniques peuvent être utilisés à des fins de bon fonctionnement du site et de
          statistiques anonymes. Aucun cookie publicitaire ou de traçage tiers n'est déposé sans votre
          consentement explicite.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">7. Droit applicable</h2>
        <p>
          Le présent site et ses mentions légales sont soumis au droit anglais (England &amp; Wales).
          Tout litige relatif à l'utilisation de ce site sera soumis à la compétence exclusive des
          tribunaux anglais, sauf disposition légale contraire applicable au consommateur.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">8. Contact</h2>
        <p>
          Pour toute question relative aux présentes mentions légales ou à l'utilisation de vos
          données personnelles, contactez-nous :{' '}
          <a href="mailto:contact@krglobalsolutionsltd.com" className="text-white/70 hover:text-white underline">
            contact@krglobalsolutionsltd.com
          </a>
        </p>
      </section>
    </>
  );
}

function LegalEN() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-10">Legal Notice</h1>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">1. Publisher</h2>
        <p>Company name: <strong>KR GLOBAL SOLUTIONS LTD</strong></p>
        <p>Legal form: Private Limited Company (England &amp; Wales)</p>
        <p>Companies House registration number: <strong>16517532</strong></p>
        <p>Incorporation date: 13 June 2025</p>
        <p>Registered office: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
        <p>Business activities (SIC codes): 46190 · 47910 · 62012 · 62090</p>
        <p>
          Email:{' '}
          <a href="mailto:contact@krglobalsolutionsltd.com" className="text-white/70 hover:text-white underline">
            contact@krglobalsolutionsltd.com
          </a>
        </p>
        <p>
          Website:{' '}
          <a href="https://krglobalsolutionsltd.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white underline">
            https://krglobalsolutionsltd.com
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">2. Hosting</h2>
        <p>
          This website is hosted on professional cloud infrastructure. The hosting provider implements
          the technical measures necessary to ensure service continuity and data security in accordance
          with industry best practices.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">3. Intellectual Property</h2>
        <p>
          All content on this website (text, images, visuals, source code, logos) is the exclusive
          property of KR GLOBAL SOLUTIONS LTD or its licensors. Any reproduction, representation,
          modification, publication or adaptation, in whole or in part, is strictly prohibited without
          prior written authorisation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">4. Limitation of Liability</h2>
        <p>
          KR GLOBAL SOLUTIONS LTD endeavours to ensure the accuracy and currency of the information
          published on this website. However, it cannot guarantee the accuracy, completeness or
          timeliness of the information, and accepts no liability for any direct or indirect loss
          arising from access to or use of the website.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">5. External Links</h2>
        <p>
          This website may contain links to third-party websites. These links are provided for
          informational purposes only. KR GLOBAL SOLUTIONS LTD has no control over those websites and
          accepts no responsibility for their content, availability or privacy practices.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">6. Personal Data &amp; Cookies</h2>
        <p>
          KR GLOBAL SOLUTIONS LTD collects only the data strictly necessary for the proper operation
          of the website and for processing contact requests. This data is not sold to third parties
          for commercial purposes. In accordance with the UK GDPR and the EU General Data Protection
          Regulation (Regulation 2016/679), you have the right to access, rectify, erase and port your
          personal data. To exercise these rights, contact us at{' '}
          <a href="mailto:contact@krglobalsolutionsltd.com" className="text-white/70 hover:text-white underline">
            contact@krglobalsolutionsltd.com
          </a>.
        </p>
        <p className="mt-3">
          Technical cookies may be used for proper website functioning and anonymous statistics. No
          advertising or third-party tracking cookies are placed without your explicit consent.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">7. Governing Law</h2>
        <p>
          This website and its legal notice are governed by the laws of England and Wales. Any dispute
          relating to the use of this website shall be subject to the exclusive jurisdiction of the
          English courts, unless mandatory consumer protection laws provide otherwise.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">8. Contact</h2>
        <p>
          For any questions regarding this legal notice or the use of your personal data, please
          contact us at:{' '}
          <a href="mailto:contact@krglobalsolutionsltd.com" className="text-white/70 hover:text-white underline">
            contact@krglobalsolutionsltd.com
          </a>
        </p>
      </section>
    </>
  );
}

export default function LegalPage() {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    document.title =
      currentLanguage === 'fr'
        ? 'Mentions légales – KR GLOBAL SOLUTIONS LTD'
        : 'Legal Notice – KR GLOBAL SOLUTIONS LTD';
  }, [currentLanguage]);

  return (
    <div className="min-h-screen bg-black">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-sm text-neutral-400 leading-relaxed space-y-2">
        {currentLanguage === 'fr' ? <LegalFR /> : <LegalEN />}
        <p className="text-xs text-neutral-700 pt-8 border-t border-white/[0.06]">
          {currentLanguage === 'fr'
            ? `Dernière mise à jour : mai 2025`
            : `Last updated: May 2025`}
        </p>
      </main>
    </div>
  );
}
