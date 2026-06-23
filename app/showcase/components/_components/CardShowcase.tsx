import { Type } from 'lucide-react';

import { ShowcaseCard } from '@/app/showcase/_components/ShowcaseCard';
import { ShowcaseSection } from '@/app/showcase/_components/ShowcaseSection';
import { StateGrid } from '@/app/showcase/components/_components/StateGrid';
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
                Primary content block with title, description, body, and footer.
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
          <Card size="sm" className="border border-border/70 bg-background/80">
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
  );
};
