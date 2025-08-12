import { STRIPE_49, STRIPE_99, STRIPE_999 } from '@/featureFlags';

export const stripeLink = (price: 49 | 99 | 999) => {
  if (price === 49) return STRIPE_49;
  if (price === 99) return STRIPE_99;
  return STRIPE_999;
};
