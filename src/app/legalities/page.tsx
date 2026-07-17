import type { Metadata } from "next";
import Link from "next/link";
import { StaticPageShell } from "@/components/layout/StaticPageShell";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-16";

export const metadata: Metadata = buildMetadata({
  title: "Legal Status of Yono-Style Games in India",
  description: "General, non-legal-advice information about how skill games, social games and real-money games are commonly treated under Indian law and state rules.",
  path: "/legalities",
});

export default function LegalitiesPage() {
  return (
    <StaticPageShell
      title="Legalities"
      crumbName="Legalities"
      crumbPath="/legalities"
      lastUpdated={LAST_UPDATED}
      intro="This page provides general, non-exhaustive background information. It is not legal advice and has not been verified by qualified legal counsel."
    >
      <DisclaimerBox title="This is not legal advice">
        Laws relating to online skill games, social games and real-money gaming vary by Indian state and can change.
        {" "}{siteConfig.name} does not provide legal conclusions about any specific game. Users should consult
        applicable local regulations and, where needed, a qualified legal professional.
      </DisclaimerBox>

      <section>
        <h2>Why Classification Matters</h2>
        <p>
          Games referenced in this directory may fall into different regulatory categories — for example, games of
          skill, social/free-to-play games, or games involving real-money elements. These categories can be treated
          very differently under Indian law depending on the state and the specific mechanics involved.
        </p>
      </section>

      <section>
        <h2>Our Classification Fields</h2>
        <p>
          Each game page includes a classification field (Social Game, E-sport, Online Money Game, Unclear, or Not
          Yet Verified). Unless a page states otherwise, treat this field as an administrative starting point, not
          an independently verified legal determination.
        </p>
      </section>

      <section>
        <h2>Availability by Location</h2>
        <p>
          Availability of any given game or feature may depend on your location. Some Indian states restrict or
          prohibit certain real-money game formats. Users should check applicable local requirements before
          participating in any platform referenced on this site.
        </p>
      </section>

      <section>
        <h2>Related Pages</h2>
        <p>
          See also our{" "}
          <Link href="/responsible-gaming" className="font-semibold text-brand-gold-dark hover:underline">
            Responsible Gaming
          </Link>{" "}
          and{" "}
          <Link href="/disclaimer" className="font-semibold text-brand-gold-dark hover:underline">
            Disclaimer
          </Link>{" "}
          pages.
        </p>
      </section>
    </StaticPageShell>
  );
}
