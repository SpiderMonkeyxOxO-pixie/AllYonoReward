// Homepage "Upcoming and New Games" spotlight — one entry per pre-launch
// title, joined against a matching Game record in games.ts by slug.
import type { UpcomingGame } from "@/lib/types";

// Dhan Game (launched July 23, 2026), Win Rummy (launched July 29, 2026)
// and Gold Rummy (launched August 19, 2026) have all moved to regular
// listings (see games.ts) — this list is empty until the next pre-launch title.
export const upcomingGames: UpcomingGame[] = [];
