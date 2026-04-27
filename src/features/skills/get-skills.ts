import { SKILLS } from "./data/skills";
import type { Skill, SkillCategory } from "./types";

export function getSkills(): Skill[] {
  return SKILLS;
}

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return SKILLS.filter((s) => s.category === category);
}
