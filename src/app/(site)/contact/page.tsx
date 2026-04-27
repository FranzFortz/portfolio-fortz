import { getContactConfig } from "@/features/contact/get-contact-config";
import { ContactForm } from "@/features/contact/contact-form";
import { siteConfig } from "@/site.config";
import { buildPageMetadata } from "@/shared/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} for collaborations and client work.`,
  path: "/contact",
});

export default function ContactPage() {
  const contact = getContactConfig();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Send a message below. Configuration lives in{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            src/features/contact/data/contact-config.ts
          </code>
          .
        </p>
        {contact.publicEmail ? (
          <p className="text-sm">
            <span className="font-medium">Email: </span>
            <a
              href={`mailto:${contact.publicEmail}`}
              className="text-zinc-900 underline dark:text-zinc-100"
            >
              {contact.publicEmail}
            </a>
          </p>
        ) : null}
        {contact.availabilityNote ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {contact.availabilityNote}
          </p>
        ) : null}
      </header>
      <ContactForm />
    </div>
  );
}
