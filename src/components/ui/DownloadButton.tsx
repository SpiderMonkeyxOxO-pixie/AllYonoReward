import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  url: string;
  gameName: string;
  variant?: "primary" | "compact";
  className?: string;
}

const DownloadIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 fill-none stroke-current stroke-2">
    <path d="M10 3v9m0 0-3.5-3.5M10 12l3.5-3.5M4 15.5h12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function DownloadButton({ url, gameName, variant = "primary", className }: DownloadButtonProps) {
  const hasLink = Boolean(url);

  if (!hasLink) {
    return (
      <span
        aria-disabled="true"
        title="A verified download link for this game has not been added yet"
        className={cn(
          "btn cursor-not-allowed border border-dashed border-brand-green-dark/20 bg-transparent text-brand-green-dark/40",
          variant === "compact" && "px-3 py-1.5 text-xs",
          className
        )}
      >
        <DownloadIcon />
        {variant === "compact" ? "Link Coming Soon" : "Download Link Coming Soon"}
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={`Download ${gameName} (opens in a new tab)`}
      className={cn(
        "btn-primary",
        variant === "compact" && "px-3 py-1.5 text-xs",
        className
      )}
    >
      <DownloadIcon />
      {variant === "compact" ? "Download" : `Download ${gameName}`}
    </a>
  );
}
