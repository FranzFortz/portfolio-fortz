import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "client-dashboard",
    title: "Operations dashboard",
    problem:
      "Operations relied on spreadsheets; status was hard to see and mistakes were expensive.",
    solution:
      "Designed and built a role-aware dashboard with clear states, exports, and audit-friendly history.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    href: "https://example.com",
    repositoryUrl: "https://github.com/FranzFortz",
  },
  {
    id: "marketing-site",
    title: "Marketing site rebuild",
    problem:
      "The old marketing site was slow, hard to edit, and inconsistent on mobile.",
    solution:
      "Rebuilt on a component system with strict performance budgets and a CMS-friendly content model.",
    tags: ["Next.js", "Content", "Performance"],
    featured: true,
    href: "https://example.com",
  },
  {
    id: "onboarding-flow",
    title: "Self-serve onboarding",
    problem:
      "New users dropped off during setup because steps felt opaque and support load was high.",
    solution:
      "Mapped the journey, tightened copy, and shipped a guided flow with validation and recovery paths.",
    tags: ["UX", "React", "Forms"],
    featured: true,
    repositoryUrl: "https://github.com/FranzFortz",
  },
];
