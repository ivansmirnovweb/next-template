import { Compass } from "lucide-react";

import { HeaderSimple } from "@/components/Header";
import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const headerSimpleNavigation = [
  { label: "Services", href: "#services" },
  {
    label: "Solutions",
    href: "#solutions",
    items: [
      { label: "Customer support orchestration", href: "#support" },
      { label: "Knowledge base operations", href: "#knowledge" },
      {
        label: "Cross-team enablement with longer navigation labels",
        href: "#enablement",
      },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Case studies", href: "#cases" },
];

export const HeaderSimpleSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="HeaderSimple"
      title="Primary navigation stays centered in the information flow"
      description="A compact, product-focused header with one decisive CTA and a right-side sheet for mobile."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <HeaderSimple
            logo={{
              label: "Northstar OS",
              href: "#top",
              subtitle: "Operational clarity for distributed support teams",
              icon: <Compass className="size-4" />,
            }}
            navigation={headerSimpleNavigation}
            cta={{
              label: "Book walkthrough",
              href: "#walkthrough",
            }}
            secondaryLinks={[
              { label: "Customer login", href: "#login" },
              { label: "Partner docs", href: "#docs" },
            ]}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
