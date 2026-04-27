import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { buildPageMetadata } from "@/shared/seo";
import { Button } from "@/shared/components/ui/button";
import { MotionSection } from "@/shared/components/motion-section";

export const metadata = buildPageMetadata({
  title: "Home",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      <MotionSection className="space-y-6">
        <p className="text-sm text-muted">Welcome</p>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-prose text-lg leading-relaxed text-muted">
          {siteConfig.description}
        </p>
        <p className="max-w-prose border-l-2 border-accent/40 pl-4 text-base leading-relaxed text-foreground/90">
          {siteConfig.focusLine}
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
      </MotionSection>
    </div>
  );
}
