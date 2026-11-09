import { getTranslations } from "next-intl/server";
import { projects } from "@/lib/data";

export async function OpenSource() {
  const t = await getTranslations("openSource");

  return (
    <section className="pb-20 sm:pb-28">
      <div className="mb-8">
        <h2 className="font-display text-3xl tracking-tight text-fg">{t("title")}</h2>
        <p className="mt-1 text-sm text-muted">{t("subtitle")}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-border p-5 transition-colors hover:border-border-strong hover:bg-surface"
          >
            <h3 className="font-semibold text-fg">{project.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{project.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-auto pt-5 text-sm font-medium text-fg transition-colors group-hover:text-accent">
              GitHub{" "}
              <span
                aria-hidden="true"
                className="inline-block transition-transform group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
