import { PROJECTS } from "./data/projects";
import type { Project } from "./types";

export function getProjects(): Project[] {
  return PROJECTS;
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
