"use client";

import { useRouter } from "next/navigation";
import { useId, useMemo, useState } from "react";
import Link from "next/link";
import type { SearchIndexEntry } from "@/lib/utils";
import { searchEntries } from "@/lib/utils";

interface SearchBoxProps {
  index: SearchIndexEntry[];
  placeholder?: string;
  variant?: "hero" | "compact";
}

export function SearchBox({ index, placeholder = "Search games or promo codes", variant = "compact" }: SearchBoxProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const listId = useId();

  const results = useMemo(() => searchEntries(index, query).slice(0, 8), [index, query]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  }

  const isHero = variant === "hero";

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="relative w-full"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <label htmlFor={listId} className="sr-only">
        Search games or promo codes
      </label>
      <div className="flex items-center gap-2">
        <input
          id={listId}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(Boolean(query))}
          placeholder={placeholder}
          autoComplete="off"
          className={
            isHero
              ? "w-full rounded-full border-0 bg-white px-5 py-3.5 text-base text-brand-green-dark shadow-lg placeholder:text-brand-green-dark/50 focus-visible:ring-2 focus-visible:ring-brand-gold"
              : "w-full rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-brand-green-dark placeholder:text-brand-green-dark/40 focus-visible:ring-2 focus-visible:ring-brand-gold"
          }
        />
        <button type="submit" className={isHero ? "btn-primary shrink-0" : "btn-secondary-light shrink-0"}>
          Search
        </button>
      </div>

      {open && query && (
        <ul
          className="absolute left-0 right-0 top-full z-20 mt-2 max-h-80 overflow-auto rounded-2xl border border-black/10 bg-white p-2 shadow-card"
        >
          {results.length === 0 && (
            <li className="px-3 py-2 text-sm text-brand-green-dark/60">No matches yet. Try a different game name.</li>
          )}
          {results.map((entry) => (
            <li key={`${entry.type}-${entry.href}`}>
              <Link
                href={entry.href}
                className="flex flex-col rounded-xl px-3 py-2 text-sm hover:bg-base-50"
                onClick={() => setOpen(false)}
              >
                <span className="font-medium text-brand-green-dark">{entry.title}</span>
                <span className="text-xs capitalize text-brand-green-dark/50">{entry.type.replace("-", " ")}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
