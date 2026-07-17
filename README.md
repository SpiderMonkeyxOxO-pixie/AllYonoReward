# AllYonoReward

An independent, informational Next.js directory covering 52 Yono-style games, their reward features, and their promo-code status. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and one JSON-like data source that drives every dynamic page.

This site is **not** an official representative of any listed game, platform, financial institution, SBI, or YONO SBI. See `/disclaimer`.

## 1. Stack

- Next.js 16.2 (App Router, Turbopack, React 19)
- TypeScript (strict)
- Tailwind CSS 3.4
- No database — content lives in typed TypeScript data files under `src/data/`
- Static generation (`generateStaticParams`) for every game, promo-code and reward page

## 2. Project structure

```
src/
  app/                     Routes (App Router)
    games/                 /games hub + /games/[slug]
    promo-codes/            /promo-codes hub + /promo-codes/[promoSlug]
    rewards/                /rewards hub + /rewards/[slug]
    blog/                   /blog hub + /blog/[slug] — see §14
    about-us/ ... faq/      Legal & informational static pages
    sitemap.ts, robots.ts   SEO plumbing
  components/
    layout/                Header, DesktopNav, MobileNav, Footer, SearchBox, StaticPageShell
    ui/                     GameCard, DailyCodeCard, DownloadButton, RewardCard, BlogCard, StatusBadge,
                            InfoTable, FAQAccordion, Breadcrumbs, Pagination, EmptyState,
                            LoadingState, ErrorState, DisclaimerBox, RelatedGames, LastUpdated
  data/
    games.ts                *** Single source of truth: all games ***
    reward-features.ts       The 12 reward-feature pages
    faqs.ts                  Homepage / promo-code hub FAQ copy
    blog/posts.ts             Blog post metadata registry — see §14
    blog/content/*.tsx        Blog post body content, one file per slug — see §14
  lib/
    types.ts                 Game / PromoCodeInfo / RewardFeature / BlogPost schema
    data.ts                  Filtering, sorting, related-game and lookup helpers
    blog.ts                  Blog post lookup/related/category helpers
    seo.ts                   Metadata + JSON-LD builders (incl. blogPostingJsonLd)
    site-config.ts           Brand name, domain, nav structure, footer, disclaimers
    utils.ts                 Slugs, date formatting, search index, fitDescription/pickVariant
scripts/
  copy-assets.mjs            Copies/renames source icons into public/images
  generate-games.mjs         Bootstraps src/data/games.ts from the icon list
  download-urls.mjs          slug -> real download URL map, applied by generate-games.mjs
  generate-promo-code-txt.mjs  Bootstraps a blank promo-code.txt skeleton
public/images/
  games/                     game icons (slug-named)
  rewards/                   12 reward-category icons + promo-code icon
  logo.png                   Site logo/favicon (source: logo/Allyonorewards.png)
promo-code.txt                Daily Promo Codes by Platform (AM/PM/Evening, per game) —
                               plain text, edit directly, no code required (see README §6)
```

## 3. Editing game data (no code changes required)

Every game page, promo-code page, homepage card, "recently updated" list, reward-feature
association and search result is generated from **one array**: `src/data/games.ts`.

To edit an existing game, open `src/data/games.ts`, find the object by `slug`, and edit any
field directly — the change appears everywhere that game is referenced. Key fields:

| Field | Notes |
|---|---|
| `promoCode.status` | Must be one of: `Verified`, `Recently Checked`, `Unverified`, `Expired`, `Platform-Specific`, `No Public Code Available`. Only set to `Verified`/`Recently Checked` after an actual check. |
| `promoCode.lastChecked` | ISO date string (`"2026-07-16"`). Leave `""` if never checked. |
| `classification` | `Social Game`, `E-sport`, `Online Money Game`, `Unclear`, or `Not Yet Verified`. This is an editorial/administrative field, not a legal determination — see `/legalities`. |
| `platformStatus` | `Active`, `Unverified`, `Under Review`, `Unavailable`. |
| `features` | Array drawn from the 13 reward-feature keys in `src/lib/types.ts` (`REWARD_FEATURE_KEYS`). Drives which reward pages a game cross-links to. |
| `relatedGames` | Array of other games' `slug` values. Falls back to same-category games automatically if fewer than 3 are listed. |
| `lastReviewed` / `lastUpdated` | ISO dates shown on the page. Update `lastUpdated` any time you edit a game. |
| `featuredHome` | `true` shows the game in the homepage "Popular Games" section and header mega-menu (max effect with a handful of games set `true`). |
| `recentlyUpdated` | `true` surfaces the game in "Recently Updated Games" sections. |
| `downloadUrl` | Real download/referral link, or `""` to show a "Download Link Coming Soon" disabled state. Managed centrally in `scripts/download-urls.mjs` — see below. |

No other file needs to change — the game page (`/games/[slug]`), its promo-code page
(`/promo-codes/[slug]-promo-code`), homepage cards, sitemap entries and search index all read
from this one array automatically.

### Updating a game's download link

Download URLs live in one place, `scripts/download-urls.mjs` (a `slug -> url` map), not
scattered across `games.ts`. To add or change a link: edit that file, then re-run
`npm run generate:games` — but only do this if `src/data/games.ts` has no other hand-edits
you'd lose, since the generator overwrites the whole file (see "Bulk-loading" note below). If
you've already hand-edited real promo-code data into `games.ts`, just edit the `downloadUrl`
field directly on the relevant game object instead of re-running the generator.

## 4. Adding a brand-new game

1. **Add the icon.** Drop a square icon (webp preferred) into `public/images/games/`, named
   after the slug you'll use, e.g. `public/images/games/new-game.webp`.
2. **Add a data entry.** Open `src/data/games.ts` and append a new object to the `games` array
   following the existing shape (copy a neighboring entry as a template). At minimum set:
   `name`, `slug`, `icon`, `shortDescription`, `longDescription`, `category`, `features`,
   `promoCode` (default to `status: "No Public Code Available"` until genuinely checked),
   `platformStatus: "Unverified"`, `classification: "Not Yet Verified"`,
   `officialWebsiteStatus`, `availabilityNotes`, `lastReviewed`/`lastUpdated` (today's date),
   `relatedGames`, `faqs`, `featuredHome`, `recentlyUpdated`.
3. **Rebuild.** `npm run build` — the new game automatically gets a static page at
   `/games/new-game`, a promo-code page at `/promo-codes/new-game-promo-code`, sitemap
   entries, and search-index coverage. No component or route file needs to change.

### Bulk-loading many games at once

If you're starting from a spreadsheet or CMS export of real game data, write a small script
modeled on `scripts/generate-games.mjs` that maps your source rows into the `Game` shape from
`src/lib/types.ts` and writes `src/data/games.ts`. That script is safe to re-run any time you
need to regenerate placeholder scaffolding from a fresh icon set — **it will overwrite
`src/data/games.ts`**, so once you've hand-edited real data into that file, treat it as the
source of truth and stop re-running the generator (or adapt the generator to merge instead of
overwrite).

## 5. Editing reward-feature pages

The 12 reward categories (`Cards`, `Events`, `Free Cash`, `First Deposit Bonus`,
`Invite Reward Chest`, `Leaderboard`, `Login Gift`, `Lucky Spin`, `Lucky Wheel`,
`Refer and Earn`, `Rewards Today`, `Welcome Bonus`) live in `src/data/reward-features.ts`.
Edit any entry's `howItWorks`, `eligibility`, `limitations`, `expirationInfo`,
`whyValuesDiffer` or `faqs` arrays directly — changes appear on `/rewards/[slug]` and in the
`/rewards` hub immediately.

## 6. Daily Promo Codes by Platform (AM / PM / Evening, per game)

The homepage, the Promo Codes hub, **and each individual game's own promo-code page**
(`/promo-codes/{slug}-promo-code`, in a "Today's Code by Time Slot" widget) all show the same
three manually-updated, independently switchable time slots (Morning, Afternoon, Evening) per
game. All three surfaces read from the same single file — **`promo-code.txt`** at the project
root — plain text, documented inline, no code editing required. Edit it once, up to three
times a day, and every place that shows daily codes updates together. Each game has its own
block:

```
[yono-rummy]
AM_CODE: WELCOME100
AM_STATUS: Verified
PM_CODE:
PM_STATUS: Not Released
EVE_CODE:
EVE_STATUS: Not Released
```

1. Find the game's block by its slug (matches the `slug` field in `src/data/games.ts`).
2. Fill in `_CODE` and `_STATUS` (`Verified`, `Expired`, or `Not Released`) for whichever slot
   just released.
3. Save the file.

Only mark a slot `Verified` once genuinely checked — the parser also auto-corrects a stale
`Verified` status back to `Not Released` if you clear a code but forget to update its status.

To bootstrap a fresh blank skeleton for the current game list (e.g. after adding new games),
run `node scripts/generate-promo-code-txt.mjs` — **this overwrites `promo-code.txt`**, so only
run it before you've started filling in real codes, or adapt it to merge instead of overwrite.

**Important:** this site is statically generated, so a saved edit to `promo-code.txt` only
appears after the next `npm run build` + redeploy (or a restart if self-hosting with
`next start`) — not instantly on save. This is the same rule as every other content change in
this project (see §11–12), just worth calling out since this file is meant to be edited more
frequently than the rest.

The parser (`src/lib/dailyCode.ts`) fails soft: a missing file, a malformed block, or a game
slug with no block at all renders that game's three slots as "Not Released" rather than
breaking the build.

**This is a separate system from `game.promoCode.*` in `src/data/games.ts`** (status, code,
lastChecked, eligibility, conditions, etc. — see §3). The "Current Code Status" box at the top
of each promo-code page reads from `games.ts`, an intentionally separate, persistent record
that's only updated when you've done a genuine full check — it does not update from
`promo-code.txt`. The "Today's Code by Time Slot" widget just below it, on the same page,
reads from `promo-code.txt`. Keeping them separate avoids fabricating a "last checked" date
from what is really just a daily rotating code slot — but it does mean the two can disagree
(e.g. the daily EVE slot shows a fresh code while the top status box still says "No Public
Code Available") until you separately update `games.ts` after actually verifying it.

## 7. Legal/editorial pages

`/about-us`, `/contact-us`, `/legalities`, `/privacy-policy`, `/terms-and-conditions`,
`/disclaimer`, `/responsible-gaming`, `/editorial-policy`, `/corrections-policy`, `/faq` are
plain static pages under `src/app/*/page.tsx`, each wrapped in the shared
`StaticPageShell` component. Several are explicitly marked as **placeholder legal copy** in
the page source — have Privacy Policy, Terms and Conditions, and Legalities reviewed by a
qualified professional before launch.

## 8. Missing information used as placeholders (read before launch)

The brief was explicit that invented specifics are worse than clearly labelled placeholders.
The following were **not available** and were filled in as follows — replace with real,
verified data as it becomes available:

- **Real game names/details**: the games use the names/icons already present in the
  `WEBP YONO LOGO` source folder. Descriptions, FAQs and eligibility copy are neutral,
  templated text — not researched claims about any specific real app. Three games from the
  original icon set (Ind Bingo, Spin Crush, Spin Lucky) were removed from the directory
  at the site owner's request because no download URL was supplied for them — see
  `scripts/download-urls.mjs` for the full list of what was/wasn't usable, including two
  supplied URLs that needed manual cleanup (stray trailing text) and one duplicate entry
  (`Jaiho777vip`, a second mirror domain for the same code as `jaiho-777`) that was dropped
  rather than guessed at.
- **Icon quality issue in the source assets**: `Yono Games.webp`, `Yono Rummy.webp` and
  `Yono Slots.webp` in the original `WEBP YONO LOGO` folder are byte-identical (checksummed) —
  three different games sharing one generic icon. Confirmed with the site owner, who asked to
  use them as-is rather than generate distinct placeholder icons, so all three currently show
  the same generic Yono icon. Swap in real distinct icons for these three the same way as any
  other game (see §3/§4) if/when real artwork becomes available.
- **Download links**: real — supplied by the site owner and stored per-game in
  `scripts/download-urls.mjs`, applied via `downloadUrl` in `src/data/games.ts`.
- **Promo codes**: every game defaults to `status: "No Public Code Available"`, empty `code`,
  empty `lastChecked` on its dedicated promo-code page. No code has been fabricated or marked
  as working. The per-game "Daily Promo Codes by Platform" grid (AM/PM/Evening) is a separate,
  real, manually-edited feature — see `promo-code.txt` — and defaults every slot to
  `"Not Released"` until filled in.
- **Classification**: every game defaults to `"Not Yet Verified"` — no legal determination has
  been made. **Platform status** is set to `"Active"` per the site owner confirming all listed
  games are real, active applications; this is distinct from legal classification.
- **Domain**: `siteConfig.siteUrl` is `https://www.allyonoreward.com` — confirmed live
  (`www` canonical, non-www redirects to it). `contactEmail` and `twitterHandle` are still
  placeholders — update those in `src/lib/site-config.ts` once real.
- **Legal pages**: Privacy Policy / Terms / Legalities contain explicit "placeholder" callouts
  and need qualified review.

## 9. SEO implementation notes

- Every page sets a canonical URL, Open Graph and Twitter Card metadata via
  `buildMetadata()` in `src/lib/seo.ts`.
- Structured data: `Organization` + `WebSite` (root layout), `BreadcrumbList` (every page via
  `<Breadcrumbs>`), `WebPage` (every page), `Article` (game pages), `FAQPage` (only where FAQs
  are visibly rendered).
- `/games`, `/promo-codes` and `/search` set `robots: noindex` automatically whenever a
  filter/sort/page query parameter is present, keeping only the clean hub URLs indexable.
- `/search` is always `noindex`.
- Sitemaps are grouped per the brief: `/sitemap/0.xml` (main pages), `/sitemap/1.xml`
  (games), `/sitemap/2.xml` (promo codes), `/sitemap/3.xml` (rewards). Next's
  `generateSitemaps()` convention doesn't produce a combined `/sitemap.xml` index, so
  `robots.txt` lists all four sitemap URLs directly (fully supported by Google/Bing).
- **Don't add a `loading.tsx` directly under `app/games/` or `app/promo-codes/`.** Next.js
  wraps the *entire* nested route tree in that segment's Suspense boundary — including the
  fully static `[slug]` detail pages — which forces even prebuilt static HTML through a
  client-hydration-dependent streaming response. That shipped once during development and
  silently dropped all real content from the initial HTML on all 106 game/promo-code pages
  (verified via `curl`; a non-JS client, and potentially some crawlers/link-unfurlers, would
  have seen only the "Loading…" skeleton). If you want a loading skeleton on the hub pages
  again, scope it with a route group (e.g. `app/games/(hub)/page.tsx` +
  `app/games/(hub)/loading.tsx`) so it doesn't cascade to sibling dynamic segments.
- **Meta title/description length targets**: every page's `<title>` (30–65 chars, including
  the ` | AllYonoReward` suffix) and `<meta name="description">` (140–155 chars) are checked
  against those exact ranges. Game and promo-code descriptions can't be hand-tuned per page
  (53 of each), so `fitDescription()` in `scripts/content-variants.mjs` (build-time, used by
  `generate-games.mjs`) and its TS port in `src/lib/utils.ts` (runtime, used by
  `src/data/promoDescriptionPool.ts`) pad a short templated sentence with a deterministically
  picked filler clause — or truncate at a word boundary — so the final string always lands in
  range regardless of the game name's length. Re-run `node scripts/generate-games.mjs` after
  editing `SHORT_DESCRIPTION_VARIANTS` or `DESCRIPTION_FILLER_VARIANTS` to regenerate
  `src/data/games.ts` with the fitted lengths.
- `public/favicon.ico` is a hand-built PNG-in-ICO (32×32, generated from `logo/Allyonorewards.png`
  via `sharp`) so the conventional `/favicon.ico` path resolves instead of 404ing — some
  browsers, RSS readers and crawlers request it directly regardless of the `<link rel="icon">`
  tags already set via `metadata.icons` in `src/app/layout.tsx`. Regenerate it the same way if
  the logo changes; don't add `src/app/icon.png` / `src/app/favicon.ico` via Next's App Router
  file convention, since that auto-injects a second, possibly conflicting, set of icon tags
  alongside the manually configured ones.

## 10. Accessibility notes

- Skip-to-content link, visible focus rings (`:focus-visible`), semantic landmarks
  (`header`/`nav`/`main`/`footer`), labeled form controls, `aria-current` on active nav links.
- FAQ accordions use native `<details>/<summary>` — fully keyboard- and
  screen-reader-accessible with zero JavaScript.
- `prefers-reduced-motion` disables animation/smooth-scroll globally (`globals.css`).
- Mobile nav traps background scroll while open and closes on route change.

## 11. Local development

```bash
npm install
npm run dev          # http://localhost:3000, Turbopack dev server
npm run build         # production build (also used for static export verification)
npm run start          # serve the production build locally
npm run typecheck      # tsc --noEmit
npm run lint            # ESLint (flat config, next/core-web-vitals + next/typescript)
npm run generate:games  # regenerate src/data/games.ts from the icon folder (see §4)
```

## 12. Deployment

This is a standard Next.js App Router app with static generation for all game/promo-code/
reward pages and a handful of dynamic routes (`/games`, `/promo-codes`, `/search` — dynamic
only because they read query-string filters).

**Recommended: Vercel** (zero-config for Next.js):
1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel — framework preset auto-detects Next.js, no build settings needed.
3. Set the production domain, then update `siteConfig.siteUrl` in `src/lib/site-config.ts` to
   match and redeploy (canonical URLs/sitemaps are derived from this one value).

**Alternative hosts** (Netlify, Node server, Docker): `npm run build && npm run start` works
anywhere Node 20.9+ is available. If you need a fully static export instead of a Node server,
note that `/games`, `/promo-codes` and `/search` currently rely on server-rendered query-string
handling — those would need converting to client-side filtering before `output: "export"`
would work; every other route is already static.

## 14. Blog section

Added to support organic growth beyond exact-match game-name traffic — longer-tail,
top-of-funnel keywords ("how do promo codes work," "is it safe to play X," format comparisons)
that don't fit naturally on a game or promo-code detail page.

**Architecture** (data-driven, same philosophy as the rest of the site — no CMS, no MDX
dependency):
- `src/data/blog/posts.ts` — metadata registry: one `BlogPost` object per post (slug, title,
  `metaTitle`/`metaDescription` sized to the same 30–65 / 140–155 char targets as every other
  page, category, target keyword, dates, related game slugs, FAQs).
- `src/data/blog/content/{slug}.tsx` — the actual article body, one file per post, exporting a
  plain React component (semantic `<h2>/<p>/<ul>/<a>` — no utility classes needed, see
  `.blog-prose` in `globals.css`). Registered in `src/data/blog/content/index.ts`'s
  `BLOG_CONTENT` map.
- `src/lib/blog.ts` — `getAllBlogPosts()`, `getBlogPostBySlug()`, `getBlogContentBySlug()`,
  `getBlogCategories()`, `getBlogPostsByCategory()`, `getRelatedBlogPosts()`.

**Featured images**: each post's `image` field points to `public/images/blog/{slug}.jpg` —
**1200×675px** (16:9), matching the standard OG/Twitter card ratio. Drop the file in at that
exact path/name and it's picked up automatically everywhere: the `/blog` hub card, the post's
own hero image, `og:image`/`twitter:image` (via `buildMetadata`'s `ogImage`), and the
`BlogPosting` JSON-LD `image` field — no code changes needed. Missing files 404 at request time
rather than failing the build, so it's safe to add posts before the image is ready.

**To add a new post:**
1. Add a `BlogPost` entry to `src/data/blog/posts.ts` (pick a category from
   `BLOG_CATEGORIES` in `src/lib/types.ts`; add a new one there if needed). Set `image` to
   `/images/blog/{slug}.jpg`.
2. Create `src/data/blog/content/{slug}.tsx` with the article body, and register it in
   `src/data/blog/content/index.ts`.
3. Keep `metaTitle`/`metaDescription` within the same length targets as the rest of the site
   (30–65 / 140–155 chars including the ` | AllYonoReward` title suffix) — there's no automatic
   `fitDescription()` padding for blog posts like there is for the 53×2 game/promo-code pages,
   since each post is hand-written and low-volume enough to just get the length right directly.
4. Link out to at least one or two relevant game/promo-code/reward pages from the body copy —
   this is as much for internal linking equity as reader usefulness.
5. No script/regeneration step needed — `npm run build` picks up new posts automatically via
   `generateStaticParams` in `src/app/blog/[slug]/page.tsx` (same `dynamicParams = false`
   hard-404 pattern as every other detail route).

**SEO wiring**: `/sitemap/4.xml` (added to `generateSitemaps()` in `src/app/sitemap.ts` and
listed in `robots.ts`), `BlogPosting` JSON-LD (`blogPostingJsonLd()` in `src/lib/seo.ts`),
`FAQPage` JSON-LD when a post has FAQs, breadcrumbs, and a "From the Blog" teaser (latest 3
posts) on the homepage for internal linking into the section.

**Content policy**: posts are general, category-level informational content (how promo codes
work in general, safety checklists, format comparisons) — never claims about a specific real
platform's actual terms, and never guaranteed-reward language. Each post ends with the same
kind of `DisclaimerBox` used elsewhere on the site.

## 15. Ongoing maintenance checklist

- When you verify a promo code, update `promoCode.status`, `promoCode.code`,
  `promoCode.lastChecked` and `promoCode.conditions` on that game — never mark a code
  `Verified` or `Recently Checked` without an actual check.
- When a code stops working, set `status: "Expired"` and update `lastChecked`.
- Bump `lastUpdated` (and `lastReviewed` if you re-verified the whole page) whenever you edit
  a game — these dates are shown to users on every game/promo-code page.
- To feature a game on the homepage/nav mega-menu, set `featuredHome: true` (keep this to a
  small handful of games).
- To surface a game under "Recently Updated", set `recentlyUpdated: true`.
- Update `promo-code.txt` up to 3x/day per game (morning/afternoon/evening) and redeploy for
  the "Daily Promo Codes by Platform" grid to reflect the change (see §6).
- To add or change a game's download link, edit `scripts/download-urls.mjs` (see §3).
- To add a new blog post, see §14.
