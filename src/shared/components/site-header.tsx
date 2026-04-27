import Link from "next/link";
import { siteConfig } from "@/site.config";
import { SiteMenu } from "@/shared/components/site-menu";
import { cn } from "@/shared/cn";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 sm:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 text-foreground transition-opacity hover:opacity-90"
        >
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card font-display text-sm font-semibold tabular-nums text-accent shadow-soft",
            )}
            aria-hidden
          >
            {siteConfig.monogram}
          </span>
          <span className="text-base font-medium tracking-tight">
            {siteConfig.name}
          </span>
        </Link>
        <SiteMenu />
      </div>
    </header>
  );
}
