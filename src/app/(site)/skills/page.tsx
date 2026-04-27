import { getSkillsByCategory } from "@/features/skills/get-skills";
import type { SkillCategory } from "@/features/skills/types";
import { siteConfig } from "@/site.config";
import { buildPageMetadata } from "@/shared/seo";

export const metadata = buildPageMetadata({
  title: "Skills",
  description: `Skills and technologies used by ${siteConfig.name}.`,
  path: "/skills",
});

const categoryLabels: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  other: "Other",
};

const categoryOrder: SkillCategory[] = [
  "frontend",
  "backend",
  "tools",
  "other",
];

export default function SkillsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Skills</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Edit entries in{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            src/features/skills/data/skills.ts
          </code>
          .
        </p>
      </header>
      <div className="space-y-8">
        {categoryOrder.map((category) => {
          const skills = getSkillsByCategory(category);
          if (skills.length === 0) return null;
          return (
            <section key={category}>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {categoryLabels[category]}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm dark:border-zinc-700 dark:bg-zinc-900"
                  >
                    {skill.name}
                    {skill.proficiency != null ? (
                      <span className="ml-1.5 text-zinc-400 dark:text-zinc-500">
                        · {skill.proficiency}/5
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
