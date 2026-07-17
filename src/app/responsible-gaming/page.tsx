import type { Metadata } from "next";
import { StaticPageShell } from "@/components/layout/StaticPageShell";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-16";

export const metadata: Metadata = buildMetadata({
  title: "Responsible Gaming",
  description: "General responsible-gaming guidance for users researching Yono-style games and reward platforms, including where to find help and set limits.",
  path: "/responsible-gaming",
});

export default function ResponsibleGamingPage() {
  return (
    <StaticPageShell
      title="Responsible Gaming"
      crumbName="Responsible Gaming"
      crumbPath="/responsible-gaming"
      lastUpdated={LAST_UPDATED}
      intro="Some platforms referenced in this directory may involve real-money elements. This page offers general awareness guidance, not a substitute for professional support."
    >
      <DisclaimerBox title="If gaming is affecting you negatively">
        If you feel that gaming — of any kind — is negatively affecting your finances, relationships, or wellbeing,
        consider speaking with a qualified counsellor or a relevant local support service.
      </DisclaimerBox>

      <section>
        <h2>General Awareness Guidance</h2>
        <ul>
          <li>Treat any in-app credits, bonuses or promo-code rewards as promotional, not guaranteed income.</li>
          <li>Be cautious of platforms that pressure continuous deposits or downplay the ability to stop.</li>
          <li>Set personal time and spending limits before engaging with any real-money feature.</li>
          <li>Never rely on this website, or any single source, as confirmation that a game or reward is risk-free.</li>
          <li>Games involving real money are only appropriate for adults, where legally permitted.</li>
        </ul>
      </section>

      <section>
        <h2>Classification and Risk</h2>
        <p>
          Games classified here as &ldquo;Online Money Game&rdquo; may carry financial risk. Games marked &ldquo;Not
          Yet Verified&rdquo; or &ldquo;Unclear&rdquo; have not been independently reviewed for their real-money
          elements — treat them with the same
          caution you would apply to any unverified platform.
        </p>
      </section>

      <section>
        <h2>Eligibility and Age</h2>
        <p>
          Platforms referenced in this directory generally restrict use to adults and may require identity
          verification. {siteConfig.name} does not verify user age or identity on behalf of any platform.
        </p>
      </section>
    </StaticPageShell>
  );
}
