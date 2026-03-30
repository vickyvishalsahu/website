import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { experience, skills, education, cvLink } from "@/lib/data";

export async function About() {
  const t = await getTranslations("about");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>

      <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
        {t("intro")}
      </p>

      <section className="mt-12 border-t border-zinc-200 pt-10">
        <h2 className="text-lg font-semibold tracking-tight">{t("experienceTitle")}</h2>
        <div className="mt-6 space-y-8">
          {experience.map((job, i) => (
            <div key={job.company} className="relative border-l-2 border-zinc-200 pl-6">
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-zinc-400" />
              <div className="flex gap-3">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-md object-contain"
                />
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-medium text-zinc-900">{job.company}</span>
                    <span className="text-sm text-zinc-500">{t(`experience.${i}.role`)}</span>
                  </div>
                  <div className="mt-0.5 text-sm text-zinc-400">
                    {job.location} · {job.period}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {t(`experience.${i}.summary`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-zinc-200 pt-10">
        <h2 className="text-lg font-semibold tracking-tight">{t("skillsTitle")}</h2>
        <div className="mt-6 space-y-4">
          {(
            [
              [t("skillsFrontend"), skills.frontend],
              [t("skillsBackend"), skills.backend],
              [t("skillsTools"), skills.tools],
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

      <section className="mt-12 border-t border-zinc-200 pt-10">
        <h2 className="text-lg font-semibold tracking-tight">{t("educationTitle")}</h2>
        <div className="mt-6 space-y-3">
          {education.map((edu) => (
            <div key={edu.degree}>
              <span className="font-medium text-zinc-900">{edu.degree}</span>
              <span className="text-sm text-zinc-500"> — {edu.institution} · {edu.period}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-zinc-200 pt-10">
        <a
          href={cvLink}
          download="vickysahu-cv.pdf"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600"
        >
          {t("cvLabel")}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </section>
    </div>
  );
}
