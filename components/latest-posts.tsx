import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { formatPostDate, getAllPosts } from "@/lib/mdx";

export async function LatestPosts() {
  const t = await getTranslations("latestPosts");
  const tBlog = await getTranslations("blog");
  const locale = await getLocale();
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="pb-20 sm:pb-28">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-display text-3xl tracking-tight text-fg">{t("title")}</h2>
        <Link href="/blog" className="text-sm text-muted transition-colors hover:text-fg">
          {t("allPosts")} &rarr;
        </Link>
      </div>
      <ul className="divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <time className="shrink-0 font-mono text-xs text-subtle sm:w-28">
                {formatPostDate(post.date, locale, "short")}
              </time>
              <span className="flex-1 font-medium text-fg transition-colors group-hover:text-accent">
                {post.title}
              </span>
              <span className="shrink-0 font-mono text-xs text-subtle">
                {post.readingTime} {tBlog("minRead")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
