import { EXPERIENCE } from "./data/experience";
import type { ExperienceEntry } from "./types";

export function getExperience(): ExperienceEntry[] {
  return [...EXPERIENCE].sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );
}

export function getExperienceById(
  id: string,
): ExperienceEntry | undefined {
  return EXPERIENCE.find((e) => e.id === id);
}
