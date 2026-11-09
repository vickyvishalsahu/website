import { Hero } from "@/components/hero";
import { LatestPosts } from "@/components/latest-posts";
import { OpenSource } from "@/components/open-source";
import { Recommendations } from "@/components/recommendations";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <Hero />
      <LatestPosts />
      <OpenSource />
      <Recommendations />
    </div>
  );
}
