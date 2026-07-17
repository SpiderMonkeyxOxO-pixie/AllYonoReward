"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { Game } from "@/lib/types";

interface DesktopNavProps {
  featuredGames: Game[];
}

export function DesktopNav({ featuredGames }: DesktopNavProps) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {primaryNav.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const hasMenu = Boolean(item.megaMenu);

          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => hasMenu && setOpenMenu(item.label)}
              onMouseLeave={() => hasMenu && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                aria-expanded={hasMenu ? openMenu === item.label : undefined}
                onFocus={() => hasMenu && setOpenMenu(item.label)}
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-brand-gold-light",
                  isActive && "bg-white/10 text-brand-gold-light"
                )}
              >
                {item.label}
                {hasMenu && (
                  <svg aria-hidden="true" viewBox="0 0 12 8" className="h-2 w-2.5 fill-current">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {hasMenu && item.megaMenu && (
                <div
                  className={cn(
                    "absolute left-0 top-full z-30 w-[min(90vw,640px)] pt-3 transition-opacity",
                    openMenu === item.label ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                  )}
                >
                  <div className="card-surface grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
                    <div className="space-y-1">
                      {item.megaMenu.columns[0]?.links.map((link) => (
                        <Link
                          key={link.href + link.label}
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-sm text-brand-green-dark hover:bg-base-50 hover:text-brand-gold-dark"
                        >
                          <span className="font-medium">{link.label}</span>
                          {link.description && (
                            <span className="block text-xs text-brand-green-dark/60">{link.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>

                    {item.megaMenu.featuredGamesSlot && (
                      <div>
                        <p className="eyebrow mb-2">Featured Games</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {featuredGames.map((game) => (
                            <li key={game.slug}>
                              <Link
                                href={`/games/${game.slug}`}
                                className="block truncate rounded-lg px-3 py-2 text-sm text-brand-green-dark hover:bg-base-50 hover:text-brand-gold-dark"
                              >
                                {game.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
