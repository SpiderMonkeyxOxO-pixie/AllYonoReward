import type { Metadata } from "next";
import Link from "next/link";
import { StaticPageShell } from "@/components/layout/StaticPageShell";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "2026-07-22";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer: Informational Use Only",
  description: `Full disclaimer covering ${siteConfig.name}'s independence from every listed platform, our affiliate disclosure, promo-code and reward limitations, and our lack of affiliation with SBI or YONO SBI.`,
  path: "/disclaimer",
});

const H3_CLASS = "mt-4 text-lg font-semibold text-brand-green-dark";

export default function DisclaimerPage() {
  return (
    <StaticPageShell
      title="Disclaimer"
      crumbName="Disclaimer"
      crumbPath="/disclaimer"
      lastUpdated={LAST_UPDATED}
      intro="This Disclaimer applies to all visitors and users of the AllYonoReward website, including its game listings, promo-code pages, reward guides, articles, status labels, images, external links, and other published materials."
    >
      <section>
        <h2>Welcome to AllYonoReward</h2>
        <p>
          {siteConfig.name} is an independent informational website for users in India. We publish general
          information about third-party gaming applications, promotional codes, rewards, incentives, platform
          features, and publicly available updates.
        </p>
        <p>
          By accessing or using this website, you acknowledge that you have read and understood this Disclaimer. If
          you do not agree with any part of it, you should discontinue using the website.
        </p>
      </section>

      <section>
        <h2>Independent Informational Resource</h2>
        <p>
          {siteConfig.name} does not own, develop, operate, manage, or control any third-party game or application
          listed or discussed on this website unless expressly stated otherwise.
        </p>
        <p>
          Our role is limited to publishing informational and editorial content. We do not operate gaming accounts,
          process payments, manage rewards, determine game results, or provide customer support on behalf of
          third-party platforms.
        </p>
        <p>
          The appearance of a game, application, promo code, reward, logo, screenshot, or external link on{" "}
          {siteConfig.name} does not mean that we:
        </p>
        <ul>
          <li>own or operate the platform;</li>
          <li>are officially associated with its developer;</li>
          <li>endorse or certify the platform;</li>
          <li>guarantee its legality or regulatory status;</li>
          <li>confirm every statement made by its operator;</li>
          <li>guarantee that a promo code will work;</li>
          <li>guarantee that a reward will be credited; or</li>
          <li>guarantee any payment, withdrawal, prize, or financial outcome.</li>
        </ul>
        <p>
          Every third-party platform remains under the ownership, management, and responsibility of its respective
          operator.
        </p>
      </section>

      <section>
        <h2>No Affiliation With SBI or YONO SBI</h2>
        <p>
          {siteConfig.name} is not affiliated with, sponsored by, endorsed by, or connected to the State Bank of
          India, SBI, or the YONO SBI application.
        </p>
        <p>
          The word &ldquo;Yono&rdquo; is used on this website only in a descriptive manner to refer to a commonly
          used category or naming pattern associated with certain independent mobile gaming platforms.
        </p>
        <p>
          Nothing on {siteConfig.name} should be interpreted as suggesting that the State Bank of India or YONO SBI
          owns, approves, operates, or supports any gaming application listed on this website.
        </p>
        <p>
          All trademarks, brand names, and logos connected with SBI or YONO SBI remain the property of their
          respective owners.
        </p>
      </section>

      <section>
        <h2>Affiliate and Referral Disclosure</h2>
        <p>
          Some links, buttons, promo codes, or platform references on {siteConfig.name} may be affiliate or referral
          links.
        </p>
        <p>
          If a visitor follows one of these links or completes a qualifying action on a third-party platform,{" "}
          {siteConfig.name} may receive a commission or referral fee. This generally does not create an additional
          charge for the visitor.
        </p>
        <p>
          An affiliate relationship does not mean that {siteConfig.name} owns, controls, verifies, or guarantees the
          third-party platform.
        </p>
        <p>
          Affiliate compensation does not affect our obligation to present information clearly and responsibly.
          Users must still independently verify every platform, offer, and condition before taking action.
        </p>
        <p>Where appropriate, an additional disclosure may be displayed near a particular affiliate or referral link.</p>
      </section>

      <section>
        <h2>Scope of Our Content</h2>
        <p>{siteConfig.name} may publish information about:</p>
        <ul>
          <li>third-party gaming applications;</li>
          <li>game features and platform summaries;</li>
          <li>publicly advertised promo codes;</li>
          <li>welcome rewards;</li>
          <li>daily rewards;</li>
          <li>referral rewards;</li>
          <li>events and spins;</li>
          <li>leaderboards;</li>
          <li>eligibility requirements;</li>
          <li>promotional terms;</li>
          <li>app availability;</li>
          <li>publicly reported platform changes; and</li>
          <li>responsible-use considerations.</li>
        </ul>
        <p>This content is provided for general informational purposes only.</p>
        <p>
          Nothing on {siteConfig.name} should be interpreted as an instruction, invitation, or recommendation to
          register, deposit money, make a purchase, participate in paid gameplay, or use a particular gaming
          application.
        </p>
      </section>

      <section>
        <h2>Promo-Code Status Labels</h2>
        <p>{siteConfig.name} may use labels such as:</p>
        <ul>
          <li>Verified;</li>
          <li>Recently Checked;</li>
          <li>Unverified;</li>
          <li>Expired;</li>
          <li>Platform-Specific; or</li>
          <li>No Public Code Available.</li>
        </ul>
        <p>
          These labels describe the status recorded through our editorial review process on the date shown on the
          relevant page.
        </p>
        <p>
          A label does not guarantee that a code will remain active after the review date. Third-party operators may
          change, restrict, suspend, replace, or withdraw promo codes without notifying {siteConfig.name}.
        </p>
        <p>
          A code described as &ldquo;Verified&rdquo; or &ldquo;Recently Checked&rdquo; may still fail because of:
        </p>
        <ul>
          <li>account-specific eligibility;</li>
          <li>regional restrictions;</li>
          <li>expiry;</li>
          <li>usage limits;</li>
          <li>new-user requirements;</li>
          <li>minimum transaction conditions;</li>
          <li>operator-side changes;</li>
          <li>technical errors; or</li>
          <li>other conditions imposed by the platform.</li>
        </ul>
        <p>Users must review the official promotional terms before relying on any code.</p>
      </section>

      <section>
        <h2>No Guarantee of Promo-Code Accuracy</h2>
        <p>
          {siteConfig.name} makes reasonable efforts to review publicly available promo-code information. However,
          we do not guarantee that every code, status, value, expiry date, or eligibility condition is complete,
          current, or accurate.
        </p>
        <p>We do not guarantee that:</p>
        <ul>
          <li>a code will be accepted;</li>
          <li>a code will work for every user;</li>
          <li>a reward will be credited;</li>
          <li>a code applies to every location;</li>
          <li>a promotion remains available;</li>
          <li>an account meets the eligibility conditions; or</li>
          <li>an operator will honour an outdated or incorrectly advertised offer.</li>
        </ul>
        <p>
          Unless expressly stated, {siteConfig.name} does not create, issue, sell, redeem, activate, or administer
          third-party promo codes.
        </p>
      </section>

      <section>
        <h2>Rewards and Incentives</h2>
        <p>
          References to welcome rewards, daily rewards, spins, referral incentives, leaderboards, cashback, vouchers,
          or similar benefits are informational only.
        </p>
        <p>Rewards may be subject to:</p>
        <ul>
          <li>eligibility rules;</li>
          <li>time limits;</li>
          <li>account verification;</li>
          <li>regional availability;</li>
          <li>usage conditions;</li>
          <li>platform-specific requirements;</li>
          <li>minimum activity requirements;</li>
          <li>withdrawal conditions; or</li>
          <li>changes made by the relevant operator.</li>
        </ul>
        <p>
          {siteConfig.name} does not guarantee that any user will qualify for, receive, retain, redeem, or withdraw a
          reward.
        </p>
        <p>
          Displayed reward amounts must not be treated as guaranteed cash, earnings, income, or money already
          belonging to the user.
        </p>
      </section>

      <section>
        <h2>No Deposit, Payout, or Account Processing</h2>
        <p>{siteConfig.name} does not process or control:</p>
        <ul>
          <li>user registrations;</li>
          <li>identity verification;</li>
          <li>deposits;</li>
          <li>withdrawals;</li>
          <li>refunds;</li>
          <li>account balances;</li>
          <li>rewards;</li>
          <li>prizes;</li>
          <li>payouts;</li>
          <li>transaction histories;</li>
          <li>password recovery;</li>
          <li>account suspensions; or</li>
          <li>customer-support complaints.</li>
        </ul>
        <p>
          Any account, transaction, payment, or reward issue must be addressed directly with the relevant
          third-party operator through its verified support channels.
        </p>
        <p>
          {siteConfig.name} cannot access, retrieve, modify, or recover a user&rsquo;s account or funds held by a
          third-party platform.
        </p>
        <p>
          Users should never send passwords, one-time passwords, banking credentials, payment PINs, identity
          documents, or other sensitive information to anyone claiming to provide third-party account support
          through {siteConfig.name}.
        </p>
      </section>

      <section>
        <h2>Third-Party Games and Platforms</h2>
        <p>
          All games and applications referenced on {siteConfig.name} are operated independently by their respective
          owners or developers.
        </p>
        <p>{siteConfig.name} does not supervise or control:</p>
        <ul>
          <li>game development;</li>
          <li>gameplay systems;</li>
          <li>random outcomes;</li>
          <li>scoring;</li>
          <li>leaderboards;</li>
          <li>contests;</li>
          <li>user balances;</li>
          <li>payment systems;</li>
          <li>withdrawal procedures;</li>
          <li>privacy practices;</li>
          <li>advertisements;</li>
          <li>security measures;</li>
          <li>customer support; or</li>
          <li>dispute resolution.</li>
        </ul>
        <p>Any interaction between a user and a third-party platform occurs directly between those parties.</p>
        <p>
          {siteConfig.name} is not responsible for promises, representations, actions, omissions, policies, or
          decisions made by a third-party operator.
        </p>
      </section>

      <section>
        <h2>User Responsibility and Due Diligence</h2>
        <p>Users are responsible for deciding whether to visit, download, register with, or use a third-party application.</p>
        <p>Before using any platform, users should independently check:</p>
        <ul>
          <li>the operator&rsquo;s legal identity;</li>
          <li>the official website or authorised app listing;</li>
          <li>company and contact information;</li>
          <li>the Terms and Conditions;</li>
          <li>the Privacy Policy;</li>
          <li>app permissions;</li>
          <li>age requirements;</li>
          <li>geographic restrictions;</li>
          <li>customer-support methods;</li>
          <li>reward and promotional conditions;</li>
          <li>payment and withdrawal policies; and</li>
          <li>applicable Indian laws.</li>
        </ul>
        <p>
          Users should not rely solely on advertisements, screenshots, social-media posts, influencer content,
          referral messages, promotional banners, or unverified claims.
        </p>
      </section>

      <section>
        <h2>Accuracy and Changes to Information</h2>
        <p>
          {siteConfig.name} aims to publish useful and understandable information. However, third-party platform
          information may change at any time without notice.
        </p>
        <p>Changes may affect:</p>
        <ul>
          <li>app names;</li>
          <li>operators;</li>
          <li>domains;</li>
          <li>download sources;</li>
          <li>platform features;</li>
          <li>promo codes;</li>
          <li>reward amounts;</li>
          <li>eligibility requirements;</li>
          <li>payment methods;</li>
          <li>withdrawal conditions;</li>
          <li>terms and policies;</li>
          <li>regional availability; and</li>
          <li>support details.</li>
        </ul>
        <p>
          We do not guarantee that every page will always remain complete, current, error-free, or applicable to
          every user.
        </p>
        <p>The date on which information was last reviewed or updated should be considered when evaluating it.</p>
        <p>Users should verify important information directly through authoritative or official sources.</p>
      </section>

      <section>
        <h2>Downloads and APK Files</h2>
        <p>
          Some applications discussed on {siteConfig.name} may be distributed as APK files or through websites
          outside recognised app stores.
        </p>
        <p>
          Downloading software from an unknown or unauthorised source may expose a device, account, or personal
          information to security risks.
        </p>
        <p>Before installing any application, users should verify:</p>
        <ul>
          <li>the authenticity of the website;</li>
          <li>the identity of the developer;</li>
          <li>whether the download source is authorised;</li>
          <li>the permissions requested;</li>
          <li>the app&rsquo;s Privacy Policy;</li>
          <li>available security information; and</li>
          <li>whether the file has been altered.</li>
        </ul>
        <p>
          {siteConfig.name} does not guarantee the authenticity, safety, integrity, functionality, or security of
          files provided by external websites.
        </p>
        <p>
          Unless expressly stated otherwise, {siteConfig.name} does not develop, host, inspect, scan, certify, or
          distribute third-party APK files.
        </p>
      </section>

      <section>
        <h2>Financial and Transaction Risks</h2>
        <p>
          Some third-party gaming platforms may advertise paid features, entry payments, rewards, prizes, cashback,
          referral benefits, or withdrawal options.
        </p>
        <p>
          Any transaction made through a third-party platform is undertaken at the user&rsquo;s own discretion and
          responsibility.
        </p>
        <p>{siteConfig.name} does not guarantee:</p>
        <ul>
          <li>winnings;</li>
          <li>successful deposits;</li>
          <li>successful withdrawals;</li>
          <li>refunds;</li>
          <li>cashback;</li>
          <li>reward payments;</li>
          <li>referral commissions;</li>
          <li>account balances;</li>
          <li>prize distribution;</li>
          <li>return of money paid; or</li>
          <li>any financial outcome.</li>
        </ul>
        <p>
          Promotional statements should not be treated as proof that a user will earn money, recover funds, receive
          a payout, or obtain a financial benefit.
        </p>
        <p>
          Users should never spend money required for food, housing, education, healthcare, debt payments, or other
          essential needs.
        </p>
      </section>

      <section>
        <h2>Compliance With Indian Law</h2>
        <p>
          Users are responsible for ensuring that their access to or use of any third-party game complies with all
          applicable laws and regulations in India.
        </p>
        <p>
          The Promotion and Regulation of Online Gaming Act, 2025 and the Promotion and Regulation of Online Gaming
          Rules, 2026 establish a national framework for online gaming, including the recognition and regulation of
          certain e-sports and online social games and restrictions relating to prohibited online money games.
        </p>
        <p>
          The legal treatment of a platform depends on its actual features, operating model, payment structure, and
          official regulatory status.
        </p>
        <p>
          {siteConfig.name} does not classify any game as an e-sport, online social game, online money game, lawful
          platform, registered service, or approved application unless that classification is supported by reliable
          official information.
        </p>
        <p>Any category or review status shown on this website is an editorial description and not a legal determination.</p>
        <p>
          Nothing published on {siteConfig.name} should be interpreted as promoting, facilitating, or encouraging an
          online money game or any other activity prohibited under Indian law.
        </p>
        <p>
          Users who require advice about the legality of a specific platform or activity should consult an
          appropriately qualified legal professional. See also our{" "}
          <Link href="/legalities" className="font-semibold text-brand-gold-dark hover:underline">
            Legalities
          </Link>{" "}
          page.
        </p>
      </section>

      <section>
        <h2>Regional Restrictions</h2>
        <p>
          The accessibility of a game or website from a particular location does not necessarily mean that it is
          legally permitted there.
        </p>
        <p>
          Users must check whether a platform, game, feature, promotion, or paid activity is available and permitted
          in their State or Union Territory.
        </p>
        <p>
          {siteConfig.name} does not guarantee that every platform or feature discussed on the website is legally
          accessible throughout India.
        </p>
        <p>
          Users should not attempt to bypass geographic, legal, age, or platform restrictions through false
          information, technical circumvention, or other improper means.
        </p>
      </section>

      <section>
        <h2>Age Restrictions</h2>
        <p>{siteConfig.name} is intended for adults aged 18 years and above.</p>
        <p>Third-party applications may impose their own age requirements or may not be suitable for all adults.</p>
        <p>Users must follow the minimum-age and eligibility requirements stated by the relevant operator and applicable law.</p>
        <p>
          Parents and guardians should supervise minors&rsquo; device and internet use and take reasonable steps to
          prevent access to age-restricted gaming services.
        </p>
      </section>

      <section>
        <h2>Responsible Gaming</h2>
        <p>Gaming should be approached as entertainment and used within reasonable personal and financial limits.</p>
        <p>Users should avoid:</p>
        <ul>
          <li>spending money intended for essential expenses;</li>
          <li>borrowing money to participate;</li>
          <li>chasing losses;</li>
          <li>repeatedly depositing after losses;</li>
          <li>hiding gaming-related activity or spending;</li>
          <li>allowing gaming to interfere with work or education;</li>
          <li>allowing gaming to damage relationships; or</li>
          <li>continuing when it causes emotional or financial distress.</li>
        </ul>
        <p>
          If gaming begins to affect a user&rsquo;s wellbeing, finances, responsibilities, or relationships, the user
          should stop using the relevant service and seek assistance from a suitable qualified professional or
          support organisation. See also our{" "}
          <Link href="/responsible-gaming" className="font-semibold text-brand-gold-dark hover:underline">
            Responsible Gaming
          </Link>{" "}
          page.
        </p>
      </section>

      <section>
        <h2>App-Specific Notices</h2>

        <h3 className={H3_CLASS}>Rummy Applications</h3>
        <p>Information about rummy applications is provided for general informational purposes only.</p>
        <p>
          Rummy platforms may differ in their rules, payment structures, eligibility requirements, regional
          availability, and regulatory status.
        </p>
        <p>Users should review the operator&rsquo;s official documentation and applicable law before accessing any rummy service.</p>
        <p>
          {siteConfig.name} does not guarantee that a rummy platform is permitted, registered, or available in every
          part of India.
        </p>

        <h3 className={H3_CLASS}>Poker Applications</h3>
        <p>Poker applications may be subject to legal and regional restrictions.</p>
        <p>
          Users must independently examine the operator, game model, payment structure, age requirements,
          promotional terms, and regulatory status.
        </p>
        <p>A reference to a poker application does not constitute endorsement or encouragement to participate.</p>

        <h3 className={H3_CLASS}>Ludo Applications</h3>
        <p>
          Ludo applications may operate as free casual games or may contain advertisements, in-app purchases,
          rewards, contests, or payment-related features.
        </p>
        <p>Users should examine the official platform information before registering or making any payment.</p>
        <p>
          {siteConfig.name} does not guarantee game outcomes, rewards, prizes, withdrawals, or promotional benefits
          connected with a Ludo application.
        </p>

        <h3 className={H3_CLASS}>Fantasy Sports Applications</h3>
        <p>Fantasy sports platforms may be subject to eligibility, geographic, legal, and regulatory restrictions.</p>
        <p>Users are responsible for confirming whether a platform and its features are permitted in their location.</p>
        <p>{siteConfig.name} does not guarantee contest entry, results, rankings, prizes, payments, or withdrawals.</p>

        <h3 className={H3_CLASS}>Casual and Social Games</h3>
        <p>
          Casual and social games may include advertisements, virtual items, optional purchases, promo codes, or
          account-based rewards.
        </p>
        <p>
          Users should review the app&rsquo;s Terms and Conditions, Privacy Policy, permissions, and purchase rules
          before using it.
        </p>
        <p>Their inclusion on {siteConfig.name} is informational and does not constitute certification or endorsement.</p>

        <h3 className={H3_CLASS}>Other Gaming Applications</h3>
        <p>
          Any other gaming application mentioned on {siteConfig.name} remains under the control and responsibility
          of its respective owner and operator.
        </p>
        <p>Users should conduct their own checks before downloading, registering, providing personal information, or making a purchase.</p>
      </section>

      <section>
        <h2>Privacy and Personal Data</h2>
        <p>
          {siteConfig.name} does not control how third-party applications collect, process, store, use, or share
          personal information.
        </p>
        <p>Before using a platform, users should review its Privacy Policy and understand:</p>
        <ul>
          <li>what information is collected;</li>
          <li>why it is collected;</li>
          <li>which device permissions are requested;</li>
          <li>whether information is shared with other parties;</li>
          <li>where information is stored;</li>
          <li>how long it is retained;</li>
          <li>how an account can be closed;</li>
          <li>how data deletion can be requested; and</li>
          <li>how privacy complaints are handled.</li>
        </ul>
        <p>
          Users should avoid applications that request excessive permissions, unnecessary sensitive information, or
          payments without providing clear operator and privacy details.
        </p>
        <p>
          Information collected directly by {siteConfig.name} is governed by our separate{" "}
          <Link href="/privacy-policy" className="font-semibold text-brand-gold-dark hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>External Links</h2>
        <p>
          {siteConfig.name} may contain links to third-party websites, applications, app stores, social-media pages,
          support channels, or other external resources.
        </p>
        <p>We do not control the content, availability, security, accuracy, or privacy practices of external websites.</p>
        <p>The inclusion of an external link does not constitute an endorsement, warranty, verification, or guarantee.</p>
        <p>
          Users access external resources at their own discretion and should review the relevant third party&rsquo;s
          Terms and Conditions and Privacy Policy.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          Third-party game names, app names, trademarks, logos, screenshots, icons, and other identifying materials
          remain the property of their respective owners.
        </p>
        <p>
          Their use on {siteConfig.name} is intended for identification, reference, reporting, review, or
          informational commentary.
        </p>
        <p>Such use does not imply ownership, sponsorship, partnership, approval, or official affiliation.</p>
        <p>
          A rights holder who believes that protected material has been used improperly may contact {siteConfig.name}{" "}
          at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-brand-gold-dark hover:underline">
            {siteConfig.contactEmail}
          </a>{" "}
          and provide:
        </p>
        <ul>
          <li>identification of the protected material;</li>
          <li>the page where it appears;</li>
          <li>evidence of ownership or authority;</li>
          <li>contact information; and</li>
          <li>an explanation of the concern.</li>
        </ul>
      </section>

      <section>
        <h2>No Financial or Legal Advice</h2>
        <p>Nothing published on {siteConfig.name} constitutes financial, investment, tax, or legal advice.</p>
        <p>
          Descriptions of game categories, reward systems, promotional terms, platform features, or regulatory
          status are general informational observations and must not be treated as professional advice or formal
          legal determinations.
        </p>
        <p>Users should consult an appropriately qualified professional when advice is required for their particular circumstances.</p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, {siteConfig.name} and its owners, administrators,
          writers, editors, and contributors will not be liable for any direct, indirect, incidental, consequential,
          special, or punitive loss arising from:
        </p>
        <ul>
          <li>reliance on information published on the website;</li>
          <li>an inaccurate or outdated promo code;</li>
          <li>an unavailable or refused reward;</li>
          <li>changes to eligibility requirements;</li>
          <li>the use or inability to use a third-party application;</li>
          <li>account registration, suspension, restriction, or closure;</li>
          <li>deposits, purchases, withdrawals, payouts, or refunds;</li>
          <li>loss of money or virtual items;</li>
          <li>misleading claims made by a third party;</li>
          <li>installation of an APK or other software;</li>
          <li>malware, viruses, or security incidents;</li>
          <li>loss, theft, or misuse of personal information;</li>
          <li>interruption or removal of an external service; or</li>
          <li>any dispute between a user and a third-party operator.</li>
        </ul>
        <p>
          Nothing in this Disclaimer is intended to remove, restrict, or exclude any liability or consumer right
          that cannot lawfully be excluded under applicable Indian law.
        </p>
      </section>

      <section>
        <h2>No Warranty</h2>
        <p>{siteConfig.name} and its content are provided on an &ldquo;as available&rdquo; and &ldquo;as published&rdquo; basis.</p>
        <p>We do not warrant that:</p>
        <ul>
          <li>the website will always be accessible;</li>
          <li>every page will be error-free;</li>
          <li>third-party links will remain active;</li>
          <li>promo codes will remain valid;</li>
          <li>rewards will remain available;</li>
          <li>third-party applications will function as described; or</li>
          <li>the website or external services will be free from harmful components.</li>
        </ul>
        <p>Users are responsible for maintaining suitable device security, account protection, and data backups.</p>
      </section>

      <section>
        <h2>Corrections and Removal Requests</h2>
        <p>{siteConfig.name} welcomes reasonable requests to correct inaccurate or outdated information.</p>
        <p>
          A correction or removal request does not automatically require the website to change or remove content.
          Requests may be assessed according to the available evidence, applicable law, intellectual-property
          rights, and legitimate editorial considerations.
        </p>
        <p>
          Requests may be sent to{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-brand-gold-dark hover:underline">
            {siteConfig.contactEmail}
          </a>
          . See also our{" "}
          <Link href="/corrections-policy" className="font-semibold text-brand-gold-dark hover:underline">
            Corrections Policy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Changes to This Disclaimer</h2>
        <p>
          {siteConfig.name} may amend this Disclaimer to reflect changes in the website, its editorial practices,
          third-party platforms, or applicable law.
        </p>
        <p>Any revised version becomes effective when it is published on this page.</p>
        <p>Users are encouraged to review the &ldquo;Last Updated&rdquo; date periodically.</p>
      </section>

      <section>
        <h2>Governing Law and Jurisdiction</h2>
        <p>This Disclaimer and the use of {siteConfig.name} are governed by the laws of India.</p>
        <p>
          Subject to mandatory consumer protections and applicable jurisdictional requirements, any dispute relating
          to this website shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru,
          Karnataka, India.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Questions, correction requests, intellectual-property notices, or concerns relating to this Disclaimer may
          be sent to:
        </p>
        <ul>
          <li>Website: {siteConfig.name}</li>
          <li>
            Website Address:{" "}
            <a href={siteConfig.siteUrl} className="font-semibold text-brand-gold-dark hover:underline">
              {siteConfig.siteUrl}/
            </a>
          </li>
          <li>
            Email:{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-brand-gold-dark hover:underline">
              {siteConfig.contactEmail}
            </a>
          </li>
        </ul>
      </section>

      <DisclaimerBox title="By continuing to use AllYonoReward">
        You acknowledge that it is an independent informational and affiliate resource. All third-party games,
        applications, promo codes, rewards, offers, and services remain under the ownership and responsibility of
        their respective operators.
      </DisclaimerBox>
    </StaticPageShell>
  );
}
