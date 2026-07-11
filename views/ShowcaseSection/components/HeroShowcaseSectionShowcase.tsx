import { Activity, ArrowUpRight, CircleCheckBig } from "lucide-react";

import { HeroShowcase } from "@/components/Hero";
import { Badge } from "@/components/ui/badge";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

export const HeroShowcaseSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="HeroShowcase"
      title="Put the work itself at the center of the decision"
      description="A product-led opening where the visual artifact explains the value more quickly than supporting copy can."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <HeroShowcase
            eyebrow={<Badge variant="outline">Live workspace</Badge>}
            title="See the whole customer thread before you choose the next move"
            description="A calm, focused workspace that makes the active decision, owner, and impact visible together."
            primaryAction={{
              label: "Explore the workspace",
              href: "#workspace",
            }}
            secondaryAction={{
              label: "View use cases",
              href: "#use-cases",
              variant: "outline",
            }}
            proof={
              <span className="inline-flex items-center gap-2">
                <CircleCheckBig className="size-4 text-primary" />
                Priority context is visible before assignment.
              </span>
            }
            visual={
              <div className="space-y-4 bg-card p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Account health
                    </p>
                    <p className="mt-1 font-heading text-xl font-medium">
                      North region rollout
                    </p>
                  </div>
                  <Activity className="size-5 text-primary" />
                </div>
                <div className="grid gap-3 sm:grid-cols-[1.3fr_0.7fr]">
                  <div className="rounded-xl border border-border/70 bg-muted/50 p-4">
                    <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
                      Decision queue
                    </p>
                    <p className="mt-8 text-sm font-medium">
                      Confirm specialist coverage
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-primary/15">
                      <div className="h-2 w-3/4 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-border/70 p-4">
                    <p className="text-xs text-muted-foreground">Next owner</p>
                    <p className="mt-6 text-sm font-medium">Maya Chen</p>
                    <ArrowUpRight className="mt-3 size-4 text-primary" />
                  </div>
                </div>
              </div>
            }
            caption="The visual is an external React slot, so it can be a product interface, an image, or a tangible outcome."
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
