import type { Metadata } from "next";
import { StaticPageShell } from "@/components/layout/StaticPageShell";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-16";

export const metadata: Metadata = buildMetadata({
  title: "Corrections Policy",
  description: `How ${siteConfig.name} reviews reader-reported corrections to game, promo-code and reward information, and how quickly updates are made after a report.`,
  path: "/corrections-policy",
});

export default function CorrectionsPolicyPage() {
  return (
    <StaticPageShell
      title="Corrections Policy"
      crumbName="Corrections Policy"
      crumbPath="/corrections-policy"
      lastUpdated={LAST_UPDATED}
      intro="We rely on reader reports, in addition to our own review cadence, to keep listings reasonably current."
    >
      <section>
        <h2>How to Report an Issue</h2>
        <p>
          Use our{" "}
          <a href="/contact-us" className="font-semibold text-brand-gold-dark hover:underline">
            Contact Us
          </a>{" "}
          page and include the page URL, the specific detail you believe is outdated or incorrect, and — where
          possible — a source or reference.
        </p>
      </section>

      <section>
        <h2>What Happens Next</h2>
        <ul>
          <li>Reports are reviewed against publicly available information.</li>
          <li>Confirmed changes update the page&rsquo;s content and its last-updated date.</li>
          <li>If a detail cannot be independently confirmed, the field is set to an explicitly unverified status rather than guessed.</li>
        </ul>
      </section>

      <section>
        <h2>Promo-Code Reports</h2>
        <p>
          If you report that a promo code no longer works (or now works), we update the status label and
          last-checked date accordingly once reviewed. We do not mark a code Verified based on a single unconfirmed
          report.
        </p>
      </section>

      <section>
        <h2>No Guarantee of Immediate Update</h2>
        <p>
          As an independent, manually reviewed directory, corrections are not applied instantly. We prioritize
          reports affecting safety or clearly factual errors.
        </p>
      </section>
    </StaticPageShell>
  );
}
