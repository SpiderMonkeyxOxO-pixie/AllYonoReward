import { formatDate } from "@/lib/utils";

interface LastUpdatedProps {
  lastReviewed?: string;
  lastUpdated: string;
  className?: string;
}

export function LastUpdated({ lastReviewed, lastUpdated, className }: LastUpdatedProps) {
  return (
    <p className={className ?? "text-xs text-brand-green-dark/60"}>
      {lastReviewed && <>Last reviewed: {formatDate(lastReviewed)} · </>}
      Last updated: {formatDate(lastUpdated)}
    </p>
  );
}
