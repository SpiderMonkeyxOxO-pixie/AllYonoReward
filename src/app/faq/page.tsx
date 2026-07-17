import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { buildMetadata, faqPageJsonLd } from "@/lib/seo";
import { homepageFaqs, promoCodeExplainerFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-16";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description: `Common questions about ${siteConfig.name}, how promo-code statuses work, how game information is reviewed, and how often listings are refreshed here.`,
  path: "/faq",
});

const allFaqs = [...homepageFaqs, ...promoCodeExplainerFaqs];

export default function FaqPage() {
  return (
    <div className="container-page py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(allFaqs)) }} />

      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      <h1 className="mb-3 mt-4 text-3xl font-bold text-brand-green-dark">Frequently Asked Questions</h1>
      <LastUpdated lastUpdated={LAST_UPDATED} className="mb-8 text-xs text-brand-green-dark/50" />

      <div className="max-w-3xl">
        <FAQAccordion faqs={allFaqs} headingId="faq-heading" />
      </div>
    </div>
  );
}
