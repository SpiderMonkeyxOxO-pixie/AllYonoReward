import type { Metadata } from "next";
import Link from "next/link";
import { EmptyState } from "@/components/ui/EmptyState";
import { getAllGames } from "@/lib/data";
import { buildGameSearchEntries, searchEntries } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const sp = await searchParams;
  return buildMetadata({
    title: sp.q ? `Search results for "${sp.q}"` : "Search",
    description: "Search results across games, promo codes and reward features.",
    path: "/search",
    noindex: true,
  });
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const sp = await searchParams;
  const query = sp.q ?? "";
  const index = buildGameSearchEntries(getAllGames());
  const results = query ? searchEntries(index, query) : [];

  return (
    <div className="container-page py-10">
      <h1 className="mb-2 text-2xl font-bold text-brand-green-dark">Search Results</h1>
      <p className="mb-8 text-brand-green-dark/70">
        {query ? (
          <>
            Showing results for <strong>&ldquo;{query}&rdquo;</strong>
          </>
        ) : (
          "Enter a search term to find games, promo codes and reward features."
        )}
      </p>

      {query && results.length === 0 && (
        <EmptyState
          title="No matches found"
          description="Try a different game name, or browse the full directory instead."
          action={
            <Link href="/games" className="btn-secondary-light">
              Browse All Games
            </Link>
          }
        />
      )}

      {results.length > 0 && (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {results.map((entry) => (
            <li key={`${entry.type}-${entry.href}`} className="card-surface p-4">
              <Link href={entry.href} className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">
                  {entry.type.replace("-", " ")}
                </span>
                <p className="mt-1 font-semibold text-brand-green-dark">{entry.title}</p>
                <p className="mt-1 text-sm text-brand-green-dark/70">{entry.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
