import { Layers3 } from "lucide-react";

import { FooterColumns } from "@/components/Footer";
import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const footerColumnsGroups = [
  {
    title: "Platform",
    links: [
      { label: "Inbox orchestration", href: "#inbox" },
      { label: "Automations", href: "#automations" },
      { label: "Reporting and SLA analytics", href: "#analytics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "Migration guides", href: "#migration" },
      { label: "Status", href: "#status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Partners", href: "#partners" },
      { label: "Security", href: "#security" },
    ],
  },
] as const;

export const FooterColumnsSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="FooterColumns"
      title="Column layout handles larger site maps while keeping contact paths easy to scan"
      description="A navigation-heavy footer for broader product surfaces, knowledge hubs, and content-rich business sites."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <FooterColumns
            logo={{
              label: "Signal Foundry",
              href: "#top",
              subtitle: "Support systems for high-volume teams",
              icon: <Layers3 className="size-4" />,
            }}
            description="Routing, knowledge distribution, and service operations patterns collected into one adaptable platform."
            groups={footerColumnsGroups}
            contacts={[
              {
                label: "Email",
                value: "hello@signalfoundry.example",
                href: "mailto:hello@signalfoundry.example",
              },
              {
                label: "Phone",
                value: "+1 (415) 555-0193",
                href: "tel:+14155550193",
              },
              {
                label: "Address",
                value: "1458 Bayfront Avenue, Suite 200, San Francisco, CA",
                href: "#map",
              },
            ]}
            socialLinks={[
              { label: "LinkedIn", href: "#linkedin" },
              { label: "YouTube", href: "#youtube" },
            ]}
            copyright="© 2026 Signal Foundry."
            legalLinks={[
              { label: "Privacy policy", href: "#privacy" },
              { label: "Terms of service", href: "#terms" },
            ]}
            bottomNote="SOC 2 documentation and procurement materials are available on request."
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
