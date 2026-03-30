import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { getTranslations } from "next-intl/server";
import { contactLinks } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
      <p className="mt-2 text-zinc-600">{t("subtitle")}</p>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-semibold">{t("sendMessage")}</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
        <div>
          <h2 className="font-semibold">{t("findMe")}</h2>
          <ul className="mt-4 space-y-3">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <span className="block text-sm text-zinc-500">{link.label}</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-zinc-900"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
