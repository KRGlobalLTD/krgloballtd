'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

type Item = { label: string; href: string; external?: boolean; ariaLabel?: string };

export default function OrbitMenuDynamic({
  items,
  baseRadius = { sm: 110, md: 150, lg: 190 },
  gap = 16,
  className = '',
}: {
  items: Item[];
  baseRadius?: { sm: number; md: number; lg: number };
  gap?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [radius, setRadius] = useState({ sm: baseRadius.sm, md: baseRadius.md, lg: baseRadius.lg });
  const [active, setActive] = useState<number | null>(null);

  const angles = useMemo(() => {
    const step = (2 * Math.PI) / items.length;
    return items.map((_, i) => i * step);
  }, [items]);

  useEffect(() => {
    const calc = () => {
      const widths = itemRefs.current.map((el) => (el ? el.getBoundingClientRect().width : 0));
      const container = containerRef.current?.getBoundingClientRect();
      const minSide = container ? Math.min(container.width, container.height) : 0;

      const delta = (2 * Math.PI) / Math.max(1, items.length);
      const need = Math.max(...widths.map((w) => (w + gap) / delta));

      const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const floor = vw >= 1024 ? baseRadius.lg : vw >= 768 ? baseRadius.md : baseRadius.sm;

      const cap = minSide ? Math.max(60, minSide / 2 - 24) : Infinity;

      const r = Math.min(Math.max(need, floor), cap);

      setRadius({
        sm: r,
        md: r,
        lg: r,
      });
    };

    const id = requestAnimationFrame(calc);

    let to: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(to);
      to = setTimeout(calc, 100);
    };
    window.addEventListener('resize', onResize);

    const ro = new ResizeObserver(() => onResize());
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, [items.length, gap, baseRadius.sm, baseRadius.md, baseRadius.lg]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      onMouseEnter={() => setActive(-1)}
      onMouseLeave={() => setActive(null)}
    >
      <div className="orbit-rotor">
        {items.map((it, i) => (
          <OrbitItem
            key={i}
            refEl={(el) => (itemRefs.current[i] = el)}
            angle={angles[i]}
            label={it.label}
            href={it.href}
            external={it.external}
            ariaLabel={it.ariaLabel ?? it.label}
            r={radius.lg}
            active={active === i}
            setActive={setActive}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes orbit-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .orbit-rotor {
          position: absolute; inset: 0;
          animation: orbit-spin 30s linear infinite;
          will-change: transform;
        }
        .relative:hover .orbit-rotor, .relative:focus-within .orbit-rotor { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .orbit-rotor { animation: none; } }
      `}</style>
    </div>
  );
}

function OrbitItem({
  refEl,
  angle,
  label,
  href,
  external,
  ariaLabel,
  r,
  active,
  setActive,
}: {
  refEl: (el: HTMLAnchorElement | null) => void;
  angle: number;
  label: string;
  href: string;
  external?: boolean;
  ariaLabel: string;
  r: number;
  active: boolean;
  setActive: (i: number | null) => void;
}) {
  const transform = `rotate(${angle}rad) translateX(${r}px) rotate(${-angle}rad)`;
  const transformHover = `rotate(${angle}rad) translateX(${r + 12}px) rotate(${-angle}rad)`;

  return (
    <div className="absolute left-1/2 top-1/2">
      <div className="orbit-pos" style={{ transform }}>
        <a
          ref={refEl}
          href={href}
          aria-label={ariaLabel}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="group inline-flex items-center justify-center rounded-2xl bg-white text-black shadow-md
                     px-4 py-2 min-h-[40px] select-none transition-all duration-200 ease-out
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          onMouseEnter={() => setActive(1)}
          onMouseLeave={() => setActive(-1)}
          style={{
            boxShadow: active ? '0 8px 22px rgba(0,0,0,0.18)' : '0 4px 12px rgba(0,0,0,0.12)',
            transform: active ? transformHover : transform,
          }}
        >
          <span className="truncate max-w-[120px] sm:max-w-[160px]">{label}</span>
          <span aria-hidden className="ml-2 opacity-0 translate-x-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
}
