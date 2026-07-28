import Link from "next/link";
import { InfoTable } from "@/components/ui/InfoTable";
import { promoSlugFor } from "@/lib/utils";

export default function Content() {
  const promoSlug = promoSlugFor("win-rummy");

  return (
    <>
      <p>
        The Win Rummy bonus has been announced ahead of the platform&rsquo;s launch: a randomly assigned welcome
        reward between ₹100 and ₹500, plus an add-cash bonus of up to 200% on top-ups. This guide walks through what
        that actually means, who&rsquo;s likely eligible, and which conditions and restrictions are worth checking
        once the app is live. For the platform&rsquo;s current launch status, see the{" "}
        <Link href="/games/win-rummy">Win Rummy game guide</Link>.
      </p>

      <h2>What is the Win Rummy welcome reward?</h2>
      <p>
        Pre-launch material points to a welcome reward randomly assigned somewhere between ₹100 and ₹500 for new,
        eligible accounts. The random element matters: ₹500 is the ceiling, not a typical outcome, and most accounts
        should expect a figure somewhere inside that range rather than the maximum. For how welcome-style rewards
        generally work across this category of platform, see our{" "}
        <Link href="/rewards/welcome-bonus">welcome rewards guide</Link>.
      </p>

      <InfoTable
        caption="Current Win Rummy bonus status at a glance"
        rows={[
          { label: "Welcome reward", value: "Random, ₹100–₹500 (announced, not yet verified)" },
          { label: "Add-cash bonus", value: "Up to 200% (maximum rate; qualifying tiers not yet published)" },
          { label: "Promo code required", value: "Not confirmed" },
          { label: "Platform status", value: <Link href="/games/win-rummy">Coming Soon — see the latest Win Rummy reward status</Link> },
        ]}
      />

      <h2>The Win Rummy add-cash bonus, up to 200%</h2>
      <p>
        Beyond the welcome reward, Win Rummy has been announced as planning an add-cash bonus of up to 200% on
        top-ups. &ldquo;Up to&rdquo; is the operative phrase here — it signals a maximum rate that may only apply to
        a specific payment tier, not a flat rate every user receives on every transaction. The final payment tiers
        and qualifying amounts should be compared against our general{" "}
        <Link href="/rewards/first-deposit-bonus">add-cash bonus guide</Link> once the app launches and those figures
        are published.
      </p>

      <h2>Win Rummy bonus eligibility</h2>
      <p>Based on what&rsquo;s been announced, expect eligibility to hinge on the usual new-user conditions:</p>
      <ul>
        <li>a new, previously unregistered account;</li>
        <li>completed account or identity verification, where required;</li>
        <li>a minimum app version at the time of registration; and</li>
        <li>meeting any region-specific availability requirements.</li>
      </ul>
      <p>None of these conditions have been independently confirmed yet — check the in-app terms once Win Rummy is live.</p>

      <h2>Bonus conditions to watch for</h2>
      <p>
        Rewards described as a welcome bonus or add-cash match commonly come with conditions that aren&rsquo;t
        obvious from the headline figure alone. Before assuming a reward is spendable or withdrawable, check:
      </p>
      <ul>
        <li>whether it lands in a separate bonus or promotional wallet rather than the main withdrawable balance;</li>
        <li>any wagering or play-through requirement attached to it;</li>
        <li>whether it&rsquo;s credited instantly or held for manual review; and</li>
        <li>whether using it requires a minimum add-cash amount.</li>
      </ul>

      <h2>Possible restrictions</h2>
      <p>
        Win Rummy hasn&rsquo;t published an expiry window, regional limits, or per-account caps for either the
        welcome reward or the add-cash bonus. Readers should also understand how reward validity generally works in
        our <Link href="/blog/yono-game-rewards-explained">rewards explained guide</Link>, since expiry and usage
        conditions are common across this entire category of platform, not unique to Win Rummy.
      </p>

      <h2>Is a Win Rummy promo code required?</h2>
      <p>
        No promo-code requirement has been confirmed. Some platforms apply new-user rewards automatically or through
        a registration link rather than a manually entered code. Check the{" "}
        <Link href={`/promo-codes/${promoSlug}`}>Win Rummy promo-code status</Link> before using a code shared by an
        unofficial source, and see our full <Link href="/promo-codes">promo-code directory</Link> for how status
        labels work across every listed platform.
      </p>

      <h2>Responsible gaming reminder</h2>
      <p>
        Treat any welcome reward or add-cash bonus as promotional, not guaranteed income, and set a spending limit
        before the app launches rather than after. Review our{" "}
        <Link href="/responsible-gaming">responsible gaming guidance</Link> before using any real-money or
        reward-based gaming platform.
      </p>

      <h2>How we verify this information</h2>
      <p>
        Figures in this guide reflect what Win Rummy has publicly announced ahead of launch, not independent,
        in-app confirmation. All reward information is reviewed according to our{" "}
        <Link href="/editorial-policy">editorial policy</Link> and updated once new terms become available — see our{" "}
        <Link href="/corrections-policy">corrections policy</Link> if you spot something that needs a second look.
      </p>

      <h2>Related reading</h2>
      <ul>
        <li>
          <Link href="/games/win-rummy">Win Rummy Game Guide</Link>
        </li>
        <li>
          <Link href="/rewards/welcome-bonus">How Welcome Rewards Work</Link>
        </li>
        <li>
          <Link href="/rewards/first-deposit-bonus">First Add-Cash Bonuses Explained</Link>
        </li>
        <li>
          <Link href="/blog/how-promo-codes-work">How to Check Promo-Code Validity</Link>
        </li>
        <li>
          <Link href="/rewards/refer-and-earn">Referral Reward Conditions</Link>
        </li>
      </ul>

      <h2>Update log</h2>
      <ul>
        <li>
          July 28, 2026 — Initial publication. Welcome reward range (₹100–₹500) and add-cash bonus cap (up to 200%)
          published ahead of the full payment-tier breakdown, which will be added once Win Rummy launches.
        </li>
      </ul>
    </>
  );
}
