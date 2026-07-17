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

const MAIN_PAGES = [
  "/",
  "/games",
  "/promo-codes",
  "/rewards",
  "/about-us",
  "/contact-us",
  "/legalities",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
  "/responsible-gaming",
  "/editorial-policy",
  "/corrections-policy",
  "/faq",
  "/sitemap-page",
  "/blog",
];

export default async function sitemap({ id }: { id: Promise<number> }): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.siteUrl;
  const resolvedId = Number(await id);

  if (resolvedId === 0) {
    return MAIN_PAGES.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1 : 0.7,
    }));
  }

  if (resolvedId === 1) {
    return getAllGames().map((game) => ({
      url: `${base}/games/${game.slug}`,
      lastModified: game.lastUpdated || undefined,
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  }

  if (resolvedId === 2) {
    return getAllGames().map((game) => ({
      url: `${base}/promo-codes/${promoSlugFor(game.slug)}`,
      lastModified: game.lastUpdated || undefined,
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  }

  if (resolvedId === 3) {
    return getAllRewardFeatures().map((reward) => ({
      url: `${base}/rewards/${reward.slug}`,
      lastModified: reward.lastUpdated || undefined,
      changeFrequency: "monthly",
      priority: 0.6,
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
