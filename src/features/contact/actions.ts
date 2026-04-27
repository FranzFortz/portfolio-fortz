"use server";

import { contactFormSchema, type ContactFormValues } from "./schema";

export type ContactActionResult =
  | { ok: true; message: string }
  | {
      ok: false;
      message: string;
      fieldErrors?: Partial<Record<keyof ContactFormValues, string[]>>;
    };

export async function submitContactForm(
  input: unknown,
): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten()
        .fieldErrors as Partial<Record<keyof ContactFormValues, string[]>>,
    };
  }

  // v1: log only. Wire Resend/SMTP/etc. here; add rate limiting in production.
  console.info("[contact]", {
    name: parsed.data.name,
    email: parsed.data.email,
    messageLength: parsed.data.message.length,
  });

  return {
    ok: true,
    message: "Thanks — your message was received.",
  };
}
