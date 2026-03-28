import Link from "next/link";
import { t } from "@/lib/i18n";
import { Typewriter } from "@/components/typewriter";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export function Hero() {
  return (
    <section className="flex items-center justify-between gap-16 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="max-w-xl">
        <h1 className="mb-2 text-5xl font-medium tracking-tight text-zinc-900">
          {t.home.greeting} {t.home.name}.
        </h1>
        <Typewriter
          texts={t.home.taglines}
          className="mb-6 text-xl font-medium text-zinc-500"
        />
        <p className="mb-8 text-base leading-relaxed text-zinc-600">
          {t.home.description}
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            {t.home.viewWork}
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-50"
          >
            {t.home.getInTouch}
          </Link>
        </div>
      </div>
      <div className="hidden shrink-0 self-center md:flex">
        <PhotoPlaceholder />
      </div>
    </section>
  );
}
