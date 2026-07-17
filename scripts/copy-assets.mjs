// One-off asset preparation script.
// Copies source game icons and reward icons into public/images with clean, slug-based filenames.
// Safe to re-run; overwrites destination files.
//
// Note: yono-games/yono-rummy/yono-slots source files in "WEBP YONO LOGO" are
// byte-identical duplicates of each other (same generic Yono icon under three
// filenames) — confirmed with the site owner, who asked to use them as-is
// rather than generating distinct placeholder icons.
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(import.meta.dirname, "..");
const GAME_SRC_DIR = path.join(ROOT, "WEBP YONO LOGO");
const REWARDS_SRC_DIR = path.join(ROOT, "Rewards");
const LOGO_SRC_DIR = path.join(ROOT, "logo");
const GAME_DEST_DIR = path.join(ROOT, "public", "images", "games");
const REWARDS_DEST_DIR = path.join(ROOT, "public", "images", "rewards");

// Maps each kept source file -> { slug, name }. Excludes the main site logo,
// four confirmed duplicates (Club INR (1), Jaiho-Arcade, and two randomly-named
// files that are pixel-duplicates of Top Rummy / Love Rummy), and three games
// dropped at the site owner's request because no download URL was supplied
// for them: Ind Bingo, Spin Crush, Spin Lucky. (101Z was dropped for the same
// reason, then restored once its URL was supplied.)
export const GAME_ICON_MAP = [
  ["101z.webp", "101z", "101Z"],
  ["567 Slots.webp", "567-slots", "567 Slots"],
  ["777Game.webp", "777-game", "777 Game"],
  ["789 Jackpot.webp", "789-jackpot", "789 Jackpot"],
  ["ABC Rummy.webp", "abc-rummy", "ABC Rummy"],
  ["Bet 213.webp", "bet-213", "Bet 213"],
  ["Bingo 101.webp", "bingo-101", "Bingo 101"],
  ["Boss-Rummy.webp", "boss-rummy", "Boss Rummy"],
  ["Club INR.webp", "club-inr", "Club INR"],
  ["Game Rummy.webp", "game-rummy", "Game Rummy"],
  ["Gogo Rummy.webp", "gogo-rummy", "Gogo Rummy"],
  ["Hi Rummy.webp", "hi-rummy", "Hi Rummy"],
  ["Hindi777.webp", "hindi-777", "Hindi 777"],
  ["INR-Rummy.webp", "inr-rummy", "INR Rummy"],
  ["Ind Club.webp", "ind-club", "Ind Club"],
  ["Ind Rummy.webp", "ind-rummy", "Ind Rummy"],
  ["Ind Slots.webp", "ind-slots", "Ind Slots"],
  ["Jahio 777.webp", "jaiho-777", "Jaiho 777"],
  ["Jaiho Arcade.webp", "jaiho-arcade", "Jaiho Arcade"],
  ["Jaiho Rummy.webp", "jaiho-rummy", "Jaiho Rummy"],
  ["Jaiho Slot.webp", "jaiho-slot", "Jaiho Slot"],
  ["Jaiho Spin.webp", "jaiho-spin", "Jaiho Spin"],
  ["Jaiho Win.webp", "jaiho-win", "Jaiho Win"],
  ["Jaiho91.webp", "jaiho-91", "Jaiho 91"],
  ["Joy-Rummy.webp", "joy-rummy", "Joy Rummy"],
  ["Love Rummy.webp", "love-rummy", "Love Rummy"],
  ["MAX RUMMY 1024x1024.png", "max-rummy", "Max Rummy"],
  ["MBM Bet.webp", "mbm-bet", "MBM Bet"],
  ["Maha Games.webp", "maha-games", "Maha Games"],
  ["Neta Vip.webp", "neta-vip", "Neta VIP"],
  ["OkRUMMY-e1760950706977-1.webp", "ok-rummy", "OK Rummy"],
  ["Rumble Rummy.webp", "rumble-rummy", "Rumble Rummy"],
  ["Rummy 91.webp", "rummy-91", "Rummy 91"],
  ["Rummy-Ludo-LOGO.webp", "rummy-ludo", "Rummy Ludo"],
  ["Rummy77.webp", "rummy-77", "Rummy 77"],
  ["Rummy888.webp", "rummy-888", "Rummy 888"],
  ["Saga Slots.webp", "saga-slots", "Saga Slots"],
  ["Share Slots.webp", "share-slots", "Share Slots"],
  ["Slot Spin.webp", "slot-spin", "Slot Spin"],
  ["Slots Winner.webp", "slots-winner", "Slots Winner"],
  ["Spin 101.webp", "spin-101", "Spin 101"],
  ["Spin 777.webp", "spin-777", "Spin 777"],
  ["Spin Gold.webp", "spin-gold", "Spin Gold"],
  ["Spin Winner.webp", "spin-winner", "Spin Winner"],
  ["Top Rummy.webp", "top-rummy", "Top Rummy"],
  ["Yes Spin.webp", "yes-spin", "Yes Spin"],
  ["Yn 777.webp", "yn-777", "YN 777"],
  ["Yono 777.webp", "yono-777", "Yono 777"],
  ["Yono Arcade.webp", "yono-arcade", "Yono Arcade"],
  ["Yono Games.webp", "yono-games", "Yono Games"],
  ["Yono Rummy.webp", "yono-rummy", "Yono Rummy"],
  ["Yono Slots.webp", "yono-slots", "Yono Slots"],
  ["Yono Vip.webp", "yono-vip", "Yono VIP"],
];

export const REWARD_ICON_MAP = [
  ["cards.png", "cards"],
  ["Events.png", "events"],
  ["free-cah.png", "free-cash"],
  ["ftd.png", "first-deposit-bonus"],
  ["invite-chest.png", "invite-reward-chest"],
  ["leaderboard.png", "leaderboard"],
  ["login-gift.png", "login-gift"],
  ["lucky-spin.png", "lucky-spin"],
  ["lucky-wheel.png", "lucky-wheel"],
  ["promo-code.png", "promo-code"],
  ["refer&earn.png", "refer-and-earn"],
  ["rewards-today.png", "rewards-today"],
  ["welcome-bonus.png", "welcome-bonus"],
];

async function run() {
  await mkdir(GAME_DEST_DIR, { recursive: true });
  await mkdir(REWARDS_DEST_DIR, { recursive: true });

  for (const [srcName, slug] of GAME_ICON_MAP) {
    const ext = path.extname(srcName).toLowerCase() === ".png" ? ".png" : ".webp";
    await copyFile(path.join(GAME_SRC_DIR, srcName), path.join(GAME_DEST_DIR, `${slug}${ext}`));
  }
  console.log(`Copied ${GAME_ICON_MAP.length} game icons.`);

  for (const [srcName, slug] of REWARD_ICON_MAP) {
    await copyFile(path.join(REWARDS_SRC_DIR, srcName), path.join(REWARDS_DEST_DIR, `${slug}.png`));
  }
  console.log(`Copied ${REWARD_ICON_MAP.length} reward icons.`);

  // Site logo/favicon source: logo/Allyonorewards.png (NOT the "MAIN-LOGO"
  // file in WEBP YONO LOGO — that one turned out to be a Jaiho 777 game
  // icon mislabeled as the main logo, not the site brand mark).
  await copyFile(
    path.join(LOGO_SRC_DIR, "Allyonorewards.png"),
    path.join(ROOT, "public", "images", "logo.png")
  );
  console.log("Copied site logo.");
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) {
  run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
