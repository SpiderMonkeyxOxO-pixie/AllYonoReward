// Homepage "Upcoming and New Games" spotlight — one entry per pre-launch
// title, joined against a matching Game record in games.ts by slug.
import type { UpcomingGame } from "@/lib/types";

// Dhan Game launched July 23, 2026 and has moved to a regular listing
// (see games.ts).
export const upcomingGames: UpcomingGame[] = [
  {
    slug: "win-rummy",
    releaseDateISO: "2026-07-29T08:00:00+05:30",
    releaseWindowLabel: "Around 8:00 AM IST",
    highlightTags: ["New"],
  },
];
