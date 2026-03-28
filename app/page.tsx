import { Hero } from "@/components/hero";
import { About } from "@/components/about";



export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <Hero />
      <About />
    </div>
  );
}
