import type { Metadata } from "next";
import { StaticPageShell } from "@/components/layout/StaticPageShell";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, sbiDisclaimer } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-16";

export const metadata: Metadata = buildMetadata({
  title: "About Us: Our Editorial Approach",
  description: `Learn about ${siteConfig.name}, an independent informational directory covering Yono-style games, promo codes and reward features across India today.`,
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <StaticPageShell
      title="About Us"
      crumbName="About Us"
      crumbPath="/about-us"
      lastUpdated={LAST_UPDATED}
      intro={`${siteConfig.name} is an independent, informational directory built to help ${siteConfig.country} users research Yono-style games, their reward features and promo-code status in one organized place.`}
    >
      <section>
        <h2>What We Do</h2>
        <p>
          We organize publicly observable information about a category of mobile games — their available features,
          reward mechanics, and promo-code status — into a consistent, comparable format. Each game and promo-code
          page displays last-reviewed and last-updated dates so readers can judge how current the information is.
        </p>
      </section>

      <section>
        <h2>What We Are Not</h2>
        <p>
          {siteConfig.name} is not a game operator, is not a payment processor, and does not accept deposits or
          distribute rewards. We are not an official representative, agent or partner of any listed game or
          platform, and we do not guarantee that any promo code, reward or feature described here is currently
          active or available.
        </p>
        <p>{sbiDisclaimer}</p>
      </section>

      <section>
        <h2>How We Approach Content</h2>
        <p>
          Our editorial approach favors neutral, verifiable language over promotional claims. Where information
          cannot be independently confirmed, pages say so directly (for example, &ldquo;Not Yet Verified&rdquo; or
          &ldquo;No Public Code Available&rdquo;) rather than presenting an assumption as fact. See our{" "}
          <a href="/editorial-policy" className="font-semibold text-brand-gold-dark hover:underline">
            Editorial Policy
          </a>{" "}
          for more detail.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions, corrections or feedback are welcome via our{" "}
          <a href="/contact-us" className="font-semibold text-brand-gold-dark hover:underline">
            Contact Us
          </a>{" "}
          page.
        </p>
      </section>
    </StaticPageShell>
  );
}
