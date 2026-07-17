import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>
        "Yono game" gets used as a catch-all label, but the apps that fall under it span several genuinely different
        formats — card-based skill games, reel-based slots, spin-based reward mechanics, and casual arcade titles.
        Knowing which format you're actually looking at makes it much easier to find something that fits what you
        want, rather than judging every app by the same expectations.
      </p>

      <h2>Rummy and card-game formats</h2>
      <p>
        Rummy-style apps are built around matching and sequencing cards into valid sets — a format commonly
        classified as skill-predominant in India, distinct from pure chance-based games (though the exact legal
        treatment still depends on the specific game and jurisdiction; see our{" "}
        <Link href="/legalities">legalities page</Link>). These apps tend to have the steepest learning curve of the
        formats here, since understanding hand rankings and sequencing rules matters before rewards become relevant
        at all. <Link href="/games/yono-rummy">Yono Rummy</Link> and{" "}
        <Link href="/games/max-rummy">Max Rummy</Link> are examples in this category.
      </p>

      <h2>Slots and reel-based formats</h2>
      <p>
        Slot-style apps center on spinning reels for a matching combination, with little to no strategic decision
        involved during play itself. The appeal here tends to be simplicity and pace rather than skill development —
        rounds are short, and the rules are usually explained within the first minute of opening the app. See{" "}
        <Link href="/games/yono-slots">Yono Slots</Link> for an example listing.
      </p>

      <h2>Spin-based reward formats</h2>
      <p>
        Distinct from slots, spin-based formats generally use a spinning wheel or similar mechanic tied more directly
        to a rewards system — daily spins, event-based spins, or spins earned through other activity — rather than
        being the core repeated gameplay loop itself. These often overlap with the daily/account reward features
        covered in our <Link href="/blog/yono-game-rewards-explained">rewards explainer</Link>.
      </p>

      <h2>Arcade and casual formats</h2>
      <p>
        Arcade-style apps cover a broader, less standardized set of casual game mechanics, generally positioned
        around quick, repeatable sessions rather than sustained strategy. <Link href="/games/yono-arcade">Yono Arcade</Link>{" "}
        is an example of this category in our directory.
      </p>

      <h2>Bingo and number-matching formats</h2>
      <p>
        Bingo-style apps use a number-matching format — typically lower-complexity than card games, with a social,
        round-based structure. Availability of this format varies more between platforms than the others listed
        here.
      </p>

      <h2>How reward structures differ by format</h2>
      <p>
        The reward categories themselves — welcome bonuses, daily logins, referrals, leaderboards — tend to repeat
        across every format, but how central they are to the experience differs. Card-game formats often lean on
        leaderboards and skill-based recognition, while slot and spin formats tend to foreground frequency-based
        rewards like daily spins. See our full{" "}
        <Link href="/rewards">rewards and incentives directory</Link> for how each feature works in general terms.
      </p>

      <h2>Picking a format that fits you</h2>
      <p>
        If you want a shallow learning curve and short sessions, spin-based or arcade formats are usually the
        easiest entry point. If you're specifically interested in a skill-based format, rummy and other card games
        are the better fit — but expect a real rules-learning phase before rewards become the focus. Browse the{" "}
        <Link href="/games">full games directory</Link> filtered by category to compare specific listings.
      </p>
    </>
  );
}
