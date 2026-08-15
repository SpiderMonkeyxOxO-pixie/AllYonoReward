// Single place to change brand name, domain and top-level nav.
// siteUrl feeds canonical URLs, sitemap.xml, robots.txt and Open Graph tags.
import { games } from "@/data/games";

// Derived from the data file so copy never drifts out of sync with the
// directory again as games are added or removed.
export const GAME_COUNT = games.length;

export const siteConfig = {
  name: "AllYonoReward",
  tagline: `Yono Game Rewards Explained: Bonuses, Eligibility & How They Work`,
  siteUrl: "https://www.allyonoreward.com", // confirmed live domain (www canonical, non-www redirects)
  description: `Explore ${GAME_COUNT} Yono Game guides, individual promo-code pages, reward features, eligibility details and platform-specific terms in one organized directory.`,
  locale: "en_IN",
  country: "India",
  language: "English",
  contactEmail: "Allyonorewardnewsupport@gmail.com",
  logo: "/images/logo.png",
  twitterHandle: "@allyonoreward", // PLACEHOLDER
} as const;

export interface SocialLink {
  platform: "Telegram";
  label: string;
  href: string;
}

// Real, live social profiles for this brand — shown in the footer and listed
// in the Organization JSON-LD `sameAs` field (helps Google associate the
// site with its official channels). Add more here as they go live.
export const socialLinks: SocialLink[] = [
  { platform: "Telegram", label: "Telegram Channel", href: "https://t.me/AllYonorewards" },
];

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavColumn {
  heading?: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: {
    columns: NavColumn[];
    featuredGamesSlot?: boolean;
  };
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Rewards & Incentives",
    href: "/rewards",
    megaMenu: {
      columns: [
        {
          links: [
            { label: "Welcome Rewards", href: "/rewards/welcome-bonus" },
            { label: "Daily Rewards", href: "/rewards/rewards-today" },
            { label: "Referral Rewards", href: "/rewards/refer-and-earn" },
            { label: "Leaderboards", href: "/rewards/leaderboard" },
            { label: "Events and Spins", href: "/rewards/events" },
            { label: "View All Rewards", href: "/rewards" },
          ],
        },
      ],
    },
  },
  { label: "Blog", href: "/blog" },
  {
    label: "All Games",
    href: "/games",
    megaMenu: {
      columns: [
        {
          links: [
            { label: "Browse All Games", href: "/games", description: "Every game in the directory" },
            { label: "Popular Games", href: "/games?sort=popular", description: "Frequently viewed guides" },
            { label: "Recently Updated", href: "/games?sort=recent", description: "Newest reviewed pages" },
            { label: "Games A–Z", href: "/games?sort=az", description: "Alphabetical listing" },
            { label: `View All ${GAME_COUNT} Games`, href: "/games", description: "Full directory" },
          ],
        },
      ],
      featuredGamesSlot: true,
    },
  },
  {
    label: "Promo Codes",
    href: "/promo-codes",
    megaMenu: {
      columns: [
        {
          links: [
            { label: "All Promo Codes", href: "/promo-codes", description: "Full promo-code directory" },
            { label: "Recently Checked Codes", href: "/promo-codes?sort=checked", description: "Most recently reviewed" },
            { label: "Latest Updated Codes", href: "/promo-codes?sort=updated", description: "Recently changed status" },
            { label: "How Promo Codes Work", href: "/promo-codes#how-it-works", description: "Plain-language explainer" },
            { label: "View All Promo Codes", href: "/promo-codes", description: "Full directory" },
          ],
        },
      ],
    },
  },
];

export const footerColumns: NavColumn[] = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "All Games", href: "/games" },
      { label: "Promo Codes", href: "/promo-codes" },
      { label: "Rewards & Incentives", href: "/rewards" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Corrections Policy", href: "/corrections-policy" },
    ],
  },
  {
    heading: "Legal & Safety",
    links: [
      { label: "Legalities", href: "/legalities" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Responsible Gaming", href: "/responsible-gaming" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Recently Updated Games", href: "/games?sort=recent" },
      { label: "Recently Checked Promo Codes", href: "/promo-codes?sort=checked" },
      { label: "HTML Sitemap", href: "/sitemap-page" },
    ],
  },
];

export const siteDisclaimer =
  "This is an independent informational website and is not an official representative of any listed game or platform. Promo codes, rewards, eligibility requirements and platform features may change. Users should verify current information through the relevant platform and comply with applicable local laws.";

export const sbiDisclaimer =
  `${siteConfig.name} is not affiliated with, endorsed by, or connected to the State Bank of India (SBI) or the YONO SBI application in any way. "Yono" is used on this site only in a descriptive, generic sense to refer to a category of mobile games and rewards platforms.`;
