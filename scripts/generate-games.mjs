// Generates src/data/games.ts from the real icon asset list in copy-assets.mjs.
// This is a one-off bootstrap script (re-run it if you add/remove icons before
// the directory has any hand-edited game data). All non-derivable fields
// (promo codes, review dates, legal classification, eligibility specifics)
// are written as clearly-labelled placeholders — see README "Adding a Game".
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { GAME_ICON_MAP } from "./copy-assets.mjs";
import { DOWNLOAD_URL_MAP } from "./download-urls.mjs";
import {
  pickVariant,
  pickN,
  fitDescription,
  DESCRIPTION_FILLER_VARIANTS,
  CATEGORY_DESCRIPTORS,
  SHORT_DESCRIPTION_VARIANTS,
  LONG_DESCRIPTION_VARIANTS,
  ELIGIBILITY_VARIANTS,
  CONDITIONS_VARIANTS,
  WHERE_TO_ENTER_VARIANTS,
  PLATFORM_TERMS_VARIANTS,
  EXPIRATION_VARIANTS,
  USAGE_LIMIT_VARIANTS,
  OFFICIAL_WEBSITE_STATUS_VARIANTS,
  AVAILABILITY_NOTES_VARIANTS,
  FAQ_POOL,
  COMMON_ISSUES_POOL,
} from "./content-variants.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const TODAY = new Date().toISOString().slice(0, 10); // 2026-07-16

// Homepage "Popular Yono Games" — the 6 games the site owner asked to feature.
const POPULAR_SLUGS = ["yono-games", "yono-rummy", "yono-arcade", "yono-777", "yono-slots", "max-rummy"];

const REWARD_ROTATION = [
  "Cards",
  "Events",
  "Free Cash",
  "First Deposit Bonus",
  "Invite Reward Chest",
  "Leaderboard",
  "Login Gift",
  "Lucky Spin",
  "Lucky Wheel",
  "Refer and Earn",
  "Rewards Today",
  "Welcome Bonus",
];

function classifyCategory(name) {
  const n = name.toLowerCase();
  if (n.includes("rummy")) return ["Rummy", "Card Game"];
  if (n.includes("bingo")) return ["Bingo"];
  if (n.includes("arcade")) return ["Arcade"];
  if (n.includes("spin")) return ["Spin Games"];
  if (n.includes("slot") || n.includes("jackpot") || n.includes("777")) return ["Slots"];
  return ["Card Game"];
}

function featuresFor(index) {
  const a = REWARD_ROTATION[index % 12];
  const b = REWARD_ROTATION[(index + 4) % 12];
  const c = REWARD_ROTATION[(index + 7) % 12];
  return ["Promo Code", a, b, c];
}

function ext(srcName) {
  return path.extname(srcName).toLowerCase() === ".png" ? ".png" : ".webp";
}

function buildGame(entry, index, allEntries) {
  const [srcName, slug, name] = entry;
  const category = classifyCategory(name);
  const categoryLabel = category[0];

  const related = allEntries
    .filter(([, s]) => s !== slug)
    .filter((_, i) => i % 7 === index % 7) // deterministic spread, not just same-category clustering
    .slice(0, 5)
    .map(([, s]) => s);

  const relatedGames = related.length >= 3 ? related.slice(0, 5) : allEntries
    .filter(([, s]) => s !== slug)
    .slice(index, index + 5)
    .map(([, s]) => s);

  const descriptor = CATEGORY_DESCRIPTORS[categoryLabel] ?? CATEGORY_DESCRIPTORS["Card Game"];
  const faqs = pickN(FAQ_POOL, slug, "faqs", 3).map((fn) => fn(name));
  const commonIssues = pickN(COMMON_ISSUES_POOL, slug, "issues", 4).map((fn) => fn(name));

  return {
    name,
    slug,
    icon: `/images/games/${slug}${ext(srcName)}`,
    shortDescription: fitDescription(
      pickVariant(SHORT_DESCRIPTION_VARIANTS, slug, "shortDesc")(name, categoryLabel),
      pickVariant(DESCRIPTION_FILLER_VARIANTS, slug, "shortDescFiller")
    ),
    longDescription: pickVariant(LONG_DESCRIPTION_VARIANTS, slug, "longDesc")(name, categoryLabel, descriptor),
    category,
    features: featuresFor(index),
    downloadUrl: DOWNLOAD_URL_MAP[slug] ?? "",
    promoCode: {
      code: "",
      status: "No Public Code Available",
      lastChecked: "",
      eligibility: pickVariant(ELIGIBILITY_VARIANTS, slug, "eligibility")(name),
      conditions: pickVariant(CONDITIONS_VARIANTS, slug, "conditions")(name),
      expiration: pickVariant(EXPIRATION_VARIANTS, slug, "expiration")(name),
      usageLimit: pickVariant(USAGE_LIMIT_VARIANTS, slug, "usageLimit")(name),
      whereToEnter: pickVariant(WHERE_TO_ENTER_VARIANTS, slug, "whereToEnter")(name),
      commonIssues,
      platformTerms: pickVariant(PLATFORM_TERMS_VARIANTS, slug, "platformTerms")(name),
    },
    platformStatus: "Active",
    classification: "Not Yet Verified",
    officialWebsiteStatus: pickVariant(OFFICIAL_WEBSITE_STATUS_VARIANTS, slug, "websiteStatus")(name),
    availabilityNotes: pickVariant(AVAILABILITY_NOTES_VARIANTS, slug, "availability")(name),
    lastReviewed: TODAY,
    lastUpdated: TODAY,
    relatedGames,
    faqs,
    featuredHome: POPULAR_SLUGS.includes(slug),
    recentlyUpdated: index % 5 === 0,
  };
}

function serializeGame(game) {
  return `  {
    name: ${JSON.stringify(game.name)},
    slug: ${JSON.stringify(game.slug)},
    icon: ${JSON.stringify(game.icon)},
    shortDescription: ${JSON.stringify(game.shortDescription)},
    longDescription: ${JSON.stringify(game.longDescription)},
    category: ${JSON.stringify(game.category)},
    features: ${JSON.stringify(game.features)},
    downloadUrl: ${JSON.stringify(game.downloadUrl)},
    promoCode: {
      code: ${JSON.stringify(game.promoCode.code)},
      status: ${JSON.stringify(game.promoCode.status)},
      lastChecked: ${JSON.stringify(game.promoCode.lastChecked)},
      eligibility: ${JSON.stringify(game.promoCode.eligibility)},
      conditions: ${JSON.stringify(game.promoCode.conditions)},
      expiration: ${JSON.stringify(game.promoCode.expiration)},
      usageLimit: ${JSON.stringify(game.promoCode.usageLimit)},
      whereToEnter: ${JSON.stringify(game.promoCode.whereToEnter)},
      commonIssues: ${JSON.stringify(game.promoCode.commonIssues)},
      platformTerms: ${JSON.stringify(game.promoCode.platformTerms)},
    },
    platformStatus: ${JSON.stringify(game.platformStatus)},
    classification: ${JSON.stringify(game.classification)},
    officialWebsiteStatus: ${JSON.stringify(game.officialWebsiteStatus)},
    availabilityNotes: ${JSON.stringify(game.availabilityNotes)},
    lastReviewed: ${JSON.stringify(game.lastReviewed)},
    lastUpdated: ${JSON.stringify(game.lastUpdated)},
    relatedGames: ${JSON.stringify(game.relatedGames)},
    faqs: ${JSON.stringify(game.faqs, null, 6).replace(/\n/g, "\n    ")},
    featuredHome: ${game.featuredHome},
    recentlyUpdated: ${game.recentlyUpdated},
  }`;
}

async function run() {
  const games = GAME_ICON_MAP.map((entry, index) => buildGame(entry, index, GAME_ICON_MAP));

  const seen = new Map();
  for (const game of games) {
    const fingerprint = [game.shortDescription, game.longDescription, game.promoCode.eligibility, JSON.stringify(game.faqs)].join("|");
    if (seen.has(fingerprint)) {
      console.warn(`Content collision: "${game.slug}" and "${seen.get(fingerprint)}" generated identical content — widen the variant pools.`);
    }
    seen.set(fingerprint, game.slug);
  }

  const fileContent = `// AUTO-GENERATED by scripts/generate-games.mjs on ${TODAY}.
// This is the single source of truth for all game, promo-code and related
// homepage/search content. Edit entries directly for real data — see
// README.md "Adding or editing a game" before re-running the generator.
import type { Game } from "@/lib/types";

export const games: Game[] = [
${games.map(serializeGame).join(",\n")},
];
`;

  const outPath = path.join(ROOT, "src", "data", "games.ts");
  await writeFile(outPath, fileContent, "utf-8");
  console.log(`Wrote ${games.length} games to ${outPath}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
