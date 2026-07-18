import type { TestimonialsStoryItem } from "@/components/Testimonials";
import { TestimonialsStories } from "@/components/Testimonials";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const STORY_ITEMS = [
  {
    id: "fragmented-brief",
    context:
      "A fictional cultural programme preparing to explain a growing offer to new partners.",
    situation:
      "The team had useful research and strong ideas, but no shared way to choose priorities for a public launch.",
    outcome:
      "A small set of audience promises and a release sequence made everyday decisions easier to align.",
    quote:
      "Instead of debating every page in isolation, we could return to the same shared intention.",
    author: {
      name: "Nora Bell",
      role: "Programme director",
      company: "Fictional Open Rooms",
    },
    metric: "Illustrative example: 3 priority audience journeys",
    image: {
      src: "/works/field-notes.svg",
      alt: "Abstract editorial concept used as fictional story artwork",
    },
    source: { label: "Read fictional example", href: "/examples/open-rooms" },
  },
  {
    id: "growing-team",
    context:
      "A fictional product team adding new people while trying to protect the clarity of its customer experience.",
    situation:
      "Different teams described the same service in conflicting terms, creating hesitation in planning and review.",
    outcome:
      "A shared vocabulary let the team test changes against the experience it wanted customers to recognise.",
    quote:
      "We stopped treating consistency as a clean-up job and started using it to make better choices.",
    author: {
      name: "Arun Shah",
      role: "Head of product",
      company: "Fictional Relay Works",
    },
  },
] satisfies TestimonialsStoryItem[];

export const TestimonialsStoriesSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="TestimonialsStories"
      title="Show a client’s lived change without turning their voice into a case-study summary"
      description="Every story is a clearly marked fictional example: situation and change add context, while the quote remains the central evidence."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <TestimonialsStories
            title="Illustrative client stories"
            description="Example content that keeps a customer’s perception of change distinct from the project narrative."
            items={STORY_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
