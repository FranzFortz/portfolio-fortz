const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Franz Fortz",
  description: "Personal portfolio — projects, skills, and experience.",
  url: siteUrl,
  locale: "en",
} as const;

export type SiteConfig = typeof siteConfig;
