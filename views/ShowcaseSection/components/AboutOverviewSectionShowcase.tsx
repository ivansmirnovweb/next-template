import { AboutOverview } from "@/components/About";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const OVERVIEW_FACTS = [
  {
    id: "focus",
    value: "1–2",
    label: "launch priorities per engagement",
    description:
      "The work stays anchored in the decisions that change a launch.",
  },
  {
    id: "format",
    value: "Weekly",
    label: "working reviews with the client team",
  },
];

export const AboutOverviewSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="AboutOverview"
      title="Answer who the company is before listing its capabilities"
      description="A focused introduction makes the audience, work, and differentiating way of working easy to understand."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <AboutOverview
            title="A small digital studio for teams making a decisive next move"
            paragraphs={[
              "We help founders and product teams turn a promising offer into a website people can understand and act on.",
              "Strategy, content, and interface are shaped together in short working cycles, so the team can make real launch decisions while the work is visible.",
            ]}
            image={{
              src: "/PersonalImage.webp",
              alt: "Designer working near a coastal landscape",
              objectPosition: "50% 42%",
            }}
            facts={OVERVIEW_FACTS}
            action={{ label: "See how we work", href: "/services" }}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
