import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard } from "@/components/ui/BlogCard";
import { getAllBlogPosts, getBlogCategories, getBlogPostsByCategory } from "@/lib/blog";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog: Yono Game Guides, Promo Codes & Safety Tips",
  description:
    "Guides on how Yono-style game promo codes work, reward programs explained, safety checklists and format comparisons — written in plain, neutral language.",
  path: "/blog",
});

export default function BlogHubPage() {
  const categories = getBlogCategories();
  const totalPosts = getAllBlogPosts().length;

  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "AllYonoReward Blog",
              path: "/blog",
              description: "Guides, explainers and safety tips for Yono-style games, promo codes and rewards.",
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

      <h1 className="mb-2 mt-4 text-3xl font-bold text-brand-green-dark">Blog: Guides &amp; Explainers</h1>
      <p className="mb-6 max-w-2xl text-brand-green-dark/70">
        {totalPosts} plain-language guides on how promo codes work, what reward programs actually mean, and how to
        evaluate a Yono-style game before you play — written without hype or unverified claims.
      </p>

      <nav aria-label="Jump to category" className="mb-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <a
            key={category}
            href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="rounded-full border border-brand-green/20 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-green-dark hover:border-brand-gold hover:text-brand-gold-dark sm:text-sm"
          >
            {category}
          </a>
        ))}
      </nav>

      <div className="space-y-12">
        {categories.map((category) => {
          const posts = getBlogPostsByCategory(category);
          const anchorId = category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <section key={category} aria-labelledby={anchorId} id={anchorId} className="scroll-mt-24">
              <h2 id={anchorId} className="mb-4 text-xl font-semibold text-brand-green-dark">
                {category}
              </h2>
              <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
