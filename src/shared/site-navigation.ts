/** In-page sections (single-page layout). Home is the logo / top. */
export const primaryNav = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Strengths" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export type PrimaryNavItem = (typeof primaryNav)[number];

/** Public URL paths for sitemap (single landing route). */
export function getPrimaryNavPaths(): string[] {
  return [""];
}
