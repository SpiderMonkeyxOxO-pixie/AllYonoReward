import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>
        "Rummy Gold" and "Gold Rummy" search almost identically, and marketing pages for both use
        similar imagery and bonus language — but they are two different apps from two different
        publishers. Mixing them up before you check a bonus claim, a download link, or a promo
        code is an easy mistake to make, and an easy one to avoid once you know what to check.
      </p>

      <h2>These are not the same app</h2>
      <p>
        <strong>Gold Rummy</strong> is the platform tracked in this directory — see its{" "}
        <Link href="/games/gold-rummy">game guide</Link> for what's currently confirmed about it.{" "}
        <strong>Rummy Gold</strong> is a separate, unrelated real-money rummy app with a much
        larger existing search footprint and no connection to this portfolio that we've been able
        to verify. Neither app's bonus terms, download source, or promo codes apply to the other.
      </p>

      <h2>Why the mix-up happens so often</h2>
      <p>
        Reversed-word-order naming is common across the real-money card and rummy app category in
        India — the same handful of words (Rummy, Gold, Win, Star, Master) get recombined across
        dozens of unrelated apps from different publishers. A search for either name will
        routinely surface results for the other, and marketing pages for both tend to use similar
        "gold" branding and bonus phrasing, which makes the confusion worse rather than better.
      </p>

      <h2>Before you trust a "Rummy Gold" or "Gold Rummy" bonus claim</h2>
      <ul>
        <li>
          Confirm the exact app name shown on the install screen — not just the icon or the
          general "gold" theming.
        </li>
        <li>
          Check the download source against what's published on this site's{" "}
          <Link href="/games/gold-rummy">Gold Rummy page</Link> specifically — a source for the
          other app is not interchangeable.
        </li>
        <li>
          Don't assume a bonus figure, promo code, or referral program described for one app
          applies to the other. See our <Link href="/rewards/welcome-bonus">welcome bonus</Link>{" "}
          page for how these terms generally work across the category.
        </li>
      </ul>

      <p>
        For what's actually confirmed about the app this portfolio tracks, see the{" "}
        <Link href="/games/gold-rummy">Gold Rummy game guide</Link>. To browse everything else
        this directory covers, see <Link href="/games">all games</Link>.
      </p>
    </>
  );
}
