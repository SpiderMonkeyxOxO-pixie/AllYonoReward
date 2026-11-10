import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>
        Yono Arcade is listed in our Arcade category with a promo-code page and a working download
        link, and its own feature list names Cards, an Invite Reward Chest and Lucky Spin among
        what the app offers &mdash; but no welcome-bonus figure for any of them has actually been
        confirmed. Worth separating what the app says it has from what&rsquo;s been independently
        checked.
      </p>

      <h2>What&apos;s confirmed right now</h2>
      <p>
        What&rsquo;s actually verifiable is limited: an active listing on the{" "}
        <Link href="/games/yono-arcade">Yono Arcade game guide</Link>, a working download link, and
        no publicly listed promo code as of this writing. The app&rsquo;s feature list names Cards,
        Invite Reward Chest and Lucky Spin as reward mechanics it offers, but none come with a
        figure this site has independently checked. Treat any specific amount you&rsquo;ve seen
        elsewhere as unverified until it shows up on the game guide&rsquo;s own promo-code tracker.
      </p>

      <h2>Why that matters for an arcade-category app</h2>
      <p>
        Arcade-style apps in this network commonly list reward mechanics &mdash; chests, spins,
        invite bonuses &mdash; before any specific figure becomes checkable from the outside &mdash;
        the <Link href="/rewards/welcome-bonus">welcome bonus</Link> page covers why an advertised
        feature and a verified figure aren&rsquo;t the same thing. Yono Arcade sits in that same
        early stage: the reward types are named, but the amounts behind them aren&rsquo;t yet
        something this directory can confirm.
      </p>

      <h2>What to check once Yono Arcade does confirm a bonus</h2>
      <ul>
        <li>
          Whether the figure appears on the app&rsquo;s own registration, wallet or rewards screen
          rather than somewhere third-party.
        </li>
        <li>
          Whether it&rsquo;s a fixed amount or a range, and what eligibility conditions apply
          &mdash; covered in more depth on the <Link href="/rewards">rewards and incentives</Link>{" "}
          pages.
        </li>
        <li>
          The <Link href="/games/yono-arcade">Yono Arcade game guide</Link> directly, since
          that&rsquo;s where a confirmed promo code or bonus figure would land first.
        </li>
      </ul>

      <p>
        This page gets updated the moment Yono Arcade confirms a real bonus figure or promo code.
        Until then, check the <Link href="/games/yono-arcade">game guide</Link> for current status,
        or see{" "}
        <Link href="/blog/yono-games-bonus-what-we-know">Yono Games&rsquo;s bonus status</Link> for
        another platform in this same early, unconfirmed stage.
      </p>
    </>
  );
}
