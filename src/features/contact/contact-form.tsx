"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/features/contact/schema";
import { submitContactForm } from "@/features/contact/actions";
import { Button } from "@/shared/components/ui/button";

export function ContactForm() {
  const [serverMessage, setServerMessage] = React.useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = handleSubmit(async (data) => {
    setServerMessage(null);
    const result = await submitContactForm(data);
    if (result.ok) {
      reset();
      setServerMessage(result.message);
      return;
    }
    setServerMessage(result.message);
    if (result.fieldErrors) {
      for (const key of Object.keys(result.fieldErrors) as (keyof ContactFormValues)[]) {
        const msgs = result.fieldErrors[key];
        if (msgs?.[0]) {
          setError(key, { message: msgs[0] });
        }
      }
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex max-w-lg flex-col gap-4">
      <div className="space-y-1.5">
        <label htmlFor="contact-name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-700"
          {...register("name")}
        />
        {errors.name ? (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.name.message}
          </p>
        ) : null}
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-700"
          {...register("email")}
        />
        {errors.email ? (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.email.message}
          </p>
        ) : null}
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className="w-full resize-y rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-700"
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.message.message}
          </p>
        ) : null}
      </div>
      {serverMessage ? (
        <p
          className="text-sm text-zinc-600 dark:text-zinc-400"
          role="status"
        >
          {serverMessage}
        </p>
      ) : null}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
