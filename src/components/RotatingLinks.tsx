"use client";
import OrbitMenuDynamic from "@/components/OrbitMenuDynamic";
import { socialLinks } from "@/components/SocialLinks";

export default function RotatingLinks() {
  const isSocial = (href: string) =>
    /instagram\.com|tiktok\.com|linkedin\.com|github\.com|fiverr\.com/i.test(href);
  const items = socialLinks
    .filter((s) => !isSocial(s.href))
    .map((s) => ({ label: s.label, href: s.href, external: true, ariaLabel: s.label }));
  if (items.length === 0) return null;
  return (
    <section className="w-full bg-[#0B0B0C] py-12">
      <div className="relative mx-auto flex h-64 w-full max-w-xl items-center justify-center">
        <OrbitMenuDynamic items={items} />
      </div>
    </section>
  );
}
