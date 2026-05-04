import type { Project } from "@/features/projects/types";
import type { Strength } from "@/features/skills/types";

export type PortfolioRoleId =
  | "virtual-assistant"
  | "web-developer"
  | "ui-ux-designer"
  | "photographer";

export type PortfolioRole = {
  id: PortfolioRoleId;
  label: string;
  strengthsIntro?: string;
  projectsIntro?: string;
  strengths: Strength[];
  projects: Project[];
};
