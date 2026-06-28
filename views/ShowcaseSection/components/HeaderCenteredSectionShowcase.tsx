import { ArrowRight, Compass } from "lucide-react";

import { HeaderCentered } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const headerCenteredLeftNavigation = [
  { label: "Catalog", href: "#catalog" },
  {
    label: "Collections",
    href: "#collections",
    items: [
      { label: "Seasonal rotations", href: "#seasonal" },
      { label: "Hand-finished staples", href: "#staples" },
    ],
  },
] as const;

const headerCenteredRightNavigation = [
  { label: "Journal", href: "#journal" },
  {
    label: "Visits",
    href: "#visits",
    items: [
      { label: "Showroom appointments", href: "#appointments" },
      { label: "Trade inquiries", href: "#trade" },
    ],
  },
  { label: "Contact", href: "#contact" },
] as const;

export const HeaderCenteredSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="HeaderCentered"
      title="The brand mark acts as the visual hinge between two nav clusters"
      description="An editorial or premium-commerce composition where the logo is the central anchor and mobile expands into a full-screen menu."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <HeaderCentered
            logo={{
              label: "Atelier Meridian",
              href: "#top",
              subtitle: "Objects, fittings, and interior studies",
              icon: <Compass className="size-4" />,
            }}
            leftNavigation={headerCenteredLeftNavigation}
            rightNavigation={headerCenteredRightNavigation}
            cta={{
              label: "Request lookbook",
              href: "#lookbook",
              variant: "secondary",
            }}
            mobileQuickAction={{
              label: "Call studio",
              href: "tel:+14155550161",
              variant: "outline",
            }}
            contacts={[
              {
                label: "Studio line",
                value: "+1 (415) 555-0161",
                href: "tel:+14155550161",
              },
              {
                label: "Visits",
                value: "By appointment, Tue-Sat",
              },
            ]}
            socialLinks={[
              { label: "Instagram", href: "#instagram" },
              { label: "Pinterest", href: "#pinterest" },
            ]}
          />
        }
        summary="`HeaderCentered` is intentionally more compositional than `HeaderSimple`: the left and right link groups frame the mark instead of behaving like one continuous nav rail."
        actions={
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">View collection</Button>
            <Button variant="outline">
              Read journal
              <ArrowRight className="size-4" />
            </Button>
          </div>
        }
        bullets={[
          "Separate left and right navigation props",
          "Centered logo as the main visual anchor",
          "Full-screen mobile dialog with CTA and contacts",
        ]}
      />
    </ShowcaseSectionPreviewCard>
  );
};
