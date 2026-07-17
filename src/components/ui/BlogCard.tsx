import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card-surface flex h-full flex-col overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden bg-base-100">
        <Image
          src={post.image}
          alt=""
          aria-hidden="true"
          width={1200}
          height={675}
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2.5 p-3.5 sm:gap-3 sm:p-5">
        <p className="eyebrow">{post.category}</p>
        <h3 className="text-sm font-semibold text-brand-green-dark sm:text-base">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand-gold-dark">
            {post.title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-xs text-brand-green-dark/80 sm:line-clamp-4 sm:text-sm">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-1 text-[11px] text-brand-green-dark/50 sm:text-xs">
          <span>{formatDate(post.dateUpdated)}</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="btn-secondary-light w-full justify-center px-3 text-xs sm:text-sm"
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}
