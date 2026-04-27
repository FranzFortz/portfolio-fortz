import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getProjects } from "@/features/projects/get-projects";
import { siteConfig } from "@/site.config";
import { buildPageMetadata } from "@/shared/seo";

export const metadata = buildPageMetadata({
  title: "Projects",
  description: `Selected projects by ${siteConfig.name}.`,
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Data from{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            src/features/projects/data/projects.ts
          </code>
          .
        </p>
      </header>
      <ul className="flex flex-col gap-6">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{project.title}</h2>
                {project.featured ? (
                  <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wide text-amber-600 dark:text-amber-400">
                    Featured
                  </span>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                {project.href ? (
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1 font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-100"
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
                    className="inline-flex items-center gap-1 font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-100"
                  >
                    Repo
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ) : null}
              </div>
            </div>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              {project.summary}
            </p>
            {project.tags.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
