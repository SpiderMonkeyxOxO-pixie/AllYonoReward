import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getAllGames, getAllRewardFeatures } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { promoSlugFor } from "@/lib/utils";
import { footerColumns, GAME_COUNT } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "HTML Sitemap: Browse All Pages",
  description: `A full, crawlable index of every one of the ${GAME_COUNT} game guides, promo-code pages, reward pages and informational pages found on this website today.`,
  path: "/sitemap-page",
});

export default function HtmlSitemapPage() {
  const games = getAllGames();
  const rewards = getAllRewardFeatures();

  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ name: "HTML Sitemap", path: "/sitemap-page" }]} />
      <h1 className="mb-8 mt-4 text-3xl font-bold text-brand-green-dark">HTML Sitemap</h1>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {footerColumns.map((column) => (
          <section key={column.heading}>
            <h2 className="mb-3 text-lg font-semibold text-brand-green-dark">{column.heading}</h2>
            <ul className="space-y-1.5 text-sm">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-brand-gold-dark hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-semibold text-brand-green-dark">Rewards &amp; Incentives Pages</h2>
        <ul className="grid grid-cols-2 gap-1.5 text-sm sm:grid-cols-3 lg:grid-cols-4">
          {rewards.map((reward) => (
            <li key={reward.slug}>
              <Link href={`/rewards/${reward.slug}`} className="text-brand-gold-dark hover:underline">
                {reward.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-semibold text-brand-green-dark">All {GAME_COUNT} Game Guides</h2>
        <ul className="grid grid-cols-2 gap-1.5 text-sm sm:grid-cols-3 lg:grid-cols-4">
          {games.map((game) => (
            <li key={game.slug}>
              <Link href={`/games/${game.slug}`} className="text-brand-gold-dark hover:underline">
                {game.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-semibold text-brand-green-dark">All {GAME_COUNT} Promo-Code Pages</h2>
        <ul className="grid grid-cols-2 gap-1.5 text-sm sm:grid-cols-3 lg:grid-cols-4">
          {games.map((game) => (
            <li key={game.slug}>
              <Link href={`/promo-codes/${promoSlugFor(game.slug)}`} className="text-brand-gold-dark hover:underline">
                {game.name} Promo Code
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
