import { STRENGTHS } from "./data/skills";
import type { Strength } from "./types";

const MAX_ON_LANDING = 5;

export function getSkills(): Strength[] {
  return STRENGTHS.slice(0, MAX_ON_LANDING);
}
