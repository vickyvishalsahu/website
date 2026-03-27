export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with Next.js and PostgreSQL. Features real-time updates and a clean dashboard interface.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Two",
    description:
      "A CLI tool that automates common development workflows. Saves hours of manual work with a single command.",
    tags: ["Node.js", "TypeScript", "CLI"],
    github: "https://github.com",
  },
  {
    title: "Project Three",
    description:
      "An open-source component library with accessible, themeable UI primitives built for React applications.",
    tags: ["React", "Tailwind CSS", "Storybook"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Four",
    description:
      "A REST API service with authentication, rate limiting, and comprehensive documentation.",
    tags: ["Node.js", "Express", "Redis"],
    github: "https://github.com",
  },
];
