import { readFileSync } from "node:fs";
import path from "node:path";
import { emptyGameCodes, type DailyCodeStatus, type GameDailyCodes } from "./dailyCodeTypes";

export type { DailyCodeStatus, DailySlotKey, DailyCodeSlot, GameDailyCodes } from "./dailyCodeTypes";
export { DAILY_SLOT_META, emptyGameCodes } from "./dailyCodeTypes";

const VALID_STATUSES: DailyCodeStatus[] = ["Verified", "Expired", "Not Released"];

/**
 * Parses the per-game plain-text promo-code.txt format documented in the
 * file itself: a `[slug]` header per game followed by AM_CODE/AM_STATUS,
 * PM_CODE/PM_STATUS, EVE_CODE/EVE_STATUS lines. Read once per server render
 * (or once at build time for static pages) — a missing or malformed file, or
 * a game slug not present in it, degrades to "Not Released" rather than
 * breaking the build. Server-only (uses node:fs) — do not import from a
 * "use client" component; import types/constants from ./dailyCodeTypes there.
 */
export function getAllDailyCodes(): Record<string, GameDailyCodes> {
  let raw: string;
  try {
    raw = readFileSync(path.join(process.cwd(), "promo-code.txt"), "utf-8");
  } catch {
    return {};
  }

  const result: Record<string, GameDailyCodes> = {};
  let currentSlug: string | null = null;

  for (const rawLine of raw.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const headerMatch = line.match(/^\[([a-z0-9-]+)\]$/);
    if (headerMatch) {
      currentSlug = headerMatch[1] ?? null;
      if (currentSlug) result[currentSlug] = emptyGameCodes();
      continue;
    }

    if (!currentSlug) continue;
    const entry = result[currentSlug];
    if (!entry) continue;

    const [rawKey, ...rest] = line.split(":");
    if (!rawKey || rest.length === 0) continue;
    const key = rawKey.trim().toUpperCase();
    const value = rest.join(":").trim();

    if (key === "AM_CODE") entry.am.code = value;
    else if (key === "AM_STATUS") entry.am.status = normalizeStatus(value);
    else if (key === "PM_CODE") entry.pm.code = value;
    else if (key === "PM_STATUS") entry.pm.status = normalizeStatus(value);
    else if (key === "EVE_CODE") entry.eve.code = value;
    else if (key === "EVE_STATUS") entry.eve.status = normalizeStatus(value);
  }

  // A slot with an empty code can't genuinely be "Verified" — guard against a
  // stale status left in the file after someone clears the code.
  for (const entry of Object.values(result)) {
    for (const slot of [entry.am, entry.pm, entry.eve]) {
      if (!slot.code && slot.status === "Verified") slot.status = "Not Released";
    }
  }

  return result;
}

function normalizeStatus(value: string): DailyCodeStatus {
  return (VALID_STATUSES as string[]).includes(value) ? (value as DailyCodeStatus) : "Not Released";
}

export function getDailyCodesForSlug(slug: string, allCodes?: Record<string, GameDailyCodes>): GameDailyCodes {
  const all = allCodes ?? getAllDailyCodes();
  return all[slug] ?? emptyGameCodes();
}
