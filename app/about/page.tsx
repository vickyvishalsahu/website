import type { Metadata } from "next";
import { About } from "@/components/about";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: t.about.title,
  description: t.about.description,
};

export default function AboutPage() {
  return <About />;
}
