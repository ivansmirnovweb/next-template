import { MapPin, MessageCircleMore, Phone } from "lucide-react";

import { HeaderWithContacts } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const headerWithContactsNavigation = [
  { label: "Programs", href: "#programs" },
  {
    label: "Clinics",
    href: "#clinics",
    items: [
      { label: "Primary care", href: "#primary-care" },
      { label: "Preventive diagnostics", href: "#diagnostics" },
      { label: "Recovery and long-term support", href: "#recovery" },
    ],
  },
  { label: "Insurance", href: "#insurance" },
  { label: "About team", href: "#team" },
] as const;

export const HeaderWithContactsSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="HeaderWithContacts"
      title="Utility row adds location and direct contact without competing with the main nav"
      description="A two-tier pattern for clinics, hospitality, service offices, and other businesses that must surface contact data early."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <HeaderWithContacts
            logo={{
              label: "Harbor Wellness",
              href: "#top",
              subtitle: "Preventive care and recovery planning",
              icon: <MapPin className="size-4" />,
            }}
            navigation={headerWithContactsNavigation}
            cta={{
              label: "Schedule visit",
              href: "#schedule",
            }}
            phone={{
              label: "Phone",
              value: "+1 (415) 555-0148",
              href: "tel:+14155550148",
            }}
            address={{
              label: "Address",
              value: "1458 Bayfront Avenue, Suite 200",
              href: "#map",
            }}
            hours={{
              label: "Hours",
              value: "Mon-Fri, 8:00-19:00",
            }}
            socialLinks={[
              {
                label: "WhatsApp",
                href: "#whatsapp",
                icon: <MessageCircleMore className="size-4" />,
              },
              {
                label: "Phone line",
                href: "tel:+14155550148",
                icon: <Phone className="size-4" />,
              },
            ]}
          />
        }
        summary="`HeaderWithContacts` keeps the primary row visually dominant while the lower strip stays dense, scannable, and useful for fast mobile calling."
        actions={
          <div className="flex flex-wrap gap-3">
            <Button>Request callback</Button>
            <Button variant="outline">Download checklist</Button>
          </div>
        }
        bullets={[
          "Direct call action in the mobile top bar",
          "Address, hours, phone, and messenger links",
          "Nested “Clinics” group for desktop and mobile",
        ]}
      />
    </ShowcaseSectionPreviewCard>
  );
};
