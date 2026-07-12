import { AboutStory } from "@/components/About";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const STORY_STAGES = [
  {
    id: "noticed",
    label: "Starting point",
    title: "The launch plan outgrew the page",
    description:
      "Teams had a strong product and scattered launch material, but no shared place to explain the decision to a new customer.",
  },
  {
    id: "method",
    label: "Working method",
    title: "We combined the decisions that usually arrive separately",
    description:
      "Positioning, content structure, and interface direction now move through the same weekly review.",
  },
  {
    id: "today",
    label: "Today",
    title: "The site becomes a working launch tool",
    description:
      "Each engagement ends with a page system the team can use in sales, campaigns, and product conversations.",
  },
];

export const AboutStorySectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="AboutStory"
      title="Use a short sequence to make the current approach feel earned"
      description="The timeline is reserved for three consequential changes, not a complete corporate chronology."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <AboutStory
            title="We started with a problem that a prettier homepage could not solve"
            intro="The studio grew from launch work with teams that needed a clearer story before they needed more marketing assets."
            problem="New visitors could not see why the offer mattered, even when the product team could explain it in a room."
            idea="Bring the product conversation, the page structure, and the launch decision into one practical working rhythm."
            stages={STORY_STAGES}
            image={{
              src: "/PersonalImage.webp",
              alt: "A creative professional reflecting by the sea",
              objectPosition: "50% 42%",
            }}
            action={{ label: "Meet the studio", href: "/contact" }}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
