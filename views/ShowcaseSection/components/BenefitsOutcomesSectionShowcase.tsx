import { CalendarCheck2, MapPinned, ShieldCheck } from "lucide-react";

import { BenefitsOutcomes } from "@/components/Benefits";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const OUTCOME_ITEMS = [
  {
    id: "move-in",
    title: "Move in on the date you planned",
    description:
      "Milestones, contractors, and dates are agreed before work begins.",
    icon: <CalendarCheck2 />,
  },
  {
    id: "budget",
    title: "Keep the budget for the choices that matter",
    description:
      "Costs are planned line by line before materials are ordered, with no surprises later.",
    icon: <ShieldCheck />,
  },
  {
    id: "clarity",
    title: "Know what is happening on site",
    description:
      "The work plan and photo updates show the next step, not only what is already done.",
    icon: <MapPinned />,
  },
];

export const BenefitsOutcomesSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="BenefitsOutcomes"
      title="Start with the customer result, not a list of strengths"
      description="This pattern connects the desired outcome to the way it is achieved, making it useful for services with a clear destination."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <BenefitsOutcomes
            title="A renovation that fits your life instead of putting it on hold"
            description="Each point names an outcome people can picture in advance and explains why it is achievable."
            items={OUTCOME_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
