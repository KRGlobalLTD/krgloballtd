export default function BookCta() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const prefix = pathname.startsWith('/en') ? '/en' : '';
  const isEN = prefix === '/en';

  return (
      <a href={`${prefix}/book`} className="btn btn-primary">
        {isEN ? 'Book 30 min' : 'RDV 30 min'}
      </a>
  );
}
