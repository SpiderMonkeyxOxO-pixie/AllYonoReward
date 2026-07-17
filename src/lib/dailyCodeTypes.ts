// Client-safe types/constants for daily promo codes — no filesystem access,
// so this can be imported from both server and client components. The
// filesystem-backed parser lives in dailyCode.ts (server-only, uses node:fs).

export type DailyCodeStatus = "Verified" | "Expired" | "Not Released";
export type DailySlotKey = "am" | "pm" | "eve";

export interface DailyCodeSlot {
  code: string;
  status: DailyCodeStatus;
}

export interface GameDailyCodes {
  am: DailyCodeSlot;
  pm: DailyCodeSlot;
  eve: DailyCodeSlot;
}

export const DAILY_SLOT_META: Record<DailySlotKey, { label: string; short: string }> = {
  am: { label: "Morning", short: "AM" },
  pm: { label: "Afternoon", short: "PM" },
  eve: { label: "Evening", short: "Eve" },
};

export function emptySlot(): DailyCodeSlot {
  return { code: "", status: "Not Released" };
}

export function emptyGameCodes(): GameDailyCodes {
  return { am: emptySlot(), pm: emptySlot(), eve: emptySlot() };
}
