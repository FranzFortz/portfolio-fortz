import { Mail } from "lucide-react";
import { ContactForm } from "@/features/contact/contact-form";
import type { ContactConfig } from "@/features/contact/types";
import type { SocialLink } from "@/features/social/types";
import { FadeIn } from "@/shared/components/motion-section";
import { cn } from "@/shared/cn";
import { LandingSection } from "./landing-section";

type ContactSectionProps = {
  contact: ContactConfig;
  socialLinks: SocialLink[];
};

export function ContactSection({ contact, socialLinks }: ContactSectionProps) {
  const linkedIn = socialLinks.find((l) => l.platform === "linkedin");

  return (
    <FadeIn>
      <LandingSection
        id="contact"
        title="Let’s talk"
        intro="Tell me what you’re hiring for or what you need built — I’ll respond directly."
      >
        <div
          className={cn(
            "rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8",
          )}
        >
          <div className="mb-8 flex max-w-prose flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            {contact.publicEmail ? (
              <a
                href={`mailto:${contact.publicEmail}`}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded-sm",
                )}
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                {contact.publicEmail}
              </a>
            ) : (
              <p className="text-sm text-muted">
                Set <code className="rounded border border-border bg-muted-bg px-1 font-mono text-xs">publicEmail</code> in{" "}
                <code className="rounded border border-border bg-muted-bg px-1 font-mono text-xs">
                  contact-config.ts
                </code>{" "}
                to show your address here.
              </p>
            )}
            {linkedIn ? (
              <a
                href={linkedIn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-sm font-semibold text-accent underline decoration-accent/35 underline-offset-4 hover:decoration-accent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded-sm",
                )}
              >
                LinkedIn profile
              </a>
            ) : null}
          </div>
          {contact.availabilityNote ? (
            <p className="mb-6 text-sm text-muted">{contact.availabilityNote}</p>
          ) : null}
          <ContactForm />
        </div>
      </LandingSection>
    </FadeIn>
  );
}
