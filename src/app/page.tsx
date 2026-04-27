import Link from "next/link";
import { siteConfig } from "@/site.config";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-lg flex-col gap-4 p-8 font-sans">
      <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
        {siteConfig.name}
      </h1>
      <p className="text-sm leading-relaxed text-zinc-600">
        {siteConfig.description}
      </p>
      <p className="text-sm leading-relaxed text-zinc-500">
        Backend scaffold: domain data and getters live under{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-800">
          src/features
        </code>
        . Tabbed UI and SEO details ship in the frontend phase.
      </p>
      <Link
        className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
        href="/api/health"
      >
        GET /api/health
      </Link>
    </main>
  );
}
