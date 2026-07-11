import { CheckCircle2, Clock3, Sparkles } from "lucide-react";

import { BenefitsVisual } from "@/components/Benefits";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const VISUAL_ITEMS = [
  {
    id: "ritual",
    title: "Restore your energy in a rhythm that suits you",
    description:
      "A clear daily plan leaves room for rest instead of turning recovery into another to-do list.",
    visual: {
      type: "image" as const,
      src: "/PersonalImage.webp",
      alt: "Person resting by the sea at sunset",
      objectPosition: "50% 42%",
    },
    caption:
      "The image shows the state the program leads toward instead of serving as background decoration.",
  },
  {
    id: "plan",
    title: "See the next useful step before the day begins",
    description:
      "The routine brings sleep, movement, and breaks into one achievable plan instead of scattered advice.",
    visual: {
      type: "content" as const,
      content: (
        <div className="flex size-full flex-col justify-between bg-card p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                Today’s plan
              </p>
              <p className="mt-2 font-heading text-2xl font-medium">
                Gentle rhythm
              </p>
            </div>
            <Sparkles className="size-5 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-muted/40 p-3 text-sm">
              <Clock3 className="size-4 shrink-0 text-primary" />
              10-minute walk after lunch
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-primary/25 bg-primary/5 p-3 text-sm font-medium">
              <CheckCircle2 className="size-4 shrink-0 text-primary" />
              Sleep routine is ready
            </div>
          </div>
        </div>
      ),
    },
  },
];

export const BenefitsVisualSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="BenefitsVisual"
      title="Show value through an artifact that makes it tangible"
      description="An image of the intended state and an interface for the next step reveal two sides of value without decorative illustration."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <BenefitsVisual
            title="Recovery becomes visible before the first result"
            description="The visual material explains what people will gain and how it will look in their real day."
            items={VISUAL_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
