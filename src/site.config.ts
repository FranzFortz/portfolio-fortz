const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Franz Fortz",
  /** Two-letter mark shown beside the wordmark in the header. */
  monogram: "FF",
  description: "Personal portfolio — projects, skills, and experience.",
  /** Short personal line on the home hero (edit to taste). */
  focusLine:
    "Building calm, thoughtful interfaces — and the systems behind them.",
  url: siteUrl,
  locale: "en",
} as const;

export type SiteConfig = typeof siteConfig;
