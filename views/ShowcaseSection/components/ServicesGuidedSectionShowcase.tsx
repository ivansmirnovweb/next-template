import { ServicesGuided } from "@/components/Services";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const GUIDED_ITEMS = [
  {
    id: "launch",
    need: "I’m preparing a new service or product launch",
    solution:
      "Start by shaping the offer, its audience, and the few pages that carry the decision.",
    destination: {
      type: "services" as const,
      items: ["Discovery", "Positioning", "Launch page"],
    },
    action: { label: "Plan a launch", href: "/services/launch" },
  },
  {
    id: "refresh",
    need: "Our existing website no longer reflects the business",
    solution:
      "Audit the current journey, retain what works, and rebuild the moments that block conversion.",
    destination: {
      type: "result" as const,
      value:
        "A clearer site structure with a credible message and useful next actions.",
    },
    action: { label: "Review the website", href: "/services/website-review" },
  },
  {
    id: "private",
    need: "I need a clear personal presence for independent work",
    solution:
      "Frame expertise around a personal point of view, proof, and an easy way to get in touch.",
    destination: {
      type: "services" as const,
      items: ["Personal positioning", "Portfolio site"],
    },
  },
  {
    id: "team",
    need: "Our team needs one shared identity system",
    solution:
      "Create reusable foundations so every channel says the same thing without slowing the team down.",
    destination: {
      type: "result" as const,
      value:
        "A practical identity system your team can use across product, sales, and hiring.",
    },
  },
];

export const ServicesGuidedSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="ServicesGuided"
      title="Start from the visitor’s situation, then make the right direction visible"
      description="The section guides a quick self-selection without asking people to complete a quiz or understand the service model first."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <ServicesGuided
            title="What are you trying to move forward?"
            description="Find the starting point that most closely matches your current situation."
            items={GUIDED_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
