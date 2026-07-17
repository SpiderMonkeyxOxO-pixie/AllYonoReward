import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>
        A promo code failing to redeem is one of the most common frustrations across Yono-style games — and in the
        large majority of cases, the cause is one of a small, predictable set of reasons rather than anything
        unusual. Work through this list before assuming the code was never real.
      </p>

      <h2>1. The code has expired</h2>
      <p>
        Codes are frequently tied to a specific window — a festival promotion, a launch event, a limited batch — and
        platforms don't always announce publicly when that window closes. This is exactly why every promo-code page
        in <Link href="/promo-codes">our directory</Link> shows a last-checked date instead of assuming a code stays
        valid indefinitely.
      </p>

      <h2>2. You've hit a usage limit</h2>
      <p>
        Many codes are single-use per account, and some are limited to the first batch of users who redeem them
        platform-wide. A code can be genuinely live and still return "limit reached" simply because the cap was
        already hit before you tried it.
      </p>

      <h2>3. You don't meet the eligibility conditions</h2>
      <p>
        New-user-only codes are extremely common, and they won't apply to an existing, previously verified account
        regardless of timing. Some codes are also scoped to a specific region, app version, or promotional campaign
        that may not match your account.
      </p>

      <h2>4. A typo, extra space, or invisible character</h2>
      <p>
        Pasted text can carry characters you can't see — a trailing space, a smart-quote substitution, or a stray
        line break. Try retyping the code manually, character by character, rather than copying it from wherever you
        found it.
      </p>

      <h2>5. The code was never legitimate to begin with</h2>
      <p>
        Codes that circulate on unrelated forums, chat groups, or unverifiable screenshots are far more likely to be
        outdated, mistyped by whoever posted them, or fabricated entirely. See our{" "}
        <Link href="/blog/how-promo-codes-work">guide to where legitimate codes come from</Link> for how to judge a
        source.
      </p>

      <h2>6. App or server-side issues</h2>
      <p>
        Occasionally the issue isn't the code at all — an outdated app version, a temporary server problem, or a
        maintenance window can all produce a generic error that looks identical to an invalid-code message.
        Updating the app or trying again later rules this out.
      </p>

      <h2>7. The reward was credited, but not where you expected</h2>
      <p>
        Some rewards land in a separate bonus or pending balance rather than your main wallet, especially when
        wagering conditions apply. Check every balance section in the app before concluding the code didn't work at
        all.
      </p>

      <h2>What to do next</h2>
      <p>
        If you've ruled out all of the above, the platform's own support channel is the only place that can look at
        your specific account and confirm what happened — this directory can only track publicly observable status,
        not individual account details. You're also welcome to{" "}
        <Link href="/contact-us">report a stale listing to us</Link> so we can re-check and update it.
      </p>
    </>
  );
}
