import { FAQEssential } from "@/components/FAQ";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const ESSENTIAL_FAQ_ITEMS = [
  {
    id: "cost",
    question: "How is the project cost determined?",
    answer:
      "After a short discovery conversation, the scope, milestones, and fixed investment are documented before work begins.",
    anchorId: "cost",
  },
  {
    id: "timeline",
    question: "When can the work be ready?",
    answer:
      "The timeline depends on the agreed scope and feedback rhythm. You receive a practical schedule with clear review points at the start.",
    anchorId: "timeline",
  },
  {
    id: "materials",
    question: "What materials do you need from us?",
    answer:
      "Existing notes, customer insight, brand assets, and examples are useful, but a complete brief is not required for the first conversation.",
    anchorId: "materials",
  },
  {
    id: "changes",
    question: "Can we make changes during the project?",
    answer:
      "Yes. Changes are discussed in context, with their impact on scope, timing, and budget made clear before they are approved.",
    anchorId: "changes",
  },
  {
    id: "next-step",
    question: "What is the next step if the approach feels right?",
    answer:
      "Share the situation you want to improve. The first reply will recommend the most useful way to define the project.",
    anchorId: "next-step",
  },
];

export const FAQEssentialSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="FAQEssential"
      title="Resolve the few decisions that stand between interest and action"
      description="A focused list addresses the questions that often delay a first conversation without manufacturing extra content."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <FAQEssential
            title="Questions before we start"
            description="Clear answers to the practical points that shape a confident first step."
            items={ESSENTIAL_FAQ_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
