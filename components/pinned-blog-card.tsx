import Link from "next/link";
import type { PostMeta } from "@/lib/mdx";

export function PinnedBlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-300"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-semibold text-white">
            Pinned
          </span>
          <h3 className="mt-3 text-xl font-bold tracking-tight">
            {post.title}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
            <span>{post.readingTime} min read</span>
            <span>&middot;</span>
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </time>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            {post.description}
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-zinc-900 group-hover:underline">
            Read post &rarr;
          </span>
        </div>
        {post.highlight && (
          <div className="flex items-center border-t border-zinc-200 pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <blockquote className="text-lg font-semibold italic leading-relaxed text-zinc-700">
              &ldquo;{post.highlight}&rdquo;
            </blockquote>
          </div>
        )}
      </div>
    </Link>
  );
}
