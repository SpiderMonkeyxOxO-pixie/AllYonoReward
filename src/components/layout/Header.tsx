import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getAllGames, getFeaturedGames } from "@/lib/data";
import { buildGameSearchEntries } from "@/lib/utils";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { SearchBox } from "./SearchBox";

export function Header() {
  const featuredGames = getFeaturedGames(6);
  const searchIndex = buildGameSearchEntries(getAllGames());

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-brand-green-dark/95 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-brand-green-dark"
      >
        Skip to main content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={36}
            height={36}
            className="h-8 w-8 shrink-0 rounded-lg xs:h-9 xs:w-9"
            priority
          />
          <span className="truncate font-display text-base font-bold text-white xs:text-lg">{siteConfig.name}</span>
        </Link>

        <DesktopNav featuredGames={featuredGames} />

        <div className="hidden max-w-xs flex-1 lg:block">
          <SearchBox index={searchIndex} placeholder="Search games or promo codes" />
        </div>

        <MobileNav searchIndex={searchIndex} />
      </div>
    </header>
  );
}
