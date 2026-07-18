import { TestimonialsFeatured } from "@/components/Testimonials";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

export const TestimonialsFeaturedSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="TestimonialsFeatured"
      title="Give one decisive customer voice room to carry the proof"
      description="All names, organisations, quotes, and outcomes below are fictional demonstration content, not a claim about a real client engagement."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <TestimonialsFeatured
            title="A fictional client perspective"
            description="Use a single detailed testimonial when the client’s own articulation of the value is the strongest evidence."
            quote="The work gave us a decision-making frame we could keep using after the project, not just a polished launch moment."
            author={{
              name: "Leila Morton",
              role: "Founder",
              company: "Fictional Meridian Practice",
            }}
            result="Illustrative outcome: a first-release scope agreed in one working week."
            source={{
              label: "Read fictional example",
              href: "/examples/meridian",
            }}
            media={{
              type: "content",
              content: (
                <div className="flex h-full min-h-64 items-end bg-primary p-6 text-primary-foreground sm:p-8">
                  <p className="max-w-xs font-heading text-2xl leading-snug font-medium tracking-tight">
                    Illustrative client note — fictional demonstration content.
                  </p>
                </div>
              ),
            }}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
