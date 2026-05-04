import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/features/projects/types";
import { FadeIn } from "@/shared/components/motion-section";
import { cn } from "@/shared/cn";
import { LandingSection } from "./landing-section";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <FadeIn>
      <LandingSection
        id="work"
        title="Selected work"
        intro="A few recent problems — short, scan-friendly, with links when available."
      >
        <ul className="flex flex-col gap-12 lg:gap-16">
          {projects.map((project) => (
            <li
              key={project.id}
              className="grid gap-6 border-b border-border pb-12 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:gap-10 lg:pb-16"
            >
              <div className="min-w-0 space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-foreground/90">
                  <span className="text-muted">Problem · </span>
                  {project.problem}
                </p>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  <span className="font-medium text-foreground/90">Solution · </span>
                  {project.solution}
                </p>
                <ul className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-muted-bg px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-3">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline decoration-accent/35 underline-offset-4 hover:decoration-accent",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
                      )}
                    >
                      Live demo
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
                    </a>
                  ) : null}
                  {project.repositoryUrl ? (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-1.5 text-sm font-semibold text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/40",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
                      )}
                    >
                      GitHub
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-muted-bg lg:aspect-square lg:max-w-[280px] lg:justify-self-end">
                {project.thumbnailSrc ? (
                  <Image
                    src={project.thumbnailSrc}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 280px, 100vw"
                    unoptimized={/^https?:\/\//.test(project.thumbnailSrc)}
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted-bg to-border/40 p-6 text-center"
                    aria-hidden
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-muted">
                      Preview
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </LandingSection>
    </FadeIn>
  );
}
