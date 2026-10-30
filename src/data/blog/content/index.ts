import type { ComponentType } from "react";
import JeetSpinBonus from "./jeet-spin-bonus";
import JaihoPlayWelcomeBonusExplained from "./jaiho-play-welcome-bonus-explained";
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

import WhatIsYonoVip from "./what-is-yono-vip";
import YonoVipGamesWhatTheLabelMeans from "./yono-vip-games-what-the-label-means";
import YonoSpinExplained from "./yono-spin-explained";
import Spin777YonoExplained from "./spin-777-yono-explained";
import SpinCrushSpinWinnerExplained from "./spin-crush-spin-winner-explained";
import WhatDoesYono101Mean from "./what-does-yono-101-mean";
import SpinAndWinOffersExplained from "./spin-and-win-offers-explained";
import LuckyDrawOnlineGamesExplained from "./lucky-draw-online-games-explained";
import IsLuckyDrawLegalInIndia from "./is-lucky-draw-legal-in-india";
import RummyBonusTypesExplained from "./rummy-bonus-types-explained";
import NewYonoGamesCheckRewardsFirst from "./new-yono-games-check-rewards-first";
import RealCashGamesWhatTheClaimMeans from "./real-cash-games-what-the-claim-means";
import LeaderboardRewardsExplained from "./leaderboard-rewards-explained";
import HowReferAndEarnRewardsWork from "./how-refer-and-earn-rewards-work";

import Rummy91WelcomeBonusExplained from "./rummy-91-welcome-bonus-explained";
import RummyVip500BonusExplained from "./rummy-vip-500-bonus-explained";
import IndClubWelcomeBonusExplained from "./ind-club-welcome-bonus-explained";
import ClubInrWelcomeBonusExplained from "./club-inr-welcome-bonus-explained";
import Bingo101WelcomeBonusExplained from "./bingo-101-welcome-bonus-explained";
import Z101WelcomeBonusExplained from "./101z-welcome-bonus-explained";
import SpinGoldWelcomeBonusExplained from "./spin-gold-welcome-bonus-explained";
import YesSpinWelcomeBonusExplained from "./yes-spin-welcome-bonus-explained";
import SpinRummyWelcomeBonusExplained from "./spin-rummy-welcome-bonus-explained";
import BossRummyWelcomeBonusExplained from "./boss-rummy-welcome-bonus-explained";
import Slots567WelcomeBonusExplained from "./567-slots-welcome-bonus-explained";
import JoyRummyWelcomeBonusExplained from "./joy-rummy-welcome-bonus-explained";
import InrRummyWelcomeBonusExplained from "./inr-rummy-welcome-bonus-explained";
import TeenPattiDhanWelcomeBonusExplained from "./teen-patti-dhan-welcome-bonus-explained";
import Rummy77WelcomeBonusExplained from "./rummy-77-welcome-bonus-explained";

// Maps a blog post slug (see src/data/blog/posts.ts) to its body content
// component. Add a new entry here whenever a new post is added.
export const BLOG_CONTENT: Record<string, ComponentType> = {
  "jeet-spin-bonus": JeetSpinBonus,
  "jaiho-play-welcome-bonus-explained": JaihoPlayWelcomeBonusExplained,
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
  "what-is-yono-vip": WhatIsYonoVip,
  "yono-vip-games-what-the-label-means": YonoVipGamesWhatTheLabelMeans,
  "yono-spin-explained": YonoSpinExplained,
  "spin-777-yono-explained": Spin777YonoExplained,
  "spin-crush-spin-winner-explained": SpinCrushSpinWinnerExplained,
  "what-does-yono-101-mean": WhatDoesYono101Mean,
  "spin-and-win-offers-explained": SpinAndWinOffersExplained,
  "lucky-draw-online-games-explained": LuckyDrawOnlineGamesExplained,
  "is-lucky-draw-legal-in-india": IsLuckyDrawLegalInIndia,
  "rummy-bonus-types-explained": RummyBonusTypesExplained,
  "new-yono-games-check-rewards-first": NewYonoGamesCheckRewardsFirst,
  "real-cash-games-what-the-claim-means": RealCashGamesWhatTheClaimMeans,
  "leaderboard-rewards-explained": LeaderboardRewardsExplained,
  "how-refer-and-earn-rewards-work": HowReferAndEarnRewardsWork,

  "rummy-91-welcome-bonus-explained": Rummy91WelcomeBonusExplained,
  "rummy-vip-500-bonus-explained": RummyVip500BonusExplained,
  "ind-club-welcome-bonus-explained": IndClubWelcomeBonusExplained,
  "club-inr-welcome-bonus-explained": ClubInrWelcomeBonusExplained,
  "bingo-101-welcome-bonus-explained": Bingo101WelcomeBonusExplained,
  "101z-welcome-bonus-explained": Z101WelcomeBonusExplained,
  "spin-gold-welcome-bonus-explained": SpinGoldWelcomeBonusExplained,
  "yes-spin-welcome-bonus-explained": YesSpinWelcomeBonusExplained,
  "spin-rummy-welcome-bonus-explained": SpinRummyWelcomeBonusExplained,
  "boss-rummy-welcome-bonus-explained": BossRummyWelcomeBonusExplained,
  "567-slots-welcome-bonus-explained": Slots567WelcomeBonusExplained,
  "joy-rummy-welcome-bonus-explained": JoyRummyWelcomeBonusExplained,
  "inr-rummy-welcome-bonus-explained": InrRummyWelcomeBonusExplained,
  "teen-patti-dhan-welcome-bonus-explained": TeenPattiDhanWelcomeBonusExplained,
  "rummy-77-welcome-bonus-explained": Rummy77WelcomeBonusExplained,
};
