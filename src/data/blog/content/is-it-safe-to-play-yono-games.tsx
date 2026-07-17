import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>
        "Yono game" describes a whole category of apps, not a single product — so there's no single answer to
        whether it's safe. Safety depends on the specific platform, how it's operated, and choices you make around
        permissions and spending. This checklist is meant to help you evaluate any individual app before you commit
        time or money to it.
      </p>

      <p>
        Before anything else: being listed on <Link href="/games">this directory</Link> means we've catalogued a
        real, active app — it is not a safety certification, endorsement, or guarantee. Treat every listing as a
        starting point for your own research, not a conclusion.
      </p>

      <h2>Check app permissions before installing</h2>
      <p>
        Look at what the app actually requests during install or first launch. Permissions unrelated to gameplay —
        full contact-list access, SMS reading, call-log access, or broad file-system access — are common red flags
        for apps in this category and worth questioning before you grant them.
      </p>

      <h2>Look for a real, findable operator</h2>
      <p>
        Legitimate platforms usually have identifiable contact information, a privacy policy, and terms of service
        that are actually accessible from within the app or its official site. An app with no findable operator
        details, or terms that don't load, is harder to trust with either personal data or money.
      </p>

      <h2>Understand the game's classification before depositing real money</h2>
      <p>
        Games in this category range from purely social/free-to-play formats to real-money skill or chance-based
        formats, and the legal treatment differs by classification and by state in India. See our{" "}
        <Link href="/legalities">legalities overview</Link> for a general, non-legal-advice summary — and don't
        assume every app in this category is treated identically under the law.
      </p>

      <h2>Start small with any real-money platform</h2>
      <p>
        If you do choose to deposit, start with the smallest amount the platform allows rather than a large first
        deposit chasing a bonus offer. This limits your exposure while you get a feel for how withdrawals, support
        response times, and reward crediting actually work on that specific platform.
      </p>

      <h2>Read withdrawal terms before you deposit, not after</h2>
      <p>
        Minimum withdrawal thresholds, verification requirements (KYC), and processing timelines vary significantly
        between platforms. These are far easier to evaluate calmly before you have money in the app than to discover
        after you're trying to withdraw.
      </p>

      <h2>Watch for guaranteed-win or guaranteed-reward language</h2>
      <p>
        Be skeptical of any messaging — in-app or from a third party — that promises guaranteed winnings, guaranteed
        bonus amounts, or "risk-free" real-money play. Rewards and outcomes are set by the platform's own terms and
        can never be promised in advance by an outside source, including this website.
      </p>

      <h2>Set your own limits before you start</h2>
      <p>
        Decide on a time and spending limit before you open the app, not while you're playing. Our{" "}
        <Link href="/responsible-gaming">responsible gaming page</Link> has general guidance on setting limits and
        where to find help if play starts to feel less in your control.
      </p>

      <h2>The short version</h2>
      <p>
        There's no blanket answer for an entire app category — evaluate each platform individually using the checks
        above, verify current terms directly in the app rather than relying solely on any directory (including this
        one), and never deposit more than you're prepared to lose.
      </p>
    </>
  );
}
