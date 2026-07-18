import { CTAChoice } from "@/components/CTA";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

export const CTAChoiceSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="CTAChoice"
      title="Keep the primary route clear while respecting lower readiness"
      description="The secondary action gives visitors a useful way to keep learning without competing with the main conversation."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <CTAChoice
            title="Ready to improve the next launch?"
            description="Start with a short discussion when the timing is right, or review relevant work before deciding."
            primaryAction={{ label: "Discuss the launch", href: "#contact" }}
            secondaryAction={{ label: "View selected work", href: "#work" }}
            choiceNote="Discuss the launch for a recommendation; view selected work if you are still comparing approaches."
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
