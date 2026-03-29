import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  pinned: boolean;
  highlight: string;
  readingTime: number;
  mediumUrl: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
      tags: data.tags ?? [],
      slug,
      pinned: data.pinned === true,
      highlight: data.highlight ?? "",
      readingTime: Math.ceil(content.split(/\s+/).length / 200),
      mediumUrl: data.mediumUrl ?? "",
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
      tags: data.tags ?? [],
      slug,
      pinned: data.pinned === true,
      highlight: data.highlight ?? "",
      readingTime: Math.ceil(content.split(/\s+/).length / 200),
      mediumUrl: data.mediumUrl ?? "",
    },
    content,
  };
}
