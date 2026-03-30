import { getTranslations } from "next-intl/server";
import { Typewriter } from "@/components/typewriter";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { stack } from "@/lib/data";

export async function Hero() {
  const t = await getTranslations("home");

  const taglines = [t("taglines.0"), t("taglines.1"), t("taglines.2"), t("taglines.3"), t("taglines.4")];

  return (
    <section className="flex items-center justify-between gap-16 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="max-w-xl">
        <h1 className="mb-2 text-5xl font-medium tracking-tight text-zinc-900">
          {t("greeting")} {t("name")}.
        </h1>
        <Typewriter
          texts={taglines}
          className="mb-6 text-xl font-medium text-zinc-500"
        />
        <p className="mb-8 text-base leading-relaxed text-zinc-600">
          {t("description")}
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/vickyvishal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {t("viewWork")}
          </a>
          <a
            href="/cv.pdf"
            download="vickysahu-cv.pdf"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-50"
          >
            {t("getInTouch")}
          </a>
        </div>
      </div>
      <div className="hidden shrink-0 self-center md:flex">
        <PhotoPlaceholder />
      </div>
    </section>
  );
}
