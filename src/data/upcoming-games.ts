// Homepage "Upcoming and New Games" spotlight — one entry per pre-launch
// title, joined against a matching Game record in games.ts by slug.
import type { UpcomingGame } from "@/lib/types";

// Dhan Game (launched July 23, 2026) and Win Rummy (launched July 29,
// 2026) have both moved to regular listings (see games.ts).
export const upcomingGames: UpcomingGame[] = [
  {
    slug: "gold-rummy",
    releaseDateISO: "2026-08-19T08:00:00+05:30",
    releaseWindowLabel: "Around 8:00 AM IST",
    highlightTags: ["New"],
  },
];
