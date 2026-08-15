import Link from "next/link";
import type { Metadata } from "next";
import { SearchBox } from "@/components/layout/SearchBox";
import { GameCard } from "@/components/ui/GameCard";
import { UpcomingGameCard } from "@/components/ui/UpcomingGameCard";
import { DailyCodeCard } from "@/components/ui/DailyCodeCard";
import { RewardCard } from "@/components/ui/RewardCard";
import { BlogCard } from "@/components/ui/BlogCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import {
  getAllGames,
  getAllRewardFeatures,
  getFeaturedGames,
  getRecentlyUpdatedGames,
  getUpcomingGames,
} from "@/lib/data";
import { getAllBlogPosts } from "@/lib/blog";
import { buildGameSearchEntries } from "@/lib/utils";
import { buildMetadata, faqPageJsonLd, webPageJsonLd } from "@/lib/seo";
import { homepageFaqs } from "@/data/faqs";
import { siteConfig, GAME_COUNT } from "@/lib/site-config";
import { getAllDailyCodes, getDailyCodesForSlug } from "@/lib/dailyCode";

const HOMEPAGE_DESCRIPTION =
  "How Yono-style game rewards actually work: welcome bonuses, daily rewards, referral programs and leaderboard mechanics, with eligibility, conditions and expiration explained in neutral, platform-agnostic terms.";

// Entity-specific reward mechanics articles, surfaced separately from the
// generic "From the Blog" teaser below — this is the on-mission pattern for
// discussing a named platform (how its reward system works), distinct from
// that platform's own download/APK/login authority, which stays with its
// entity specialist domain elsewhere in the network.
const REWARD_EXAMPLE_SLUGS = ["yono-game-rewards-explained", "win-rummy-bonus-explained", "dhan-game-welcome-bonus-guide"];

export const metadata: Metadata = buildMetadata({
  title: "Yono Game Rewards Explained",
  description: HOMEPAGE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  const games = getAllGames();
  const featuredGames = getFeaturedGames(6);
  const recentGames = getRecentlyUpdatedGames(8);
  const upcomingGames = getUpcomingGames(6);
  const rewardFeatures = getAllRewardFeatures().slice(0, 8);
  const latestPosts = getAllBlogPosts().slice(0, 3);
  const rewardExamplePosts = REWARD_EXAMPLE_SLUGS.map((slug) => getAllBlogPosts().find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );
  const searchIndex = buildGameSearchEntries(games);
  const promoSample = featuredGames.slice(0, 6);
  const allDailyCodes = getAllDailyCodes();

  return (
    <>
      {/* Above-the-fold background image — preload so it doesn't compete with
          later-discovered assets for bandwidth on the initial paint. */}
      <link rel="preload" as="image" href="/images/hero.webp" fetchPriority="high" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd({ name: siteConfig.tagline, path: "/", description: HOMEPAGE_DESCRIPTION })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(homepageFaqs)) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-green-dark px-4 py-12 text-white xs:px-5 sm:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.webp')" }}
          aria-hidden="true"
        />
        {/* Flat dark scrim over the art so text stays readable regardless of
            where the image's bright horizon glow lands at a given viewport
            width — the art itself is dark enough near the top that this can
            stay light rather than fully obscuring it. */}
        <div className="absolute inset-0 bg-brand-green-dark/45" aria-hidden="true" />
        <div className="container-page relative flex flex-col items-center gap-5 text-center sm:gap-6">
          <p className="eyebrow text-brand-gold-light">Rewards &amp; Bonus Mechanics · {siteConfig.country}</p>
          <h1 className="max-w-3xl text-[1.75rem] leading-tight text-white sm:text-5xl">
            Yono Game Rewards Explained: How Bonuses and Incentives Work
          </h1>
          <p className="max-w-2xl text-[15px] text-white/80 sm:text-lg">
            An independent, platform-agnostic explanation of welcome bonuses, daily rewards, referral programs and
            leaderboard mechanics across Yono-style games — what they typically require, how long they last, and why
            the same feature pays out differently from one platform to the next.
          </p>

          <div className="w-full max-w-xl pt-1">
            <SearchBox index={searchIndex} variant="hero" placeholder="Search games or promo codes" />
          </div>

          <div className="flex w-full flex-col gap-3 pt-2 xs:w-auto xs:flex-row xs:items-center xs:justify-center">
            <Link href="/rewards" className="btn-primary w-full xs:w-auto">
              Explore Reward Types
            </Link>
            <Link href="/games" className="btn-secondary w-full xs:w-auto">
              Browse Game Directory
            </Link>
          </div>
        </div>
      </section>

      <div className="container-page flex flex-col gap-14 py-10 sm:gap-16 sm:py-14">
        {/* Rewards & Incentives — the domain's core mission, first below the fold */}
        <section aria-labelledby="rewards-heading">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Reward Mechanics</p>
              <h2 id="rewards-heading" className="text-2xl font-bold text-brand-green-dark">
                Rewards &amp; Incentives Explained
              </h2>
            </div>
            <Link href="/rewards" className="hidden text-sm font-semibold text-brand-gold-dark hover:underline sm:inline">
              View All Rewards →
            </Link>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-brand-green-dark/70">
            Each reward type below covers how it generally works, who typically qualifies, common limitations and why
            the value differs from platform to platform.
          </p>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {rewardFeatures.map((reward) => (
              <RewardCard key={reward.slug} reward={reward} />
            ))}
          </div>
        </section>

        {/* Verification standard */}
        <section aria-labelledby="verify-heading" className="card-surface p-6 sm:p-10">
          <p className="eyebrow">Data Integrity</p>
          <h2 id="verify-heading" className="mb-4 text-2xl font-bold text-brand-green-dark">
            What to Verify Before Relying on a Reward Claim
          </h2>
          <p className="mb-6 max-w-3xl text-sm text-brand-green-dark/80">
            Reward figures move between four honest states, and it matters which one applies before you treat a
            number as real:
          </p>
          <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-black/5 bg-base-50 p-4">
              <p className="mb-1 font-semibold text-brand-green-dark">Advertised</p>
              <p className="text-brand-green-dark/70">A figure the platform is currently promoting, not yet checked against what&rsquo;s actually credited.</p>
            </div>
            <div className="rounded-xl border border-black/5 bg-base-50 p-4">
              <p className="mb-1 font-semibold text-brand-green-dark">Announced</p>
              <p className="text-brand-green-dark/70">A pre-launch or upcoming figure the platform has stated publicly but that has no live app to confirm it against yet.</p>
            </div>
            <div className="rounded-xl border border-black/5 bg-base-50 p-4">
              <p className="mb-1 font-semibold text-brand-green-dark">Not Independently Verified</p>
              <p className="text-brand-green-dark/70">This directory hasn&rsquo;t confirmed the figure firsthand — it&rsquo;s shown as reported, not as fact.</p>
            </div>
            <div className="rounded-xl border border-black/5 bg-base-50 p-4">
              <p className="mb-1 font-semibold text-brand-green-dark">Verified</p>
              <p className="text-brand-green-dark/70">Genuinely checked at a specific date — and still subject to change afterward, like any platform-controlled figure.</p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm text-brand-green-dark/80">
            Beyond the headline number, every reward type on this site is explained alongside its typical{" "}
            <strong className="font-semibold">eligibility</strong> requirements, <strong className="font-semibold">usage limitations</strong>, and{" "}
            <strong className="font-semibold">expiration</strong> pattern — the details that usually decide whether a
            reward is actually usable, not just advertised. See each{" "}
            <Link href="/rewards" className="font-semibold text-brand-gold-dark hover:underline">
              reward type page
            </Link>{" "}
            for the specifics.
          </p>
        </section>

        {/* Entity-specific reward mechanics examples */}
        {rewardExamplePosts.length > 0 && (
          <section aria-labelledby="reward-examples-heading">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Worked Examples</p>
                <h2 id="reward-examples-heading" className="text-2xl font-bold text-brand-green-dark">
                  Reward Mechanics by Platform
                </h2>
              </div>
            </div>
            <p className="mb-6 max-w-2xl text-sm text-brand-green-dark/70">
              How the general reward categories above play out on specific platforms — eligibility, conditions and
              what&rsquo;s confirmed versus only announced.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rewardExamplePosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Upcoming and New Games */}
        {upcomingGames.length > 0 && (
          <section aria-labelledby="upcoming-games-heading">
            <p className="eyebrow">Coming Soon</p>
            <h2 id="upcoming-games-heading" className="mb-6 text-2xl font-bold text-brand-green-dark">
              Upcoming and New Games
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {upcomingGames.map(({ game, upcoming }) => (
                <UpcomingGameCard key={game.slug} game={game} upcoming={upcoming} />
              ))}
            </div>
          </section>
        )}

        {/* Popular Games — supporting directory reference, not the homepage's primary intent */}
        <section aria-labelledby="popular-games-heading">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Directory Reference</p>
              <h2 id="popular-games-heading" className="text-2xl font-bold text-brand-green-dark">
                Games Covered in This Directory
              </h2>
            </div>
            <Link href="/games" className="hidden text-sm font-semibold text-brand-gold-dark hover:underline sm:inline">
              View All {GAME_COUNT} Games →
            </Link>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-brand-green-dark/70">
            Background on the platforms referenced throughout the reward pages above — features, categories and
            promo-code status, for context rather than as a download destination.
          </p>
          <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 lg:grid-cols-3">
            {featuredGames.map((game, i) => (
              <GameCard key={game.slug} game={game} priority={i < 3} />
            ))}
          </div>
          <Link href="/games" className="btn-secondary-light mt-6 inline-flex sm:hidden">
            View All {GAME_COUNT} Games
          </Link>
        </section>

        {/* Daily Promo Codes — supporting status information, not this domain's primary identity */}
        <section
          aria-labelledby="latest-promo-codes-heading"
          className="-mx-4 bg-brand-green-dark px-4 py-8 xs:mx-0 xs:rounded-2xl xs:px-6 sm:py-10"
        >
          <div className="mb-2 flex flex-wrap items-end justify-between gap-4">
            <h2 id="latest-promo-codes-heading" className="text-xl font-bold text-white sm:text-2xl">
              Promo-Code Status by Platform
            </h2>
            <Link href="/promo-codes" className="text-sm font-semibold text-brand-gold-light hover:underline">
              View All Promo Codes →
            </Link>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-white/60">
            Promo codes are one input into a reward, not the reward system itself — see{" "}
            <Link href="/rewards" className="font-semibold text-brand-gold-light hover:underline">
              how rewards generally work
            </Link>{" "}
            for the mechanics. Codes below are entered manually up to three times a day — morning, afternoon and
            evening — as each platform releases them.
          </p>
          <div className="grid grid-cols-2 gap-3 xs:gap-4 lg:grid-cols-3">
            {promoSample.map((game) => (
              <DailyCodeCard key={game.slug} game={game} codes={getDailyCodesForSlug(game.slug, allDailyCodes)} />
            ))}
          </div>
        </section>

        {/* Recently Updated Games */}
        <section aria-labelledby="recent-games-heading">
          <p className="eyebrow">Freshness</p>
          <h2 id="recent-games-heading" className="mb-6 text-2xl font-bold text-brand-green-dark">
            Recently Updated Games
          </h2>
          <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {recentGames.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>

        {/* From the Blog */}
        <section aria-labelledby="blog-teaser-heading">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Guides</p>
              <h2 id="blog-teaser-heading" className="text-2xl font-bold text-brand-green-dark">
                From the Blog
              </h2>
            </div>
            <Link href="/blog" className="hidden text-sm font-semibold text-brand-gold-dark hover:underline sm:inline">
              View All Articles →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <Link href="/blog" className="btn-secondary-light mt-6 inline-flex sm:hidden">
            View All Articles
          </Link>
        </section>

        {/* Editorial review */}
        <section aria-labelledby="editorial-heading" className="card-surface p-6 sm:p-10">
          <p className="eyebrow">Editorial Standards</p>
          <h2 id="editorial-heading" className="mb-4 text-2xl font-bold text-brand-green-dark">
            How Our Information Is Reviewed
          </h2>
          <div className="grid grid-cols-1 gap-6 text-sm text-brand-green-dark/80 sm:grid-cols-3">
            <p>
              Every game and promo-code page displays a last-reviewed and last-updated date so you can judge how
              current the information is.
            </p>
            <p>
              Promo-code statuses are only marked as Verified or Recently Checked when they have genuinely been
              reviewed — otherwise they are shown as Unverified or No Public Code Available.
            </p>
            <p>
              Classification fields (Social Game, Online Money Game, etc.) reflect independent review status, not a
              legal determination. See our{" "}
              <Link href="/editorial-policy" className="font-semibold text-brand-gold-dark hover:underline">
                Editorial Policy
              </Link>{" "}
              for details.
            </p>
          </div>
        </section>

        {/* Legal & safety */}
        <section aria-labelledby="safety-heading">
          <p className="eyebrow">User Safety</p>
          <h2 id="safety-heading" className="mb-4 text-2xl font-bold text-brand-green-dark">
            Legal and User-Safety Information
          </h2>
          <DisclaimerBox title="Please read before relying on this directory">
            <p className="mb-2">
              This site is independent and informational. It is not an official representative of any listed game,
              platform, financial institution, SBI, or YONO SBI. Availability, eligibility, rewards and promo codes
              may change, and classification of games has not been independently verified unless stated.
            </p>
            <p>
              Learn more on our{" "}
              <Link href="/legalities" className="font-semibold underline">
                Legalities
              </Link>{" "}
              and{" "}
              <Link href="/responsible-gaming" className="font-semibold underline">
                Responsible Gaming
              </Link>{" "}
              pages.
            </p>
          </DisclaimerBox>
        </section>

        {/* FAQ */}
        <section aria-labelledby="home-faq-heading">
          <p className="eyebrow">FAQ</p>
          <h2 id="home-faq-heading" className="mb-6 text-2xl font-bold text-brand-green-dark">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={homepageFaqs} headingId="home-faq-heading" />
        </section>
      </div>
    </>
  );
}
