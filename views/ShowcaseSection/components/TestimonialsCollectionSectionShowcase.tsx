import type { TestimonialsCollectionItem } from "@/components/Testimonials";
import { TestimonialsCollection } from "@/components/Testimonials";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const COLLECTION_ITEMS = [
  {
    id: "planning-clarity",
    quote:
      "The team finally had one clear way to decide what belonged in the first release.",
    author: {
      name: "Rina Solberg",
      role: "Programme lead",
      company: "Fictional Northline Studio",
    },
    rating: 5,
    source: { label: "Read the example source", href: "/examples/northline" },
  },
  {
    id: "calmer-launch",
    quote:
      "We left the working session knowing what to say, what to postpone, and who owned the next decision.",
    author: {
      name: "Tom Ellis",
      role: "Product director",
      company: "Fictional Ledger & Field",
    },
    rating: 5,
  },
  {
    id: "shared-language",
    quote:
      "The new language made a difficult internal conversation feel practical instead of abstract.",
    author: {
      name: "Mei Alvarez",
      role: "Operations partner",
      company: "Fictional Civic Assembly",
    },
  },
] satisfies TestimonialsCollectionItem[];

export const TestimonialsCollectionSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="TestimonialsCollection"
      title="Let several client voices demonstrate a repeatable experience"
      description="Illustrative, fictional testimonial content only. The varied rhythm keeps several short endorsements readable rather than turning them into a uniform card wall."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <TestimonialsCollection
            title="Illustrative customer feedback"
            description="Example content for showing a pattern of clear, useful client experiences."
            items={COLLECTION_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
