import type { Metadata } from "next";
import { StaticPageShell } from "@/components/layout/StaticPageShell";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, siteDisclaimer, sbiDisclaimer } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-16";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer: Informational Use Only",
  description: `Important disclaimers about the informational nature of ${siteConfig.name}, including our independence from SBI, YONO SBI and every game platform we list.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <StaticPageShell
      title="Disclaimer"
      crumbName="Disclaimer"
      crumbPath="/disclaimer"
      lastUpdated={LAST_UPDATED}
    >
      <section>
        <h2>General Disclaimer</h2>
        <p>{siteDisclaimer}</p>
      </section>

      <section>
        <h2>No Affiliation With SBI or YONO SBI</h2>
        <p>{sbiDisclaimer}</p>
      </section>

      <section>
        <h2>No Guarantee of Promo-Code Accuracy</h2>
        <p>
          Promo-code status labels (Verified, Recently Checked, Unverified, Expired, Platform-Specific, No Public
          Code Available) reflect our review process as of the date shown. A code is never labelled as verified or
          working unless it has genuinely been checked, and any status can change after that date without notice.
        </p>
      </section>

      <section>
        <h2>No Financial or Legal Advice</h2>
        <p>
          Nothing on this site constitutes financial, investment, or legal advice. Classification of games as
          social, e-sport, or money games reflects our own review status, not a legal determination.
        </p>
      </section>

      <section>
        <h2>Third-Party Platforms</h2>
        <p>
          We are not responsible for the content, policies, availability, or conduct of any third-party platform
          referenced on this site.
        </p>
      </section>
    </StaticPageShell>
  );
}
