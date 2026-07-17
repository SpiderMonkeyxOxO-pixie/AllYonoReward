import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InfoTable } from "@/components/ui/InfoTable";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { PromoStatusBadge } from "@/components/ui/StatusBadge";
import { DailyCodeCard } from "@/components/ui/DailyCodeCard";
import { getAllGames, getAllRewardFeatures, getGameByPromoSlug } from "@/lib/data";
import { buildMetadata, faqPageJsonLd, webPageJsonLd } from "@/lib/seo";
import { formatDate, promoSlugFor } from "@/lib/utils";
import { siteDisclaimer } from "@/lib/site-config";
import { pickPromoFaqs } from "@/data/promoFaqPool";
import { pickPromoDescription } from "@/data/promoDescriptionPool";
import { getDailyCodesForSlug } from "@/lib/dailyCode";

interface PromoCodePageProps {
  params: Promise<{ promoSlug: string }>;
}

export function generateStaticParams() {
  return getAllGames().map((game) => ({ promoSlug: promoSlugFor(game.slug) }));
}

// Any promoSlug outside generateStaticParams should hard-404 via routing
// rather than being rendered on-demand and cached as a static 200.
export const dynamicParams = false;

export async function generateMetadata({ params }: PromoCodePageProps): Promise<Metadata> {
  const { promoSlug } = await params;
  const game = getGameByPromoSlug(promoSlug);
  if (!game) return {};
  return buildMetadata({
    // Kept short so the title (plus " | AllYonoReward") stays under ~60
    // chars and doesn't get truncated in search results — the fuller
    // "Status, Eligibility and Terms" framing still appears on-page.
    title: `${game.name} Promo Code: Status & Terms`,
    description: pickPromoDescription(game.name, game.slug),
    path: `/promo-codes/${promoSlug}`,
    ogImage: game.icon,
  });
}

export default async function PromoCodePage({ params }: PromoCodePageProps) {
  const { promoSlug } = await params;
  const game = getGameByPromoSlug(promoSlug);
  if (!game) notFound();

  const rewardFeatures = getAllRewardFeatures().filter((r) => game.features.includes(r.key));
  const faqs = pickPromoFaqs(game.name, game.slug);
  const dailyCodes = getDailyCodesForSlug(game.slug);

  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: `${game.name} Promo Code: Status, Eligibility and Terms`,
              path: `/promo-codes/${promoSlug}`,
              description: `Current promo-code status for ${game.name}.`,
            })
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }} />

      <Breadcrumbs
        items={[
          { name: "Promo Codes", path: "/promo-codes" },
          { name: `${game.name} Promo Code`, path: `/promo-codes/${promoSlug}` },
        ]}
      />

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Image
          src={game.icon}
          alt={`${game.name} game icon`}
          width={72}
          height={72}
          priority
          className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-card"
        />
        <h1 className="text-2xl font-bold text-brand-green-dark sm:text-3xl">{game.name} Promo Code Information</h1>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          {/* Status box */}
          <section aria-labelledby="status-heading" className="card-surface-dark p-6 text-white sm:p-8">
            <h2 id="status-heading" className="mb-3 text-lg font-semibold text-brand-gold-light">
              Current Code Status
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <PromoStatusBadge status={game.promoCode.status} className="!bg-white/10 !text-white !ring-white/30" />
              <span className="text-sm text-white/70">
                Last checked: {game.promoCode.lastChecked ? formatDate(game.promoCode.lastChecked) : "Not yet checked"}
              </span>
            </div>
            <p className="mt-4 text-sm text-white/80">
              {game.promoCode.code
                ? `Listed code: ${game.promoCode.code}`
                : "No public promo code is currently listed for this game."}
            </p>
          </section>

          {/* Today's daily codes by time slot */}
          <section aria-labelledby="daily-codes-heading">
            <h2 id="daily-codes-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Today&rsquo;s Code by Time Slot
            </h2>
            <p className="mb-4 text-sm text-brand-green-dark/70">
              Updated up to three times a day — morning, afternoon and evening — as this platform releases new
              codes.
            </p>
            <div className="max-w-sm">
              <DailyCodeCard game={game} codes={dailyCodes} />
            </div>
          </section>

          {/* Eligibility */}
          <section aria-labelledby="eligibility-heading">
            <h2 id="eligibility-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Eligibility Requirements
            </h2>
            <p className="text-brand-green-dark/80">{game.promoCode.eligibility}</p>
          </section>

          {/* Where to enter */}
          <section aria-labelledby="where-heading">
            <h2 id="where-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Where Codes Are Normally Entered
            </h2>
            <p className="text-brand-green-dark/80">{game.promoCode.whereToEnter}</p>
          </section>

          {/* Reward conditions */}
          <section aria-labelledby="conditions-heading">
            <h2 id="conditions-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Reward Conditions
            </h2>
            <p className="text-brand-green-dark/80">{game.promoCode.conditions}</p>
          </section>

          {/* Usage limits & expiration */}
          <section aria-labelledby="limits-heading">
            <h2 id="limits-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Usage Limits and Expiration
            </h2>
            <InfoTable
              rows={[
                { label: "Usage limit", value: game.promoCode.usageLimit },
                { label: "Expiration", value: game.promoCode.expiration },
              ]}
            />
          </section>

          {/* Common issues */}
          <section aria-labelledby="issues-heading">
            <h2 id="issues-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Common Reasons a Code May Not Work
            </h2>
            <ul className="list-disc space-y-1.5 pl-5 text-brand-green-dark/80">
              {game.promoCode.commonIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
          </section>

          {/* Platform terms */}
          <section aria-labelledby="terms-heading">
            <h2 id="terms-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Platform-Specific Terms
            </h2>
            <p className="text-brand-green-dark/80">{game.promoCode.platformTerms}</p>
          </section>

          {/* Relevant reward features */}
          {rewardFeatures.length > 0 && (
            <section aria-labelledby="related-rewards-heading">
              <h2 id="related-rewards-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
                Relevant Reward Features
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
                    <p className="min-w-0 text-xs font-semibold text-brand-green-dark sm:text-sm">{reward.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section aria-labelledby="promo-faq-heading">
            <h2 id="promo-faq-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} headingId="promo-faq-heading" />
          </section>

          <DisclaimerBox>{siteDisclaimer}</DisclaimerBox>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="card-surface p-5">
            <p className="mb-3 text-sm font-semibold text-brand-green-dark">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/games/${game.slug}`} className="text-brand-gold-dark hover:underline">
                  View Full {game.name} Game Guide
                </Link>
              </li>
              <li>
                <Link href="/promo-codes" className="text-brand-gold-dark hover:underline">
                  Back to All Promo Codes
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-brand-gold-dark hover:underline">
                  Explore Rewards &amp; Incentives
                </Link>
              </li>
            </ul>
          </div>
          <LastUpdated lastUpdated={game.lastUpdated} className="px-1 text-xs text-brand-green-dark/50" />
        </aside>
      </div>
    </div>
  );
}
