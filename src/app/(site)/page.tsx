import { siteConfig } from "@/site.config";
import { getContactConfig } from "@/features/contact/get-contact-config";
import {
  getDefaultPortfolioRoleId,
  getPortfolioRoles,
} from "@/features/roles/get-portfolio-roles";
import { getSocialLinks } from "@/features/social/get-social-links";
import { AboutSection } from "@/features/landing/components/about-section";
import { ContactSection } from "@/features/landing/components/contact-section";
import { LandingHero } from "@/features/landing/components/landing-hero";
import { RoleScopedLanding } from "@/features/landing/components/role-scoped-landing";
import { buildPageMetadata } from "@/shared/seo";

export const metadata = buildPageMetadata({
  title: siteConfig.role,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const roles = getPortfolioRoles();
  const defaultRoleId = getDefaultPortfolioRoleId();
  const social = getSocialLinks();
  const contact = getContactConfig();

  return (
    <div className="space-y-0">
      <LandingHero />
      <div className="divide-y divide-border">
        <RoleScopedLanding roles={roles} defaultRoleId={defaultRoleId} />
        <AboutSection />
        <ContactSection contact={contact} socialLinks={social} />
      </div>
    </div>
  );
}
