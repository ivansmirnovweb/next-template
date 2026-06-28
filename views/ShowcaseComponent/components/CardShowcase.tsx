import { Type } from 'lucide-react';

import { ShowcaseCard } from './ShowcaseCard';
import { ShowcaseSection } from './ShowcaseSection';
import { StateGrid } from './StateGrid';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const CardShowcase = () => {
  return (
    <div className="space-y-8">
      <ShowcaseSection
        id="content-grouping"
        title="Content Grouping"
        description="Default and compact card densities for dashboards, detail panels, and structured content blocks."
      >
        <ShowcaseCard>
          <StateGrid>
            <Card className="border border-border/70 bg-background/80">
              <CardHeader>
                <CardTitle>Default card</CardTitle>
                <CardDescription>
                  Primary content block with title, description, body, and
                  footer.
                </CardDescription>
                <CardAction>
                  <Button size="sm" variant="outline">
                    <Type />
                    Tokens
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                Review typography scale, spacing rhythm, and the hierarchy of
                supporting text.
              </CardContent>
              <CardFooter className="justify-between">
                <span className="text-muted-foreground">Updated 2 min ago</span>
                <Button size="sm">Open</Button>
              </CardFooter>
            </Card>
            <Card
              size="sm"
              className="border border-border/70 bg-background/80"
            >
              <CardHeader>
                <CardTitle>Compact card</CardTitle>
                <CardDescription>
                  Smaller density for secondary surfaces and dashboards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Keeps the same semantic structure with reduced spacing.
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">
                  Inspect
                </Button>
              </CardFooter>
            </Card>
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>

      <ShowcaseSection
        id="slot-structure"
        title="Slot Structure"
        description="Header, action, content, and footer slots working together on the same surface."
      >
        <ShowcaseCard>
          <Card className="border border-border/70 bg-background/80">
            <CardHeader>
              <CardTitle>Review checklist</CardTitle>
              <CardDescription>
                The slot model keeps metadata, actions, and body content
                aligned.
              </CardDescription>
              <CardAction>
                <Button size="sm" variant="ghost">
                  Refresh
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              Validate spacing between semantic regions before reusing the card
              in dashboards or detail panes.
            </CardContent>
            <CardFooter className="justify-between">
              <span className="text-muted-foreground">6 tasks remaining</span>
              <Button size="sm" variant="outline">
                Open checklist
              </Button>
            </CardFooter>
          </Card>
        </ShowcaseCard>
      </ShowcaseSection>
    </div>
  );
};
