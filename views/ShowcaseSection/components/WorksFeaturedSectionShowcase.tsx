import type { WorksFeaturedItem } from "@/components/Works";
import { WorksFeatured } from "@/components/Works";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const FEATURED_ITEMS = [
  {
    id: "common-ground",
    title: "Concept: Common Ground",
    context:
      "A speculative platform for neighbourhood organisations that need to make local initiatives easier to discover and join.",
    services: ["Positioning", "Experience design", "Design system"],
    result:
      "A clear, shared front door that connects separate initiatives without flattening their voices.",
    image: {
      src: "/works/common-ground.svg",
      alt: "Concept interface with a dark grid, symbols, and warm navigation elements",
      aspectRatio: "landscape",
    },
    action: { label: "View concept", href: "/concepts/common-ground" },
  },
  {
    id: "index-system",
    title: "Concept: Index System",
    context:
      "A focused workspace for teams that need one readable picture of operational priorities.",
    services: ["Product strategy", "Interface design"],
    result:
      "A compact dashboard language built around the few signals a team uses every day.",
    image: {
      src: "/works/index-system.svg",
      alt: "Concept dashboard with a blue data grid and amber signal markers",
      aspectRatio: "landscape",
    },
  },
] satisfies WorksFeaturedItem[];

export const WorksFeaturedSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="WorksFeatured"
      title="Give the strongest work enough room to explain why it matters"
      description="Both examples are explicitly fictional concepts; the first takes the lead, while the second remains available as a substantial supporting project."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <WorksFeatured
            title="Featured concept work"
            description="Use this pattern when a few decisive projects deserve more context than a portfolio grid can provide."
            items={FEATURED_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
