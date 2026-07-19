"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Game, UpcomingGame } from "@/lib/types";
import { formatDate, getCountdownParts } from "@/lib/utils";
import { Badge } from "./StatusBadge";

interface UpcomingGameCardProps {
  game: Game;
  upcoming: UpcomingGame;
}

const GiftIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 fill-none stroke-current stroke-2">
    <path d="M3 8h14v9H3z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 8h14M10 8v9M10 8c-1.5-3-5-3-5 0M10 8c1.5-3 5-3 5 0" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WalletIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 fill-none stroke-current stroke-2">
    <path d="M3 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 10h3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

export function UpcomingGameCard({ game, upcoming }: UpcomingGameCardProps) {
  // Countdown is only computed after mount so the server-rendered markup and
  // the client's first paint match exactly — ticking starts one render later.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const countdown = now === null ? null : getCountdownParts(upcoming.releaseDateISO, now);

  return (
    <article className="card-surface-dark flex h-full flex-col gap-4 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <Image
          src={game.icon}
          alt={`${game.name} game icon`}
          width={72}
          height={72}
          className="h-16 w-16 shrink-0 rounded-xl2 object-cover shadow-sm sm:h-[72px] sm:w-[72px]"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-1.5">
            <Badge label="Coming Soon" tone="amber" />
            {upcoming.highlightTags.map((tag) => (
              <Badge key={tag} label={tag} tone="amber" />
            ))}
            {game.category.map((c) => (
              <Badge key={c} label={c} tone="blue" />
            ))}
          </div>
          <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">{game.name}</h3>
          <p className="text-xs text-brand-gold-light/80 sm:text-sm">{game.category.join(" · ")}</p>
        </div>
      </div>

      <div className="space-y-2 rounded-xl2 border border-white/10 bg-white/5 p-3 text-xs text-white/85 sm:text-sm">
        <p className="flex items-center gap-2">
          <GiftIcon />
          <span>
            <strong className="font-semibold text-white">Welcome bonus:</strong> {upcoming.welcomeBonusRange}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <WalletIcon />
          <span>
            <strong className="font-semibold text-white">Minimum withdrawal:</strong> {upcoming.minWithdrawal}
          </span>
        </p>
      </div>

      <div className="mt-auto">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-brand-gold-light">
          Launches {formatDate(upcoming.releaseDateISO)} · {upcoming.releaseWindowLabel}
        </p>
        <div
          aria-hidden="true"
          className="rounded-full bg-brand-gold/15 px-4 py-2 text-center font-mono text-sm font-bold text-brand-gold-light ring-1 ring-inset ring-brand-gold/30"
        >
          {countdown === null
            ? "Calculating…"
            : countdown.isPast
              ? "Launching now"
              : `${countdown.days}d ${pad(countdown.hours)}:${pad(countdown.minutes)}:${pad(countdown.seconds)}`}
        </div>

        <Link href={`/games/${game.slug}`} className="btn-primary mt-3 w-full justify-center">
          View Game Guide
        </Link>
      </div>
    </article>
  );
}
