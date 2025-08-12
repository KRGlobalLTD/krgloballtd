import React, { useEffect, useRef } from 'react';
import LinkPill from './LinkPill';
import { Translation } from '@/data/translations';

const candidateNames = [
  'OrbitBall',
  'Orb',
  'Planet',
  'Ball',
  'Boule',
  'Circle',
  'Blob',
  'Galaxy',
  'GlowSphere',
  'StarPlanet',
  'HaloOrb',
];

const modules = import.meta.glob<{ default: React.ComponentType }>(
  './*.{ts,tsx,js,jsx}',
  { eager: true }
);
let OrbComp: React.ComponentType | null = null;
for (const path in modules) {
  const name = path.split('/').pop()?.replace(/\.(ts|tsx|js|jsx)$/i, '');
  if (name && candidateNames.includes(name)) {
    OrbComp = modules[path].default;
    break;
  }
}

interface Props {
  t: Translation;
}

export default function AboutOrbLinks({ t }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onCenter = () => {
      const orb = el.querySelector('[data-orb]') as HTMLElement | null;
      orb?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    };
    el.addEventListener('pill-center', onCenter as EventListener);
    return () => el.removeEventListener('pill-center', onCenter as EventListener);
  }, []);

  const Orb = OrbComp;

  return (
    <div ref={containerRef} className="relative w-full mt-16 mb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <div className="flex items-center justify-center md:justify-start">
          <div className="relative" data-orb>
            {Orb ? (
              <div className="[&_*>]:!max-w-full">
                <Orb />
              </div>
            ) : (
              <div className="h-40 w-40 rounded-full bg-black dark:bg-white/10 shadow-2xl" />
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 gap-y-4 justify-items-start z-10">
          <LinkPill i18nKey="common.links.services" href="#" t={t} />
          <LinkPill i18nKey="common.links.investors" href="#" t={t} />
          <LinkPill i18nKey="common.links.blog" href="#" t={t} />
          <LinkPill i18nKey="common.links.shop" href="#" t={t} />
          <LinkPill i18nKey="common.links.team" href="#" t={t} />
        </div>
      </div>

      <div className="pointer-events-none md:hidden h-14" />
    </div>
  );
}
