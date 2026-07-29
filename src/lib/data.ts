import { games } from "@/data/games";
import { rewardFeatures } from "@/data/reward-features";
import { upcomingGames } from "@/data/upcoming-games";
import type { Game, RewardFeature, UpcomingGame } from "./types";
import { promoSlugFor } from "./utils";

export function getAllGames(): Game[] {
  return games;
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getGameByPromoSlug(promoSlug: string): Game | undefined {
  return games.find((g) => promoSlugFor(g.slug) === promoSlug);
}

export function getFeaturedGames(limit = 6): Game[] {
  // Same manual priority pin used on /games and /promo-codes (see
  // Game.priority) — keeps a newly launched #1 platform at the front of
  // the homepage carousel too, not just the hub pages.
  return games
    .filter((g) => g.featuredHome)
    .sort((a, b) => (a.priority ?? Infinity) - (b.priority ?? Infinity))
    .slice(0, limit);
}

export function getRecentlyUpdatedGames(limit = 8): Game[] {
  return [...games]
    .filter((g) => g.recentlyUpdated)
    .sort((a, b) => (a.lastUpdated < b.lastUpdated ? 1 : -1))
    .slice(0, limit);
}

export interface UpcomingGameEntry {
  game: Game;
  upcoming: UpcomingGame;
}

// Only surfaces entries still ahead of their release moment — once the
// countdown target passes, the title drops off automatically on the next
// rebuild rather than needing to be removed from upcoming-games.ts by hand.
export function getUpcomingGames(limit = 6): UpcomingGameEntry[] {
  return upcomingGames
    .map((upcoming) => {
      const game = getGameBySlug(upcoming.slug);
      return game ? { game, upcoming } : null;
    })
    .filter((entry): entry is UpcomingGameEntry => entry !== null)
    .filter((entry) => new Date(entry.upcoming.releaseDateISO).getTime() > Date.now())
    .sort((a, b) => a.upcoming.releaseDateISO.localeCompare(b.upcoming.releaseDateISO))
    .slice(0, limit);
}

export function getGamesAZ(): Game[] {
  return [...games].sort((a, b) => a.name.localeCompare(b.name));
}

export function getRelatedGames(game: Game, limit = 5): Game[] {
  const bySlug = game.relatedGames
    .map((slug) => getGameBySlug(slug))
    .filter((g): g is Game => Boolean(g));
  if (bySlug.length >= limit) return bySlug.slice(0, limit);

  const sameCategory = games.filter(
    (g) => g.slug !== game.slug && g.category.some((c) => game.category.includes(c))
  );
  const combined = [...bySlug];
  for (const candidate of sameCategory) {
    if (combined.length >= limit) break;
    if (!combined.find((g) => g.slug === candidate.slug)) combined.push(candidate);
  }
  return combined.slice(0, limit);
}

export function getGameCategories(): string[] {
  const set = new Set<string>();
  games.forEach((g) => g.category.forEach((c) => set.add(c)));
  return Array.from(set).sort();
}

export function getGamesByCategory(category: string): Game[] {
  return games.filter((g) => g.category.includes(category as Game["category"][number]));
}

export function getAllRewardFeatures(): RewardFeature[] {
  return rewardFeatures;
}

export function getRewardFeatureBySlug(slug: string): RewardFeature | undefined {
  return rewardFeatures.find((r) => r.slug === slug);
}

export function getGamesForRewardFeature(featureKey: RewardFeature["key"], limit = 8): Game[] {
  return games.filter((g) => g.features.includes(featureKey)).slice(0, limit);
}

export function getRecentlyCheckedPromoCodes(limit = 8): Game[] {
  return [...games]
    .filter((g) => g.promoCode.lastChecked)
    .sort((a, b) => (a.promoCode.lastChecked < b.promoCode.lastChecked ? 1 : -1))
    .slice(0, limit);
}

export function getRecentlyUpdatedPromoCodes(limit = 8): Game[] {
  return getRecentlyUpdatedGames(limit);
}

export interface GameFilterOptions {
  q?: string;
  category?: string;
  feature?: string;
  status?: string;
  sort?: "az" | "recent" | "popular" | "checked";
}

export function filterAndSortGames(options: GameFilterOptions): Game[] {
  let result = games;

  if (options.q) {
    const q = options.q.toLowerCase();
    result = result.filter(
      (g) => g.name.toLowerCase().includes(q) || g.shortDescription.toLowerCase().includes(q)
    );
  }
  if (options.category) {
    result = result.filter((g) => g.category.some((c) => c === options.category));
  }
  if (options.feature) {
    result = result.filter((g) => g.features.some((f) => f === options.feature));
  }
  if (options.status) {
    result = result.filter((g) => g.promoCode.status === options.status);
  }

  // Manually curated pins (Game.priority) take precedence over the default
  // and A–Z sorts so a newly announced platform can be pinned to #1 without
  // relying on name or featuredHome — see the Game.priority doc comment.
  const byPriority = (a: Game, b: Game) => (a.priority ?? Infinity) - (b.priority ?? Infinity);

  const sorted = [...result];
  if (options.sort === "az") {
    sorted.sort((a, b) => byPriority(a, b) || a.name.localeCompare(b.name));
  } else if (options.sort === "recent") {
    sorted.sort((a, b) => (a.lastUpdated < b.lastUpdated ? 1 : -1));
  } else if (options.sort === "checked") {
    sorted.sort((a, b) => (a.promoCode.lastChecked < b.promoCode.lastChecked ? 1 : -1));
  } else {
    sorted.sort((a, b) => byPriority(a, b) || Number(b.featuredHome) - Number(a.featuredHome));
  }
  return sorted;
}
