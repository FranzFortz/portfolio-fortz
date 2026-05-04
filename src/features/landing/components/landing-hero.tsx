import Link from "next/link";
import { siteConfig } from "@/site.config";
import { cn } from "@/shared/cn";

export function LandingHero() {
  return (
    <section
      id="hero"
      className="pb-16 pt-4 sm:pb-20 sm:pt-6"
      aria-labelledby="hero-heading"
    >
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
        {siteConfig.role}
      </p>
      <h1
        id="hero-heading"
        className="mt-3 max-w-[20ch] font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.05]"
      >
        {siteConfig.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        {siteConfig.valueProposition}
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <Link
          href="/#work"
          className={cn(
            "inline-flex h-12 min-w-[10rem] items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90",
            "dark:bg-white dark:text-black",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          View work
        </Link>
        <Link
          href="/#contact"
          className={cn(
            "inline-flex h-12 min-w-[10rem] items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted-bg",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}
