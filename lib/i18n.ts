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
    taglines: [
      "I build scalable frontend systems.",
      "I collaborate across design, product, and engineering.",
      "I bring AI into the product, not just the hype.",
      "I lead with code, not just opinions.",
      "I make frontend a competitive advantage.",
    ],
    description:
      "I'm Vicky, a Senior Software Developer based in Berlin. I specialise in React and TypeScript — building interfaces that are fast, clean, and actually enjoyable to use. I've shipped products across e-commerce, proptech, and developer tooling, and I work best when design, backend, and product are all in the same room. These days I'm also deep into AI-assisted development — using it to move faster without losing quality.",
    viewWork: "View Work",
    getInTouch: "Get in Touch",
    aboutTitle: "About",
    aboutText: [
      "10 years in, and the part I still enjoy most is the moment something clicks — when a feature feels right, the code is clean, and the team is proud of what shipped.",
      "I've worked across startups and scaleups in Berlin and beyond — HeyCar, Myntra, Aliru, Purpose Green. Frontend is home, but I'm comfortable enough across the stack to understand the full picture and have the right conversations.",
      "Lately I've gone deep on AI-assisted development. Claude Code in the terminal, agents in the codebase, LLMs as a thinking partner. It's changed how I work — I ship faster, think more clearly, and hold a higher bar.",
      "I'm currently open to new opportunities — Senior Software Developer or a lead-flavoured role, in Berlin or remote.",
    ],
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
