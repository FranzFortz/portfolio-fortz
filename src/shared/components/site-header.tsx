import Link from "next/link";
import { siteConfig } from "@/site.config";
import type { SocialLink } from "@/features/social/types";
import { SiteMenu } from "@/shared/components/site-menu";
import { cn } from "@/shared/cn";

function formatLogoMark(monogram: string): string {
  if (monogram.length === 2) {
    return `${monogram[0]}/${monogram[1]}`;
  }
  return monogram;
}

type SiteHeaderProps = {
  socialLinks: SocialLink[];
};

export function SiteHeader({ socialLinks }: SiteHeaderProps) {
  const logoMark = formatLogoMark(siteConfig.monogram);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-background",
        "pad-top-safe-header",
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-none items-center justify-between gap-3 sm:gap-4",
          "pad-inline-page pb-4 pt-1",
        )}
      >
        <Link
          href="/#hero"
          className="group flex min-w-0 items-baseline gap-2 text-foreground transition-opacity hover:opacity-85 sm:gap-3"
        >
          <span
            className={cn(
              "shrink-0 font-sans text-2xl font-semibold tabular-nums tracking-tight sm:text-3xl md:text-4xl",
            )}
          >
            {logoMark}
          </span>
          <span className="hidden truncate text-sm font-medium text-muted sm:inline sm:max-w-[12rem] md:max-w-none md:text-base">
            {siteConfig.name}
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-foreground"
            aria-hidden
          />
          <SiteMenu resourceLinks={socialLinks} />
        </div>
      </div>
    </header>
  );
}
