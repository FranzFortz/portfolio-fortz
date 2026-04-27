import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/site.config";
import { getSocialLinks } from "@/features/social/get-social-links";
import { SiteHeader } from "@/shared/components/site-header";
import { FloatingCta } from "@/shared/components/floating-cta";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const social = getSocialLinks();

  return (
    <div className="relative flex min-h-full flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-10 sm:py-16">
        {children}
      </main>
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-5 text-sm text-muted sm:px-10">
          <p className="max-w-prose leading-relaxed">
            © {new Date().getFullYear()} {siteConfig.name}. Crafted with care —
            say hello via{" "}
            <a
              href="/contact"
              className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              contact
            </a>
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
      <FloatingCta />
    </div>
  );
}
