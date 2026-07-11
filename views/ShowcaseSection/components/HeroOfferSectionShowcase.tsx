import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import { HeroOffer } from "@/components/Hero";
import { Badge } from "@/components/ui/badge";

import { ShowcaseSectionPreviewCard } from "./ShowcaseSectionPreviewCard";
import { ShowcaseSectionPreviewFrame } from "./ShowcaseSectionPreviewFrame";

export const HeroOfferSectionShowcase = () => {
  return (
    <ShowcaseSectionPreviewCard
      eyebrow="HeroOffer"
      title="One clear commercial promise, followed by one clear action"
      description="A focused entry point for teams that need the value proposition understood before any supporting detail."
    >
      <ShowcaseSectionPreviewFrame
        preview={
          <HeroOffer
            eyebrow={
              <Badge variant="outline" className="rounded-full px-3 py-1">
                New workflow
              </Badge>
            }
            title="Turn every handoff into a shared next step"
            description="Coordinate incoming customer work across the team without losing context, ownership, or momentum."
            primaryAction={{ label: "See the workflow", href: "#workflow" }}
            secondaryAction={{
              label: "Read the guide",
              href: "#guide",
              variant: "outline",
            }}
            trust={
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                Start with your existing support process.
              </span>
            }
            visual={
              <div className="rounded-lg bg-card p-5 sm:p-7">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-medium">Escalation brief</span>
                  <Sparkles className="size-4 text-primary" />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="rounded-lg bg-muted p-3 text-sm text-muted-foreground">
                    Context attached automatically
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-primary/25 bg-primary/5 p-3 text-sm">
                    <span className="font-medium">Owner confirmed</span>
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </div>
            }
          />
        }
      />
    </ShowcaseSectionPreviewCard>
  );
};
