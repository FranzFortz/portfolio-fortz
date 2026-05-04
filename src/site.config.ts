const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Franz Fortz",
  /** Two-letter mark for header wordmark (e.g. F/F). */
  monogram: "FF",
  /** Professional title / specialization (one line). */
  role: "Designer & full-stack developer",
  /** One-sentence value proposition (hero + SEO). */
  valueProposition:
    "I ship calm, fast web products that turn messy requirements into interfaces teams can rely on.",
  description:
    "Designer and developer building thoughtful web experiences — available for full-time roles and selective freelance work.",
  /** Short about copy (3–5 sentences); line breaks preserved in UI. */
  about: `I'm Franz — I work across product design and implementation, with a bias for clarity and maintainability.\n\nI collaborate best with teams that care about craft but move with purpose: tight feedback loops, honest tradeoffs, and shipping without drama.\n\nOutside project work, I keep tooling and accessibility in mind so what we build stays fast and usable for real people, not just demos.`,
  url: siteUrl,
  locale: "en",
} as const;

export type SiteConfig = typeof siteConfig;
