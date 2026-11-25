import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>A bonus appearing in your account balance and a bonus that stays there are not the same guarantee. Beyond the usual wagering requirement and expiry window, most platforms reserve the right to cancel &mdash; forfeit &mdash; a bonus (and sometimes the winnings it produced) if the account is found to have broken a condition of the bonus itself. This is a different mechanic from a bonus simply timing out: it&rsquo;s a policy-violation check, and it can happen at almost any stage, including after a withdrawal request has already been submitted.</p>

      <h2>Forfeiture rules, in plain words</h2>
      <p>Forfeiture means a platform reverses or voids a bonus &mdash; and often any winnings traced back to it &mdash; after determining the account didn&rsquo;t meet the bonus&rsquo;s eligibility conditions, rather than because time ran out or a wagering target wasn&rsquo;t cleared. The trigger is behavioral or account-based, not purely numerical. A platform can apply this at signup, mid-wagering, or at the exact moment a withdrawal is requested, since that&rsquo;s typically when an account gets its closest review.</p>

      <h2>Forfeiture triggers at a glance</h2>
      <table>
        <thead>
          <tr><th>Trigger</th><th>What it usually means</th></tr>
        </thead>
        <tbody>
          <tr><td>Multiple accounts, one person</td><td>Registering more than one account &mdash; often detected by device, IP, or payment-detail matching &mdash; to claim a welcome bonus more than once</td></tr>
          <tr><td>Self-referral</td><td>Using a second account, or a friend/family account, to refer yourself and collect both sides of a <Link href="/rewards/refer-and-earn">refer-and-earn</Link> reward</td></tr>
          <tr><td>Bot or scripted play</td><td>Automated or scripted gameplay used to clear a wagering requirement without genuine play</td></tr>
          <tr><td>Bonus-excluded games</td><td>Wagering the bonus on a game category the platform&rsquo;s terms exclude from counting toward the requirement</td></tr>
          <tr><td>Mismatched KYC details</td><td>Identity details submitted at withdrawal that don&rsquo;t match the account used to claim the bonus</td></tr>
          <tr><td>Guaranteed?</td><td>No &mdash; which triggers apply, how they&rsquo;re detected, and how strictly they&rsquo;re enforced are all set independently by each platform</td></tr>
        </tbody>
      </table>
      <p>This directory doesn&rsquo;t operate any of the platforms it lists, so it can&rsquo;t confirm which of these triggers a specific app actually enforces, or how aggressively. The pattern above describes how the category of rule generally works, not a verified policy for any one platform.</p>

      <h2>Forfeiture vs. the mechanics it gets confused with</h2>
      <table>
        <thead>
          <tr><th>Mechanic</th><th>How it differs from forfeiture</th></tr>
        </thead>
        <tbody>
          <tr><td><Link href="/blog/wagering-and-turnover-requirements-explained">Wagering requirement</Link> expiry</td><td>Time-based: the bonus lapses because the clock ran out, not because a rule was broken</td></tr>
          <tr><td><Link href="/blog/bonus-withdrawal-rules-and-kyc-explained">Withdrawal rules and KYC</Link></td><td>Threshold-based: a request is held or delayed, not necessarily voided</td></tr>
          <tr><td><Link href="/blog/promo-code-not-working">Promo code not working</Link></td><td>Entry-time failure &mdash; the code never activated in the first place</td></tr>
          <tr><td>Account suspension</td><td>Broader and can extend beyond a single bonus to the whole account</td></tr>
        </tbody>
      </table>
      <p>Forfeiture sits apart from all of these: it&rsquo;s a retroactive cancellation of something that was already credited and, in some cases, already partly or fully wagered.</p>

      <h2>How a forfeiture review typically plays out</h2>
      <ol>
        <li>A withdrawal is requested, or the platform runs a routine account check. This is commonly when a review is triggered, though some platforms check earlier.</li>
        <li>Account signals are checked against the bonus&rsquo;s terms &mdash; device/IP overlap with other accounts, referral-chain patterns, play patterns consistent with scripting, or game categories wagered against the bonus.</li>
        <li>If a violation is found, the platform typically voids the bonus balance and any winnings tied to it, rather than just declining the single withdrawal request.</li>
        <li>The account may be flagged, restricted from future bonus eligibility, or in more serious cases suspended, depending on the platform&rsquo;s own policy.</li>
        <li>Any dispute process, if offered, is run entirely by the platform &mdash; this directory has no role in that review and cannot intervene in it.</li>
      </ol>

      <h2>Why &ldquo;I didn&rsquo;t know&rdquo; doesn&rsquo;t usually reverse a forfeiture</h2>
      <p>Most platforms&rsquo; terms place the responsibility to read bonus conditions on the account holder, not on the platform to catch every edge case in advance. A forfeiture applied for a second account sharing a household device, for instance, can feel unfair to the person who didn&rsquo;t realize that counted &mdash; but the terms a platform publishes, not what feels reasonable, are what actually governs the outcome. The practical takeaway: read the bonus terms that attach to a specific offer, rather than assuming common sense will substitute for them.</p>

      <h2>Questions to ask about a bonus&rsquo;s forfeiture conditions</h2>
      <ul>
        <li>Does the platform&rsquo;s terms page list specific forfeiture conditions, or only a general &ldquo;we reserve the right to cancel&rdquo; clause?</li>
        <li>Are multiple accounts defined by device, IP, payment method, or some combination &mdash; and is that stated anywhere?</li>
        <li>Which game categories, if any, are excluded from counting toward a wagering requirement?</li>
        <li>Does the platform distinguish between an honest mistake and deliberate abuse in how it responds?</li>
        <li>Is there a stated appeal or dispute process, and where is it described?</li>
      </ul>

      <h2>Pressure around a forfeited bonus</h2>
      <p>A forfeiture notice, like a stuck withdrawal, can create pressure to deposit again &ldquo;to prove good faith,&rdquo; share additional personal details beyond standard KYC, or pay a fee to have a decision reconsidered. None of those requests are how a legitimate review process works. The <Link href="/responsible-gaming">Responsible Gaming</Link> page covers general guidance on this kind of pressure, and <Link href="/blog/bonus-withdrawal-rules-and-kyc-explained">Bonus Withdrawal Rules and KYC Explained</Link> covers the adjacent mechanic most likely to be confused with forfeiture.</p>

      <h2>Claims to treat with caution</h2>
      <table>
        <thead>
          <tr><th>Claim</th><th>Why to be careful</th></tr>
        </thead>
        <tbody>
          <tr><td>&ldquo;Multiple accounts are fine as long as you don&rsquo;t get caught&rdquo;</td><td>Advice that relies on evading a platform&rsquo;s own anti-abuse terms, not a confirmed feature</td></tr>
          <tr><td>A forfeiture reversed after paying a &ldquo;verification fee&rdquo;</td><td>A legitimate review is never unlocked by paying the platform</td></tr>
          <tr><td>&ldquo;No forfeiture risk, ever, on any bonus&rdquo;</td><td>Most real-money platforms reserve some form of this right in their terms &mdash; treat an absolute claim as unverified</td></tr>
        </tbody>
      </table>
      <p>For how bonus-type claims are generally handled across this network, see <Link href="/blog/rummy-bonus-types-explained">Rummy Bonus Explained</Link> and <Link href="/blog/bonus-hack-claims-are-fake">Bonus &ldquo;Hack&rdquo; Claims Are Fake</Link>.</p>

      <p><em>Disclosure: some links on AllYonoReward may be affiliate or referral links, and AllYonoReward may receive a fee at no extra cost to you. See the <Link href="/disclaimer">disclaimer</Link>. AllYonoReward is independent and does not guarantee any reward.</em></p>
      <p><em>18+ only. Gaming platforms can involve financial risk. Play responsibly and within your means.</em></p>
    </>
  );
}
