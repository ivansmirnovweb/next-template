import { BenefitsContrast } from "@/components/Benefits";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const CONTRAST_ITEMS = [
  {
    id: "deadline",
    problem: "The schedule shifts after you have already arranged your move.",
    solution:
      "Critical milestones are tied to the move-in date and reviewed every week.",
    description: "If a risk appears, you see it before it becomes a delay.",
  },
  {
    id: "changes",
    problem: "New costs appear during the work without a clear explanation.",
    solution:
      "Changes are priced and approved before they reach the work plan.",
  },
  {
    id: "coordination",
    problem: "You have to gather updates from several contractors yourself.",
    solution:
      "One plan and one owner keep materials, work, and decisions in context.",
  },
];

export const BenefitsContrastSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="BenefitsContrast"
      title="Make the removed risk clearer than an abstract promise"
      description="This variation helps people recognize a familiar problem and see the calmer scenario that replaces it."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <BenefitsContrast
            title="Less uncertainty between the first measurement and move-in"
            description="The contrast shows not a list of features, but the difficult situations the customer avoids."
            problemLabel="Usually"
            solutionLabel="With us"
            items={CONTRAST_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
