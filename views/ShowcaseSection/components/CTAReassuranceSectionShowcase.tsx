import { CTAReassurance } from "@/components/CTA";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const REASSURANCE_CONDITIONS = [
  "The first conversation is free.",
  "No technical brief is required.",
  "Nothing is charged before the scope is agreed.",
];

export const CTAReassuranceSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="CTAReassurance"
      title="Make the first step feel safe and concrete"
      description="Use only the few conditions that directly reduce hesitation before someone gets in touch."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <CTAReassurance
            title="Talk through the project before you commit"
            description="A short conversation is enough to understand the problem, possible direction, and whether we are a fit."
            primaryAction={{ label: "Discuss the project", href: "#contact" }}
            conditions={REASSURANCE_CONDITIONS}
            responseNote="We will respond within one working day."
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
