import type { ComponentType } from "react";
import HowPromoCodesWork from "./how-promo-codes-work";
import HowToRedeemPromoCode from "./how-to-redeem-promo-code";
import YonoGameRewardsExplained from "./yono-game-rewards-explained";
import PromoCodeNotWorking from "./promo-code-not-working";
import IsItSafeToPlayYonoGames from "./is-it-safe-to-play-yono-games";
import TypesOfYonoGamesCompared from "./types-of-yono-games-compared";
import DhanGameWelcomeBonusGuide from "./dhan-game-welcome-bonus-guide";
import WinRummyBonusExplained from "./win-rummy-bonus-explained";
import YonoRummy51BonusExplained from "./yono-rummy-51-bonus-explained";
import RummyGoldVsGoldRummy from "./rummy-gold-vs-gold-rummy";
import YonoAllGames1000BonusExplained from "./yono-all-games-1000-bonus-explained";
import WhyBonusesCapAround500 from "./why-bonuses-cap-around-500";
import GoldRummyBonusWhatWeKnow from "./gold-rummy-bonus-what-we-know";
import BonusHackClaimsAreFake from "./bonus-hack-claims-are-fake";
import MoneyRummyBonusWhatWeKnow from "./money-rummy-bonus-what-we-know";

// Maps a blog post slug (see src/data/blog/posts.ts) to its body content
// component. Add a new entry here whenever a new post is added.
export const BLOG_CONTENT: Record<string, ComponentType> = {
  "how-promo-codes-work": HowPromoCodesWork,
  "how-to-redeem-promo-code": HowToRedeemPromoCode,
  "yono-game-rewards-explained": YonoGameRewardsExplained,
  "promo-code-not-working": PromoCodeNotWorking,
  "is-it-safe-to-play-yono-games": IsItSafeToPlayYonoGames,
  "types-of-yono-games-compared": TypesOfYonoGamesCompared,
  "dhan-game-welcome-bonus-guide": DhanGameWelcomeBonusGuide,
  "win-rummy-bonus-explained": WinRummyBonusExplained,
  "yono-rummy-51-bonus-explained": YonoRummy51BonusExplained,
  "rummy-gold-vs-gold-rummy": RummyGoldVsGoldRummy,
  "yono-all-games-1000-bonus-explained": YonoAllGames1000BonusExplained,
  "why-bonuses-cap-around-500": WhyBonusesCapAround500,
  "gold-rummy-bonus-what-we-know": GoldRummyBonusWhatWeKnow,
  "money-rummy-bonus-what-we-know": MoneyRummyBonusWhatWeKnow,
  "bonus-hack-claims-are-fake": BonusHackClaimsAreFake,
};
