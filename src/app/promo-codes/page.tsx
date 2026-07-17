import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DailyCodeCard } from "@/components/ui/DailyCodeCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { filterAndSortGames } from "@/lib/data";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { promoCodeExplainerFaqs } from "@/data/faqs";
import { GAME_COUNT } from "@/lib/site-config";
import { getAllDailyCodes, getDailyCodesForSlug } from "@/lib/dailyCode";

const PAGE_SIZE = 24;
const STATUS_OPTIONS = [
  "Verified",
  "Recently Checked",
  "Unverified",
  "Expired",
  "Platform-Specific",
  "No Public Code Available",
];

interface PromoCodesPageProps {
  searchParams: Promise<{ q?: string; status?: string; sort?: string; page?: string }>;
}

export async function generateMetadata({ searchParams }: PromoCodesPageProps): Promise<Metadata> {
  const sp = await searchParams;
  const hasFilters = Boolean(sp.q || sp.status || sp.page);
  return buildMetadata({
    title: `Yono Game Promo Codes: ${GAME_COUNT} Code Pages`,
    description: `Browse promo-code status pages for all ${GAME_COUNT} Yono games in this directory. Check current status, eligibility notes and how promo codes generally work.`,
    path: "/promo-codes",
    noindex: hasFilters,
  });
}

export default async function PromoCodesHubPage({ searchParams }: PromoCodesPageProps) {
  const sp = await searchParams;
  const sort = (sp.sort as "az" | "checked" | "recent") ?? "az";
  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);

  const filtered = filterAndSortGames({ q: sp.q, status: sp.status, sort });
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const allDailyCodes = getAllDailyCodes();

  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Yono Game Promo Codes",
              path: "/promo-codes",
              description: `Browse promo-code status pages for all ${GAME_COUNT} Yono games in this directory.`,
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "Promo Codes", path: "/promo-codes" }]} />

      <h1 className="mb-2 mt-4 text-3xl">Yono Game Promo Codes</h1>
      <p className="mb-8 max-w-2xl text-brand-green-dark/70">
        Individual status pages for every game in the directory. Promo-code availability and terms vary by platform
        and can change at any time — each page shows a last-checked date and current status label.
      </p>

      <form method="get" className="card-surface mb-8 grid grid-cols-1 gap-4 p-4 sm:grid-cols-4 sm:p-5" role="search">
        <div className="sm:col-span-2">
          <label htmlFor="q" className="mb-1 block text-xs font-semibold text-brand-green-dark/70">
            Search by game
          </label>
          <input
            id="q"
            name="q"
            type="search"
            defaultValue={sp.q ?? ""}
            placeholder="e.g. Jaiho Rummy"
            className="w-full rounded-full border border-black/10 px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:ring-brand-gold"
          />
        </div>

        <div>
          <label htmlFor="status" className="mb-1 block text-xs font-semibold text-brand-green-dark/70">
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue={sp.status ?? ""}
            className="w-full rounded-full border border-black/10 px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <option value="">All statuses</option>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className="mb-1 block text-xs font-semibold text-brand-green-dark/70">Sort by</span>
          <div className="flex flex-wrap gap-2">
            {[
              { value: "az", label: "A–Z" },
              { value: "checked", label: "Recently Checked" },
              { value: "recent", label: "Recently Updated" },
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
          <Link href="/promo-codes" className="btn-secondary-light justify-center sm:w-auto">
            Reset
          </Link>
        </div>
      </form>

      <section aria-labelledby="daily-codes-heading" className="-mx-4 mb-10 bg-brand-green-dark px-4 py-8 xs:mx-0 xs:rounded-2xl xs:px-6 sm:py-10">
        <h2 id="daily-codes-heading" className="text-xl font-bold text-white sm:text-2xl">
          Daily Promo Codes by Platform
        </h2>
        <p className="mb-6 mt-2 max-w-2xl text-sm text-white/60">
          Codes below are entered manually up to three times a day — morning, afternoon and evening — as each
          platform releases them. Tap a time slot to view that code, and Copy to copy it to your clipboard.
        </p>

        {pageItems.length === 0 ? (
          <EmptyState
            title="No platforms match those filters"
            description="Try a different search term or reset the filters."
            action={
              <Link href="/promo-codes" className="btn-secondary-light">
                Reset Filters
              </Link>
            }
          />
        ) : (
          <div className="grid grid-cols-2 gap-3 xs:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {pageItems.map((game) => (
              <DailyCodeCard key={game.slug} game={game} codes={getDailyCodesForSlug(game.slug, allDailyCodes)} />
            ))}
          </div>
        )}
      </section>

      <Pagination
        basePath="/promo-codes"
        currentPage={page}
        totalPages={totalPages}
        searchParams={{ q: sp.q, status: sp.status, sort: sp.sort }}
      />

      <section id="how-it-works" className="card-surface mb-10 mt-10 p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-brand-green-dark">How Promo Codes Work</h2>
        <p className="mb-3 text-sm leading-relaxed text-brand-green-dark/80">
          Promotional codes are typically issued by individual gaming platforms and entered from an in-app rewards,
          wallet or redeem-code section. Codes are commonly time-limited, usage-capped, or restricted to specific
          user groups or regions. Because each platform controls its own codes, availability and terms differ from
          game to game and can change without notice.
        </p>
        <p className="text-sm leading-relaxed text-brand-green-dark/80">
          This directory does not issue or guarantee any promo code. Each promo-code page lists a status label
          (Verified, Recently Checked, Unverified, Expired, Platform-Specific, or No Public Code Available) along
          with the date it was last checked, so you can judge how current the information is.
        </p>
        <FAQAccordion faqs={promoCodeExplainerFaqs} />
      </section>
    </div>
  );
}
