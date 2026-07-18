import type { WorksCaseStudyItem } from "@/components/Works";
import { WorksCaseStudies } from "@/components/Works";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const CASE_STUDIES = [
  {
    id: "field-notes",
    title: "Concept: Field Notes",
    context:
      "A fictional cultural archive preparing to make its collection useful beyond occasional exhibitions.",
    challenge:
      "Visitors could not understand the breadth of the archive or find a clear path into its material.",
    solution:
      "We shaped the collection into thematic routes, a readable visual index, and an editorial page system.",
    result:
      "The archive becomes a place to return to, with enough structure for people to follow their own interests.",
    metric: "12 thematic routes ready for publication",
    industry: "Culture",
    duration: "Concept sprint · 4 weeks",
    services: ["Content strategy", "Information design", "Prototype"],
    image: {
      src: "/works/field-notes.svg",
      alt: "Concept editorial interface for a cultural archive",
      aspectRatio: "landscape",
    },
    action: { label: "Read concept", href: "/concepts/field-notes" },
  },
  {
    id: "signal-room",
    title: "Concept: Signal Room",
    context:
      "A fictional gathering programme for independent makers working across a fragmented city.",
    challenge:
      "The programme needed to feel open to newcomers while retaining a recognisable point of view.",
    solution:
      "We built a flexible campaign language around a simple signal mark and repeatable event templates.",
    result:
      "Each event can speak in its own voice while still feeling part of the same invitation.",
    industry: "Community programme",
    services: ["Identity", "Campaign system"],
  },
] satisfies WorksCaseStudyItem[];

export const WorksCaseStudiesSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="WorksCaseStudies"
      title="Make the method and outcome as visible as the finished work"
      description="These fictional concepts demonstrate both an evidence-led case with a metric and a qualitative result without invented numbers."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <WorksCaseStudies
            title="Concept case studies"
            description="A structured account of the starting point, the response, and the result of each concept project."
            items={CASE_STUDIES}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
