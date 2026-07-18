import type { WorksGalleryItem } from "@/components/Works";
import { WorksGallery } from "@/components/Works";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

const GALLERY_ITEMS = [
  {
    id: "field-notes",
    title: "Concept: Field Notes",
    category: "Editorial platform",
    description:
      "A calm reading system that turns a dispersed archive into a browsable publication.",
    image: {
      src: "/works/field-notes.svg",
      alt: "Concept interface with an editorial grid and a highlighted chart",
      aspectRatio: "landscape",
    },
    tags: ["Information design", "Editorial"],
    action: { label: "View concept", href: "/concepts/field-notes" },
  },
  {
    id: "signal-room",
    title: "Concept: Signal Room",
    category: "Campaign identity",
    description:
      "A visual direction for a programme that brings independent makers into one room.",
    image: {
      src: "/works/signal-room.svg",
      alt: "Concept poster with a circular symbol and typographic structure",
      aspectRatio: "portrait",
    },
    tags: ["Identity", "Campaign"],
  },
  {
    id: "index-system",
    title: "Concept: Index System",
    category: "Product dashboard",
    description:
      "A clearer operations view that helps a distributed team spot signals before they become work.",
    image: {
      src: "/works/index-system.svg",
      alt: "Concept dashboard with chart, controls, and structured data panels",
      aspectRatio: "landscape",
    },
    tags: ["Product design", "Systems"],
    action: { label: "Open concept", href: "/concepts/index-system" },
  },
] satisfies WorksGalleryItem[];

export const WorksGallerySectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="WorksGallery"
      title="Show the range of the portfolio without reducing work to anonymous thumbnails"
      description="Every displayed project is a concept: the grid supports quick browsing while preserving the category, purpose, and contribution of each one."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <WorksGallery
            title="Selected concept work"
            description="A varied set of concept directions for products, publications, and public programmes."
            items={GALLERY_ITEMS}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
