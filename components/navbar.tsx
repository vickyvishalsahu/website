"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/lib/i18n";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-4xl px-6 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {t.site.name}
        </Link>
        <div className="flex items-center gap-1">
          {t.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                pathname === link.href ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
