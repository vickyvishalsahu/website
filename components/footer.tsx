import { t } from "@/lib/i18n";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {t.footer.copyright}
        </p>
        <div className="flex gap-4">
          {t.footer.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
