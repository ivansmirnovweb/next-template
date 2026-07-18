import { MapPinned } from "lucide-react";

import { ContactsLocation } from "@/components/Contacts";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const LOCATION_MAP_PREVIEW = (
  <div className="flex aspect-[4/3] min-h-52 items-center justify-center bg-[radial-gradient(circle_at_24%_25%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_26%),linear-gradient(135deg,var(--muted),var(--background))] p-6 text-center">
    <div className="space-y-2">
      <MapPinned className="mx-auto size-8 text-primary" />
      <p className="font-heading text-lg font-medium text-foreground">
        Map preview
      </p>
      <p className="text-sm leading-6 text-muted-foreground">
        Client-provided map or embed slot
      </p>
    </div>
  </div>
);

const LOCATIONS = [
  {
    id: "studio",
    title: "Northstar Studio",
    address: "85 Market Street, Floor 4\nDemo City, CA 94105",
    hours: "Monday–Friday, 09:00–17:00 PT",
    phone: {
      id: "studio-phone",
      label: "Studio phone",
      value: "+1 (415) 555-0142",
      href: "tel:+14155550142",
    },
    landmark: "Use the Market Street entrance beside the public atrium.",
    accessibility:
      "Step-free entrance and visitor lift available from the lobby.",
    directions: {
      label: "Build a route",
      href: "https://maps.example/directions/northstar-studio",
      variant: "outline" as const,
    },
    map: LOCATION_MAP_PREVIEW,
  },
];

export const ContactsLocationSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="ContactsLocation"
      title="Keep the address useful even when a map is available"
      description="The route and map preview support arrival; the text address, hours, and access details remain primary information."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <ContactsLocation
            title="Visit the studio"
            description="Meet by appointment in our central demonstration location."
            locations={LOCATIONS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
