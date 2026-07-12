import { ArrowUpRight } from "lucide-react";

import { ServicesFeatured } from "@/components/Services";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const FEATURED_SERVICE = {
  title: "Launch-ready website",
  description:
    "A focused website engagement for teams that need to turn a new offer into a confident public launch.",
  outcomes: [
    "A clear page structure around the buyer’s decision",
    "Visual direction that makes the offer feel established",
    "Production-ready interface handoff for implementation",
  ],
  primaryAction: { label: "Discuss a website", href: "/contact" },
  visual: {
    type: "content" as const,
    content: (
      <div className="flex size-full min-h-64 flex-col justify-between bg-primary p-6 text-primary-foreground sm:p-8">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="font-medium">Launch map</span>
          <ArrowUpRight className="size-5" />
        </div>
        <div>
          <p className="text-sm text-primary-foreground/70">
            From first visit to action
          </p>
          <p className="mt-2 font-heading text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            Offer → proof → conversation
          </p>
        </div>
      </div>
    ),
  },
};

const SUPPORTING_SERVICES = [
  {
    id: "strategy",
    title: "Offer strategy",
    description: "Clarify the business case before a larger build.",
    action: { label: "See strategy", href: "/services/strategy" },
  },
  {
    id: "content",
    title: "Content systems",
    description: "Give teams an editorial structure they can keep using.",
    action: { label: "See content systems", href: "/services/content" },
  },
  {
    id: "product",
    title: "Product interface",
    description:
      "Improve a key product flow when the core offer already works.",
    action: { label: "See product interface", href: "/services/product" },
  },
];

export const ServicesFeaturedSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="ServicesFeatured"
      title="Make the priority offer unmistakable, while preserving useful alternatives"
      description="One substantial service takes the visual lead; smaller adjacent directions remain available without diluting the decision."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <ServicesFeatured
            title="Start with the engagement designed for a decisive launch"
            description="When the commercial priority is clear, put it first and keep the next-best directions close by."
            featured={FEATURED_SERVICE}
            items={SUPPORTING_SERVICES}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
