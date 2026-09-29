// Homepage "Upcoming and New Games" spotlight — one entry per pre-launch
// title, joined against a matching Game record in games.ts by slug.
import type { UpcomingGame } from "@/lib/types";

// Dhan Game (launched July 23, 2026), Win Rummy (launched July 29, 2026),
// Gold Rummy (launched August 19, 2026), and Money Rummy (launched
// September 9, 2026) have all moved to regular listings (see games.ts).
export const upcomingGames: UpcomingGame[] = [
  {
    slug: "jeet-spin",
    releaseDateISO: "2026-09-30T08:00:00+05:30",
    releaseWindowLabel: "30 September 2026",
    highlightTags: ["New"],
  },
];
