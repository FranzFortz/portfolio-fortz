export type SocialPlatform = "github" | "linkedin" | "twitter" | "other";

export type SocialLink = {
  id: string;
  platform: SocialPlatform;
  label: string;
  href: string;
};
