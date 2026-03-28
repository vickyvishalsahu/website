import Link from "next/link";
import { t } from "@/lib/i18n";
import { Typewriter } from "@/components/typewriter";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export function Hero() {
  return (
    <section className="grid min-h-[calc(100dvh-4rem)] grid-cols-1 items-center gap-12 md:grid-cols-[3fr_2fr]">
      <div className="order-last flex flex-col md:order-first">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          {t.home.greeting} {t.home.name}.
        </h1>
        <Typewriter
          texts={t.home.taglines}
          className="mt-4 text-2xl font-medium text-zinc-500 sm:text-3xl"
        />
        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          {t.home.description}
        </p>
        <div className="mt-8">
          <Link
            href="/projects"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            {t.home.viewWork}
          </Link>
        </div>
      </div>
      <div className="order-first flex items-center justify-center md:order-last">
        <PhotoPlaceholder />
      </div>
    </section>
  );
}
