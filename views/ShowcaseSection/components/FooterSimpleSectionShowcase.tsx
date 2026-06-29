import { Compass } from "lucide-react";

import { FooterSimple } from "@/components/Footer";
import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const footerSimpleNavigation = [
  { label: "Services", href: "#services" },
  { label: "Pricing with longer navigation label", href: "#pricing" },
  { label: "Case studies", href: "#cases" },
] as const;

const footerSimpleSocialLinks = [
  { label: "LinkedIn", href: "#linkedin" },
  { label: "X", href: "#x" },
  { label: "GitHub", href: "#github" },
] as const;

const footerSimpleLegalLinks = [
  { label: "Privacy policy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Cookie settings", href: "#cookies" },
] as const;

export const FooterSimpleSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="FooterSimple"
      title="Compact closing section keeps utility links available without adding visual weight"
      description="A restrained footer for product and marketing pages where navigation and legal links need a clean, low-noise landing zone."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <FooterSimple
            logo={{
              label: "Northstar OS",
              href: "#top",
              subtitle: "Operational clarity for distributed support teams",
              icon: <Compass className="size-4" />,
            }}
            navigation={footerSimpleNavigation}
            socialLinks={footerSimpleSocialLinks}
            copyright="© 2026 Northstar OS. All rights reserved."
            legalLinks={footerSimpleLegalLinks}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
