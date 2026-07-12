import { Layers3, Palette, SearchCheck } from "lucide-react";

import { ServicesCatalog } from "@/components/Services";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const CATALOG_ITEMS = [
  {
    id: "research",
    title: "Discovery and positioning",
    description:
      "Clarify the audience, message, and structure before visual work begins.",
    icon: <SearchCheck />,
    included: [
      "Audience interviews",
      "Service structure",
      "Content priorities",
    ],
    action: { label: "Explore discovery", href: "/services/discovery" },
  },
  {
    id: "identity",
    title: "Identity systems",
    description:
      "Give a growing business a recognisable visual language that holds together.",
    icon: <Palette />,
    included: ["Visual direction", "Core identity assets", "Usage guidance"],
    action: { label: "Explore identity", href: "/services/identity" },
  },
  {
    id: "website",
    title: "Websites and product pages",
    description:
      "Turn the offer into a focused digital experience that makes the next step clear.",
    icon: <Layers3 />,
    included: [
      "Page architecture",
      "Interface design",
      "Implementation handoff",
    ],
    action: { label: "Explore websites", href: "/services/websites" },
  },
];

export const ServicesCatalogSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="ServicesCatalog"
      title="Let people compare the complete offer without forcing a path"
      description="Each service has the same weight, enough context for a first decision, and a direct route to its details."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <ServicesCatalog
            title="Choose the part of the work that moves you forward"
            description="Start with the service that best matches where your team is today."
            items={CATALOG_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
