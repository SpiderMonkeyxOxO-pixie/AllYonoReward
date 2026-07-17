"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function CopyCodeButton({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently,
      // the code is still visible and selectable for manual copying.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "rounded-full border border-brand-gold/40 px-3 py-1.5 text-xs font-semibold text-brand-gold-light transition-colors hover:bg-white/10",
        className
      )}
      aria-label={copied ? "Code copied to clipboard" : `Copy code ${code}`}
    >
      {copied ? "Copied ✓" : "Copy Code"}
    </button>
  );
}
