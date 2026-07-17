import { fitDescription, pickVariant } from "@/lib/utils";

// A bank of differently-worded meta-description templates for promo-code
// pages, picked deterministically per game slug — same duplicate-content
// fix as promoFaqPool.ts, applied to the page <meta name="description">
// instead of FAQ content.
const PROMO_DESCRIPTION_VARIANTS: Array<(name: string) => string> = [
  (name) => `Current promo-code status for ${name}, along with eligibility notes, redemption terms and common reasons a code may not work.`,
  (name) => `Check the latest promo-code status for ${name} here, including who's eligible, how to redeem, and why a code might fail.`,
  (name) => `This page tracks ${name}'s promo-code status, general eligibility notes, redemption steps and common troubleshooting reasons.`,
  (name) => `Looking for a ${name} promo code? See its current status, eligibility notes and the most common reasons a code stops working.`,
  (name) => `A status page for ${name} promo codes, covering current availability, eligibility notes and typical redemption issues.`,
];

const DESCRIPTION_FILLER_VARIANTS = [
  "This status is reviewed periodically and updated as new information becomes available.",
  "Checked and refreshed here on a regular basis to stay current.",
  "Always confirm the live status directly inside the official app before relying on it.",
  "This listing is revisited regularly so the status stays accurate.",
  "Treat this as a starting point — the app itself has the final word on current codes.",
];

export function pickPromoDescription(gameName: string, slug: string): string {
  const base = pickVariant(PROMO_DESCRIPTION_VARIANTS, slug, "promoDesc")(gameName);
  const filler = pickVariant(DESCRIPTION_FILLER_VARIANTS, slug, "promoDescFiller");
  return fitDescription(base, filler);
}
