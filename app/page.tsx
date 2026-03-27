import Link from "next/link";
import { t } from "@/lib/i18n";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <p className="text-sm font-medium text-zinc-500">{t.home.greeting}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{t.home.name}</h1>
        <p className="mt-4 max-w-lg text-lg leading-relaxed text-zinc-600">{t.home.tagline}</p>
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

      {/* About */}
      <section className="border-t border-zinc-200 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">{t.home.aboutTitle}</h2>
        <p className="mt-4 leading-relaxed text-zinc-600">{t.home.aboutText}</p>
        <div className="mt-8">
          <h3 className="text-sm font-medium text-zinc-500">{t.home.techTitle}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {t.home.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
