// Central data model. Game pages, promo-code pages, homepage cards, reward
// pages and search all read from these shapes — update data, not markup.

export type PromoCodeStatus =
  | "Verified"
  | "Recently Checked"
  | "Unverified"
  | "Expired"
  | "Platform-Specific"
  | "No Public Code Available";

export type PlatformStatus =
  | "Active"
  | "Unverified"
  | "Under Review"
  | "Unavailable"
  | "Coming Soon";

export type Classification =
  | "Social Game"
  | "E-sport"
  | "Online Money Game"
  | "Unclear"
  | "Not Yet Verified";

export const REWARD_FEATURE_KEYS = [
  "Cards",
  "Events",
  "Free Cash",
  "First Deposit Bonus",
  "Invite Reward Chest",
  "Leaderboard",
  "Login Gift",
  "Lucky Spin",
  "Lucky Wheel",
  "Promo Code",
  "Refer and Earn",
  "Rewards Today",
  "Welcome Bonus",
] as const;

export type RewardFeatureKey = (typeof REWARD_FEATURE_KEYS)[number];

export const GAME_CATEGORIES = [
  "Rummy",
  "Slots",
  "Spin Games",
  "Bingo",
  "Arcade",
  "Card Game",
] as const;

export type GameCategory = (typeof GAME_CATEGORIES)[number];

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PromoCodeInfo {
  code: string;
  status: PromoCodeStatus;
  lastChecked: string; // ISO date string, "" if never checked
  eligibility: string;
  conditions: string;
  expiration: string;
  usageLimit: string;
  whereToEnter: string;
  commonIssues: string[];
  platformTerms: string;
}

export interface Game {
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  category: GameCategory[];
  features: RewardFeatureKey[];
  downloadUrl: string; // "" until a verified store/APK/official link is supplied
  promoCode: PromoCodeInfo;
  platformStatus: PlatformStatus;
  classification: Classification;
  officialWebsiteStatus: string;
  availabilityNotes: string;
  lastReviewed: string; // ISO date string
  lastUpdated: string; // ISO date string
  relatedGames: string[]; // slugs of other Game entries
  faqs: FAQItem[];
  featuredHome: boolean;
  recentlyUpdated: boolean;
  // Manually curated pin-to-top rank for the /games and /promo-codes hub
  // pages (lower sorts first; omit for standard alphabetical placement).
  // When a new platform takes #1, bump every existing value up by one.
  priority?: number;
}

export interface UpcomingGame {
  slug: string; // matches a Game.slug in games.ts
  releaseDateISO: string; // ISO 8601 timestamp (with UTC offset) the countdown targets
  releaseWindowLabel: string; // human-readable release window, e.g. "8:00 - 9:00 AM IST"
  welcomeBonusRange: string;
  minWithdrawal: string;
  highlightTags: string[]; // short marketing tags, e.g. ["Hot", "New"]
}

export const BLOG_CATEGORIES = ["Guides", "Promo Codes", "Rewards & Bonuses", "Safety & Trust"] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface BlogPost {
  slug: string;
  title: string; // on-page H1 — can run longer/more natural than metaTitle
  metaTitle: string; // 30-65 chars including the " | AllYonoReward" suffix
  metaDescription: string; // 140-155 chars
  image: string; // featured image, 1200x675 — /images/blog/{slug}.jpg
  excerpt: string; // shown on hub cards
  category: BlogCategory;
  targetKeyword: string;
  datePublished: string; // ISO date
  dateUpdated: string; // ISO date
  readingTimeMinutes: number;
  relatedGameSlugs: string[];
  faqs: FAQItem[];
}

export interface RewardFeature {
  key: RewardFeatureKey;
  slug: string;
  title: string;
  icon: string;
  group:
    | "Daily & Account Rewards"
    | "Events & Activity Features"
    | "New-User Rewards"
    | "Referral Rewards";
  shortDescription: string;
  howItWorks: string[];
  eligibility: string[];
  limitations: string[];
  expirationInfo: string;
  whyValuesDiffer: string;
  faqs: FAQItem[];
  lastUpdated: string;
}
