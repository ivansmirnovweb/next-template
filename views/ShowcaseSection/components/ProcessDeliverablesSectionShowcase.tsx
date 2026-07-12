import { FileCheck2, Layers3, Map, PencilRuler } from "lucide-react";

import { ProcessDeliverables } from "@/components/Process";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const PROCESS_DELIVERABLES_ITEMS = [
  {
    id: "discovery",
    title: "Discovery and priorities",
    description:
      "We review the current situation, audience, and decisions that the new work must support.",
    deliverable:
      "A concise brief with priorities, risks, and the agreed scope.",
    duration: "Week 1",
    accent: <Map />,
  },
  {
    id: "concept",
    title: "Concept and structure",
    description:
      "We turn the agreed direction into a clear message and a practical content structure.",
    deliverable: "A reviewed concept with page structure and key messages.",
    accent: <PencilRuler />,
  },
  {
    id: "system",
    title: "Build the working system",
    description:
      "The approved direction becomes a reusable set of materials ready for the next stage.",
    deliverable: "Production-ready assets and clear implementation notes.",
    accent: <Layers3 />,
  },
  {
    id: "handover",
    title: "Handover and next steps",
    description:
      "We package the result, resolve final questions, and make ownership straightforward.",
    deliverable: "A complete handoff with source files and a launch checklist.",
    accent: <FileCheck2 />,
  },
];

export const ProcessDeliverablesSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="ProcessDeliverables"
      title="Show the result of each stage, not only the work"
      description="This variant makes the client’s tangible output visible at every point in the process."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <ProcessDeliverables
            title="What you will have after each stage"
            description="Every step produces a concrete artifact you can review, use, or pass to your team."
            items={PROCESS_DELIVERABLES_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
