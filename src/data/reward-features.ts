// Source of truth for the 12 reward-feature pages under /rewards/[slug].
// Short descriptions are the exact neutral copy supplied for the project;
// the rest of each entry is clearly-scoped, non-specific informational copy.
import type { RewardFeature } from "@/lib/types";

const LAST_UPDATED = "2026-07-16";

export const rewardFeatures: RewardFeature[] = [
  {
    key: "Cards",
    slug: "cards",
    title: "Cards",
    icon: "/images/rewards/cards.png",
    group: "Daily & Account Rewards",
    shortDescription:
      "Collect extra rewards over a 7- to 30-day activity period. These rewards may include platform credits that can be used in eligible games. Reward amounts, schedules and conditions vary by platform.",
    howItWorks: [
      "A card-style reward layout is displayed over a set activity period, commonly between 7 and 30 days.",
      "Individual cards may unlock through daily activity, logins, or specific in-app actions defined by the platform.",
      "Unlocked cards may reveal platform credits or other in-app benefits, depending on how the feature is configured.",
    ],
    eligibility: [
      "An active, verified account in good standing is typically required.",
      "Some platforms restrict card rewards to specific games, sections or user segments.",
    ],
    limitations: [
      "Card cycles may reset or expire at the end of the stated activity period.",
      "Missed days may affect progress depending on platform rules.",
    ],
    expirationInfo:
      "Unclaimed card rewards commonly expire once the stated 7- to 30-day cycle ends. Exact expiration handling is set by each platform.",
    whyValuesDiffer:
      "Card layouts, reward values and cycle lengths are configured independently by each platform and may change without notice, which is why they differ between games.",
    faqs: [
      {
        question: "Do all games use the same Cards format?",
        answer: "No. The cycle length, number of cards and reward values are set individually by each platform and can vary widely.",
      },
      {
        question: "Can a Cards cycle be paused or restarted?",
        answer: "This depends entirely on platform rules. Check the relevant game's in-app terms for specifics.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "Events",
    slug: "events",
    title: "Events",
    icon: "/images/rewards/events.png",
    group: "Events & Activity Features",
    shortDescription:
      "View limited-time activities, seasonal campaigns, tournaments and special challenges available on the platform. Each event may have different participation rules, schedules and rewards.",
    howItWorks: [
      "Platforms periodically run limited-time events tied to seasons, holidays or milestones.",
      "Events may take the form of tournaments, challenges or point-based competitions.",
      "Participation and rewards are generally governed by rules specific to each individual event.",
    ],
    eligibility: [
      "Eligibility criteria (region, account age, game participation) are set per event by the platform.",
      "Some events may be limited to specific user tiers or geographies.",
    ],
    limitations: [
      "Events are time-limited and typically cannot be joined after they close.",
      "Reward pools or slots may be capped.",
    ],
    expirationInfo: "Each event has its own defined start and end date set by the platform; rewards are generally not available once an event closes.",
    whyValuesDiffer:
      "Event structure, duration and rewards are designed independently by each platform for each campaign, so they vary game to game and event to event.",
    faqs: [
      {
        question: "How do I know when a new event starts?",
        answer: "Event schedules are announced within each platform's app or official channels. This directory only summarizes publicly observable information.",
      },
      {
        question: "Are event rewards guaranteed?",
        answer: "No. Participation does not guarantee a reward; outcomes depend on the event's own rules and your performance or eligibility.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "Free Cash",
    slug: "free-cash",
    title: "Free Cash",
    icon: "/images/rewards/free-cash.png",
    group: "New-User Rewards",
    shortDescription:
      "View promotional credits offered through selected campaigns or account activities. The amount, eligibility requirements, validity period and usage conditions depend on the platform.",
    howItWorks: [
      "Selected campaigns or account activities may make promotional credits available to eligible users.",
      "Credits are usually restricted to specific games, features or wagering-style conditions defined by the platform.",
    ],
    eligibility: [
      "Typically limited to new users or accounts meeting specific campaign conditions.",
      "May require identity or account verification before credits can be used or withdrawn.",
    ],
    limitations: [
      "Usage may be restricted to certain games or capped at a maximum value.",
      "Credits are commonly non-transferable and platform-specific.",
    ],
    expirationInfo: "Promotional credits generally carry a validity window set by the issuing platform, after which unused amounts may be forfeited.",
    whyValuesDiffer:
      "Campaign budgets, eligibility rules and validity periods are decided independently by each platform's own promotional strategy.",
    faqs: [
      {
        question: "Is Free Cash the same as real withdrawable money?",
        answer: "Not necessarily. Many platforms attach usage or wagering-style conditions before any value becomes withdrawable. Always check the platform's own terms.",
      },
      {
        question: "Can Free Cash be combined with other offers?",
        answer: "This depends on individual platform rules, which vary and can change.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "First Deposit Bonus",
    slug: "first-deposit-bonus",
    title: "First Deposit Bonus",
    icon: "/images/rewards/first-deposit-bonus.png",
    group: "New-User Rewards",
    shortDescription:
      "View promotional bonus information connected to a first qualifying deposit. The bonus percentage, maximum amount, minimum deposit and usage requirements vary by platform.",
    howItWorks: [
      "A bonus may be credited when an account completes a first qualifying deposit that meets the platform's stated minimum.",
      "Bonus amounts are commonly expressed as a percentage of the deposit, up to a stated maximum.",
    ],
    eligibility: [
      "Usually limited to new accounts that have not previously deposited on the platform.",
      "May require a minimum deposit amount and completed account verification.",
    ],
    limitations: [
      "Bonus funds are often subject to usage or turnover-style conditions before they can be withdrawn.",
      "Maximum bonus caps apply regardless of deposit size.",
    ],
    expirationInfo: "First deposit bonuses typically have a defined validity or usage window set by the platform.",
    whyValuesDiffer:
      "Deposit bonus percentages, caps and conditions are set independently by each platform's commercial terms and can change at any time.",
    faqs: [
      {
        question: "Is a First Deposit Bonus automatic?",
        answer: "Some platforms apply it automatically on a qualifying deposit; others require opting in or entering a code. Check the specific platform's process.",
      },
      {
        question: "What happens if I don't meet the minimum deposit?",
        answer: "Deposits below the stated minimum typically do not qualify for the bonus.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "Invite Reward Chest",
    slug: "invite-reward-chest",
    title: "Invite Reward Chest",
    icon: "/images/rewards/invite-reward-chest.png",
    group: "Referral Rewards",
    shortDescription:
      "View reward-chest features connected to eligible invitations. Rewards may be released after invited users complete required registration or activity conditions.",
    howItWorks: [
      "A chest-style visual tracks progress as invited users join and complete required steps.",
      "The chest is generally unlocked or opened once a defined number of qualifying invitations is reached.",
    ],
    eligibility: [
      "Both the inviting and invited accounts typically need to meet platform-specific conditions.",
      "Invited users usually need to complete registration and sometimes an activity requirement.",
    ],
    limitations: [
      "Self-referrals and duplicate accounts are commonly excluded by platform policy.",
      "Chest rewards may be capped per user or per period.",
    ],
    expirationInfo: "Progress toward a chest may reset after a stated period if conditions are not completed.",
    whyValuesDiffer:
      "Referral requirements and chest rewards are structured independently by each platform's own referral program.",
    faqs: [
      {
        question: "When is an Invite Reward Chest reward released?",
        answer: "Typically after invited users complete the platform's required registration or activity steps — timing varies by platform.",
      },
      {
        question: "Can I invite the same person twice?",
        answer: "Most platforms restrict rewards to unique, genuine new users. Review the specific platform's referral terms.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "Leaderboard",
    slug: "leaderboard",
    title: "Leaderboard",
    icon: "/images/rewards/leaderboard.png",
    group: "Events & Activity Features",
    shortDescription:
      "Check player rankings based on points, completed activities, game results or event performance. Rankings and rewards may reset daily, weekly or after an event ends.",
    howItWorks: [
      "Players accumulate points through gameplay, activity or event participation.",
      "Rankings are displayed on a leaderboard that updates on a schedule set by the platform.",
    ],
    eligibility: [
      "Generally open to active, verified accounts participating in the relevant game or event.",
    ],
    limitations: [
      "Only top-ranked positions may receive rewards, depending on the platform's structure.",
      "Leaderboard rules can be adjusted between cycles.",
    ],
    expirationInfo: "Leaderboards commonly reset daily, weekly, or at the end of a specific event, per the platform's own schedule.",
    whyValuesDiffer:
      "Ranking criteria, reset frequency and reward tiers are configured independently by each platform.",
    faqs: [
      {
        question: "How often do leaderboards reset?",
        answer: "This varies — some reset daily, others weekly or at the end of an event. Check the relevant game for its specific schedule.",
      },
      {
        question: "Is leaderboard placement guaranteed to earn a reward?",
        answer: "No. Only positions within a rewarded range (set by the platform) typically qualify.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "Login Gift",
    slug: "login-gift",
    title: "Login Gift",
    icon: "/images/rewards/login-gift.png",
    group: "Daily & Account Rewards",
    shortDescription:
      "View daily rewards that may be available through regular account logins. Consecutive login activity may unlock different rewards depending on the platform.",
    howItWorks: [
      "A calendar-style or streak-style reward may appear for logging in on consecutive days.",
      "Reward value can increase or change across the streak, based on platform configuration.",
    ],
    eligibility: [
      "Requires an active account and, on most platforms, one login per calendar day to maintain a streak.",
    ],
    limitations: [
      "Missing a day may reset the streak, depending on platform rules.",
      "Some rewards may only be visible, not withdrawable, until further conditions are met.",
    ],
    expirationInfo: "Daily login rewards are generally only available on the day they unlock and may not be claimable retroactively.",
    whyValuesDiffer: "Streak length, reward tiers and reset rules are set independently by each platform.",
    faqs: [
      {
        question: "What happens if I miss a day?",
        answer: "Many platforms reset the login streak after a missed day, though exact behavior depends on the platform.",
      },
      {
        question: "Are Login Gift rewards the same every day?",
        answer: "Usually not — many platforms increase or vary the reward across a login streak.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "Lucky Spin",
    slug: "lucky-spin",
    title: "Lucky Spin",
    icon: "/images/rewards/lucky-spin.png",
    group: "Events & Activity Features",
    shortDescription:
      "View spin-based reward features where an available spin produces a randomly selected result. Spins may be connected to login activity, events or other platform features.",
    howItWorks: [
      "An available spin is triggered by a qualifying action, such as a login, task completion, or event participation.",
      "The spin produces a randomly selected result from a set of possible outcomes defined by the platform.",
    ],
    eligibility: [
      "Availability of a spin usually depends on completing the platform's stated qualifying action.",
    ],
    limitations: [
      "Spins are often limited to a set number per day or per event.",
      "Outcomes are determined by the platform's own mechanism and are not something this directory can verify.",
    ],
    expirationInfo: "Unused spins may expire at the end of the day or event period, depending on platform rules.",
    whyValuesDiffer: "Spin frequency, possible outcomes and reward values are configured independently by each platform.",
    faqs: [
      {
        question: "Is a Lucky Spin outcome guaranteed to be a reward?",
        answer: "No. Spin outcomes are determined by the platform's own randomized mechanism and are not guaranteed.",
      },
      {
        question: "How many spins can I get per day?",
        answer: "This is set by each platform individually and can change.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "Lucky Wheel",
    slug: "lucky-wheel",
    title: "Lucky Wheel",
    icon: "/images/rewards/lucky-wheel.png",
    group: "Events & Activity Features",
    shortDescription:
      "View wheel-based event information and the rewards displayed by the platform. Participation limits, reward availability and event duration may vary.",
    howItWorks: [
      "A wheel-style event interface displays a set of possible rewards arranged around a wheel.",
      "Participation is typically limited to a stated number of attempts per user, per day or per event.",
    ],
    eligibility: [
      "Usually open to active accounts meeting the specific event's stated conditions.",
    ],
    limitations: [
      "Attempts are commonly capped; displayed rewards do not guarantee a specific outcome.",
      "Event duration is set and controlled entirely by the platform.",
    ],
    expirationInfo: "Lucky Wheel events run for a duration set by the platform and are not available once that window closes.",
    whyValuesDiffer: "Wheel segments, odds and event length are configured independently per platform and per event.",
    faqs: [
      {
        question: "Are all Lucky Wheel segments equally likely?",
        answer: "This is not publicly disclosed by most platforms and cannot be independently verified here.",
      },
      {
        question: "Can I play the Lucky Wheel more than once per day?",
        answer: "This depends on the platform's own attempt limits, which vary.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "Refer and Earn",
    slug: "refer-and-earn",
    title: "Refer and Earn",
    icon: "/images/rewards/refer-and-earn.png",
    group: "Referral Rewards",
    shortDescription:
      "View referral-program information and the conditions users may need to complete before a reward is released. Referral rules differ between platforms.",
    howItWorks: [
      "An existing user shares a referral link or code with a new user.",
      "A reward may be released to one or both accounts once the platform's stated conditions are completed.",
    ],
    eligibility: [
      "The invited user is typically required to be a genuine new account, not a duplicate or existing user.",
      "Some platforms require the invited user to complete a deposit or activity milestone.",
    ],
    limitations: [
      "Referral rewards are commonly capped per user or per period.",
      "Fraudulent or self-referrals are generally excluded under platform policy.",
    ],
    expirationInfo: "Referral rewards may need to be claimed within a period set by the platform after conditions are met.",
    whyValuesDiffer: "Referral conditions, reward amounts and caps are set independently by each platform's own program.",
    faqs: [
      {
        question: "Do I get a reward immediately when someone signs up with my link?",
        answer: "Usually not immediately — most platforms require the invited user to complete additional steps first.",
      },
      {
        question: "Is there a limit to how many people I can refer?",
        answer: "Some platforms cap referral rewards; check the specific platform's referral terms.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "Rewards Today",
    slug: "rewards-today",
    title: "Rewards Today",
    icon: "/images/rewards/rewards-today.png",
    group: "Daily & Account Rewards",
    shortDescription:
      "View rewards currently displayed as available to an account. These may include login gifts, task rewards, event credits or limited-time benefits.",
    howItWorks: [
      "Platforms may surface a daily summary view of currently available rewards across different features.",
      "This can combine login gifts, task completions, event credits and other time-limited items in one place.",
    ],
    eligibility: [
      "Availability depends on the individual reward types shown, each of which has its own conditions.",
    ],
    limitations: [
      "Items shown as \"available today\" are generally time-limited and may not carry over to the next day.",
    ],
    expirationInfo: "Most rewards surfaced in this view are tied to the current day or an active event and expire when that period ends.",
    whyValuesDiffer: "Each underlying reward type has its own platform-specific rules, so the combined daily view varies accordingly.",
    faqs: [
      {
        question: "Does Rewards Today show guaranteed rewards?",
        answer: "No — it reflects what a platform currently displays as available, not a guarantee of value or availability.",
      },
      {
        question: "Why do I see different items each day?",
        answer: "The underlying features (login gifts, events, tasks) change daily based on each platform's own schedule.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
  {
    key: "Welcome Bonus",
    slug: "welcome-bonus",
    title: "Welcome Bonus",
    icon: "/images/rewards/welcome-bonus.png",
    group: "New-User Rewards",
    shortDescription:
      "View introductory rewards that may be offered to eligible new users after registration or completion of selected account requirements. Conditions vary by platform.",
    howItWorks: [
      "New accounts may become eligible for an introductory reward after completing registration.",
      "Some platforms add further requirements, such as profile completion or identity verification, before release.",
    ],
    eligibility: [
      "Generally limited to first-time, verified accounts on a given platform.",
    ],
    limitations: [
      "Welcome bonuses are often subject to usage conditions before becoming withdrawable, if applicable.",
      "One welcome bonus per person or household is a common (though not universal) restriction.",
    ],
    expirationInfo: "Welcome bonuses typically carry a claim or usage window set by the platform.",
    whyValuesDiffer: "Registration requirements and bonus structures are set independently by each platform's own onboarding program.",
    faqs: [
      {
        question: "Is a Welcome Bonus available on every platform?",
        answer: "Not necessarily — availability and structure vary by platform and can change over time.",
      },
      {
        question: "Do I need to do anything to receive a Welcome Bonus?",
        answer: "Most platforms require completed registration and sometimes verification before a welcome bonus becomes active.",
      },
    ],
    lastUpdated: LAST_UPDATED,
  },
];
