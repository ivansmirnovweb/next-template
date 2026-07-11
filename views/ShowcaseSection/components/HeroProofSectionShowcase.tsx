import { BadgeCheck, ShieldCheck, Star } from "lucide-react";

import { HeroProof } from "@/components/Hero";
import { Badge } from "@/components/ui/badge";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

export const HeroProofSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="HeroProof"
      title="Support an offer with evidence people can assess at a glance"
      description="A trust-first pattern that keeps outcomes and assurances close to the decision point."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <HeroProof
            eyebrow={<Badge variant="outline">Verified operations</Badge>}
            title="Resolve priority requests with a dependable operating rhythm"
            description="Give customers clearer answers while your team works from a complete, accountable record."
            primaryAction={{ label: "Review the case", href: "#case" }}
            proofs={[
              {
                id: "response-time",
                kind: "metric",
                value: "38%",
                label: "faster first response",
              },
              {
                id: "rating",
                kind: "rating",
                value: "4.9 / 5",
                label: "team experience rating",
                detail: "from 1,200+ responses",
                icon: <Star className="size-4 fill-current" />,
              },
              {
                id: "assurance",
                kind: "assurance",
                title: "Auditable handoffs",
                description: "Every decision keeps its context.",
                icon: <ShieldCheck className="size-4" />,
              },
              {
                id: "customer",
                kind: "logo",
                label: "Trusted by service leaders",
                mark: <BadgeCheck className="size-5" />,
              },
            ]}
            featuredProof={
              <p>
                “We stopped chasing updates and started solving the actual issue
                in front of us.”
              </p>
            }
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
