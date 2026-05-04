import { cn } from "@/shared/cn";

type LandingSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  intro?: string;
};

/** Landmark section with stable id for in-page navigation. */
export function LandingSection({
  id,
  title,
  children,
  className,
  intro,
}: LandingSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-28 pt-16 pb-4", className)}
    >
      <div className="mb-8 max-w-2xl">
        <h2
          id={headingId}
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h2>
        {intro ? (
          <p className="mt-2 text-sm text-muted sm:text-base">{intro}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
