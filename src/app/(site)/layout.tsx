import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/site.config";
import { getSocialLinks } from "@/features/social/get-social-links";
import { SiteTabNav } from "@/shared/components/site-tab-nav";
import { ThemeToggle } from "@/shared/components/theme-toggle";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const social = getSocialLinks();

  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-background/80 backdrop-blur-md dark:border-zinc-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            {siteConfig.name}
          </Link>
          <ThemeToggle />
        </div>
        <div className="mx-auto max-w-3xl px-4 pb-1">
          <SiteTabNav />
        </div>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">{children}</main>
      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <ul className="flex flex-wrap gap-4">
            {social.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
