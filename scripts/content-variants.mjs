// Deterministic content-variation system for scripts/generate-games.mjs.
//
// The original generator used one fixed template per field, so every game
// page read as the exact same sentences with only the name swapped in — a
// duplicate-content problem for 53 pages. This module fixes that by keeping
// a bank of genuinely differently-worded variants per field and picking a
// combination per game deterministically from its slug, so re-running the
// generator always produces the same output for a given game, but different
// games get different phrasing (and different FAQ question *sets*, not just
// reworded answers).
//
// This does not invent facts — every variant says the same neutral,
// non-fabricating thing the single template used to say, just worded
// differently. See README "Adding or editing a game" for how this fits
// into the wider data pipeline.

function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function pickVariant(variants, slug, salt) {
  const h = hashString(`${slug}::${salt}`);
  const fn = variants[h % variants.length];
  return fn;
}

// Deterministic Fisher-Yates shuffle seeded by the slug+salt hash, used to
// pick N items from a pool so both the *combination* and its order vary
// game to game (not just a rotating window).
export function pickN(pool, slug, salt, n) {
  const indices = pool.map((_, i) => i);
  let seed = hashString(`${slug}::${salt}`);
  const next = () => {
    // xorshift32 — fast, deterministic, good-enough distribution for this.
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    seed >>>= 0;
    return seed;
  };
  for (let i = indices.length - 1; i > 0; i--) {
    const j = next() % (i + 1);
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, n).map((i) => pool[i]);
}

// Appends `filler` to `base` (word-boundary safe) so the result lands inside
// [min, max] chars — used to hit a specific meta-description length target
// without hand-tuning every template for every possible name length. If
// `base` alone already exceeds `max`, it's truncated instead of extended.
export function fitDescription(base, filler, min = 140, max = 155) {
  if (base.length > max) {
    const clipped = base.slice(0, max);
    const lastSpace = clipped.lastIndexOf(" ");
    const trimmed = clipped.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd();
    return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
  }
  if (base.length >= min) return base;

  const withFiller = `${base} ${filler}`;
  if (withFiller.length <= max) return withFiller;

  const budget = max - base.length - 1;
  const clippedFiller = filler.slice(0, budget);
  const lastSpace = clippedFiller.lastIndexOf(" ");
  const trimmed = clippedFiller
    .slice(0, lastSpace > 0 ? lastSpace : budget)
    .trimEnd()
    .replace(/[.,;:]+$/, "");
  return `${base} ${trimmed}.`;
}

export const DESCRIPTION_FILLER_VARIANTS = [
  "Details are reviewed periodically and refreshed as new information becomes available.",
  "This summary is checked and updated here on a regular basis.",
  "Figures shown reflect the latest publicly available information at review time.",
  "Always verify current terms directly inside the official app before relying on them.",
  "This listing is revisited regularly to stay accurate and up to date.",
  "Treat this page as a starting point, not the final word on current terms.",
  "Content here is reviewed periodically for accuracy and freshness.",
  "See the platform's own app or site for the most current details.",
];

export const CATEGORY_DESCRIPTORS = {
  Rummy: "a card-based skill-game format",
  Slots: "a reel-based format",
  "Spin Games": "a spin-based reward format",
  Bingo: "a number-matching format",
  Arcade: "a casual arcade-style format",
  "Card Game": "a general card-game format",
};

export const SHORT_DESCRIPTION_VARIANTS = [
  (name, cat) => `${name} is a ${cat.toLowerCase()} title listed in this directory, covering its available reward features and current promo-code status.`,
  (name, cat) => `This page tracks ${name}, a ${cat.toLowerCase()} app, alongside its reward mechanics and promo-code information.`,
  (name, cat) => `${name} appears in our ${cat.toLowerCase()} listings, with an overview of its platform features and promo-code activity.`,
  (name, cat) => `Browse what's publicly known about ${name}, a ${cat.toLowerCase()} platform, including its reward setup and promo-code status.`,
  (name, cat) => `${name} is catalogued here as a ${cat.toLowerCase()} option, with details on its rewards and the latest promo-code check.`,
  (name, cat) => `A directory entry for ${name} (${cat}), summarizing platform features and promo-code availability.`,
  (name, cat) => `Find an overview of ${name}, a ${cat.toLowerCase()} game, covering its incentive structure and promo-code coverage.`,
  (name, cat) => `${name} sits in our ${cat.toLowerCase()} category, tracked here for its reward features and promo-code updates.`,
];

export const LONG_DESCRIPTION_VARIANTS = [
  (name) => `${name} is featured here as part of the AllYonoReward directory of Yono-style games. This page summarizes the platform features, reward mechanics and eligibility information that are publicly observable for ${name}. Specific gameplay rules, deposit terms, reward values and eligibility conditions are set solely by the ${name} platform and can change at any time, so this overview should be treated as a general starting point rather than a final source. Users who want to confirm current details, download links or account requirements should check directly within the official ${name} application or website. This page will be updated as new, verifiable information becomes available.`,
  (name) => `Within this directory, ${name} is tracked alongside its reward structure and promo-code activity. Because platform terms are controlled entirely by ${name} itself, figures such as bonus values, wagering conditions and account requirements are not something this page can independently guarantee — they are subject to change without notice. Anyone researching ${name} should treat the summary here as a jumping-off point and verify specifics directly with the app or its official channels before relying on them. Updates are made periodically as fresh, checkable details surface.`,
  (name, cat, descriptor) => `${name} belongs to the ${cat.toLowerCase()} segment of games covered in this directory, built around ${descriptor}. Rather than reproduce marketing claims, this page focuses on what can be reasonably observed: available reward categories, whether a promo code has been publicly listed, and general eligibility patterns common to platforms like this one. None of that substitutes for the platform's own terms, which ${name} can revise at any time. Readers planning to use ${name} should confirm registration requirements and current features on the platform itself rather than relying solely on this summary.`,
  (name, cat) => `As a ${cat.toLowerCase()} title, ${name} is included in this directory primarily so readers can compare its reward setup and promo-code status against similar platforms. The details here are informational and reflect what is publicly visible at the time of review — not a guarantee of current terms, since ${name}'s operator can adjust deposit rules, bonus structures or eligibility criteria without notifying third-party listings like this one. Before registering or depositing, confirm the platform's live terms directly through its official app or site.`,
  (name, cat) => `This entry covers ${name}, one of the ${cat.toLowerCase()} platforms tracked in the AllYonoReward directory. Our aim is to give a neutral, easy-to-scan summary — reward features, promo-code status, and general eligibility notes — without repeating unverified promotional claims. ${name}'s own terms take precedence over anything summarized here, and given how frequently these platforms adjust their offers, treat this page as a starting reference rather than the final word. Check back for updates as we re-review the listing.`,
  (name, cat, descriptor) => `${name} is listed under our ${cat.toLowerCase()} category for readers comparing reward structures and promo-code activity across platforms, given its use of ${descriptor}. We don't have — and don't claim to have — insider access to ${name}'s internal terms, so figures like bonus percentages or eligibility rules aren't reproduced here unless independently confirmed. What you'll find instead is a structured overview built from publicly observable information, intended to help you know what to look for when you check the platform directly.`,
  (name, cat) => `Consider this page a research aid for ${name}, a ${cat.toLowerCase()} platform included in the wider AllYonoReward directory. It lays out the reward categories associated with ${name}, the current promo-code status, and general notes on eligibility and availability — all sourced from publicly observable information rather than the platform's own marketing. Terms specific to ${name} (deposit minimums, bonus caps, regional restrictions) are controlled by its operator and may differ from what's summarized here, so always cross-check with the official app before acting.`,
];

export const ELIGIBILITY_VARIANTS = [
  (name) => `Eligibility for any ${name} promotional code is determined by the platform and may include account verification, a minimum app version, or new-user status. Confirm current requirements directly within the ${name} application.`,
  (name) => `${name} sets its own eligibility rules for promotional codes — commonly tied to account verification status, app version, or whether the account is new. These requirements aren't published here and should be checked in-app.`,
  (name) => `Who qualifies for a ${name} promo code is entirely up to the platform. Typical conditions include a verified account and meeting any new-user or version requirements, but confirm the exact rules inside ${name} itself.`,
  (name) => `${name}'s promo-code eligibility criteria (account status, app version, region, etc.) are managed by the platform and not published independently here. Check the in-app terms before assuming you qualify.`,
  (name) => `As with most platforms, ${name} may restrict promo-code eligibility to verified or newly registered accounts. Exact conditions are set and communicated by ${name} directly, not by this directory.`,
  (name) => `Eligibility requirements for ${name} promotional codes vary and are controlled solely by the platform — commonly involving account verification or new-user status. Always confirm inside the ${name} app.`,
];

export const CONDITIONS_VARIANTS = [
  (name) => `Specific redemption conditions have not been independently published for ${name} at this time.`,
  (name) => `${name} has not made detailed redemption conditions publicly available as of this review.`,
  (name) => `No independently verified redemption terms are currently on record for ${name}.`,
  (name) => `Redemption conditions specific to ${name} are not yet documented here — check the platform directly for current terms.`,
  (name) => `We don't have confirmed redemption-condition details for ${name} at this time; the platform's own terms govern any code use.`,
  (name) => `${name}'s exact redemption conditions haven't been independently confirmed for this listing yet.`,
];

export const WHERE_TO_ENTER_VARIANTS = [
  () => `Promotional codes, when available, are typically entered from an in-app rewards, wallet or redeem-code section. Exact navigation varies by platform version.`,
  (name) => `Most platforms like ${name} place code redemption inside a rewards, wallet, or "redeem code" menu — exact placement can shift between app versions.`,
  (name) => `Look for a redeem-code, rewards or wallet section within ${name} to enter any available promotional code; navigation may differ by app version.`,
  (name) => `Code entry fields are commonly found under a rewards or wallet tab in apps like ${name}, though the exact location can change between updates.`,
  (name) => `${name} would typically host code redemption under an in-app rewards or wallet menu, though we recommend checking the latest app version for the current location.`,
];

export const PLATFORM_TERMS_VARIANTS = [
  (name) => `Promo-code terms, minimum requirements and reward values are set solely by the ${name} platform and may change without notice.`,
  (name) => `${name} controls all promo-code terms, including minimums and reward values — this directory does not set or guarantee any of them.`,
  (name) => `Any figures tied to ${name} promo codes (minimums, reward amounts) come entirely from the platform and are subject to change at any time.`,
  (name) => `Terms governing ${name} promo codes — value, minimums, restrictions — are the platform's own and are not guaranteed or set by this site.`,
  (name) => `${name}'s own operator sets and can revise promo-code terms at any time; nothing on this page overrides or guarantees those terms.`,
  (name) => `Reward values and minimum requirements tied to ${name} codes are entirely platform-controlled and may be updated without prior notice.`,
];

export const EXPIRATION_VARIANTS = [
  () => `Not applicable — no public code is currently listed for this game.`,
  () => `Not applicable at this time, since no code has been publicly listed yet.`,
  () => `No expiration to report while no public code is listed for this game.`,
];

export const USAGE_LIMIT_VARIANTS = [
  () => `Not applicable until a public code is listed.`,
  () => `No usage limit to report until a code is publicly listed.`,
  () => `Not yet applicable — a usage limit will be noted once a code is listed.`,
];

export const OFFICIAL_WEBSITE_STATUS_VARIANTS = [
  (name) => `${name} is confirmed as an active, listed application by site administrators. Legal/regulatory classification is a separate question and has not been independently verified — see Legalities.`,
  (name) => `Site administrators have confirmed ${name} is an active, listed application. Note that legal/regulatory classification is reviewed separately — see Legalities.`,
  (name) => `This ${name} listing has been confirmed active by our administrators. Legal or regulatory status is a distinct matter, not yet independently verified — see Legalities.`,
  (name) => `Administrators confirm ${name} is active and listed. Classification for legal/regulatory purposes remains separate and unverified — see Legalities.`,
  (name) => `${name} is verified as active and listed by our team. Please note legal/regulatory classification is handled independently and not yet confirmed — see Legalities.`,
  (name) => `Our team has confirmed ${name} as an active listing. Legal/regulatory classification is tracked separately and remains unverified — see Legalities.`,
  (name) => `${name}'s listing status is active, confirmed by site administrators. This does not extend to legal/regulatory classification, which is unverified — see Legalities.`,
];

export const AVAILABILITY_NOTES_VARIANTS = [
  (name) => `${name}'s availability may depend on device, app store policies and user location.`,
  (name) => `Whether ${name} is available to you can depend on your device, app store rules, and your location.`,
  (name) => `${name}'s availability can vary by device type, app store policy, and regional restrictions.`,
  (name) => `Access to ${name} may differ depending on your device, the app store's current policies, and where you're located.`,
  (name) => `Device compatibility, app store policy, and regional rules can all affect whether ${name} is available to you.`,
  (name) => `${name} may not be available on every device or in every region, depending on app store policy.`,
  (name) => `Where and how ${name} can be accessed depends on your device, applicable app store rules, and local availability.`,
];

export const FAQ_POOL = [
  (name) => ({
    question: `Is ${name} available in my location?`,
    answer: `Availability may depend on your location, device and applicable local requirements. Check the ${name} platform directly for current availability in your area.`,
  }),
  (name) => ({
    question: `Does ${name} have a working promo code right now?`,
    answer: `No publicly verified promo code is listed for ${name} at this time. See the ${name} promo-code page for current status and how that may change.`,
  }),
  (name) => ({
    question: `Is ${name} classified as a money game or a social game?`,
    answer: `${name} has not yet been independently classified. Users should review the platform's own terms and applicable local regulations before participating.`,
  }),
  (name) => ({
    question: `How do I download ${name}?`,
    answer: `A download link for ${name} is provided on this page when available. Always confirm you're using an official source before installing.`,
  }),
  (name) => ({
    question: `What rewards does ${name} offer new users?`,
    answer: `Reward structures such as welcome bonuses vary by platform and are set by ${name} directly. See the Rewards & Incentives pages linked from this guide for general explanations of how these features typically work.`,
  }),
  (name) => ({
    question: `How often is this ${name} page updated?`,
    answer: `This page displays a last-reviewed and last-updated date so you can judge how current the information is. We aim to revisit listings periodically.`,
  }),
];

export const COMMON_ISSUES_POOL = [
  () => `The code had already expired or was time-limited.`,
  () => `The code was restricted to specific new users or regions.`,
  () => `The code had already reached its maximum number of uses.`,
  () => `A typo or extra space was entered when redeeming the code.`,
  () => `The code required a minimum deposit or app version not yet met.`,
  () => `The code was platform-specific and doesn't apply to every account type.`,
  () => `The redemption window for that particular code had already closed.`,
];
