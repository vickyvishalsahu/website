import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: t.projects.title,
  description: t.projects.description,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">{t.projects.title}</h1>
      <p className="mt-2 text-zinc-600">{t.projects.subtitle}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
