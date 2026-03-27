import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-300">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
