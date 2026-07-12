import { ProcessCollaboration } from "@/components/Process";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const PROCESS_COLLABORATION_ITEMS = [
  {
    id: "align",
    title: "Align on the starting point",
    clientActions:
      "Share the goal, constraints, and people who should take part in decisions.",
    providerActions:
      "Ask focused questions, map the work, and make the first choices easy to understand.",
    outcome: "One shared brief and a practical working rhythm.",
    duration: "1–2 days",
  },
  {
    id: "develop",
    title: "Develop the direction together",
    clientActions:
      "Review the key moments and give clear feedback on what best supports the goal.",
    providerActions:
      "Create, explain trade-offs, and refine the work around the feedback.",
    outcome: "An approved direction ready to take into production.",
  },
  {
    id: "launch",
    title: "Prepare the handoff",
    clientActions:
      "Confirm the final materials and identify the owner for the next step.",
    providerActions:
      "Package the materials, document decisions, and resolve implementation questions.",
    outcome: "A handoff your team can confidently use.",
  },
];

export const ProcessCollaborationSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="ProcessCollaboration"
      title="Make responsibilities clear without turning the process into a table"
      description="Each stage shows the customer’s contribution alongside the work the team takes ownership of."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <ProcessCollaboration
            title="A shared process with clear ownership"
            description="Both sides can see what to prepare, what happens next, and how each contribution moves the work forward."
            items={PROCESS_COLLABORATION_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
