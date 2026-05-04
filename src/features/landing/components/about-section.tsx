import { siteConfig } from "@/site.config";
import { FadeIn } from "@/shared/components/motion-section";
import { LandingSection } from "./landing-section";

export function AboutSection() {
  const paragraphs = siteConfig.about.split("\n\n").filter(Boolean);

  return (
    <FadeIn>
      <LandingSection id="about" title="About" intro="Short version — how I work and what I care about.">
        <div className="max-w-prose space-y-4 text-base leading-relaxed text-muted">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </LandingSection>
    </FadeIn>
  );
}
