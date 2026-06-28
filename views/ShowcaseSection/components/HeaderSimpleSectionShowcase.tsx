import { Compass } from "lucide-react";

import { HeaderSimple } from "@/components/Header";
import { Button } from "@/components/ui/button";
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
] as const;

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
        summary="`HeaderSimple` is tuned for landing pages and product marketing surfaces where the main job is fast orientation plus one high-priority next step."
        actions={
          <div className="flex flex-wrap gap-3">
            <Button>Primary CTA</Button>
            <Button variant="outline">Secondary route</Button>
          </div>
        }
        bullets={[
          "Nested desktop dropdown under “Solutions”",
          "CTA repeated inside mobile sheet",
          "Secondary account and docs links in mobile menu",
        ]}
      />
    </ShowcaseSectionPreviewCard>
  );
};
