import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { buildPageMetadata } from "@/shared/seo";
import { Button } from "@/shared/components/ui/button";

export const metadata = buildPageMetadata({
  title: "Home",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Portfolio
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {siteConfig.description}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link href="/projects" className="inline-flex items-center gap-2">
              View projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
