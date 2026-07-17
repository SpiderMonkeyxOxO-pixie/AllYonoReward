import type { Metadata } from "next";
import { siteConfig, socialLinks } from "./site-config";
import type { BlogPost, FAQItem, Game } from "./types";

interface PageMetaInput {
  title: string;
  description: string;
  path: string; // e.g. "/games/example-game"
  noindex?: boolean;
  ogImage?: string;
}

export function buildMetadata({ title, description, path, noindex, ogImage }: PageMetaInput): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  // Next.js replaces the parent layout's `openGraph`/`twitter` objects
  // wholesale rather than deep-merging them, so every page needs its own
  // real image here — falling back to the site logo keeps every page's
  // social-share preview populated instead of blank.
  const image = ogImage || siteConfig.logo;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.twitterHandle,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}${siteConfig.logo}`,
    description: siteConfig.description,
    ...(socialLinks.length > 0 && { sameAs: socialLinks.map((s) => s.href) }),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function webPageJsonLd({ name, path, description }: { name: string; path: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${siteConfig.siteUrl}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  };
}

export function faqPageJsonLd(faqs: FAQItem[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function gameArticleJsonLd(game: Game) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${game.name}: Features, Rewards and Promo-Code Information`,
    description: game.shortDescription,
    dateModified: game.lastUpdated || undefined,
    datePublished: game.lastReviewed || undefined,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}${siteConfig.logo}`,
      },
    },
    image: `${siteConfig.siteUrl}${game.icon}`,
  };
}

export function blogPostingJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.datePublished,
    dateModified: post.dateUpdated,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}${siteConfig.logo}`,
      },
    },
    mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
    image: `${siteConfig.siteUrl}${post.image}`,
  };
}
