import { PhoneCall } from "lucide-react";

import { FooterWithContacts } from "@/components/Footer";
import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const footerWithContactsNavigation = [
  { label: "Programs", href: "#programs" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const FooterWithContactsSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="FooterWithContacts"
      title="Contact-first composition gives service businesses a fast final conversion moment"
      description="A footer for clinics, studios, agencies, and local services where phone, hours, and direct outreach should outrank deeper site navigation."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <FooterWithContacts
            logo={{
              label: "Harbor Wellness",
              href: "#top",
              subtitle: "Preventive care and recovery planning",
              icon: <PhoneCall className="size-4" />,
            }}
            description="Guided visits, follow-up planning, and direct support for busy city schedules."
            phone={{
              label: "Phone",
              value: "+1 (415) 555-0148",
              href: "tel:+14155550148",
            }}
            email={{
              label: "Email",
              value: "hello@harborwellness.example",
              href: "mailto:hello@harborwellness.example",
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
              { label: "WhatsApp", href: "#whatsapp" },
              { label: "Telegram", href: "#telegram" },
            ]}
            navigation={footerWithContactsNavigation}
            cta={{
              label: "Schedule visit",
              href: "#schedule",
            }}
            copyright="© 2026 Harbor Wellness."
            legalLinks={[
              { label: "Privacy policy", href: "#privacy" },
              { label: "Consent forms", href: "#consent" },
            ]}
            supplementaryText="Billing details and insurance confirmation are available after booking."
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
