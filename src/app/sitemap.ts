import type { MetadataRoute } from "next";
import { getAllGames, getAllRewardFeatures } from "@/lib/data";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { promoSlugFor } from "@/lib/utils";

// Five grouped sitemaps: 0 = main pages, 1 = games, 2 = promo codes,
// 3 = rewards, 4 = blog posts. Served at /sitemap/0.xml .. /sitemap/4.xml;
// robots.ts lists all five directly (Next's generateSitemaps convention has
// no built-in combined index route).
export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
}

// lastModified below is the real git last-commit date of each route's
// page.tsx source file (not a guess) — previously these 16 top-level pages
// (including the homepage and the games/promo-codes/rewards hubs, which
// carry the most internal link equity on the site) had no lastmod at all,
// unlike every other sitemap group, giving Google's crawler nothing to
// gauge recrawl freshness from on exactly the pages worth recrawling first.
const MAIN_PAGES: Array<{ path: string; lastModified: string }> = [
  { path: "/", lastModified: "2026-10-07" },
  { path: "/games", lastModified: "2026-07-17" },
  { path: "/promo-codes", lastModified: "2026-10-04" },
  { path: "/rewards", lastModified: "2026-07-17" },
  { path: "/about-us", lastModified: "2026-07-17" },
  { path: "/contact-us", lastModified: "2026-07-22" },
  { path: "/legalities", lastModified: "2026-07-17" },
  { path: "/privacy-policy", lastModified: "2026-07-17" },
  { path: "/terms-and-conditions", lastModified: "2026-07-17" },
  { path: "/disclaimer", lastModified: "2026-07-22" },
  { path: "/responsible-gaming", lastModified: "2026-07-17" },
  { path: "/editorial-policy", lastModified: "2026-07-17" },
  { path: "/corrections-policy", lastModified: "2026-07-17" },
  { path: "/faq", lastModified: "2026-07-17" },
  { path: "/sitemap-page", lastModified: "2026-07-17" },
  { path: "/blog", lastModified: "2026-07-17" },
];

export default async function sitemap({ id }: { id: Promise<number> }): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.siteUrl;
  const resolvedId = Number(await id);

  if (resolvedId === 0) {
    return MAIN_PAGES.map(({ path, lastModified }) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1 : 0.7,
    }));
  }

  if (resolvedId === 1) {
    // Supporting directory reference, not the domain's primary mission — see
    // /rewards below, which now carries the higher priority.
    return getAllGames().map((game) => ({
      url: `${base}/games/${game.slug}`,
      lastModified: game.lastUpdated || undefined,
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  }

  if (resolvedId === 2) {
    // Explanatory/status-tracking support only — generic Yono promo-code
    // lookup ownership is portfolio-unresolved (master spec §8.3); this
    // domain's mission is reward mechanics, not code lookup.
    return getAllGames().map((game) => ({
      url: `${base}/promo-codes/${promoSlugFor(game.slug)}`,
      lastModified: game.lastUpdated || undefined,
      changeFrequency: "weekly",
      priority: 0.5,
    }));
  }

  if (resolvedId === 3) {
    // Core mission content — highest priority on the domain.
    return getAllRewardFeatures().map((reward) => ({
      url: `${base}/rewards/${reward.slug}`,
      lastModified: reward.lastUpdated || undefined,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  }

  if (resolvedId === 4) {
    return getAllBlogPosts().map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.dateUpdated || undefined,
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  }

  return [];
}
