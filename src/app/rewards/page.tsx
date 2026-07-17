import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RewardCard } from "@/components/ui/RewardCard";
import { getAllRewardFeatures } from "@/lib/data";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import type { RewardFeature } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Yono Game Rewards and Incentives Explained",
  description:
    "Daily rewards, events, welcome bonuses and referral programs across Yono-style games, explained in neutral, platform-agnostic terms for Indian players.",
  path: "/rewards",
});

const GROUP_ORDER: RewardFeature["group"][] = [
  "Daily & Account Rewards",
  "Events & Activity Features",
  "New-User Rewards",
  "Referral Rewards",
];

export default function RewardsHubPage() {
  const rewards = getAllRewardFeatures();
  const grouped = GROUP_ORDER.map((group) => ({
    group,
    items: rewards.filter((r) => r.group === group),
  }));

  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Yono Game Rewards & Incentives",
              path: "/rewards",
              description: "Understand the reward and incentive features used across Yono-style games.",
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "Rewards & Incentives", path: "/rewards" }]} />

      <h1 className="mb-2 mt-4 text-3xl font-bold text-brand-green-dark">Yono Game Rewards &amp; Incentives</h1>
      <p className="mb-10 max-w-2xl text-brand-green-dark/70">
        A neutral explanation of the reward mechanics commonly found across Yono-style games — how they generally
        work, typical eligibility, and why values differ from platform to platform.
      </p>

      <div className="space-y-12">
        {grouped.map(({ group, items }) => (
          <section key={group} aria-labelledby={`group-${group}`}>
            <h2 id={`group-${group}`} className="mb-4 text-xl font-semibold text-brand-green-dark">
              {group}
            </h2>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((reward) => (
                <RewardCard key={reward.slug} reward={reward} />
              ))}
            </div>
          </section>
        ))}

        <section aria-labelledby="promo-group-heading" className="card-surface p-6 sm:p-8">
          <h2 id="promo-group-heading" className="mb-2 text-xl font-semibold text-brand-green-dark">
            Promotional Codes
          </h2>
          <p className="mb-4 text-sm text-brand-green-dark/80">
            Enter or review a valid promotional code for eligible platform benefits. Codes may have expiration
            dates, usage limits and specific eligibility requirements.
          </p>
          <Link href="/promo-codes" className="btn-secondary-light">
            View Promo Codes
          </Link>
        </section>
      </div>
    </div>
  );
}
