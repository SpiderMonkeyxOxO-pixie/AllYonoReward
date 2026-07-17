import type { Metadata } from "next";
import { StaticPageShell } from "@/components/layout/StaticPageShell";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-16";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions",
  description: `The terms that govern use of the ${siteConfig.name} website, including acceptable use, accuracy limitations, liability and intellectual property.`,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <StaticPageShell
      title="Terms and Conditions"
      crumbName="Terms and Conditions"
      crumbPath="/terms-and-conditions"
      lastUpdated={LAST_UPDATED}
      intro={`These terms govern your use of ${siteConfig.name}. By using this site, you agree to the terms below.`}
    >
      <DisclaimerBox title="Placeholder terms">
        This is placeholder terms-of-use language. Have it reviewed by a qualified legal professional before launch.
      </DisclaimerBox>

      <section>
        <h2>Informational Purpose Only</h2>
        <p>
          Content on this site is provided for general informational purposes about a category of mobile games. It
          is not an offer, endorsement, or guarantee related to any listed game, promo code or reward.
        </p>
      </section>

      <section>
        <h2>No Official Affiliation</h2>
        <p>
          {siteConfig.name} is independent and is not an official representative of any listed game, platform,
          financial institution, SBI, or YONO SBI.
        </p>
      </section>

      <section>
        <h2>Accuracy of Information</h2>
        <p>
          We aim to keep listings reasonably current, shown via last-reviewed and last-updated dates, but we cannot
          guarantee that any promo code, reward, feature or eligibility detail is accurate at the moment you view
          it. Always verify directly with the relevant platform.
        </p>
      </section>

      <section>
        <h2>Acceptable Use</h2>
        <ul>
          <li>Do not use this site for unlawful purposes.</li>
          <li>Do not attempt to scrape, disrupt or reverse-engineer the site in a way that harms its availability.</li>
          <li>Do not misrepresent this site as an official platform, bank, or payment provider.</li>
        </ul>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          To the extent permitted by applicable law, {siteConfig.name} is not liable for losses arising from
          reliance on information found on this site, including changes to promo codes, rewards, or platform
          availability.
        </p>
      </section>

      <section>
        <h2>Changes to These Terms</h2>
        <p>These terms may be updated periodically. The date at the top of this page reflects the latest revision.</p>
      </section>
    </StaticPageShell>
  );
}
