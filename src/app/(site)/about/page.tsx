import { siteConfig } from "@/site.config";
import { buildPageMetadata } from "@/shared/seo";
import { MotionSection } from "@/shared/components/motion-section";

export const metadata = buildPageMetadata({
  title: "About",
  description: `About ${siteConfig.name} — background, focus, and how I work with clients.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <MotionSection className="max-w-prose space-y-6">
      <article className="space-y-6">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          About
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          I&apos;m {siteConfig.name}. This section is a placeholder you can replace
          with your story, values, and the kind of work you want to be known for.
          Keep long-form copy here; structured data like skills and jobs lives
          under{" "}
          <code className="rounded-md border border-border bg-muted-bg px-1.5 py-0.5 font-mono text-sm text-foreground">
            src/features
          </code>{" "}
          so it stays reusable across the site.
        </p>
      </article>
    </MotionSection>
  );
}
