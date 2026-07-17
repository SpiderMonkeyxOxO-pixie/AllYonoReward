import type { FAQItem } from "@/lib/types";

interface FAQAccordionProps {
  faqs: FAQItem[];
  headingId?: string;
}

// Uses native <details>/<summary> so FAQs are fully keyboard- and
// screen-reader-accessible without any client-side JavaScript.
export function FAQAccordion({ faqs, headingId }: FAQAccordionProps) {
  if (!faqs.length) return null;

  return (
    <div className="divide-y divide-black/5 card-surface" aria-labelledby={headingId}>
      {faqs.map((faq) => (
        <details key={faq.question} className="group p-4 sm:p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-green-dark marker:content-none">
            <span>{faq.question}</span>
            <span
              aria-hidden="true"
              className="shrink-0 rounded-full border border-brand-green/20 px-2 py-0.5 text-sm text-brand-green-dark/60 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-brand-green-dark/80">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
