import { CTADirect } from "@/components/CTA";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

export const CTADirectSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="CTADirect"
      title="One clear action for visitors ready to move"
      description="Use this pattern when the next step is obvious and supporting choices would only slow it down."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <CTADirect
            title="Bring the next project into focus"
            description="Share the goal and current context, and leave with a useful direction for the work."
            primaryAction={{ label: "Start a conversation", href: "#contact" }}
            note="We will reply with the next practical step."
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
