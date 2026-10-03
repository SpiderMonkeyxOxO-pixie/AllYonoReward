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
  const sameCategory = getAllBlogPosts().filter(
    (p) => p.slug !== post.slug && p.category === post.category
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const rest = getAllBlogPosts().filter(
    (p) => p.slug !== post.slug && !sameCategory.find((s) => s.slug === p.slug)
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
