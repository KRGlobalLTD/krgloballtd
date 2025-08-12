export default function BookCta() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const prefix = pathname.startsWith('/en') ? '/en' : '';
  const isEN = prefix === '/en';

  return (
    <a href={`${prefix}/book`} className="btn btn-primary">
      {isEN ? 'Book a call' : 'Réserver un RDV'}
    </a>
  );
}
