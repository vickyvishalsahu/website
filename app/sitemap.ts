import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const BASE_URL = "https://vickysahu.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const locales = ["", "/de"];
  const staticPages = ["", "/about", "/blog", "/contact"];

  const staticRoutes = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${BASE_URL}${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );

  const blogRoutes = locales.flatMap((locale) =>
    posts.map((post) => ({
      url: `${BASE_URL}${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...blogRoutes];
}
