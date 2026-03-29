import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
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
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-5xl px-6 py-16">
      <header>
        <time className="text-sm text-zinc-500">
          {new Date(post.meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{post.meta.title}</h1>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.meta.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="prose prose-zinc mt-10 max-w-none prose-pre:border prose-pre:border-zinc-200 prose-pre:bg-zinc-50">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode, { theme: "github-light" }]],
            },
          }}
        />
      </div>
      {post.meta.mediumUrl && (
        <div className="mt-10 border-t border-zinc-200 pt-6">
          <a
            href={post.meta.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <span className="text-lg" aria-hidden="true">👏</span>
            <span>Clap on Medium</span>
          </a>
        </div>
      )}
    </article>
  );
}
