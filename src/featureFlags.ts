// SAFE-GUARD: feature flags for experimental options
const env = import.meta.env as Record<string, string>;
const toBool = (v: string | undefined) => (v ?? '').toString().toLowerCase() === 'true';

export const ENABLE_DZ_PARTICLES = false;
export const SHOW_PRICING = toBool(env.VITE_SHOW_PRICING);

export const STRIPE_49 = env.VITE_STRIPE_LINK_49 || '#';
export const STRIPE_99 = env.VITE_STRIPE_LINK_99 || '#';
export const STRIPE_999 = env.VITE_STRIPE_LINK_999 || '#';
export const CAL_999 = env.VITE_CAL_LINK_999 || '#';

if (typeof window !== 'undefined') {
  console.debug('[pricing] SHOW_PRICING =', SHOW_PRICING);
}
