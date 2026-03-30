import { Hero } from "@/components/hero";
import { Recommendations } from "@/components/recommendations";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <Hero />
      <Recommendations />
    </div>
  );
}
