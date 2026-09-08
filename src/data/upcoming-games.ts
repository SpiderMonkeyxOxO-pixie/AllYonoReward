// Homepage "Upcoming and New Games" spotlight — one entry per pre-launch
// title, joined against a matching Game record in games.ts by slug.
import type { UpcomingGame } from "@/lib/types";

// Dhan Game (launched July 23, 2026), Win Rummy (launched July 29, 2026)
// and Gold Rummy (launched August 19, 2026) have all moved to regular
// listings (see games.ts). Money Rummy is next, reported to launch
// September 9, 2026.
export const upcomingGames: UpcomingGame[] = [
  {
    slug: "money-rummy",
    releaseDateISO: "2026-09-09T08:00:00+05:30",
    releaseWindowLabel: "8:00 - 9:00 AM IST",
    highlightTags: ["New"],
  },
];
