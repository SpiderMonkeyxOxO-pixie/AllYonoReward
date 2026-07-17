import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/search", "/api/"],
      },
    ],
    // Next's generateSitemaps() convention serves five grouped sitemaps
    // (main pages, games, promo codes, rewards, blog posts) rather than a
    // single index — robots.txt lists each one directly, which search
    // engines fully support.
    sitemap: [0, 1, 2, 3, 4].map((id) => `${siteConfig.siteUrl}/sitemap/${id}.xml`),
    host: siteConfig.siteUrl,
  };
}
