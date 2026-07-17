import type { ComponentType } from "react";
import { blogPosts } from "@/data/blog/posts";
import { BLOG_CONTENT } from "@/data/blog/content";
import type { BlogPost } from "./types";

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogContentBySlug(slug: string): ComponentType | undefined {
  return BLOG_CONTENT[slug];
}

export function getBlogCategories(): string[] {
  const set = new Set<string>();
  blogPosts.forEach((p) => set.add(p.category));
  return Array.from(set).sort();
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter((p) => p.category === category);
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
