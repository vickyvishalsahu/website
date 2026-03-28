import type { Metadata } from "next";
import { About } from "@/components/about";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: t.home.aboutTitle,
  description: "About Vicky — background, experience, and tech stack",
};

export default function AboutPage() {
  return <About />;
}
