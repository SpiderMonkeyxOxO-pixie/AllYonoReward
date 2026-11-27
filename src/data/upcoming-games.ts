// Homepage "Upcoming and New Games" spotlight — one entry per pre-launch
// title, joined against a matching Game record in games.ts by slug.
import type { UpcomingGame } from "@/lib/types";

// Dhan Game (launched July 23, 2026), Win Rummy (launched July 29, 2026),
// Gold Rummy (launched August 19, 2026), Money Rummy (launched
// September 9, 2026), Jaiho Play (launched October 15, 2026), VIP Rummy
// (launched October 20, 2026), Spin Rummy (launched October 30, 2026),
// Cash Rummy (launched November 5, 2026), 123 Rummy (launched
// November 16, 2026), and Rush Gala (launched November 23, 2026) have all
// moved to regular listings (see games.ts).
export const upcomingGames: UpcomingGame[] = [
  {
    slug: "spin-dost",
    releaseDateISO: "2026-12-01T08:00:00+05:30",
    releaseWindowLabel: "8:00 AM IST",
    highlightTags: ["New"],
  },
];
