import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog-card";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: t.blog.title,
  description: t.blog.description,
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">{t.blog.title}</h1>
      <p className="mt-2 text-zinc-600">{t.blog.subtitle}</p>
      <div className="mt-10 flex flex-col gap-4">
        {posts.length === 0 ? (
          <p className="text-zinc-500">{t.blog.emptyState}</p>
        ) : (
          posts.map((post) => <BlogCard key={post.slug} post={post} />)
        )}
      </div>
    </div>
  );
}
