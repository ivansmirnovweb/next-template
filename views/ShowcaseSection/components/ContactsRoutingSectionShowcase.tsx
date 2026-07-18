import {
  BriefcaseBusiness,
  Handshake,
  LifeBuoy,
  Newspaper,
} from "lucide-react";

import { ContactsRouting, type ContactRoute } from "@/components/Contacts";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const CONTACT_ROUTES = [
  {
    id: "new-project",
    title: "New project",
    description: "Discuss a new website, launch, or service direction.",
    owner: "New business team",
    responseTime: "Reply within one business day",
    contacts: [
      {
        id: "project-email",
        label: "Email",
        value: "projects@northstar.example",
        href: "mailto:projects@northstar.example",
        icon: <BriefcaseBusiness className="size-4" />,
      },
    ],
    action: {
      label: "Send a project brief",
      href: "mailto:projects@northstar.example",
    },
  },
  {
    id: "support",
    title: "Existing project support",
    description:
      "Get help with a live site, handoff item, or agreed support request.",
    owner: "Delivery support",
    responseTime: "Priority requests reviewed same day",
    contacts: [
      {
        id: "support-email",
        label: "Email",
        value: "support@northstar.example",
        href: "mailto:support@northstar.example",
        icon: <LifeBuoy className="size-4" />,
      },
      {
        id: "support-phone",
        label: "Phone",
        value: "+1 (415) 555-0156",
        href: "tel:+14155550156",
      },
    ],
  },
  {
    id: "partnerships",
    title: "Partnerships and press",
    description:
      "Reach the team for collaboration opportunities, events, and media enquiries.",
    owner: "Partnerships desk",
    contacts: [
      {
        id: "partnership-email",
        label: "Email",
        value: "partners@northstar.example",
        href: "mailto:partners@northstar.example",
        icon: <Handshake className="size-4" />,
      },
      {
        id: "press-desk",
        label: "Press desk",
        value: "Message the communications desk",
        href: "https://press.northstar.example/contact",
        icon: <Newspaper className="size-4" />,
      },
    ],
  },
] satisfies ContactRoute[];

export const ContactsRoutingSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="ContactsRouting"
      title="Direct each question to the team that can answer it"
      description="Clear routing keeps new enquiries, support, and external relationships from competing for the same contact path."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <ContactsRouting
            title="Find the right place to start"
            description="Choose the route that best matches your reason for contacting the studio."
            routes={CONTACT_ROUTES}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
