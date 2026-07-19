// Homepage "Upcoming and New Games" spotlight — one entry per pre-launch
// title, joined against a matching Game record in games.ts by slug.
import type { UpcomingGame } from "@/lib/types";

export const upcomingGames: UpcomingGame[] = [
  {
    slug: "dhan-game",
    releaseDateISO: "2026-07-23T08:00:00+05:30",
    releaseWindowLabel: "8:00 – 9:00 AM IST",
    welcomeBonusRange: "₹50 - ₹500",
    minWithdrawal: "₹100",
    highlightTags: ["Hot", "New"],
  },
];
