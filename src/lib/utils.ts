import type { Game } from "./types";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(isoDate: string): string {
  if (!isoDate) return "Not yet reviewed";
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "Not yet reviewed";
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function promoSlugFor(gameSlug: string): string {
  return `${gameSlug}-promo-code`;
}

/**
 * Trims text to a search-engine-friendly meta-description length at a word
 * boundary, appending an ellipsis. Use this only for the <meta
 * name="description"> / og:description value — never for on-page copy that
 * must stay verbatim (e.g. the reward feature descriptions).
 */
export function truncateForMeta(text: string, maxLen = 155): string {
  if (text.length <= maxLen) return text;
  const clipped = text.slice(0, maxLen);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 0 ? lastSpace : maxLen).trimEnd()}…`;
}

export function gameSlugFromPromoSlug(promoSlug: string): string {
  return promoSlug.replace(/-promo-code$/, "");
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export interface SearchIndexEntry {
  type: "game" | "promo-code" | "reward" | "category";
  title: string;
  description: string;
  href: string;
  keywords: string[];
}

export function buildGameSearchEntries(games: Game[]): SearchIndexEntry[] {
  const entries: SearchIndexEntry[] = [];
  for (const game of games) {
    entries.push({
      type: "game",
      title: game.name,
      description: game.shortDescription,
      href: `/games/${game.slug}`,
      keywords: [game.name, ...game.category, ...game.features],
    });
    entries.push({
      type: "promo-code",
      title: `${game.name} Promo Code`,
      description: `Promo code status, eligibility and terms for ${game.name}.`,
      href: `/promo-codes/${promoSlugFor(game.slug)}`,
      keywords: [game.name, "promo code", game.promoCode.status],
    });
  }
  return entries;
}

export function searchEntries(entries: SearchIndexEntry[], query: string): SearchIndexEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return entries.filter((entry) => {
    const haystack = [entry.title, entry.description, ...entry.keywords].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/**
 * Deterministic Fisher-Yates shuffle seeded by `${seed}::${salt}`, used to
 * pick N items from a pool so both the combination and its order vary per
 * seed (e.g. a game slug) while staying stable across re-renders — see
 * scripts/content-variants.mjs for the build-time counterpart used to
 * generate src/data/games.ts.
 */
export function pickVariant<T>(pool: T[], seed: string, salt: string): T {
  const h = hashString(`${seed}::${salt}`);
  return pool[h % pool.length]!;
}

/**
 * Appends `filler` to `base` (word-boundary safe) so the result lands inside
 * [min, max] chars — used to hit a specific meta-description length target
 * without hand-tuning every template for every possible name length. If
 * `base` alone already exceeds `max`, it's truncated instead of extended.
 * TS counterpart of the same function in scripts/content-variants.mjs.
 */
export function fitDescription(base: string, filler: string, min = 140, max = 155): string {
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

export function pickN<T>(pool: T[], seed: string, salt: string, n: number): T[] {
  const indices = pool.map((_, i) => i);
  let s = hashString(`${seed}::${salt}`);
  const next = () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    s >>>= 0;
    return s;
  };
  for (let i = indices.length - 1; i > 0; i--) {
    const j = next() % (i + 1);
    const a = indices[i]!;
    const b = indices[j]!;
    indices[i] = b;
    indices[j] = a;
  }
  return indices.slice(0, n).map((i) => pool[i]!);
}
