import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { DownloadButton } from "./DownloadButton";

interface GameCardProps {
  game: Game;
  priority?: boolean;
}

export function GameCard({ game, priority }: GameCardProps) {
  return (
    <article className="card-surface flex h-full flex-col overflow-hidden transition-shadow hover:shadow-gold">
      <div className="flex items-center gap-2.5 border-b border-black/5 bg-base-50 p-3 sm:gap-3 sm:p-4">
        <Image
          src={game.icon}
          alt={`${game.name} game icon`}
          width={56}
          height={56}
          priority={priority}
          className="h-11 w-11 shrink-0 rounded-xl2 object-cover shadow-sm sm:h-14 sm:w-14"
        />
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-brand-green-dark sm:text-base">{game.name}</h3>
          <p className="truncate text-xs text-brand-green-dark/60">{game.category.join(" · ")}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-3 sm:gap-3 sm:p-4">
        <p className="line-clamp-2 text-xs text-brand-green-dark/80 sm:line-clamp-3 sm:text-sm">
          {game.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {game.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-brand-emerald/10 px-2 py-1 text-[10px] font-medium text-emerald-800 sm:px-2.5 sm:text-[11px]"
            >
              {feature}
            </span>
          ))}
        </div>

        <p className="mt-auto text-[11px] text-brand-green-dark/50 sm:text-xs">
          Last reviewed: {formatDate(game.lastReviewed)}
        </p>

        {/* Always stacked, never side-by-side: this card sits in a 2-4 column
            grid, so its rendered width is much narrower than the viewport —
            a viewport-based row breakpoint here squeezed both buttons down
            to a near-circle. Full-width stacked buttons are never cramped. */}
        <div className="mt-1 flex flex-col gap-2">
          <Link href={`/games/${game.slug}`} className="btn-secondary-light w-full justify-center px-3 text-xs sm:text-sm">
            View Game Guide
          </Link>
          <DownloadButton
            url={game.downloadUrl}
            gameName={game.name}
            variant="compact"
            className="w-full justify-center"
          />
        </div>
      </div>
    </article>
  );
}
