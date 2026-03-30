import { Link } from "@/i18n/navigation";
import type { PostMeta } from "@/lib/mdx";

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-300"
    >
      <time className="text-sm text-zinc-500">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <h3 className="mt-1 font-semibold">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{post.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
