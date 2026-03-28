import Link from "next/link";
import { t } from "@/lib/i18n";
import { Typewriter } from "@/components/typewriter";

export function Hero() {
  return (
    <section className="py-24 sm:py-32 flex flex-col">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {t.home.greeting} {t.home.name}.
      </h1>
      <Typewriter
        texts={t.home.taglines}
        className="mt-2 block text-2xl font-medium text-zinc-500 sm:text-3xl"
      />
      <p className="mt-4 text-lg leading-relaxed text-zinc-600">
        {t.home.description}
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          {t.home.viewWork}
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-50"
        >
          {t.home.getInTouch}
        </Link>
      </div>
    </section>
  );
}
