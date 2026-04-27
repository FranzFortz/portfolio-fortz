import { getContactConfig } from "@/features/contact/get-contact-config";
import { ContactForm } from "@/features/contact/contact-form";
import { siteConfig } from "@/site.config";
import { buildPageMetadata } from "@/shared/seo";
import { MotionSection } from "@/shared/components/motion-section";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} for collaborations and client work.`,
  path: "/contact",
});

export default function ContactPage() {
  const contact = getContactConfig();

  return (
    <div className="space-y-12">
      <MotionSection className="max-w-prose space-y-4">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          Contact
        </h1>
        <p className="text-muted">
          Send a message below. Configuration lives in{" "}
          <code className="rounded-md border border-border bg-muted-bg px-1.5 py-0.5 font-mono text-sm text-foreground">
            src/features/contact/data/contact-config.ts
          </code>
          .
        </p>
        {contact.publicEmail ? (
          <p className="text-sm text-foreground">
            <span className="font-medium">Email: </span>
            <a
              href={`mailto:${contact.publicEmail}`}
              className="text-accent underline decoration-accent/35 underline-offset-4 hover:decoration-accent"
            >
              {contact.publicEmail}
            </a>
          </p>
        ) : null}
        {contact.availabilityNote ? (
          <p className="text-sm text-muted">{contact.availabilityNote}</p>
        ) : null}
      </MotionSection>
      <MotionSection>
        <ContactForm />
      </MotionSection>
    </div>
  );
}
