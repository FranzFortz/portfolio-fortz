import { SOCIAL_LINKS } from "./data/social";
import type { SocialLink, SocialPlatform } from "./types";

export function getSocialLinks(): SocialLink[] {
  return SOCIAL_LINKS;
}

export function getSocialLinkByPlatform(
  platform: SocialPlatform,
): SocialLink | undefined {
  return SOCIAL_LINKS.find((l) => l.platform === platform);
}
