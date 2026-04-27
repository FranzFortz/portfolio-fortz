import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getProjects } from "@/features/projects/get-projects";
import { siteConfig } from "@/site.config";
import { buildPageMetadata } from "@/shared/seo";
import { MotionSection } from "@/shared/components/motion-section";

export const metadata = buildPageMetadata({
  title: "Projects",
  description: `Selected projects by ${siteConfig.name}.`,
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="space-y-12">
      <MotionSection className="space-y-3">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="max-w-prose text-muted">
          Data from{" "}
          <code className="rounded-md border border-border bg-muted-bg px-1.5 py-0.5 font-mono text-sm text-foreground">
            src/features/projects/data/projects.ts
          </code>
          .
        </p>
      </MotionSection>
      <ul className="flex flex-col gap-6">
        {projects.map((project) => (
          <li key={project.id}>
            <MotionSection className="contents">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h2>
                  {project.featured ? (
                    <span className="mt-2 inline-block text-xs font-medium uppercase tracking-wide text-accent">
                      Featured
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  {project.href ? (
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-1 font-medium text-accent underline decoration-accent/35 underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      Live
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  ) : null}
                  {project.repositoryUrl ? (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-accent underline decoration-accent/35 underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      Repo
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  ) : null}
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
              {project.tags.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border bg-muted-bg px-2 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            </MotionSection>
          </li>
        ))}
      </ul>
    </div>
  );
}
