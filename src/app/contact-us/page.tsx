import type { Metadata } from "next";
import { StaticPageShell } from "@/components/layout/StaticPageShell";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-16";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us: Questions & Corrections",
  description: `How to reach ${siteConfig.name} with questions, corrections or feedback about any game, promo-code or reward listing on this site. We reply to genuine reports.`,
  path: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <StaticPageShell
      title="Contact Us"
      crumbName="Contact Us"
      crumbPath="/contact-us"
      lastUpdated={LAST_UPDATED}
      intro="We welcome questions, corrections and general feedback about the information on this site."
    >
      <section>
        <h2>Email</h2>
        <p>
          {/* PLACEHOLDER contact address — replace with a monitored inbox before launch */}
          General inquiries: <a className="font-semibold text-brand-gold-dark hover:underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </p>
      </section>

      <section>
        <h2>Reporting Outdated or Inaccurate Information</h2>
        <p>
          If you notice a game guide, promo-code status, or reward description that appears outdated or incorrect,
          please include the page URL and a brief description of what should be reviewed. See our{" "}
          <a href="/corrections-policy" className="font-semibold text-brand-gold-dark hover:underline">
            Corrections Policy
          </a>{" "}
          for how these reports are handled.
        </p>
      </section>

      <section>
        <h2>What We Cannot Help With</h2>
        <p>
          As an independent informational resource, we cannot process deposits, withdrawals, account issues, or
          disputes related to any listed game or platform. Those matters should be directed to the relevant
          platform&rsquo;s own support channels.
        </p>
      </section>
    </StaticPageShell>
  );
}
