import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>
        Look across this portfolio's own announced welcome bonuses and a pattern shows up: Win
        Rummy's confirmed range tops out at ₹500, and Dhan Game's announced range does too. That's
        not a coincidence unique to these two apps — it reflects how welcome-bonus ranges are
        typically structured across this category, and it's worth understanding before you treat
        "up to ₹500" as a number that describes what you'll actually receive.
      </p>

      <h2>What's actually confirmed, platform by platform</h2>
      <p>
        <Link href="/games/win-rummy">Win Rummy</Link> offers a randomly assigned welcome reward
        between ₹100 and ₹500 — see our{" "}
        <Link href="/blog/win-rummy-bonus-explained">full breakdown</Link> for the confirmed
        eligibility and conditions. <Link href="/games/dhan-game">Dhan Game</Link> announced a
        welcome bonus in the ₹50 to ₹500 range ahead of launch — see our{" "}
        <Link href="/blog/dhan-game-welcome-bonus-guide">welcome bonus guide</Link> for what's
        confirmed there. Both use the same shape: a range with ₹500 as the ceiling, not a flat
        guaranteed figure.
      </p>

      <h2>Why ₹500 keeps showing up as the top of the range</h2>
      <p>
        A ceiling figure like ₹500 does real marketing work — it's large enough to look genuinely
        generous in a headline, while the range structure underneath it means the platform isn't
        actually committing to paying that amount to every new user. Most users land somewhere in
        the range, not at the top. This isn't specific to any single platform; it's a structural
        choice repeated across the wider real-money gaming category, not just this portfolio.
      </p>

      <h2>What "up to ₹500" actually tells you</h2>
      <ul>
        <li>It tells you the maximum possible outcome, not the typical one.</li>
        <li>
          It doesn't tell you the actual distribution — whether most users land near the bottom,
          middle, or top of the range.
        </li>
        <li>
          It says nothing about wagering, minimum-deposit, or expiration conditions, which are
          usually the bigger factor in what you can actually use. See our{" "}
          <Link href="/rewards/welcome-bonus">welcome bonus</Link> page for how those conditions
          typically work.
        </li>
      </ul>

      <p>
        Rather than comparing headline ceilings across platforms, check each app's own confirmed
        terms individually — start with our{" "}
        <Link href="/rewards">rewards and incentives directory</Link> or browse{" "}
        <Link href="/games">all games</Link>.
      </p>
    </>
  );
}
