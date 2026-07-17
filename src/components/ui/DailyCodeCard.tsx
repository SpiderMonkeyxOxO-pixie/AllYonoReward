"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/lib/types";
import type { DailySlotKey, GameDailyCodes } from "@/lib/dailyCodeTypes";
import { DAILY_SLOT_META } from "@/lib/dailyCodeTypes";
import { cn } from "@/lib/utils";
import { CopyCodeButton } from "./CopyCodeButton";

interface DailyCodeCardProps {
  game: Pick<Game, "slug" | "name" | "icon">;
  codes: GameDailyCodes;
}

const SLOT_ORDER: DailySlotKey[] = ["am", "pm", "eve"];

export function DailyCodeCard({ game, codes }: DailyCodeCardProps) {
  const [activeSlot, setActiveSlot] = useState<DailySlotKey>("am");
  const tabListId = useId();
  const slot = codes[activeSlot];
  const meta = DAILY_SLOT_META[activeSlot];

  return (
    <article className="flex h-full flex-col gap-2.5 rounded-2xl border border-white/10 bg-brand-green-dark p-3 shadow-card-lg sm:gap-3 sm:p-4">
      <Link href={`/games/${game.slug}`} className="flex items-center gap-2">
        <Image
          src={game.icon}
          alt={`${game.name} game icon`}
          width={36}
          height={36}
          className="h-8 w-8 shrink-0 rounded-lg object-cover sm:h-9 sm:w-9"
        />
        <span className="truncate text-xs font-semibold text-white sm:text-sm">{game.name}</span>
      </Link>

      <div role="tablist" aria-label={`${game.name} daily code time slots`} id={tabListId} className="grid grid-cols-3 gap-1 sm:gap-1.5">
        {SLOT_ORDER.map((key) => {
          const isActive = key === activeSlot;
          const hasCode = Boolean(codes[key].code);
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveSlot(key)}
              className={cn(
                "min-h-[34px] rounded-full border px-1 py-1.5 text-[11px] font-semibold transition-colors sm:min-h-[36px] sm:px-2 sm:text-xs",
                isActive
                  ? "border-brand-emerald bg-brand-emerald text-brand-green-dark"
                  : "border-white/15 text-white/60 hover:border-white/30 hover:text-white/80",
                !isActive && hasCode && "border-brand-emerald/40 text-emerald-300"
              )}
            >
              {DAILY_SLOT_META[key].short}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" aria-labelledby={tabListId} className="min-h-[48px] rounded-xl bg-black/25 p-2 sm:min-h-[52px] sm:p-2.5">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-white/40 sm:text-[11px]">{meta.label}</p>
        {slot.code ? (
          <div className="flex items-center justify-between gap-1.5">
            <code className="truncate font-mono text-xs text-emerald-300 sm:text-sm">{slot.code}</code>
            <CopyCodeButton code={slot.code} className="shrink-0 !border-brand-emerald/40 !text-emerald-300 !px-2 !py-1 !text-[10px] sm:!px-2.5 sm:!text-[11px]" />
          </div>
        ) : (
          <p className="text-xs text-emerald-300/70 sm:text-sm">
            {slot.status === "Expired" ? "Code expired" : "Not released yet"}
          </p>
        )}
      </div>
    </article>
  );
}
