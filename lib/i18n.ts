export const t = {
  site: {
    name: "Vicky",
    title: "Vicky | Portfolio",
    titleTemplate: "%s | Vicky",
    description: "Developer portfolio and blog",
  },
  nav: {
    links: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  home: {
    greeting: "Hi, I'm",
    name: "Vicky",
    tagline:
      "A developer who builds clean, performant web experiences. I care about good design, accessible interfaces, and writing code that lasts.",
    viewWork: "View Work",
    getInTouch: "Get in Touch",
    aboutTitle: "About",
    aboutText:
      "I'm a full-stack developer with a passion for building products that are both functional and beautiful. I enjoy working across the stack, from crafting pixel-perfect UIs to designing robust APIs and databases. When I'm not coding, you'll find me exploring new technologies, writing about what I learn, or contributing to open source.",
    techTitle: "Tech I work with",
    stack: ["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
  },
  projects: {
    title: "Projects",
    description: "A selection of projects I've worked on",
    subtitle: "A selection of things I've built.",
  },
  blog: {
    title: "Blog",
    description: "Thoughts on web development, design, and tools",
    subtitle: "Thoughts on web development, design, and tools.",
    emptyState: "No posts yet. Check back soon!",
  },
  contact: {
    title: "Contact",
    description: "Get in touch with me",
    subtitle: "Have a question or want to work together? Reach out!",
    sendMessage: "Send a message",
    findMe: "Find me online",
    links: [
      { label: "Email", href: "mailto:hello@example.com", value: "hello@example.com" },
      { label: "GitHub", href: "https://github.com", value: "github.com/zephyr" },
      { label: "LinkedIn", href: "https://linkedin.com", value: "linkedin.com/in/zephyr" },
      { label: "Twitter", href: "https://twitter.com", value: "@zephyr" },
    ],
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      submit: "Send Message",
      success: "Thanks for reaching out! I'll get back to you soon.",
    },
  },
  footer: {
    copyright: "Vicky. All rights reserved.",
    socials: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Twitter", href: "https://twitter.com" },
    ],
  },
} as const;
