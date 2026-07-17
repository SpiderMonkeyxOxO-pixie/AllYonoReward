import Link from "next/link";
import type { Metadata } from "next";
import { SearchBox } from "@/components/layout/SearchBox";
import { GameCard } from "@/components/ui/GameCard";
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
} from "@/lib/data";
import { getAllBlogPosts } from "@/lib/blog";
import { buildGameSearchEntries } from "@/lib/utils";
import { buildMetadata, faqPageJsonLd, webPageJsonLd } from "@/lib/seo";
import { homepageFaqs } from "@/data/faqs";
import { siteConfig, GAME_COUNT } from "@/lib/site-config";
import { getAllDailyCodes, getDailyCodesForSlug } from "@/lib/dailyCode";

export const metadata: Metadata = buildMetadata({
  title: "Yono Game Rewards Guide: Promo Codes & Bonuses Explained",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const games = getAllGames();
  const featuredGames = getFeaturedGames(6);
  const recentGames = getRecentlyUpdatedGames(8);
  const rewardFeatures = getAllRewardFeatures().slice(0, 8);
  const latestPosts = getAllBlogPosts().slice(0, 3);
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
          __html: JSON.stringify(webPageJsonLd({ name: siteConfig.tagline, path: "/", description: siteConfig.description })),
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
          <p className="eyebrow text-brand-gold-light">Yono Game Directory · {siteConfig.country}</p>
          <h1 className="max-w-3xl text-[1.75rem] leading-tight text-white sm:text-5xl">
            Yono Game Guide: Explore Games, Promo Codes and Rewards
          </h1>
          <p className="max-w-2xl text-[15px] text-white/80 sm:text-lg">
            One organized, independent directory for every game listed on the Yono application — features, reward
            mechanics, promo-code status and eligibility information, gathered in one place for research and
            comparison.
          </p>

          <div className="w-full max-w-xl pt-1">
            <SearchBox index={searchIndex} variant="hero" placeholder="Search games or promo codes" />
          </div>

          <div className="flex w-full flex-col gap-3 pt-2 xs:w-auto xs:flex-row xs:items-center xs:justify-center">
            <Link href="/games" className="btn-primary w-full xs:w-auto">
              Browse All Games
            </Link>
            <Link href="/promo-codes" className="btn-secondary w-full xs:w-auto">
              View Promo Codes
            </Link>
          </div>
        </div>
      </section>

      <div className="container-page flex flex-col gap-14 py-10 sm:gap-16 sm:py-14">
        {/* Popular Games */}
        <section aria-labelledby="popular-games-heading">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Directory</p>
              <h2 id="popular-games-heading" className="text-2xl font-bold text-brand-green-dark">
                Popular Yono Games
              </h2>
            </div>
            <Link href="/games" className="hidden text-sm font-semibold text-brand-gold-dark hover:underline sm:inline">
              View All {GAME_COUNT} Games →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 lg:grid-cols-3">
            {featuredGames.map((game, i) => (
              <GameCard key={game.slug} game={game} priority={i < 3} />
            ))}
          </div>
          <Link href="/games" className="btn-secondary-light mt-6 inline-flex sm:hidden">
            View All {GAME_COUNT} Games
          </Link>
        </section>

        {/* Daily Promo Codes */}
        <section
          aria-labelledby="latest-promo-codes-heading"
          className="-mx-4 bg-brand-green-dark px-4 py-8 xs:mx-0 xs:rounded-2xl xs:px-6 sm:py-10"
        >
          <div className="mb-2 flex flex-wrap items-end justify-between gap-4">
            <h2 id="latest-promo-codes-heading" className="text-xl font-bold text-white sm:text-2xl">
              Daily Promo Codes by Platform
            </h2>
            <Link href="/promo-codes" className="text-sm font-semibold text-brand-gold-light hover:underline">
              View All Promo Codes →
            </Link>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-white/60">
            Codes below are entered manually up to three times a day — morning, afternoon and evening — as each
            platform releases them. Tap a time slot to view that code.
          </p>
          <div className="grid grid-cols-2 gap-3 xs:gap-4 lg:grid-cols-3">
            {promoSample.map((game) => (
              <DailyCodeCard key={game.slug} game={game} codes={getDailyCodesForSlug(game.slug, allDailyCodes)} />
            ))}
          </div>
        </section>

        {/* Rewards & Incentives */}
        <section aria-labelledby="rewards-heading">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Rewards</p>
              <h2 id="rewards-heading" className="text-2xl font-bold text-brand-green-dark">
                Rewards &amp; Incentives
              </h2>
            </div>
            <Link href="/rewards" className="hidden text-sm font-semibold text-brand-gold-dark hover:underline sm:inline">
              View All Rewards →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {rewardFeatures.map((reward) => (
              <RewardCard key={reward.slug} reward={reward} />
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
