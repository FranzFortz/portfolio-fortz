import type { Strength } from "@/features/skills/types";
import { FadeIn } from "@/shared/components/motion-section";
import { LandingSection } from "./landing-section";

type StrengthsSectionProps = {
  strengths: Strength[];
};

export function StrengthsSection({ strengths }: StrengthsSectionProps) {
  return (
    <FadeIn>
      <LandingSection
        id="skills"
        title="Strengths"
        intro="What I bring day to day — outcomes first, without the noise."
      >
        <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {strengths.map((s) => (
            <li key={s.id} className="max-w-md">
              <h3 className="text-base font-semibold text-foreground">{s.headline}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {s.detail}
              </p>
            </li>
          ))}
        </ul>
      </LandingSection>
    </FadeIn>
  );
}
