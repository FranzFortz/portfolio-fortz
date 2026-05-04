import { getSocialLinks } from "@/features/social/get-social-links";
import { SiteHeader } from "@/shared/components/site-header";
import { SiteFooter } from "@/shared/components/site-footer";
import { cn } from "@/shared/cn";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const social = getSocialLinks();

  return (
    <div className="relative flex min-h-dvh flex-col bg-background">
      <a
        href="#main-content"
        className={cn(
          "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background",
        )}
      >
        Skip to main content
      </a>
      <SiteHeader socialLinks={social} />
      <main
        id="main-content"
        className={cn(
          "mx-auto w-full max-w-5xl flex-1 py-10 pad-inline-page sm:py-12",
          "pb-[max(3rem,env(safe-area-inset-bottom,0px))]",
        )}
        tabIndex={-1}
      >
        {children}
      </main>
      <SiteFooter social={social} />
    </div>
  );
}
