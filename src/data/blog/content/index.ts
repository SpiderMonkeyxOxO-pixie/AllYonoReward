import type { ComponentType } from "react";
import HowPromoCodesWork from "./how-promo-codes-work";
import HowToRedeemPromoCode from "./how-to-redeem-promo-code";
import YonoGameRewardsExplained from "./yono-game-rewards-explained";
import PromoCodeNotWorking from "./promo-code-not-working";
import IsItSafeToPlayYonoGames from "./is-it-safe-to-play-yono-games";
import TypesOfYonoGamesCompared from "./types-of-yono-games-compared";

// Maps a blog post slug (see src/data/blog/posts.ts) to its body content
// component. Add a new entry here whenever a new post is added.
export const BLOG_CONTENT: Record<string, ComponentType> = {
  "how-promo-codes-work": HowPromoCodesWork,
  "how-to-redeem-promo-code": HowToRedeemPromoCode,
  "yono-game-rewards-explained": YonoGameRewardsExplained,
  "promo-code-not-working": PromoCodeNotWorking,
  "is-it-safe-to-play-yono-games": IsItSafeToPlayYonoGames,
  "types-of-yono-games-compared": TypesOfYonoGamesCompared,
};
