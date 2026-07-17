import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { GameCard } from "@/components/ui/GameCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { getAllRewardFeatures, getGamesForRewardFeature, getRewardFeatureBySlug } from "@/lib/data";
import { buildMetadata, faqPageJsonLd, webPageJsonLd } from "@/lib/seo";
import { truncateForMeta } from "@/lib/utils";

interface RewardPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllRewardFeatures().map((reward) => ({ slug: reward.slug }));
}

// Any slug outside generateStaticParams should hard-404 via routing rather
// than being rendered on-demand and cached as a static 200.
export const dynamicParams = false;

export async function generateMetadata({ params }: RewardPageProps): Promise<Metadata> {
  const { slug } = await params;
  const reward = getRewardFeatureBySlug(slug);
  if (!reward) return {};
  return buildMetadata({
    title: `${reward.title}: How It Works`,
    // The on-page "What This Feature Means" section shows the full
    // shortDescription verbatim (required copy) — this trims a copy of it
    // just for the meta/OG tag so it doesn't get cut off mid-sentence in
    // search results.
    description: truncateForMeta(reward.shortDescription),
    path: `/rewards/${reward.slug}`,
    ogImage: reward.icon,
  });
}

export default async function RewardFeaturePage({ params }: RewardPageProps) {
  const { slug } = await params;
  const reward = getRewardFeatureBySlug(slug);
  if (!reward) notFound();

  const associatedGames = getGamesForRewardFeature(reward.key, 8);

  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({ name: `${reward.title}: How It Works`, path: `/rewards/${reward.slug}`, description: reward.shortDescription })
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(reward.faqs)) }} />

      <Breadcrumbs items={[{ name: "Rewards & Incentives", path: "/rewards" }, { name: reward.title, path: `/rewards/${reward.slug}` }]} />

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Image src={reward.icon} alt={`${reward.title} icon`} width={72} height={72} priority className="h-16 w-16 rounded-2xl object-cover shadow-card" />
        <div>
          <p className="eyebrow">{reward.group}</p>
          <h1 className="text-2xl font-bold text-brand-green-dark sm:text-3xl">{reward.title}</h1>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          <section aria-labelledby="what-heading">
            <h2 id="what-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              What This Feature Means
            </h2>
            <p className="text-brand-green-dark/80">{reward.shortDescription}</p>
          </section>

          <section aria-labelledby="how-heading">
            <h2 id="how-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              How It Generally Works
            </h2>
            <ul className="list-disc space-y-1.5 pl-5 text-brand-green-dark/80">
              {reward.howItWorks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="eligibility-heading">
            <h2 id="eligibility-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Typical Eligibility Requirements
            </h2>
            <ul className="list-disc space-y-1.5 pl-5 text-brand-green-dark/80">
              {reward.eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="limitations-heading">
            <h2 id="limitations-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Usage Limitations
            </h2>
            <ul className="list-disc space-y-1.5 pl-5 text-brand-green-dark/80">
              {reward.limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="expiration-heading">
            <h2 id="expiration-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Expiration Information
            </h2>
            <p className="text-brand-green-dark/80">{reward.expirationInfo}</p>
          </section>

          <section aria-labelledby="why-differ-heading">
            <h2 id="why-differ-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Why Values Differ Between Platforms
            </h2>
            <p className="text-brand-green-dark/80">{reward.whyValuesDiffer}</p>
          </section>

          <section aria-labelledby="associated-games-heading">
            <h2 id="associated-games-heading" className="mb-4 text-xl font-semibold text-brand-green-dark">
              Associated Games
            </h2>
            {associatedGames.length === 0 ? (
              <EmptyState title="No linked games yet" description="Games offering this feature will be listed here as they're reviewed." />
            ) : (
              <div className="grid grid-cols-2 gap-3 xs:gap-4 lg:grid-cols-3">
                {associatedGames.map((game) => (
                  <GameCard key={game.slug} game={game} />
                ))}
              </div>
            )}
          </section>

          <section aria-labelledby="reward-faq-heading">
            <h2 id="reward-faq-heading" className="mb-3 text-xl font-semibold text-brand-green-dark">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={reward.faqs} headingId="reward-faq-heading" />
          </section>

          <DisclaimerBox>
            This page explains {reward.title.toLowerCase()} in general, platform-agnostic terms. It does not
            guarantee any specific reward, value or outcome — always confirm current details on the relevant
            platform.
          </DisclaimerBox>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="card-surface p-5">
            <p className="mb-3 text-sm font-semibold text-brand-green-dark">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rewards" className="text-brand-gold-dark hover:underline">
                  Back to All Rewards
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
          <LastUpdated lastUpdated={reward.lastUpdated} className="px-1 text-xs text-brand-green-dark/50" />
        </aside>
      </div>
    </div>
  );
}
