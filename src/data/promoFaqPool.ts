import type { FAQItem } from "@/lib/types";
import { pickN } from "@/lib/utils";

// A pool of promo-code FAQ templates, wider than the 3 shown on any one
// page — pickPromoFaqs selects a different subset (and order) per game via
// its slug, so the 53 promo-code pages don't all show the exact same three
// reworded-only questions.
const PROMO_FAQ_POOL: Array<(gameName: string) => FAQItem> = [
  (name) => ({
    question: `Does ${name} currently have a working promo code?`,
    answer: `See the status box above — codes are only marked Verified or Recently Checked when genuinely reviewed. Status can change at any time.`,
  }),
  (name) => ({
    question: `Where do I enter a promo code for ${name}?`,
    answer: `Codes are normally entered from an in-app rewards, wallet or redeem-code section. Exact navigation depends on the app version.`,
  }),
  (name) => ({
    question: `Why might a ${name} promo code stop working?`,
    answer: `Common reasons include expiration, reaching a usage limit, regional or new-user restrictions, or a typo during entry.`,
  }),
  (name) => ({
    question: `How often is the ${name} promo-code status checked?`,
    answer: `This page shows a last-checked date so you can judge how current the status is. We revisit listings periodically, prioritizing pages that are older or flagged by users.`,
  }),
  (name) => ({
    question: `Can I use a ${name} promo code more than once?`,
    answer: `Usage limits are set by the platform, not this directory. Many codes are single-use per account — check the terms shown on the ${name} platform itself.`,
  }),
  (name) => ({
    question: `Is there a fee to redeem a ${name} promo code?`,
    answer: `This directory does not charge for promo-code information. Any fees, deposits or requirements tied to redemption are set solely by the ${name} platform.`,
  }),
  (name) => ({
    question: `What should I do if a ${name} code says invalid?`,
    answer: `Double-check for typos or extra spaces first. If it still fails, the code may be expired, region-restricted, or limited to new users — see the common issues listed above.`,
  }),
];

export function pickPromoFaqs(gameName: string, slug: string): FAQItem[] {
  return pickN(PROMO_FAQ_POOL, slug, "promoFaqs", 3).map((fn) => fn(gameName));
}
