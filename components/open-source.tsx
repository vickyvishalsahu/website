import { getTranslations } from "next-intl/server";
import { projects } from "@/lib/data";

export async function OpenSource() {
  const t = await getTranslations("openSource");

  return (
    <section className="pb-24 sm:pb-32">
      <div className="mb-10">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900">{t("title")}</h2>
        <p className="mt-1 text-sm text-zinc-500">{t("subtitle")}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group flex flex-col rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-300"
          >
            <span
              className={`self-start rounded-full px-2.5 py-0.5 text-xs font-semibold text-white`}
            >
            </span>
            <h3 className="font-semibold text-zinc-900">{project.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-zinc-500">{project.tagline}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-4 text-sm font-medium text-zinc-900 group-hover:underline"
            >
              View on GitHub &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
