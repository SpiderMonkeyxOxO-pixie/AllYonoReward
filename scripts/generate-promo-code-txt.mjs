// One-off bootstrap for promo-code.txt in the new per-game format. Re-run
// only if you want to regenerate a blank skeleton from the current game
// list — it OVERWRITES promo-code.txt, so don't run this after you've
// started filling in real codes.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { GAME_ICON_MAP } from "./copy-assets.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");

const HEADER = `# AllYonoReward — Daily Promo Codes by Platform
# =========================================================
# HOW TO EDIT (no coding needed):
#   Each game has its own block below: [slug]
#   For each of the three daily slots (AM / PM / EVE), fill in:
#     _CODE   -> the exact promo code text. Leave blank if none yet.
#     _STATUS -> one of:  Verified  |  Expired  |  Not Released
#                Only use "Verified" once you have genuinely checked the
#                code works — never guess.
#   Save this file, then redeploy/rebuild the site so the change goes live
#   (same as any other content update — see README.md).
# =========================================================

`;

function block(slug) {
  return `[${slug}]
AM_CODE:
AM_STATUS: Not Released
PM_CODE:
PM_STATUS: Not Released
EVE_CODE:
EVE_STATUS: Not Released
`;
}

async function run() {
  const body = GAME_ICON_MAP.map(([, slug]) => block(slug)).join("\n");
  await writeFile(path.join(ROOT, "promo-code.txt"), HEADER + body, "utf-8");
  console.log(`Wrote promo-code.txt skeleton for ${GAME_ICON_MAP.length} games.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
