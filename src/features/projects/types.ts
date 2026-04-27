export type Project = {
  id: string;
  title: string;
  summary: string;
  href?: string;
  repositoryUrl?: string;
  tags: string[];
  featured?: boolean;
};
