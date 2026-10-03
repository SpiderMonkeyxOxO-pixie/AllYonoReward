import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>Refer and earn is a program where an existing user shares a referral link or code with a new user, and a reward may be released once the platform's conditions are met. Rewards are not immediate or guaranteed, are often capped, and exclude self-referrals. Read the program's terms first.</p>

      <h2>What "refer and earn" means</h2>
      <p>"Refer and earn" is the name of a common program format. An existing user invites a new user, usually by sharing a link or a code. If the invited person joins and meets the platform's conditions, a reward may be released to one account, both or neither, depending on the program. The word "earn" describes the format. It does not promise that anyone will earn anything.</p>

      <h2>Refer and earn at a glance</h2>
      <table>
        <thead>
          <tr><th>Feature</th><th>What it usually means</th></tr>
        </thead>
        <tbody>
          <tr><td>Who invites</td><td>An existing user</td></tr>
          <tr><td>How</td><td>A shared referral link or code</td></tr>
          <tr><td>Who qualifies</td><td>A genuine new account</td></tr>
          <tr><td>Conditions</td><td>Often a deposit or activity milestone</td></tr>
          <tr><td>Reward</td><td>Set by the platform; may go to one or both accounts</td></tr>
          <tr><td>Timing</td><td>Usually not immediate</td></tr>
        </tbody>
      </table>
      <p>This follows the site's <Link href="/rewards/refer-and-earn">Refer and Earn</Link> reward-feature page.</p>

      <h2>How the process works</h2>
      <ol>
        <li>The inviter shares a link or code.</li>
        <li>The invited person registers using it, if the program allows.</li>
        <li>The platform checks eligibility. The invited account usually has to be genuinely new.</li>
        <li>The invited user completes the stated step. Some platforms require an activity or deposit milestone.</li>
        <li>A reward may be released. Timing, amount and who receives it depend on the program.</li>
      </ol>
      <p>Most platforms do not reward a referral the moment someone signs up. Further steps are normally required first.</p>

      <h2>Conditions that commonly apply</h2>
      <ul>
        <li>The invited user must be a real, new account, not a duplicate or existing user.</li>
        <li>Self-referrals, such as inviting yourself with another account, are generally excluded.</li>
        <li>Rewards are often capped per user or per period.</li>
        <li>Rewards may need to be claimed within a set time after conditions are met.</li>
        <li>Details differ from one platform to the next.</li>
      </ul>
      <p>If a program's terms are not written down, you cannot know which of these apply.</p>

      <h2>Referral code vs promo code</h2>
      <p>They are different fields. A referral code connects an invited account to an inviter. A promo code activates an offer. Typing one into the other's field can fail even when both are valid. For promo codes, see <Link href="/blog/how-promo-codes-work">How Do Promo Codes Work?</Link>. For how an invite-based reward feature can appear inside an app, see <Link href="/rewards/invite-reward-chest">Invite Reward Chest</Link>. Welcome offers for new accounts are covered in <Link href="/rewards/welcome-bonus">Welcome Bonus</Link>.</p>

      <h2>Sharing your code responsibly</h2>
      <p>If you share a referral link, a few habits keep it fair:</p>
      <ul>
        <li>Tell people it is optional.</li>
        <li>Do not promise a reward. You do not control it.</li>
        <li>Encourage friends to read the terms and check the platform.</li>
        <li>Do not pressure anyone to join or spend.</li>
        <li>Never ask a friend for their OTP, password or PIN.</li>
      </ul>
      <p>You are inviting someone to a platform, and a good invitation is honest about what is and is not guaranteed.</p>

      <h2>Using someone else's code</h2>
      <p>If you are the invited person, you are not obliged to use a code. Check where it came from, read the platform's terms and decide whether the platform suits you. A referral is not a reason to join something you would not otherwise use.</p>

      <h2>Claims and schemes to avoid</h2>
      <table>
        <thead>
          <tr><th>Claim</th><th>Why to be careful</th></tr>
        </thead>
        <tbody>
          <tr><td>"Earn daily by referring friends"</td><td>No income can be promised</td></tr>
          <tr><td>"Unlimited referral income"</td><td>Programs usually have caps and conditions</td></tr>
          <tr><td>Pay to join before you can refer</td><td>A pattern linked to pyramid-style schemes</td></tr>
          <tr><td>Referral "hack" or fake accounts</td><td>Self-referrals are generally excluded</td></tr>
          <tr><td>Guaranteed payout per invite</td><td>Rewards depend on conditions</td></tr>
        </tbody>
      </table>
      <p>For the "hack" pattern, see <Link href="/blog/bonus-hack-claims-are-fake">Bonus Hack Claims Are Fake</Link>. If a program makes money depend mainly on recruiting others rather than on a product or service, step away.</p>

      <h2>Referral rewards and real money</h2>
      <p>Where a referral reward involves real money, the same caution applies as for any claim that money can be withdrawn. See <Link href="/blog/real-cash-games-what-the-claim-means">Real Cash Withdrawal Games: What the Claim Means</Link>. For how bonus conditions affect what a reward is worth, see <Link href="/blog/rummy-bonus-types-explained">Rummy Bonus Explained</Link>.</p>

      <h2>Playing within your means</h2>
      <p>A referral program can make a platform feel more rewarding, but it does not reduce risk. Set a limit before you start and stop if play stops being enjoyable. The <Link href="/responsible-gaming">Responsible Gaming</Link> page lists practical steps.</p>

      <h2>A short example of a typical referral</h2>
      <p>A user shares a link with a friend. The friend installs the app, registers and starts using it. The platform checks that the friend is a genuinely new account and waits for the stated step to be completed. Only then does it release a reward, and the amount, timing and recipients are set by the program. If the friend never completes the step, nothing is released. That sequence is why a referral reward is never immediate and never guaranteed.</p>
      <p><em>Disclosure: some links on AllYonoReward may be affiliate or referral links, and AllYonoReward may receive a fee at no extra cost to you. See the <Link href="/disclaimer">disclaimer</Link>. AllYonoReward is independent and does not guarantee any reward.</em></p>
      <p><em>18+ only. Gaming platforms can involve financial risk. Play responsibly and within your means.</em></p>
    </>
  );
}
