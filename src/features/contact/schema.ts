import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Enter a valid email"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
