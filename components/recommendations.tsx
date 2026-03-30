import { getTranslations } from "next-intl/server";
import { recommendations } from "@/lib/data";

export async function Recommendations() {
  const t = await getTranslations("recommendations");

  return (
    <section className="pb-24 sm:pb-32">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900">
          {t("title")}
        </h2>
        <a
          href={recommendations.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
        >
          {t("viewAll")} &rarr;
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {recommendations.items.map((item) => (
          <blockquote
            key={item.author}
            className="flex flex-col justify-between rounded-xl border border-zinc-200 p-6"
          >
            <p className="mb-4 line-clamp-4 text-sm leading-relaxed text-zinc-600 italic">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer>
              <p className="text-sm font-medium text-zinc-900">{item.author}</p>
              <p className="text-xs text-zinc-500">{item.role}</p>
              <a
                href={recommendations.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-zinc-400 transition-colors hover:text-zinc-700"
              >
                {t("readMore")} &rarr;
              </a>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
