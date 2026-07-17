import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GameCard } from "@/components/ui/GameCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import { filterAndSortGames, getGameCategories } from "@/lib/data";
import { REWARD_FEATURE_KEYS } from "@/lib/types";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { GAME_COUNT } from "@/lib/site-config";

const PAGE_SIZE = 24;

interface GamesPageProps {
  searchParams: Promise<{ q?: string; category?: string; feature?: string; sort?: string; page?: string }>;
}

export async function generateMetadata({ searchParams }: GamesPageProps): Promise<Metadata> {
  const sp = await searchParams;
  const hasFilters = Boolean(sp.q || sp.category || sp.feature || sp.page);
  return buildMetadata({
    title: `All Yono Games: Browse ${GAME_COUNT} Game Guides`,
    description: `Browse the full directory of ${GAME_COUNT} Yono Game guides. Filter by category or reward feature, then sort A–Z, by popularity or recently updated status.`,
    path: "/games",
    noindex: hasFilters,
  });
}

export default async function GamesHubPage({ searchParams }: GamesPageProps) {
  const sp = await searchParams;
  const sort = (sp.sort as "az" | "recent" | "popular") ?? "popular";
  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);
  const categories = getGameCategories();

  const filtered = filterAndSortGames({
    q: sp.q,
    category: sp.category,
    feature: sp.feature,
    sort,
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "All Yono Games",
              path: "/games",
              description: `Browse the full directory of ${GAME_COUNT} Yono Game guides.`,
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "All Games", path: "/games" }]} />

      <h1 className="mb-2 mt-4 text-3xl font-bold text-brand-green-dark">All Yono Games</h1>
      <p className="mb-8 max-w-2xl text-brand-green-dark/70">
        Every game in the directory, with neutral overviews of available features, reward mechanics and promo-code
        information. Use search, category or feature filters to narrow the list.
      </p>

      <form method="get" className="card-surface mb-8 grid grid-cols-1 gap-4 p-4 sm:grid-cols-4 sm:p-5" role="search">
        <div className="sm:col-span-2">
          <label htmlFor="q" className="mb-1 block text-xs font-semibold text-brand-green-dark/70">
            Search by game name
          </label>
          <input
            id="q"
            name="q"
            type="search"
            defaultValue={sp.q ?? ""}
            placeholder="e.g. Yono Rummy"
            className="w-full rounded-full border border-black/10 px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:ring-brand-gold"
          />
        </div>

        <div>
          <label htmlFor="category" className="mb-1 block text-xs font-semibold text-brand-green-dark/70">
            Category
          </label>
          <select
            id="category"
            name="category"
            defaultValue={sp.category ?? ""}
            className="w-full rounded-full border border-black/10 px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="feature" className="mb-1 block text-xs font-semibold text-brand-green-dark/70">
            Reward feature
          </label>
          <select
            id="feature"
            name="feature"
            defaultValue={sp.feature ?? ""}
            className="w-full rounded-full border border-black/10 px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <option value="">All features</option>
            {REWARD_FEATURE_KEYS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-4">
          <span className="mb-1 block text-xs font-semibold text-brand-green-dark/70">Sort by</span>
          <div className="flex flex-wrap gap-2">
            {[
              { value: "popular", label: "Popular" },
              { value: "recent", label: "Recently Updated" },
              { value: "az", label: "Games A–Z" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-brand-green-dark/70 has-[:checked]:border-brand-gold has-[:checked]:bg-brand-gold/10 has-[:checked]:text-brand-gold-dark"
              >
                <input type="radio" name="sort" value={option.value} defaultChecked={sort === option.value} className="sr-only" />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:col-span-4 sm:flex sm:items-end">
          <button type="submit" className="btn-primary sm:w-auto">
            Apply Filters
          </button>
          <Link href="/games" className="btn-secondary-light justify-center sm:w-auto">
            Reset
          </Link>
        </div>
      </form>

      {pageItems.length === 0 ? (
        <EmptyState
          title="No games match those filters"
          description="Try a different search term or reset the filters to see the full directory."
          action={
            <Link href="/games" className="btn-secondary-light">
              Reset Filters
            </Link>
          }
        />
      ) : (
        <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {pageItems.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      )}

      <div className="mt-8">
        <Pagination
          basePath="/games"
          currentPage={page}
          totalPages={totalPages}
          searchParams={{ q: sp.q, category: sp.category, feature: sp.feature, sort: sp.sort }}
        />
      </div>
    </div>
  );
}
