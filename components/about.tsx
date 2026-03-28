import { t } from "@/lib/i18n";

export function About() {
  return (
    <section className="border-t border-zinc-200 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">{t.home.aboutTitle}</h2>
      <div className="mt-4 space-y-4">
        {t.home.aboutText.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-zinc-600">{paragraph}</p>
        ))}
      </div>
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
  );
}
