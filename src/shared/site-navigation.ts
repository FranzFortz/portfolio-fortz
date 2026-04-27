export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type PrimaryNavItem = (typeof primaryNav)[number];

/** Paths for sitemap (same order as nav; home is ""). */
export function getPrimaryNavPaths(): string[] {
  return primaryNav.map((item) => (item.href === "/" ? "" : item.href));
}
