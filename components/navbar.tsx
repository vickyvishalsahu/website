"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks } from "@/lib/data";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navbar() {
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tSite = useTranslations("site");

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-4xl px-6 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {tSite("name")}
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                pathname === link.href ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {tNav(link.key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
