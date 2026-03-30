export const navLinks = [
  { href: "/", key: "home" },
  { href: "/blog", key: "blog" },
  { href: "/about", key: "about" },
] as const;

export const stack = ["TypeScript", "React", "Next", "NodeJS", "Tailwind CSS", "PostgreSQL"] as const;

export const experience = [
  {
    company: "Purpose Green",
    logo: "/purpose-green.png",
    location: "Berlin",
    period: "Jul 2024 – Present",
  },
  {
    company: "HeyCar",
    logo: "/heycar.png",
    location: "Berlin",
    period: "Jun 2022 – May 2024",
  },
  {
    company: "OrgFlow",
    logo: "/orgflow.png",
    location: "Heidelberg",
    period: "Dec 2020 – May 2022",
  },
  {
    company: "Aliru GmbH",
    logo: "/aliru.png",
    location: "Mannheim",
    period: "Oct 2019 – Nov 2020",
  },
  {
    company: "SM NetServ Technologies",
    logo: "/netserv.png",
    location: "Bangalore",
    period: "Jan 2019 – Sep 2019",
  },
  {
    company: "AppAchhi Tech",
    logo: "/appachhi.png",
    location: "Bangalore",
    period: "Aug 2016 – Jan 2019",
  },
] as const;

export const skills = {
  frontend: [
    "React",
    "Next",
    "TypeScript",
    "Vue",
    "Zustand",
    "Tailwind CSS",
    "Material UI",
    "Storybook",
    "Zod",
  ],
  backend: ["NodeJS", "Express", "Kotlin", "GraphQL", "MongoDB", "MySQL", "Flask"],
  tools: ["Vercel", "AWS", "CircleCI", "Webpack", "Kentico CMS", "Pendo Analytics"],
} as const;

export const education = [
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
] as const;

export const cvLink = "/cv.pdf";

export const contactLinks = [
  { label: "Email", href: "mailto:hello@example.com", value: "hello@example.com" },
  { label: "GitHub", href: "https://github.com/vickyvishalsahu", value: "github.com/vickyvishalsahu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vickyvishal/", value: "linkedin.com/in/zephyr" },
  { label: "Twitter", href: "https://twitter.com", value: "@zephyr" },
] as const;

export const recommendations = {
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
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/vickyvishalsahu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vickyvishal/" },
  { label: "Twitter", href: "https://x.com/vicvishalsahu" },
] as const;
