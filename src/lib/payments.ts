export const stripeLink = (price: 49 | 99 | 999) => {
  if (price === 49) return process.env.NEXT_PUBLIC_STRIPE_LINK_49 || '#';
  if (price === 99) return process.env.NEXT_PUBLIC_STRIPE_LINK_99 || '#';
  return process.env.NEXT_PUBLIC_STRIPE_LINK_999 || '#';
};
