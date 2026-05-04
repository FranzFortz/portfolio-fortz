"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { SocialLink } from "@/features/social/types";
import { siteConfig } from "@/site.config";
import { cn } from "@/shared/cn";

type SiteFooterProps = {
  social: SocialLink[];
};

export function SiteFooter({ social }: SiteFooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-border py-10",
        "pb-[max(2.5rem,env(safe-area-inset-bottom,0px))]",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-5xl flex-col gap-6 text-sm text-muted pad-inline-page",
        )}
      >
        <p className="max-w-prose leading-relaxed">
          © {new Date().getFullYear()} {siteConfig.name}. Crafted with care — say
          hello via{" "}
          <Link
            href="/#contact"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
          >
            contact
          </Link>
          .
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {social.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
                <ExternalLink className="h-3 w-3 opacity-60" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
