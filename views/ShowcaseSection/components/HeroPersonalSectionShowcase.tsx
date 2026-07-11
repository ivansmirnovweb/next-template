import { HeroPersonal } from "@/components/Hero";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

export const HeroPersonalSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="HeroPersonal"
      title="Make the person and their point of view the first thing people remember"
      description="A portrait-led composition for independent experts, creators, and personal brands that need a clear, direct introduction."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <HeroPersonal
            role="Independent brand strategist"
            title="Mara Ellison helps small teams find their clearest next chapter"
            description="Strategy and editorial direction for founders who want their work to sound as considered as it is."
            portrait={{
              src: "/PersonalImage.webp",
              alt: "Mara Ellison standing on a beach at sunset",
              objectPosition: "50% 40%",
            }}
            primaryAction={{ label: "Start a conversation", href: "#contact" }}
            secondaryAction={{
              label: "Read selected work",
              href: "#work",
              variant: "outline",
            }}
            proofs={[
              { id: "experience", label: "12 years of independent practice" },
              { id: "clients", label: "60+ founder teams supported" },
              {
                id: "focus",
                label: "Strategy, narrative, and launch direction",
              },
            ]}
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
