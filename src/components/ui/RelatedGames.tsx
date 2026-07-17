import type { Game } from "@/lib/types";
import { GameCard } from "./GameCard";

interface RelatedGamesProps {
  games: Game[];
  heading?: string;
}

export function RelatedGames({ games, heading = "Related Games" }: RelatedGamesProps) {
  if (!games.length) return null;

  return (
    <section aria-labelledby="related-games-heading">
      <h2 id="related-games-heading" className="mb-4 text-xl font-semibold text-brand-green-dark">
        {heading}
      </h2>
      <div className="grid grid-cols-2 gap-3 xs:gap-4 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}
