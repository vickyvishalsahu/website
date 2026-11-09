"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations("contact.form");

  if (submitted) {
    return (
      <p className="rounded-xl border border-border p-6 text-center text-muted">{t("success")}</p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-fg">
          {t("nameLabel")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-border-strong bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
          placeholder={t("namePlaceholder")}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-fg">
          {t("emailLabel")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-border-strong bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
          placeholder={t("emailPlaceholder")}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-fg">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg border border-border-strong bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
          placeholder={t("messagePlaceholder")}
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer rounded-lg bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
      >
        {t("submit")}
      </button>
    </form>
  );
}
