import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InfoTable } from "@/components/ui/InfoTable";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { RelatedGames } from "@/components/ui/RelatedGames";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { PlatformStatusBadge, ClassificationBadge, PromoStatusBadge } from "@/components/ui/StatusBadge";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { getAllGames, getGameBySlug, getRelatedGames } from "@/lib/data";
import { getAllRewardFeatures } from "@/lib/data";
import { buildMetadata, faqPageJsonLd, gameArticleJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate, promoSlugFor } from "@/lib/utils";

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllGames().map((game) => ({ slug: game.slug }));
}

// Any slug outside generateStaticParams (e.g. a removed game) should hard-404
// via routing rather than being rendered on-demand and cached as a static 200.
export const dynamicParams = false;

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};
  return buildMetadata({
    // Kept short (with the " | AllYonoReward" suffix, this stays under the
    // ~60-char point where Google starts truncating titles in search
    // results) — the fuller "Features, Rewards and Promo-Code Information"
    // phrasing still appears as the on-page <h1>.
    title: `${game.name}: Game Guide & Promo Code`,
    description: game.shortDescription,
    path: `/games/${game.slug}`,
    ogImage: game.icon,
  });
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const relatedGames = getRelatedGames(game, 5);
  const rewardFeatures = getAllRewardFeatures().filter((r) => game.features.includes(r.key));
  const promoSlug = promoSlugFor(game.slug);

  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: `${game.name}: Features, Rewards and Promo-Code Information`,
              path: `/games/${game.slug}`,
              description: game.shortDescription,
            })
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameArticleJsonLd(game)) }} />
      {game.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(game.faqs)) }} />
      )}

      <Breadcrumbs items={[{ name: "All Games", path: "/games" }, { name: game.name, path: `/games/${game.slug}` }]} />

      {/* Header */}
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Image
          src={game.icon}
          alt={`${game.name} game icon`}
          width={88}
          height={88}
          priority
          className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-card sm:h-22 sm:w-22"
        />
        <div>
          <h1 className="text-2xl sm:text-3xl">
            {game.name}: Features, Rewards and Promo-Code Information
          </h1>
          <div className="mt-2 flex flex-wrap gap-2">
            <PlatformStatusBadge status={game.platformStatus} />
            <ClassificationBadge status={game.classification} />
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2.5 xs:flex-row">
        <DownloadButton url={game.downloadUrl} gameName={game.name} className="w-full xs:w-auto" />
        <Link href={`/promo-codes/${promoSlug}`} className="btn-secondary-light w-full justify-center xs:w-auto">
          Check Promo-Code Status
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          {/* Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Overview
            </h2>
            <p className="leading-relaxed text-brand-green-dark/80">{game.longDescription}</p>
          </section>

          {/* Quick info table */}
          <section aria-labelledby="quick-info-heading">
            <h2 id="quick-info-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Quick Information
            </h2>
            <InfoTable
              caption={`Quick information about ${game.name}`}
              rows={[
                { label: "Game name", value: game.name },
                { label: "Game category", value: game.category.join(", ") },
                { label: "Promo-code availability", value: <PromoStatusBadge status={game.promoCode.status} /> },
                { label: "Reward features", value: game.features.join(", ") },
                { label: "Last reviewed date", value: formatDate(game.lastReviewed) },
                { label: "Platform status", value: <PlatformStatusBadge status={game.platformStatus} /> },
                { label: "Classification status", value: <ClassificationBadge status={game.classification} /> },
                { label: "Official website status", value: game.officialWebsiteStatus },
                { label: "Availability notes", value: game.availabilityNotes },
              ]}
            />
          </section>

          {/* Categories */}
          <section aria-labelledby="categories-heading">
            <h2 id="categories-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Available Game Categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {game.category.map((c) => (
                <Link
                  key={c}
                  href={`/games?category=${encodeURIComponent(c)}`}
                  className="rounded-full bg-brand-emerald/10 px-3 py-1.5 text-sm font-medium text-emerald-800 hover:bg-brand-emerald/20"
                >
                  {c}
                </Link>
              ))}
            </div>
          </section>

          {/* Platform features */}
          <section aria-labelledby="platform-features-heading">
            <h2 id="platform-features-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Main Platform Features
            </h2>
            <p className="text-brand-green-dark/80">
              Based on publicly observable information, {game.name} lists the following platform features. Exact
              mechanics, values and availability are controlled by the platform and may change.
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {game.features.map((f) => (
                <li key={f} className="rounded-xl border border-black/5 bg-base-50 px-4 py-2 text-sm text-brand-green-dark/80">
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* Rewards & incentives */}
          <section aria-labelledby="rewards-heading">
            <h2 id="rewards-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Rewards and Incentive Features
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {rewardFeatures.map((reward) => (
                <Link
                  key={reward.slug}
                  href={`/rewards/${reward.slug}`}
                  className="card-surface flex items-center gap-2 p-2.5 hover:shadow-gold sm:gap-3 sm:p-3"
                >
                  <Image
                    src={reward.icon}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="h-8 w-8 shrink-0 rounded-lg sm:h-10 sm:w-10"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-brand-green-dark sm:text-sm">{reward.title}</p>
                    <p className="hidden text-xs text-brand-green-dark/60 sm:block">Learn how it works</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Promo code summary */}
          <section aria-labelledby="promo-summary-heading" className="card-surface-dark p-6 text-white sm:p-8">
            <h2 id="promo-summary-heading" className="mb-2 text-xl font-semibold text-brand-gold-light">
              Promo-Code Summary
            </h2>
            <p className="mb-4 text-sm text-white/80">
              Current status: <PromoStatusBadge status={game.promoCode.status} /> — see the full promo-code page for
              eligibility, redemption steps and terms.
            </p>
            <Link href={`/promo-codes/${promoSlug}`} className="btn-primary">
              Check Promo-Code Status
            </Link>
          </section>

          {/* Account & eligibility */}
          <section aria-labelledby="eligibility-heading">
            <h2 id="eligibility-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Account and Eligibility Information
            </h2>
            <p className="text-brand-green-dark/80">
              Account eligibility for {game.name}, including minimum age, identity verification and regional
              restrictions, is determined solely by the platform. {game.availabilityNotes} Users should review the
              platform&rsquo;s own terms before registering.
            </p>
          </section>

          {/* Availability / platform status */}
          <section aria-labelledby="availability-heading">
            <h2 id="availability-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Availability and Platform Status
            </h2>
            <p className="text-brand-green-dark/80">
              Platform status for {game.name} is currently listed as{" "}
              <strong className="font-semibold">{game.platformStatus}</strong>. {game.officialWebsiteStatus}{" "}
              Availability may depend on location — users should check applicable local requirements.
            </p>
          </section>

          {/* Safety */}
          <section aria-labelledby="safety-heading">
            <h2 id="safety-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Safety and User-Awareness
            </h2>
            <DisclaimerBox title="Before you engage with this platform">
              <p className="mb-2">
                Classification has not yet been independently verified for {game.name}. Platform conditions may
                change, and this page is for informational purposes only.
              </p>
              <p>
                Read our{" "}
                <Link href="/responsible-gaming" className="font-semibold underline">
                  Responsible Gaming
                </Link>{" "}
                and{" "}
                <Link href="/legalities" className="font-semibold underline">
                  Legalities
                </Link>{" "}
                pages before participating.
              </p>
            </DisclaimerBox>
          </section>

          {/* FAQ */}
          <section aria-labelledby="game-faq-heading">
            <h2 id="game-faq-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={game.faqs} headingId="game-faq-heading" />
          </section>

          <RelatedGames games={relatedGames} />
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="card-surface p-5">
            <p className="mb-3 text-sm font-semibold text-brand-green-dark">Quick Links</p>
            <DownloadButton url={game.downloadUrl} gameName={game.name} className="mb-3 w-full" />
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/promo-codes/${promoSlug}`} className="text-brand-gold-dark hover:underline">
                  Check {game.name} Promo-Code Status
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-brand-gold-dark hover:underline">
                  Back to All Games
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-brand-gold-dark hover:underline">
                  Explore Rewards &amp; Incentives
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-brand-gold-dark hover:underline">
                  Responsible Gaming
                </Link>
              </li>
            </ul>
          </div>
          <LastUpdated lastReviewed={game.lastReviewed} lastUpdated={game.lastUpdated} className="px-1 text-xs text-brand-green-dark/50" />
        </aside>
      </div>
    </div>
  );
}
