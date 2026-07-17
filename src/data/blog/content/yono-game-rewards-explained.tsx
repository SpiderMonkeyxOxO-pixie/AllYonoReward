import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>
        Open the rewards section of almost any Yono-style game and you'll find a similar cast of features — welcome
        bonuses, daily logins, referral chests, leaderboards — even though the exact names, values and mechanics
        differ from app to app. Here's how those categories generally break down, and what actually differs between
        platforms versus what stays roughly the same.
      </p>

      <h2>Daily and account rewards</h2>
      <p>
        These are the small, repeatable rewards tied to simply using the app regularly — logging in on consecutive
        days, opening a daily "spin," or claiming a small bonus tied to your account level. They're designed around
        habit rather than size; individually small, but often the most consistently available reward type across
        platforms. See our <Link href="/rewards/login-gift">login gift</Link> and{" "}
        <Link href="/rewards/lucky-spin">lucky spin</Link> feature pages for more detail on how these typically work.
      </p>

      <h2>New-user rewards</h2>
      <p>
        Welcome bonuses and first-deposit matches fall here — one-time rewards tied to signing up or making an
        initial deposit. These tend to carry the most conditions of any reward type: minimum deposit thresholds,
        wagering or usage requirements, and expiration windows are all common. The advertised headline figure is
        rarely the guaranteed amount every new user receives, so it's worth reading the specific terms on the
        platform itself rather than assuming the maximum applies by default. Our{" "}
        <Link href="/rewards/welcome-bonus">welcome bonus</Link> page covers the general pattern in more depth.
      </p>

      <h2>Events and activity features</h2>
      <p>
        Leaderboards, timed events and milestone challenges reward ongoing activity rather than a single action.
        These features tend to be the most variable between platforms — some run weekly leaderboard resets, others
        run seasonal events tied to festivals, and the reward pool itself is usually set (and can be changed) at the
        platform's discretion. See <Link href="/rewards/leaderboard">leaderboards</Link> and{" "}
        <Link href="/rewards/events">events</Link> for how these are typically structured.
      </p>

      <h2>Referral rewards</h2>
      <p>
        Refer-and-earn programs reward you for inviting others, but the payout is almost always conditional on the
        invited user completing some action — verifying their account, playing a minimum number of games, or making
        a deposit — rather than simply installing the app. Our{" "}
        <Link href="/rewards/refer-and-earn">referral rewards</Link> page walks through the common structure.
      </p>

      <h2>Why the same reward name can mean different things</h2>
      <p>
        Two apps can both advertise a "welcome bonus" and mean genuinely different things by it — a flat credit
        versus a percentage match, unlockable immediately versus tied to wagering conditions. This is exactly why we
        avoid quoting specific reward figures for any individual game unless we can verify them: the label is
        standardized across the industry, but the fine print underneath it is not.
      </p>

      <h2>How to actually evaluate a reward offer</h2>
      <p>Rather than comparing headline numbers between platforms, it's more useful to check:</p>
      <ul>
        <li>Whether the reward requires a deposit, and how much.</li>
        <li>Any wagering or play-through requirement before you can withdraw or use it.</li>
        <li>How long you have to claim or use the reward before it expires.</li>
        <li>Whether the reward is credited instantly or requires manual review.</li>
      </ul>
      <p>
        For a full breakdown of every reward type we track, visit the{" "}
        <Link href="/rewards">rewards and incentives directory</Link>, or browse{" "}
        <Link href="/games">all games</Link> to see which reward features a specific platform offers.
      </p>
    </>
  );
}
