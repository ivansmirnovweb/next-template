import { FAQCategories } from "@/components/FAQ";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const FAQ_CATEGORIES = [
  {
    id: "planning",
    title: "Planning the work",
    description: "Scope, priorities, and the first conversation.",
    items: [
      {
        id: "brief",
        question: "Do we need a complete brief before getting in touch?",
        answer:
          "No. A rough description of the situation, audience, and intended result is enough to begin a useful conversation.",
      },
      {
        id: "scope",
        question: "How do we decide what belongs in the first phase?",
        answer:
          "The first phase is shaped around the decision or result that matters most now, rather than a fixed package of deliverables.",
      },
    ],
  },
  {
    id: "collaboration",
    title: "Working together",
    description:
      "Reviews, feedback, and ownership while the work is in progress.",
    items: [
      {
        id: "feedback",
        question: "How are reviews and feedback handled?",
        answer:
          "Review points are agreed upfront so feedback arrives when it can still improve the work without creating avoidable rework.",
      },
      {
        id: "stakeholders",
        question: "Can several stakeholders be involved?",
        answer:
          "Yes. One decision owner keeps the process moving, while other perspectives can be collected at the agreed review points.",
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery and follow-through",
    items: [
      {
        id: "handover",
        question: "What do we receive when the work is complete?",
        answer:
          "You receive the agreed deliverables, the relevant source materials, and practical guidance for using the result.",
      },
      {
        id: "support",
        question: "Is support available after delivery?",
        answer:
          "Follow-through can be planned around launch, handover, or the next decision when it is useful to the project.",
      },
    ],
  },
  {
    id: "commercials",
    title: "Commercial details",
    description: "Pricing, timing, and adjustments to the agreed scope.",
    items: [
      {
        id: "price",
        question: "When is the price confirmed?",
        answer:
          "The investment is confirmed with the scope and milestones before the project is scheduled.",
      },
      {
        id: "change-request",
        question: "What happens if priorities change?",
        answer:
          "The effect on scope, timing, and cost is explained before any change is approved, so the next decision remains clear.",
      },
    ],
  },
];

export const FAQCategoriesSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="FAQCategories"
      title="Keep a broad set of answers easy to scan by topic"
      description="Visible groups help visitors locate a relevant commercial question without turning the page into a help centre."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <FAQCategories
            title="Frequently asked questions"
            description="Browse the topic closest to the decision you are making."
            categories={FAQ_CATEGORIES}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
