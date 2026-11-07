import type { ComponentType } from "react";
import { blogPosts } from "@/data/blog/posts";
import { BLOG_CONTENT } from "@/data/blog/content";
import type { BlogPost } from "./types";
import { isPublished } from "./publish";

// Scheduled posts stay hidden until 07:00 IST on their datePublished date.
function publishedPosts(): BlogPost[] {
  return blogPosts.filter((p) => isPublished(p.datePublished));
}

export function getAllBlogPosts(): BlogPost[] {
  return [...publishedPosts()].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return publishedPosts().find((p) => p.slug === slug);
}

export function getBlogContentBySlug(slug: string): ComponentType | undefined {
  return BLOG_CONTENT[slug];
}

export function getBlogCategories(): string[] {
  const set = new Set<string>();
  publishedPosts().forEach((p) => set.add(p.category));
  return Array.from(set).sort();
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter((p) => p.category === category);
}

export function getBlogPostsForGame(gameSlug: string): BlogPost[] {
  return getAllBlogPosts().filter((p) => p.relatedGameSlugs.includes(gameSlug));
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3): BlogPost[] {
  const fullCategory = getAllBlogPosts().filter((p) => p.category === post.category);
  const sameCategory = fullCategory.filter((p) => p.slug !== post.slug);

  if (sameCategory.length >= limit) {
    // Rotate the starting point per post instead of always taking the newest
    // `limit` posts in the category — otherwise every post in a large
    // category (e.g. 36 welcome-bonus posts) links to the same 3 newest
    // posts, starving the rest of any in-content inbound link.
    const selfIndex = fullCategory.findIndex((p) => p.slug === post.slug);
    const start = selfIndex >= 0 ? (selfIndex * limit) % sameCategory.length : 0;
    return [...sameCategory.slice(start), ...sameCategory.slice(0, start)].slice(0, limit);
  }

  const rest = getAllBlogPosts().filter(
    (p) => p.slug !== post.slug && !sameCategory.find((s) => s.slug === p.slug)
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
