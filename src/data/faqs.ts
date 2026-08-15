import type { FAQItem } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";

export const homepageFaqs: FAQItem[] = [
  {
    question: `What is ${siteConfig.name}?`,
    answer: `${siteConfig.name} explains how rewards and bonuses generally work across Yono-style games — welcome bonuses, daily rewards, referral programs, leaderboards and more — in neutral, platform-agnostic terms. It also maintains a supporting game directory and promo-code status pages. We do not operate any game, process deposits, or guarantee rewards.`,
  },
  {
    question: "Is this website affiliated with SBI or YONO SBI?",
    answer: `No. ${siteConfig.name} is not affiliated with, endorsed by, or connected to the State Bank of India (SBI) or the YONO SBI application. "Yono" is used here only in a generic, descriptive sense.`,
  },
  {
    question: "Do the promo codes on this site always work?",
    answer:
      "No promo code is labelled as working unless it has genuinely been checked. Most codes are shown as \"Unverified\" or \"No Public Code Available\" until independently confirmed, and status can change at any time.",
  },
  {
    question: "How often is game and reward information updated?",
    answer:
      "Pages display a last-reviewed and last-updated date. We aim to review listings periodically, but platform features, rewards and promo codes can change faster than any directory can track — always confirm details on the platform itself.",
  },
  {
    question: "Are the games listed here legal to play?",
    answer:
      "Legal status can depend on your state, the specific game mechanics, and whether real-money elements are involved. This site does not provide legal advice — see our Legalities and Responsible Gaming pages, and check applicable local requirements.",
  },
  {
    question: "How do I suggest a correction?",
    answer:
      "Use the Contact Us page to report outdated or inaccurate information. See our Corrections Policy for how updates are handled.",
  },
];

export const promoCodeExplainerFaqs: FAQItem[] = [
  {
    question: "Why do some games show \"No Public Code Available\"?",
    answer:
      "This status means no promotional code has been publicly listed or independently observed for that game at this time — it is not a guarantee that no code exists.",
  },
  {
    question: "What does \"Platform-Specific\" mean?",
    answer:
      "Some codes only work on certain app versions, regions, or account types. \"Platform-Specific\" flags that the code's usability depends on conditions set by that platform.",
  },
  {
    question: "Why did a code that was \"Verified\" later show as \"Expired\"?",
    answer:
      "Promotional codes are typically time-limited or usage-capped by the issuing platform. A code that worked when last checked can expire or reach its usage limit at any time afterward.",
  },
];
