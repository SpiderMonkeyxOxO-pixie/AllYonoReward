import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>
        Once you've confirmed a code is genuinely current, redeeming it is usually a short process — but the exact
        steps vary enough between apps that it's worth walking through where to look and what to check along the
        way.
      </p>

      <h2>Step 1: Confirm the code's current status first</h2>
      <p>
        Before opening the app, check the code's status on its dedicated promo-code page in{" "}
        <Link href="/promo-codes">our directory</Link>. Each listing shows a last-checked date, so you can judge
        whether the status is likely to still hold. If you already have a specific game in mind, jump straight to its
        page — for example <Link href="/games/yono-arcade">Yono Arcade</Link>.
      </p>

      <h2>Step 2: Find the redeem-code section in the app</h2>
      <p>Across most Yono-style apps, the option lives in one of a few predictable places:</p>
      <ul>
        <li>A wallet or balance screen, often with a "Redeem Code" or "Add Code" button.</li>
        <li>An account or profile menu, sometimes labelled "Promo Code" or "Gift Code."</li>
        <li>A dedicated rewards or offers tab, particularly during festival or milestone promotions.</li>
      </ul>
      <p>
        If none of those are visible, check for a recent in-app notification or banner — some platforms only surface
        the redeem option temporarily during an active campaign rather than as a permanent menu item.
      </p>

      <h2>Step 3: Enter the code carefully</h2>
      <p>
        Type the code manually rather than pasting it where possible — copied text occasionally carries invisible
        characters or trailing spaces that cause an otherwise-valid code to be rejected. Codes are commonly
        case-sensitive, so match the formatting exactly as shown.
      </p>

      <h2>Step 4: Confirm what you meet before submitting</h2>
      <p>
        Many codes carry conditions — new-user only, one redemption per account, a minimum app version, or a specific
        date window. Submitting a code you don't qualify for will typically just return an error rather than a
        reward, so it's worth reading whatever eligibility notes are listed alongside the code first.
      </p>

      <h2>Step 5: Give it a moment</h2>
      <p>
        Some platforms credit the reward instantly; others queue it for a short review, especially for larger
        amounts. If nothing has appeared after a reasonable wait and you're confident you met every condition, see
        our <Link href="/blog/promo-code-not-working">guide to common redemption failures</Link> for the most likely
        explanations.
      </p>

      <h2>A quick note on trust</h2>
      <p>
        Never redeem a code through a link or third-party "redeem for me" service — the only place a code should be
        entered is directly inside the official app. Anywhere else asking for account credentials alongside a promo
        code is a red flag, not a shortcut.
      </p>
    </>
  );
}
