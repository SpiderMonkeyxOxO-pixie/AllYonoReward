import type { SocialLink } from "@/lib/site-config";

interface SocialIconProps {
  platform: SocialLink["platform"];
  className?: string;
}

// Extend this switch (and the SocialLink["platform"] union in site-config.ts)
// as more real, live channels are added.
export function SocialIcon({ platform, className }: SocialIconProps) {
  if (platform === "Telegram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M21.94 4.6 18.6 20.36c-.25 1.1-.9 1.37-1.82.85l-5.03-3.7-2.43 2.34c-.27.27-.5.5-1.02.5l.36-5.13 9.34-8.44c.4-.36-.09-.56-.63-.2L6.3 13.5l-5.02-1.57c-1.09-.34-1.11-1.09.23-1.61L20.6 3.15c.91-.34 1.7.2 1.34 1.45Z" />
      </svg>
    );
  }
  return null;
}
