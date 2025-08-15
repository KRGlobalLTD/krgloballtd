import React from 'react';
import SocialLinks from '@/components/SocialLinks';
import { useBooking } from '@/context/BookingContext';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { openBooking } = useBooking();
  const { t } = useTranslation();
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const prefix = pathname.startsWith('/en') ? '/en' : '';

  const links = [
    {
      label: "contact@krglobalsolutionsltd.com",
      href: "mailto:contact@krglobalsolutionsltd.com",
      className: "break-all",
    },
    { label: "Mentions légales", href: `${prefix}/mentions-legales` },
  ];

  return (
    <footer id="site-footer" className="bg-black text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start text-sm">
        <div className="flex flex-col gap-2 w-full min-w-0">
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} className={link.className}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
          <div className="flex flex-col sm:items-end gap-2 w-full min-w-0">
            <SocialLinks variant="footer" size={22} className="justify-center sm:justify-end" />
            <button className="btn-primary mt-4" onClick={openBooking}>
              {t('booking.buttonCall')}
            </button>
          </div>
      </div>
    </footer>
  );
}
