import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { experience, skills, education, cvLink } from "@/lib/data";

export async function About() {
  const t = await getTranslations("about");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display text-5xl tracking-tight text-fg">{t("title")}</h1>

      <p className="mt-6 max-w-2xl leading-relaxed text-muted">{t("intro")}</p>

      <section className="mt-12 border-t border-border pt-10">
        <h2 className="font-display text-3xl tracking-tight text-fg">{t("experienceTitle")}</h2>
        <div className="mt-6 space-y-8">
          {experience.map((job, i) => (
            <div key={job.company} className="relative border-l border-border pl-6">
              <div className="absolute top-1.5 -left-[4.5px] h-2 w-2 rounded-full bg-border-strong" />
              <div className="flex gap-3">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-lg bg-white object-contain ring-1 ring-border"
                />
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-medium text-fg">{job.company}</span>
                    <span className="text-sm text-muted">{t(`experience.${i}.role`)}</span>
                  </div>
                  <div className="mt-0.5 font-mono text-xs text-subtle">
                    {job.location} · {job.period}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(`experience.${i}.summary`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-border pt-10">
        <h2 className="font-display text-3xl tracking-tight text-fg">{t("skillsTitle")}</h2>
        <div className="mt-6 space-y-4">
          {(
            [
              [t("skillsFrontend"), skills.frontend],
              [t("skillsBackend"), skills.backend],
              [t("skillsTools"), skills.tools],
            ] as const
          ).map(([label, items]) => (
            <div key={label}>
              <h3 className="text-sm font-medium text-muted">{label}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-fg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-border pt-10">
        <h2 className="font-display text-3xl tracking-tight text-fg">{t("educationTitle")}</h2>
        <div className="mt-6 space-y-3">
          {education.map((edu) => (
            <div key={edu.degree}>
              <span className="font-medium text-fg">{edu.degree}</span>
              <span className="text-sm text-muted">
                {" "}
                — {edu.institution} · {edu.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-border pt-10">
        <a
          href={cvLink}
          download="vickysahu-cv.pdf"
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          {t("cvLabel")}
          <span aria-hidden="true">&darr;</span>
        </a>
      </section>
    </div>
  );
}
