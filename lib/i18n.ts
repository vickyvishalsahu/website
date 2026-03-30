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
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
    ],
  },
  home: {
    greeting: "Hi, I'm",
    name: "Vicky",
    taglines: [
      "I write code that ships, not the code that demos.",
      "I care about why we're building it, not just how.",
      "I build in steps small enough to reverse.",
      "Collaboration is my favourite part of the job.",
      "I'm looking for my next team!",
    ],
    description:
      "I'm Vicky, a Senior Software Developer based in Berlin. I specialise in React and TypeScript — building interfaces that are fast, clean, and actually enjoyable to use. I've shipped products across e-commerce, proptech, and developer tooling, and I work best when design, backend, and product are all in the same room. These days I'm also deep into AI-assisted development — using it to move faster without losing quality.",
    viewWork: "LinkedIn",
    getInTouch: "Download CV",
    aboutTitle: "About",
    aboutText: [
      "10 years in, and the part I still enjoy most is the moment something clicks — when a feature feels right, the code is clean, and the team is proud of what shipped.",
      "I've worked across startups and scaleups in Berlin and beyond — HeyCar, Myntra, Aliru, Purpose Green. Frontend is home, but I'm comfortable enough across the stack to understand the full picture and have the right conversations.",
      "Lately I've gone deep on AI-assisted development. Claude Code in the terminal, agents in the codebase, LLMs as a thinking partner. It's changed how I work — I ship faster, think more clearly, and hold a higher bar.",
      "I'm currently open to new opportunities — Senior Software Developer or a lead-flavoured role, in Berlin or remote.",
    ],
    techTitle: "Tech I work with",
    stack: ["TypeScript", "React", "Next", "NodeJS", "Tailwind CSS", "PostgreSQL"],
  },
  about: {
    title: "About",
    description: "About Vicky — experience, skills, and background",
    intro:
      "10 years in, and the part I still enjoy most is the moment something clicks — when a feature feels right, the code is clean, and the team is proud of what shipped. I've worked across startups and scaleups in Berlin and beyond. Frontend is home, but I'm comfortable enough across the stack to understand the full picture and have the right conversations.",
    experience: [
      {
        company: "Purpose Green",
        logo: "/purpose-green.png",
        role: "Senior Frontend Developer",
        location: "Berlin",
        period: "Jul 2024 – Present",
        summary:
          "Built Green+ end-to-end — a proptech platform for large-scale property owners. Owned frontend architecture, CI, E2E testing, and AI integration.",
      },
      {
        company: "HeyCar",
        logo: "/heycar.png",
        role: "Frontend Developer",
        location: "Berlin",
        period: "Jun 2022 – May 2024",
        summary:
          "Reusable UI components on a large-scale used car platform. Eliminated ~50% tech debt. Mentored junior engineers.",
      },
      {
        company: "OrgFlow",
        logo: "/orgflow.png",
        role: "Software Developer",
        location: "Heidelberg",
        period: "Dec 2020 – May 2022",
        summary:
          "Internal tools for Salesforce CRM versioning — VSCode extension, user management APIs. Shipped full product in 16 months on pre-seed funding.",
      },
      {
        company: "Aliru GmbH",
        logo: "/aliru.png",
        role: "UI Engineer",
        location: "Mannheim",
        period: "Oct 2019 – Nov 2020",
        summary:
          "Built admin platform for low-code chatbot creation from scratch. Engineered flow graph that cut chatbot-building time by ~50%.",
      },
      {
        company: "SM NetServ Technologies",
        logo: "/netserv.png",
        role: "Software Engineer",
        location: "Bangalore",
        period: "Jan 2019 – Sep 2019",
        summary:
          "Built UI platform for Mathematica Policy Research — previously handled entirely via raw API calls. Led a team of 2 interns.",
      },
      {
        company: "AppAchhi Tech",
        logo: "/appachhi.png",
        role: "Web Developer",
        location: "Bangalore",
        period: "Aug 2016 – Jan 2019",
        summary:
          "Wireframes to production. Interactive dashboards, landing pages, and an arcade game for product exposure.",
      },
    ],
    skills: {
      frontend: [
        "React",
        "Next",
        "TypeScript",
        "Vue",
        "Zustand",
        "Zustand",
        "Tailwind CSS",
        "Material UI",
        "Storybook",
        "Zod"
      ],
      backend: ["NodeJS", "Express", "Kotlin", "GraphQL", "MongoDB", "MySQL", "Flask"],
      tools: ["Vercel", "AWS", "CircleCI", "Webpack", "Kentico CMS", "Pendo Analytics"],
    },
    education: [
      {
        degree: "MS in Big Data & Business Applications",
        institution: "SRH Hochschule, Heidelberg",
        period: "Oct 2019 – Sep 2021",
      },
      {
        degree: "BTech in Computer Science",
        institution: "ITER, Bhubaneswar",
        period: "Jul 2012 – Jun 2016",
      },
    ],
    cvLink: "/cv.pdf",
    cvLabel: "Download CV",
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
      { label: "GitHub", href: "https://github.com/vickyvishalsahu", value: "github.com/vickyvishalsahu" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/vickyvishal/", value: "linkedin.com/in/zephyr" },
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
  recommendations: {
    title: "What people say",
    linkedInUrl: "https://www.linkedin.com/in/vickyvishal/details/recommendations/",
    items: [
      {
        quote:
          "I had the pleasure of recruiting Vicky and working with him from day one. He has a kind, warm, and approachable personality that makes him a joy to work with. What is most impressive about Vicky is his exceptional talent for understanding unknown code fast. He was able to fix a bug in a new complex ecommerce platform in just a few hours, and after a few days he developed new features. His ability to quickly understand code and solve complex problems is truly remarkable. Overall, I highly recommend Vicky for any frontend engineering position. He is a talented and dedicated engineer who would be an asset to any team.",
        author: "Michael Schwarz",
        role: "Engineering Manager at HeyCar",
      },
      {
        quote:
          "I have worked with Vicky in the same team. The important key points which makes him as an amazing developer are his level of understanding towards the product, listening skills and thinking about the big picture. And not to forget he can work single handed if he has to on a project. I would highly recommend to work with him and definitely would want to work again somewhere in future if I will get a chance.",
        author: "Komal",
        role: "Senior Software Engineer at HeyCar",
      },
      {
        quote:
          "I worked with Vicky at heycar within the Emerging Markets team (France & Netherlands). Vicky was a Frontend Engineer and I was the Product Manager. Both of us worked on the launch of ecommerce listings for France. In order to make this happen, we had to interface with our sister company Carizy and deliver 3 separate ecommerce journeys on our webapp. The environment was fast-paced as deadlines were quite tight so a special frontend and backend team had to be set up just for for this. Ultimately, we all managed to make it on time for the launch in just under 4 months. As part of this team, Vicky handled frontend tasks brilliantly. I particularly appreciated his pro-activeness, his flexibility and his willingness to find solutions to any issue that came up. Vicky was a great teammate to have on board and it was a pleasure working with him.",
        author: "Vibol Teng",
        role: "Senior Product Manager at HeyCar",
      },
    ],
  },
  footer: {
    copyright: "Vicky. All rights reserved.",
    socials: [
      { label: "GitHub", href: "https://github.com/vickyvishalsahu" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/vickyvishal/" },
      { label: "Twitter", href: "https://x.com/vicvishalsahu" },
    ],
  },
} as const;
