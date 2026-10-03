/**
 * Date gating for scheduled blog posts. A post is live from 07:00 IST on its
 * `datePublished` date. Posts dated well in the past are unaffected.
 * The blog pages, generateStaticParams and sitemap.ts all read through
 * src/lib/blog.ts, so a daily rebuild is what makes a new post go live.
 */
export function isPublished(datePublished: string, now: Date = new Date()): boolean {
  const goLive = Date.parse(`${datePublished}T07:00:00+05:30`);
  if (Number.isNaN(goLive)) return true;
  return now.getTime() >= goLive;
}
