import { t } from "@/lib/i18n";

export function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{t.about.title}</h1>


      <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
        {t.about.intro}
      </p>


      <section className="mt-12 border-t border-zinc-200 pt-10">
        <h2 className="text-lg font-semibold tracking-tight">Experience</h2>
        <div className="mt-6 space-y-8">
          {t.about.experience.map((job) => (
            <div key={job.company} className="relative border-l-2 border-zinc-200 pl-6">
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-zinc-400" />
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-sm font-semibold text-zinc-500">
                  {job.company[0]}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-medium text-zinc-900">{job.company}</span>
                    <span className="text-sm text-zinc-500">{job.role}</span>
                  </div>
                  <div className="mt-0.5 text-sm text-zinc-400">
                    {job.location} · {job.period}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {job.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="mt-12 border-t border-zinc-200 pt-10">
        <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
        <div className="mt-6 space-y-4">
          {(
            [
              ["Frontend", t.about.skills.frontend],
              ["Backend", t.about.skills.backend],
              ["Tools & Infra", t.about.skills.tools],
            ] as const
          ).map(([label, items]) => (
            <div key={label}>
              <h3 className="text-sm font-medium text-zinc-500">{label}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-12 border-t border-zinc-200 pt-10">
        <h2 className="text-lg font-semibold tracking-tight">Education</h2>
        <div className="mt-6 space-y-3">
          {t.about.education.map((edu) => (
            <div key={edu.degree}>
              <span className="font-medium text-zinc-900">{edu.degree}</span>
              <span className="text-sm text-zinc-500"> — {edu.institution} · {edu.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CV Download */}
      <section className="mt-12 border-t border-zinc-200 pt-10">
        <a
          href={t.about.cvLink}
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600"
        >
          {t.about.cvLabel}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </section>
    </div>
  );
}
