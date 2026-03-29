import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: t.contact.title,
  description: t.contact.description,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">{t.contact.title}</h1>
      <p className="mt-2 text-zinc-600">{t.contact.subtitle}</p>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-semibold">{t.contact.sendMessage}</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
        <div>
          <h2 className="font-semibold">{t.contact.findMe}</h2>
          <ul className="mt-4 space-y-3">
            {t.contact.links.map((link) => (
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
