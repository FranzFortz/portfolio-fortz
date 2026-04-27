export type SkillCategory = "frontend" | "backend" | "tools" | "other";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency?: 1 | 2 | 3 | 4 | 5;
};
