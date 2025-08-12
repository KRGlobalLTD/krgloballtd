import OrbitBall from '@/components/OrbitBall';
import { Translation } from '@/data/translations';

interface Props {
  t: Translation;
}

export function AboutBallWithLinks({ t }: Props) {
  const links = [
    { label: t.hero.buttons.blog, href: 'https://blog.krglobal.com' },
    { label: t.hero.buttons.equipe, href: 'https://equipe.krglobal.com' },
    { label: t.hero.buttons.boutique, href: 'https://laboutique.krglobal.com' },
    { label: t.hero.buttons.services, href: 'https://services.krglobal.com' },
    { label: t.hero.buttons.invest, href: 'https://invest.krglobal.com' },
  ];

  return (
    <section className="py-10 md:py-12" id="about-links">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <OrbitBall />
          </div>
          <div className="grid gap-3 justify-start">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-sm transition hover:translate-x-0.5"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
