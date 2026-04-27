import { siteConfig } from "@/site.config";
import { buildPageMetadata } from "@/shared/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description: `About ${siteConfig.name} — background, focus, and how I work with clients.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        I&apos;m {siteConfig.name}. This section is a placeholder you can replace
        with your story, values, and the kind of work you want to be known for.
        Keep long-form copy here; structured data like skills and jobs lives
        under{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
          src/features
        </code>{" "}
        so it stays reusable across the site.
      </p>
    </article>
  );
}
