import Image from "next/image";
import Link from "next/link";
import type { RewardFeature } from "@/lib/types";

interface RewardCardProps {
  reward: RewardFeature;
}

export function RewardCard({ reward }: RewardCardProps) {
  return (
    <article className="card-surface flex h-full flex-col gap-2.5 p-3.5 sm:gap-3 sm:p-5">
      <Image
        src={reward.icon}
        alt={`${reward.title} icon`}
        width={56}
        height={56}
        className="h-11 w-11 rounded-xl2 object-cover shadow-sm sm:h-14 sm:w-14"
      />
      <h3 className="text-sm font-semibold text-brand-green-dark sm:text-base">{reward.title}</h3>
      <p className="line-clamp-3 text-xs text-brand-green-dark/80 sm:line-clamp-4 sm:text-sm">
        {reward.shortDescription}
      </p>
      <Link
        href={`/rewards/${reward.slug}`}
        className="btn-secondary-light mt-auto w-full justify-center px-3 text-xs sm:text-sm"
      >
        Read Feature Details
      </Link>
    </article>
  );
}
