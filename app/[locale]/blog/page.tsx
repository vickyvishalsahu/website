import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog-card";
import { PinnedBlogCard } from "@/components/pinned-blog-card";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BlogPage() {
  const t = await getTranslations("blog");
  const posts = getAllPosts();
  const pinned = posts.filter((p) => p.pinned);
  const rest = posts.filter((p) => !p.pinned);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
      <p className="mt-2 text-zinc-600">{t("subtitle")}</p>
      <div className="mt-10 flex flex-col gap-4">
        {posts.length === 0 ? (
          <p className="text-zinc-500">{t("emptyState")}</p>
        ) : (
          <>
            {pinned.map((post) => (
              <PinnedBlogCard key={post.slug} post={post} />
            ))}
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
