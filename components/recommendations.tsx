import { getTranslations } from "next-intl/server";
import { recommendations } from "@/lib/data";

export async function Recommendations() {
  const t = await getTranslations("recommendations");

  return (
    <section className="pb-20 sm:pb-28">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 className="font-display text-3xl tracking-tight text-fg">{t("title")}</h2>
        <a
          href={recommendations.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-fg"
        >
          {t("viewAll")} &rarr;
        </a>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {recommendations.items.map((item) => (
          <blockquote
            key={item.author}
            className="flex flex-col rounded-xl border border-border p-6"
          >
            <span aria-hidden="true" className="font-display text-5xl leading-none text-accent">
              &ldquo;
            </span>
            <p className="mt-2 mb-6 line-clamp-5 text-sm leading-relaxed text-muted">
              {item.quote}
            </p>
            <footer className="mt-auto flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-sm font-medium text-fg ring-1 ring-border"
              >
                {item.author.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-fg">{item.author}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </div>
            </footer>
            <a
              href={recommendations.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs text-subtle transition-colors hover:text-fg"
            >
              {t("readMore")} &rarr;
            </a>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
