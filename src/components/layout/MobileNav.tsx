"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { SearchIndexEntry } from "@/lib/utils";
import { SearchBox } from "./SearchBox";

interface MobileNavProps {
  searchIndex: SearchIndexEntry[];
}

export function MobileNav({ searchIndex }: MobileNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Close the panel on route change without an effect, per React's "adjusting
  // state during render" pattern — avoids the extra render an effect would cause.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const panel = (
    <div
      id="mobile-nav-panel"
      className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-brand-green-dark px-4 pb-8 pt-4 animate-fade-in"
    >
      <div className="mb-4">
        <SearchBox index={searchIndex} placeholder="Search games or promo codes" />
      </div>

      <ul className="space-y-1">
        {primaryNav.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const hasMenu = Boolean(item.megaMenu);
          const sectionOpen = openSection === item.label;

          return (
            <li key={item.label} className="border-b border-white/10 py-1">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex-1 rounded-lg px-2 py-3 text-base font-medium text-white/90",
                    isActive && "text-brand-gold-light"
                  )}
                >
                  {item.label}
                </Link>
                {hasMenu && (
                  <button
                    type="button"
                    aria-expanded={sectionOpen}
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() => setOpenSection(sectionOpen ? null : item.label)}
                    className="flex h-11 w-11 items-center justify-center text-white/70"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 8"
                      className={cn("h-3 w-3 fill-none stroke-current transition-transform", sectionOpen && "rotate-180")}
                    >
                      <path d="M1 1l5 5 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>

              {hasMenu && sectionOpen && item.megaMenu && (
                <ul className="ml-2 space-y-1 border-l border-white/10 pb-2 pl-3">
                  {item.megaMenu.columns[0]?.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="block rounded-lg px-2 py-2 text-sm text-white/70 hover:text-brand-gold-light">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 active:bg-white/20"
      >
        {isOpen ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Rendered via portal directly into <body>: the header this button
          lives in uses backdrop-blur, which (like filter/transform) creates a
          new containing block for position:fixed descendants — that broke
          full-viewport positioning here, squashing the panel and letting
          page content show through beneath it. Escaping to <body> sidesteps
          that entirely regardless of any future ancestor CSS changes.
          No mount-effect needed: isOpen can only flip true from the onClick
          below, which is inherently client-only, so `document` is always
          defined by the time this branch renders — no hydration mismatch. */}
      {isOpen && createPortal(panel, document.body)}
    </div>
  );
}
