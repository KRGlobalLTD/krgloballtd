import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { useTranslation } from 'react-i18next';
import { Translation } from '../data/translations';

interface ContactProps {
  t: Translation;
}

export default function Contact({ t }: ContactProps) {
  const { openBooking } = useBooking();
  const { t: tI18n } = useTranslation();
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold">{t.contact.title}</h2>
        <div className="mt-6">
          <button className="btn-primary" onClick={openBooking}>
            {tI18n('booking.buttonCall')}
          </button>
        </div>
    </section>
  );
}
