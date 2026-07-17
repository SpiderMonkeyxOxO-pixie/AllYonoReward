import { cn } from "@/lib/utils";
import type { PromoCodeStatus, PlatformStatus, Classification } from "@/lib/types";

type BadgeTone = "green" | "amber" | "red" | "gray" | "blue";

const PROMO_STATUS_TONE: Record<PromoCodeStatus, BadgeTone> = {
  Verified: "green",
  "Recently Checked": "blue",
  Unverified: "amber",
  Expired: "red",
  "Platform-Specific": "blue",
  "No Public Code Available": "gray",
};

const PLATFORM_STATUS_TONE: Record<PlatformStatus, BadgeTone> = {
  Active: "green",
  Unverified: "amber",
  "Under Review": "blue",
  Unavailable: "red",
};

const CLASSIFICATION_TONE: Record<Classification, BadgeTone> = {
  "Social Game": "green",
  "E-sport": "blue",
  "Online Money Game": "amber",
  Unclear: "gray",
  "Not Yet Verified": "gray",
};

const TONE_CLASSES: Record<BadgeTone, string> = {
  green: "bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-600/20",
  amber: "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-600/20",
  red: "bg-red-50 text-red-800 ring-1 ring-inset ring-red-600/20",
  gray: "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-500/20",
  blue: "bg-blue-50 text-blue-800 ring-1 ring-inset ring-blue-600/20",
};

function Badge({ label, tone, className }: { label: string; tone: BadgeTone; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        TONE_CLASSES[tone],
        className
      )}
    >
      {label}
    </span>
  );
}

export function PromoStatusBadge({ status, className }: { status: PromoCodeStatus; className?: string }) {
  return <Badge label={status} tone={PROMO_STATUS_TONE[status]} className={className} />;
}

export function PlatformStatusBadge({ status, className }: { status: PlatformStatus; className?: string }) {
  return <Badge label={status} tone={PLATFORM_STATUS_TONE[status]} className={className} />;
}

export function ClassificationBadge({ status, className }: { status: Classification; className?: string }) {
  return <Badge label={status} tone={CLASSIFICATION_TONE[status]} className={className} />;
}
