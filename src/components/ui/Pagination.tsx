import Link from "next/link";
import { cn } from "@/lib/utils";

interface PaginationProps {
  basePath: string;
  currentPage: number;
  totalPages: number;
  searchParams?: Record<string, string | undefined>;
}

function buildHref(basePath: string, page: number, searchParams?: Record<string, string | undefined>) {
  const params = new URLSearchParams();
  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value && key !== "page") params.set(key, value);
    }
  }
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

export function Pagination({ basePath, currentPage, totalPages, searchParams }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 pt-4">
      <Link
        href={buildHref(basePath, Math.max(1, currentPage - 1), searchParams)}
        aria-disabled={currentPage === 1}
        className={cn(
          "btn-secondary-light",
          currentPage === 1 && "pointer-events-none opacity-40"
        )}
      >
        Previous
      </Link>
      <span className="px-3 text-sm text-brand-green-dark/70">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={buildHref(basePath, Math.min(totalPages, currentPage + 1), searchParams)}
        aria-disabled={currentPage === totalPages}
        className={cn(
          "btn-secondary-light",
          currentPage === totalPages && "pointer-events-none opacity-40"
        )}
      >
        Next
      </Link>
    </nav>
  );
}
