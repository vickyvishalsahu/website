"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks } from "@/lib/data";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tSite = useTranslations("site");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="font-display text-xl tracking-tight text-fg">
          <span className="hidden sm:inline">{tSite("name")}</span>
          <span className="sm:hidden">Vicky</span>
        </Link>
        <div className="flex items-center sm:gap-1">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-2 py-2 text-sm whitespace-nowrap transition-colors sm:px-3 ${
                  active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {tNav(link.key)}
              </Link>
            );
          })}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
