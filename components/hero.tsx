import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { cvLink } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";

export async function Hero() {
  const t = await getTranslations("home");

  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <FadeIn>
        <div className="flex items-center gap-4">
          <Image
            src="/vicky_dp.png"
            alt="Vicky Vishal Sahu"
            width={64}
            height={64}
            priority
            className="h-16 w-16 rounded-2xl object-cover ring-1 ring-border"
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t("status")}
          </span>
        </div>
      </FadeIn>

      <FadeIn delay="80ms">
        <h1 className="mt-10 font-display text-5xl leading-[1.05] tracking-tight text-fg sm:text-7xl">
          {t("greeting")} {t("name")}.
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-snug text-fg sm:text-2xl">{t("role")}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{t("description")}</p>
      </FadeIn>

      <FadeIn delay="160ms">
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={cvLink}
            download="vickysahu-cv.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            {t("cvCta")}
            <span aria-hidden="true">&darr;</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vickyvishal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {t("linkedinCta")}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
