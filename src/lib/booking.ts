export const CALENDLY_BASE =
  "https://calendly.com/krglobalsolutionsltd/30-minute-meeting-clone";

export function buildCalendlyEmbedUrl(): string {
  const host = typeof window !== "undefined" && window.location?.hostname
    ? window.location.hostname
    : "krglobalsolutionsltd.com";

  const params = new URLSearchParams({ embed_domain: host });
  return `${CALENDLY_BASE}?${params.toString()}`;
}
