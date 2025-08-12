import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useLanguage } from '@/hooks/useLanguage';
import { Translation } from '@/data/translations';

export type LinkPillProps = {
  i18nKey: string; // ex: "common.links.blog"
  href: string;
  className?: string;
  stickyToCenterOnClick?: boolean;
  onCentered?: () => void;
  t?: Translation;
};

export default function LinkPill({
  i18nKey,
  href,
  className,
  stickyToCenterOnClick = true,
  onCentered,
  t: tOverride,
}: LinkPillProps) {
  const { t: langT } = useLanguage();
  const source = (tOverride as unknown as Record<string, unknown>) || (langT as unknown as Record<string, unknown>);

  const label = i18nKey
    .split('.')
    .reduce<unknown>((acc, key) => {
      if (acc && typeof acc === 'object' && key in acc) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, source) as string | undefined || i18nKey;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!stickyToCenterOnClick) return;
    e.currentTarget.dispatchEvent(new CustomEvent('pill-center', { bubbles: true }));
    onCentered?.();
  };

  const pillClasses = clsx(
    'inline-flex select-none items-center justify-center rounded-full shadow-lg px-5 py-3',
    'bg-white text-black dark:bg-neutral-900 dark:text-white',
    'border border-black/5 dark:border-white/10',
    'hover:shadow-xl active:scale-[0.98]',
    'focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white',
    className
  );

  const isDisabled = href === '#';

  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ type: 'spring', damping: 18, stiffness: 160 }}
      className={pillClasses}
    >
      <a
        href={href}
        onClick={handleClick}
        aria-label={label}
        title={isDisabled ? 'À venir' : undefined}
        aria-disabled={isDisabled}
        className="font-medium"
      >
        {label}
      </a>
    </motion.div>
  );
}
