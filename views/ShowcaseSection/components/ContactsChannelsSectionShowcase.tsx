import { Mail, MessageCircleMore, Phone } from "lucide-react";

import { ContactsChannels } from "@/components/Contacts";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const CONTACT_CHANNELS = [
  {
    id: "phone",
    kind: "Phone",
    label: "Talk through the project",
    value: "+1 (415) 555-0142",
    href: "tel:+14155550142",
    description: "Best for a first conversation with context and questions.",
    availability: "Mon–Fri, 09:00–17:00 PT",
    contactPerson: "Project desk",
    icon: <Phone className="size-5" />,
  },
  {
    id: "email",
    kind: "Email",
    label: "Send a brief",
    value: "projects@northstar.example",
    href: "mailto:projects@northstar.example",
    description: "Share scope, timing, and links for a considered response.",
    availability: "Reply within one business day",
    icon: <Mail className="size-5" />,
  },
  {
    id: "messenger",
    kind: "Messenger",
    label: "Ask a quick question",
    value: "Message the studio desk",
    href: "https://chat.northstar.example/contact",
    description: "Useful for a quick fit check before you prepare a brief.",
    availability: "Usually within two hours",
    icon: <MessageCircleMore className="size-5" />,
  },
];

export const ContactsChannelsSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="ContactsChannels"
      title="Let visitors choose the channel that fits their question"
      description="Every option remains named and explained, so social or messenger links are never ambiguous icons."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <ContactsChannels
            title="Choose the easiest way to start"
            description="Use the channel that matches the amount of context you want to share."
            channels={CONTACT_CHANNELS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
