import { Bell, Sparkles } from "lucide-react";

import { ShowcaseCard } from "./ShowcaseCard";
import { ShowcaseSection } from "./ShowcaseSection";
import { StateGrid } from "./StateGrid";
import { StateTile } from "./StateTile";
import { Badge } from "@/components/ui/badge";

const badgeVariants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
];

export const BadgeShowcase = () => {
  return (
    <div className="space-y-8">
      <ShowcaseSection
        id="variants"
        title="Variants"
        description="Every badge variant rendered as a compact status token."
      >
        <ShowcaseCard>
          <StateGrid columns="md:grid-cols-2">
            {badgeVariants.map((variant) => (
              <StateTile key={variant} label={variant}>
                <Badge variant={variant}>Release ready</Badge>
              </StateTile>
            ))}
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>

      <ShowcaseSection
        id="with-icon"
        title="With Icon"
        description="Icon-bearing badges for alerts, activity, and lightweight metadata."
      >
        <ShowcaseCard>
          <StateGrid columns="md:grid-cols-2">
            <StateTile label="Leading icon">
              <Badge>
                <Sparkles />
                New pattern
              </Badge>
              <Badge variant="secondary">
                <Bell />3 updates
              </Badge>
            </StateTile>
            <StateTile label="Muted contexts">
              <Badge variant="outline">
                <Sparkles />
                Draft
              </Badge>
              <Badge variant="ghost">
                <Bell />
                Quiet state
              </Badge>
            </StateTile>
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>
    </div>
  );
};
