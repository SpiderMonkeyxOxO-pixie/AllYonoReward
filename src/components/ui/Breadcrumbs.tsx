import Link from "next/link";
import { breadcrumbJsonLd, type BreadcrumbEntry } from "@/lib/seo";

interface BreadcrumbsProps {
  items: BreadcrumbEntry[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const withHome: BreadcrumbEntry[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-brand-green-dark/70">
        {withHome.map((item, index) => {
          const isLast = index === withHome.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page" className="font-medium text-brand-green-dark">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-brand-gold-dark hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(withHome)) }}
      />
    </nav>
  );
}
