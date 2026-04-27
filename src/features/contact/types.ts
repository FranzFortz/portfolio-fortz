export type ContactConfig = {
  /** Shown in UI when you add the contact section (frontend plan). */
  publicEmail?: string;
  /** Placeholder for a future form action or API path. */
  formActionPath?: string;
  /** Optional note for clients (e.g. response time). */
  availabilityNote?: string;
};
