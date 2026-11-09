import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatPostDate, type PostMeta } from "@/lib/mdx";

export function BlogCard({ post }: { post: PostMeta }) {
  const locale = useLocale();
  const t = useTranslations("blog");

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-border p-5 transition-colors hover:border-border-strong hover:bg-surface"
    >
      <div className="flex items-center gap-2 font-mono text-xs text-subtle">
        <time>{formatPostDate(post.date, locale)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>
          {post.readingTime} {t("minRead")}
        </span>
      </div>
      <h3 className="mt-2 font-semibold text-fg transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{post.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
