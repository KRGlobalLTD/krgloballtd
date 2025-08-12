import React, { useEffect } from 'react';

export default function LegalPage() {
  useEffect(() => {
    document.title = 'Mentions légales – KR GLOBAL SOLUTIONS LTD';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Informations légales de KR GLOBAL SOLUTIONS LTD');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-4 py-12 prose prose-invert dark:prose-invert">
        <h1>Mentions légales</h1>

        <h2>🇫🇷 Version française</h2>
        <p>Éditeur du site : KR GLOBAL SOLUTIONS LTD (Angleterre & Pays de Galles)</p>
        <p>N° d’immatriculation (Companies House) : 16517532</p>
        <p>Date d’immatriculation : 13 juin 2025</p>
        <p>Siège social : 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK</p>
        <p>Activités (SIC) : 46190, 47910, 62012, 62090</p>
        <p>Représentant légal : La direction de KR GLOBAL SOLUTIONS LTD</p>
        <p>
          E‑mail :{' '}
          <a href="mailto:contact@krglobalsolutionsltd.com">contact@krglobalsolutionsltd.com</a>
        </p>
        <p>
          Site :{' '}
          <a
            href="https://krglobalsolutionsltd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://krglobalsolutionsltd.com
          </a>
        </p>
        <h3>Hébergement</h3>
        <p>
          Le site est hébergé sur des infrastructures spécialisées. Toutes les données sont
          stockées et traitées avec les soins nécessaires.
        </p>
        <h3>Propriété intellectuelle</h3>
        <p>
          Le contenu du site est protégé par les lois en vigueur sur la propriété intellectuelle.
          Toute reproduction est interdite sans autorisation préalable.
        </p>
        <h3>Responsabilité</h3>
        <p>
          KR GLOBAL SOLUTIONS LTD ne peut être tenue responsable des dommages directs ou indirects
          résultant de l'utilisation du site.
        </p>
        <h3>Liens externes</h3>
        <p>
          Les liens externes sont fournis à titre informatif. KR GLOBAL SOLUTIONS LTD n'assume
          aucune responsabilité quant à leur contenu.
        </p>
        <h3>Données personnelles & cookies</h3>
        <p>
          Les données collectées sont utilisées uniquement pour assurer le bon fonctionnement du
          site. Les cookies peuvent être utilisés à des fins de statistiques anonymes.
        </p>
        <h3>Contact</h3>
        <p>
          Pour toute question, veuillez nous contacter à l'adresse suivante :{' '}
          <a href="mailto:contact@krglobalsolutionsltd.com">contact@krglobalsolutionsltd.com</a>.
        </p>

        <hr />

        <h2>🇬🇧 English version</h2>
        <p>Website publisher: KR GLOBAL SOLUTIONS LTD (England & Wales)</p>
        <p>Registration No. (Companies House): 16517532</p>
        <p>Incorporation date: 13 June 2025</p>
        <p>Registered office: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK</p>
        <p>Business activities (SIC): 46190, 47910, 62012, 62090</p>
        <p>Legal representative: The management of KR GLOBAL SOLUTIONS LTD</p>
        <p>
          E‑mail: <a href="mailto:contact@krglobalsolutionsltd.com">contact@krglobalsolutionsltd.com</a>
        </p>
        <p>
          Website:{' '}
          <a
            href="https://krglobalsolutionsltd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://krglobalsolutionsltd.com
          </a>
        </p>
        <h3>Hosting</h3>
        <p>
          The site is hosted on professional infrastructure. All data is stored and processed with
          due care.
        </p>
        <h3>Intellectual property</h3>
        <p>
          The content of the site is protected by applicable intellectual property laws. Any
          reproduction requires prior authorization.
        </p>
        <h3>Liability</h3>
        <p>
          KR GLOBAL SOLUTIONS LTD cannot be held liable for direct or indirect damages resulting
          from the use of the site.
        </p>
        <h3>External links</h3>
        <p>
          External links are provided for convenience only. KR GLOBAL SOLUTIONS LTD does not
          endorse or assume responsibility for their content.
        </p>
        <h3>Personal data & cookies</h3>
        <p>
          Data collected is used solely to ensure the proper functioning of the site. Cookies may be
          used for anonymous statistical purposes.
        </p>
        <h3>Contact</h3>
        <p>
          For any inquiries, please contact us at:{' '}
          <a href="mailto:contact@krglobalsolutionsltd.com">contact@krglobalsolutionsltd.com</a>.
        </p>
      </main>
    </div>
  );
}
