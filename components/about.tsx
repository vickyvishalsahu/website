import { t } from "@/lib/i18n";

export function About() {
  return (
    <div className="mx-auto max-w-4xl py-16">
      <h1 className="text-3xl font-bold tracking-tight">{t.home.aboutTitle}</h1>
      <div className="mt-6 space-y-4">
        {t.home.aboutText.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-zinc-600">{paragraph}</p>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-sm font-medium text-zinc-500">{t.home.techTitle}</h2>
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
    </div>
  );
}
