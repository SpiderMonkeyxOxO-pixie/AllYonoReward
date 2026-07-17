import type { Metadata } from "next";
import { StaticPageShell } from "@/components/layout/StaticPageShell";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-16";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects information from visitors to this website, including cookies, analytics and third-party links.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <StaticPageShell
      title="Privacy Policy"
      crumbName="Privacy Policy"
      crumbPath="/privacy-policy"
      lastUpdated={LAST_UPDATED}
      intro={`This Privacy Policy explains, in general terms, how ${siteConfig.name} handles information from visitors to this website.`}
    >
      <DisclaimerBox title="Placeholder policy">
        This is placeholder policy language for an informational directory that does not currently require user
        accounts, deposits, or payment processing. Have this reviewed by a qualified privacy/legal professional
        before launch, and update it to reflect your actual analytics, cookie and hosting setup.
      </DisclaimerBox>

      <section>
        <h2>Information We May Collect</h2>
        <ul>
          <li>Standard server/log data (e.g. pages visited, browser type, approximate location from IP address).</li>
          <li>Information you voluntarily provide via the Contact Us form or email, such as your name and message.</li>
          <li>Aggregated, non-identifying analytics data, if an analytics tool is enabled.</li>
        </ul>
      </section>

      <section>
        <h2>How Information May Be Used</h2>
        <ul>
          <li>To operate, maintain and improve the website.</li>
          <li>To respond to inquiries submitted through Contact Us.</li>
          <li>To understand aggregate usage patterns (e.g. which pages are most viewed).</li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          This site may use essential and analytics cookies. Specific cookie names, providers and retention periods
          should be documented here once analytics/hosting tooling is finalized.
        </p>
      </section>

      <section>
        <h2>Third-Party Links</h2>
        <p>
          This site links to third-party platforms it does not control. Their own privacy practices apply once you
          leave this site.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent via our{" "}
          <a href="/contact-us" className="font-semibold text-brand-gold-dark hover:underline">
            Contact Us
          </a>{" "}
          page.
        </p>
      </section>
    </StaticPageShell>
  );
}
