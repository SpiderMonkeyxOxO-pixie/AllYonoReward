import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { BlogCard } from "@/components/ui/BlogCard";
import { GameCard } from "@/components/ui/GameCard";
import {
  getAllBlogPosts,
  getBlogContentBySlug,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/blog";
import { getGameBySlug } from "@/lib/data";
import { buildMetadata, blogPostingJsonLd, faqPageJsonLd, webPageJsonLd } from "@/lib/seo";
import type { Game } from "@/lib/types";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

// Any slug outside generateStaticParams should hard-404 via routing rather
// than being rendered on-demand and cached as a static 200.
export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogImage: post.image,
    ogTitle: post.ogTitle,
    ogDescription: post.ogDescription,
    twitterTitle: post.twitterTitle,
    twitterDescription: post.twitterDescription,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const Content = getBlogContentBySlug(slug);
  if (!Content) notFound();

  const relatedPosts = getRelatedBlogPosts(post, 3);
  const relatedGames = post.relatedGameSlugs
    .map((s) => getGameBySlug(s))
    .filter((g): g is Game => Boolean(g));

  return (
    <div className="container-page py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd(post)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd({ name: post.title, path: `/blog/${post.slug}`, description: post.metaDescription })),
        }}
      />
      {post.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(post.faqs)) }} />
      )}

      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.metaTitle, path: `/blog/${post.slug}` }]} />

      <article className="mt-4">
        <p className="eyebrow">{post.category}</p>
        <h1 className="mb-3 mt-1 text-2xl font-bold text-brand-green-dark sm:text-3xl">{post.title}</h1>
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-brand-green-dark/50 sm:text-sm">
          <LastUpdated lastUpdated={post.dateUpdated} className="" />
          <span>{post.readingTimeMinutes} min read</span>
        </div>

        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={675}
          priority
          className="mb-8 aspect-video w-full rounded-2xl object-cover shadow-card"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div className="blog-prose">
              <Content />
            </div>

            {post.faqs.length > 0 && (
              <section aria-labelledby="blog-faq-heading">
                <h2 id="blog-faq-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={post.faqs} headingId="blog-faq-heading" />
              </section>
            )}

            <DisclaimerBox>
              This article is general, informational content about Yono-style games as a category. It does not
              cover any single platform's actual terms, does not guarantee any reward or outcome, and is not legal,
              financial or safety advice. Always verify current details directly with the relevant platform.
            </DisclaimerBox>

            {relatedGames.length > 0 && (
              <section aria-labelledby="related-games-heading">
                <h2 id="related-games-heading" className="mb-4 text-xl font-semibold text-brand-green-dark">
                  Related Games
                </h2>
                <div className="grid grid-cols-2 gap-3 xs:gap-4 lg:grid-cols-3">
                  {relatedGames.map((game) => (
                    <GameCard key={game.slug} game={game} />
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="card-surface p-5">
              <p className="mb-3 text-sm font-semibold text-brand-green-dark">Quick Links</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-brand-gold-dark hover:underline">
                    Back to All Articles
                  </Link>
                </li>
                <li>
                  <Link href="/promo-codes" className="text-brand-gold-dark hover:underline">
                    View Promo Codes
                  </Link>
                </li>
                <li>
                  <Link href="/games" className="text-brand-gold-dark hover:underline">
                    Browse All Games
                  </Link>
                </li>
              </ul>
            </div>

            {relatedPosts.length > 0 && (
              <div className="space-y-3">
                <p className="px-1 text-sm font-semibold text-brand-green-dark">More Guides</p>
                {relatedPosts.map((related) => (
                  <BlogCard key={related.slug} post={related} />
                ))}
              </div>
            )}
          </aside>
        </div>
      </article>
    </div>
  );
}
