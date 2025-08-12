type Badge = { label: string };
type Item = { label: string };
type CTA = { label: string; href: string; variant?: "primary" | "outline" };

export function PackCard({
  title, subtitle, price, badges = [], items = [], ctas = [],
}: {
  title: string; subtitle: string; price: string;
  badges?: Badge[]; items?: Item[]; ctas?: CTA[];
}) {
  return (
    <div className="rounded-3xl bg-neutral-900 text-white p-5 border border-white/10 shadow-lg">
      <div className="flex items-center gap-2 mb-3">
        {badges.map((b, i) => (
          <span key={i} className="inline-flex text-xs px-2 py-1 rounded-full bg-white/10">{b.label}</span>
        ))}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-white/70">{subtitle}</p>
      <p className="mt-3 text-3xl font-extrabold">{price}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2"><span>•</span><span>{it.label}</span></li>
        ))}
      </ul>
      <div className="mt-5 flex gap-3 flex-wrap">
        {ctas.map((c, i) => (
          <a key={i} href={c.href}
             className={
               c.variant === "outline"
                 ? "rounded-xl border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
                 : "rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-white/90"
             }>
            {c.label}
          </a>
        ))}
      </div>
    </div>
  );
}

