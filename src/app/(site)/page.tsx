import { siteConfig } from "@/site.config";
import { getContactConfig } from "@/features/contact/get-contact-config";
import { getProjectsForLanding } from "@/features/projects/get-projects";
import { getSkills } from "@/features/skills/get-skills";
import { getSocialLinks } from "@/features/social/get-social-links";
import { AboutSection } from "@/features/landing/components/about-section";
import { ContactSection } from "@/features/landing/components/contact-section";
import { LandingHero } from "@/features/landing/components/landing-hero";
import { ProjectsSection } from "@/features/landing/components/projects-section";
import { StrengthsSection } from "@/features/landing/components/strengths-section";
import { buildPageMetadata } from "@/shared/seo";

export const metadata = buildPageMetadata({
  title: siteConfig.role,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const projects = getProjectsForLanding(4);
  const strengths = getSkills();
  const social = getSocialLinks();
  const contact = getContactConfig();

  return (
    <div className="space-y-0">
      <LandingHero />
      <div className="divide-y divide-border">
        <StrengthsSection strengths={strengths} />
        <ProjectsSection projects={projects} />
        <AboutSection />
        <ContactSection contact={contact} socialLinks={social} />
      </div>
    </div>
  );
}
