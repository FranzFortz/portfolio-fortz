import { getSkillsByCategory } from "@/features/skills/get-skills";
import type { SkillCategory } from "@/features/skills/types";
import { siteConfig } from "@/site.config";
import { buildPageMetadata } from "@/shared/seo";
import { MotionSection } from "@/shared/components/motion-section";

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
    <div className="space-y-14">
      <MotionSection className="space-y-3">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          Skills
        </h1>
        <p className="max-w-prose text-muted">
          Edit entries in{" "}
          <code className="rounded-md border border-border bg-muted-bg px-1.5 py-0.5 font-mono text-sm text-foreground">
            src/features/skills/data/skills.ts
          </code>
          .
        </p>
      </MotionSection>
      <div className="space-y-10">
        {categoryOrder.map((category) => {
          const skills = getSkillsByCategory(category);
          if (skills.length === 0) return null;
          return (
            <MotionSection key={category}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {categoryLabels[category]}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground shadow-soft"
                  >
                    {skill.name}
                    {skill.proficiency != null ? (
                      <span className="ml-1.5 text-muted">
                        · {skill.proficiency}/5
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </MotionSection>
          );
        })}
      </div>
    </div>
  );
}
