import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatPostDate, type PostMeta } from "@/lib/mdx";

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

export function PinnedBlogCard({ post }: { post: PostMeta }) {
  const locale = useLocale();
  const t = useTranslations("blog");
  const isNew =
    post.new === true ||
    (post.new === null && Date.now() - new Date(post.date).getTime() < THIRTY_DAYS_MS);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-border bg-surface/50 p-6 transition-colors hover:border-border-strong hover:bg-surface"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block rounded-full bg-fg px-2.5 py-0.5 text-xs font-medium text-bg">
              {t("pinned")}
            </span>
            {isNew && (
              <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-fg">
                {t("new")}
              </span>
            )}
          </div>
          <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-fg">
            {post.title}
          </h3>
          <div className="mt-2 flex items-center gap-2 font-mono text-xs text-subtle">
            <span>
              {post.readingTime} {t("minRead")}
            </span>
            <span aria-hidden="true">&middot;</span>
            <time>{formatPostDate(post.date, locale)}</time>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{post.description}</p>
          <span className="mt-4 inline-block text-sm font-medium text-fg transition-colors group-hover:text-accent">
            {t("readPost")} &rarr;
          </span>
        </div>
        {post.highlight && (
          <div className="flex items-center border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-6">
            <blockquote className="font-display text-xl leading-relaxed text-fg italic">
              &ldquo;{post.highlight}&rdquo;
            </blockquote>
          </div>
        )}
      </div>
    </Link>
  );
}
