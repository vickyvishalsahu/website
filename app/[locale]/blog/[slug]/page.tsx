import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/mdx";
import { SyncRunDiagram } from "@/components/sync-run-diagram";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/blog" className="text-sm text-muted transition-colors hover:text-fg">
        &larr; {t("backToBlog")}
      </Link>
      <header className="mt-8">
        <div className="flex items-center gap-2 font-mono text-xs text-subtle">
          <time>{formatPostDate(post.meta.date, locale)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>
            {post.meta.readingTime} {t("minRead")}
          </span>
        </div>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-fg sm:text-5xl">
          {post.meta.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.meta.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="prose prose-stone mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-headings:tracking-tight prose-a:text-accent prose-pre:border prose-pre:border-border">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [rehypePrettyCode, { theme: { light: "github-light", dark: "github-dark" } }],
              ],
            },
          }}
          components={{ SyncRunDiagram }}
        />
      </div>
      {post.meta.mediumUrl && (
        <div className="mt-10 border-t border-border pt-6">
          <a
            href={post.meta.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <span className="text-lg" aria-hidden="true">
              👏
            </span>
            <span>Clap on Medium</span>
          </a>
        </div>
      )}
    </article>
  );
}
