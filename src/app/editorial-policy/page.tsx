import type { Metadata } from "next";
import { StaticPageShell } from "@/components/layout/StaticPageShell";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-16";

export const metadata: Metadata = buildMetadata({
  title: "Editorial Policy",
  description: `How ${siteConfig.name} researches, writes and reviews game and promo-code information, including our sourcing standards and update frequency for each listing.`,
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <StaticPageShell
      title="Editorial Policy"
      crumbName="Editorial Policy"
      crumbPath="/editorial-policy"
      lastUpdated={LAST_UPDATED}
      intro="This policy explains how content on this site is researched, written and reviewed."
    >
      <section>
        <h2>Neutral, Informational Tone</h2>
        <p>
          We write in neutral, descriptive language and avoid promotional claims such as guaranteed rewards, instant
          winnings, or guaranteed working promo codes. Where a detail cannot be confirmed, we say so directly rather
          than presenting an assumption as fact.
        </p>
      </section>

      <section>
        <h2>Placeholder and Unverified Data</h2>
        <p>
          Some fields — including promo-code specifics, legal classification, and platform status — start as
          clearly labelled placeholders (e.g. &ldquo;Not Yet Verified&rdquo;, &ldquo;No Public Code Available&rdquo;) until independently
          confirmed. We do not fabricate verification statements, dates, or code values.
        </p>
      </section>

      <section>
        <h2>Review Cadence</h2>
        <p>
          Each game and promo-code page displays a last-reviewed and last-updated date. We aim to revisit listings
          periodically, prioritizing pages that are older or flagged via user corrections.
        </p>
      </section>

      <section>
        <h2>Independence</h2>
        <p>
          {siteConfig.name} is not paid by any listed platform to rank, feature, or favorably describe it. Featured
          or &ldquo;Popular&rdquo; placements on this site reflect editorial curation, not sponsorship.
        </p>
      </section>

      <section>
        <h2>Corrections</h2>
        <p>See our Corrections Policy for how we handle reported inaccuracies.</p>
      </section>
    </StaticPageShell>
  );
}
