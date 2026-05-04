import { PROJECTS } from "./data/projects";
import type { Project } from "./types";

const LANDING_LIMIT = 4;

export function getProjects(): Project[] {
  return PROJECTS;
}

/** Featured first, then remainder — capped for the landing page. */
export function getProjectsForLanding(limit = LANDING_LIMIT): Project[] {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export type ProjectsPagination = {
  page: number;
  pageSize: number;
};

export function getProjectsPage({
  page,
  pageSize,
}: ProjectsPagination): {
  items: Project[];
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
} {
  const total = PROJECTS.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), pageCount);
  const start = (safePage - 1) * pageSize;
  const items = PROJECTS.slice(start, start + pageSize);
  return { items, total, page: safePage, pageSize, pageCount };
}
