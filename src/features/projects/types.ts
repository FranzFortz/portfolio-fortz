export type Project = {
  id: string;
  title: string;
  /** Short problem statement for scanning. */
  problem: string;
  /** What you shipped or how you moved the needle. */
  solution: string;
  /** Legacy / long summary; optional if problem+solution cover it. */
  summary?: string;
  /** Live demo URL */
  href?: string;
  repositoryUrl?: string;
  tags: string[];
  featured?: boolean;
  thumbnailSrc?: string;
  /** Honest label in UI: sample / portfolio scenario, not paid client work. */
  isSample?: boolean;
};
