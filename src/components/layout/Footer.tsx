import Link from "next/link";
import { footerColumns, siteConfig, siteDisclaimer, sbiDisclaimer, socialLinks } from "@/lib/site-config";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-brand-green-dark text-white/80">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:gap-8 sm:py-12 lg:grid-cols-4">
        {footerColumns.map((column) => (
          <div key={column.heading}>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-light">
              {column.heading}
            </h2>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-brand-gold-light hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {socialLinks.length > 0 && (
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-light">Follow Us</h2>
            <ul className="flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-gold-light hover:text-brand-gold-light"
                  >
                    <SocialIcon platform={social.platform} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page space-y-3 py-6 text-xs leading-relaxed text-white/60">
          <p>{siteDisclaimer}</p>
          <p>{sbiDisclaimer}</p>
          <p className="pt-2 text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. {siteConfig.name} is an independent
            informational resource for {siteConfig.country} audiences and does not process deposits, payouts or
            real-money gameplay.
          </p>
        </div>
      </div>
    </footer>
  );
}
