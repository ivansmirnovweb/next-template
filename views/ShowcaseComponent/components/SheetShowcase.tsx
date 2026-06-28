'use client';

import {
  ChevronDown,
  ChevronUp,
  PanelLeft,
  PanelRight,
  Sparkles,
} from 'lucide-react';

import { ShowcaseCard } from './ShowcaseCard';
import { ShowcaseSection } from './ShowcaseSection';
import { StateGrid } from './StateGrid';
import { StateTile } from './StateTile';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export const SheetShowcase = () => {
  return (
    <div className="space-y-8">
      <ShowcaseSection
        id="sheet-sides"
        title="Sheet Sides"
        description="Directional sheet layouts for side panels, drawers, and top or bottom surfaces."
      >
        <ShowcaseCard>
          <StateGrid columns="xl:grid-cols-2">
            <StateTile label="Right">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <PanelRight />
                    Open right sheet
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Right sheet</SheetTitle>
                    <SheetDescription>
                      Useful for inspector panels, filters, and secondary
                      actions.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="px-4 text-sm text-muted-foreground">
                    Validate spacing, close affordance, and content density on a
                    persistent side surface.
                  </div>
                  <SheetFooter>
                    <Button>Apply</Button>
                    <Button variant="outline">Save draft</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </StateTile>
            <StateTile label="Left">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary">
                    <PanelLeft />
                    Open left sheet
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Left sheet</SheetTitle>
                    <SheetDescription>
                      Alternative side confirms the API and motion behavior.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="px-4 text-sm text-muted-foreground">
                    This variant is useful for navigation drawers and contextual
                    tool rails.
                  </div>
                </SheetContent>
              </Sheet>
            </StateTile>
            <StateTile label="Top">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <ChevronUp />
                    Open top sheet
                  </Button>
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle>Top sheet</SheetTitle>
                    <SheetDescription>
                      Best suited for short, global banners or quick-entry
                      panels.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="px-4 pb-4 text-sm text-muted-foreground">
                    Keep content shallow when the sheet enters from the top
                    edge.
                  </div>
                </SheetContent>
              </Sheet>
            </StateTile>
            <StateTile label="Bottom">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <ChevronDown />
                    Open bottom sheet
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Bottom sheet</SheetTitle>
                    <SheetDescription>
                      Useful for mobile-friendly actions and short review flows.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="px-4 pb-4 text-sm text-muted-foreground">
                    This layout keeps actions close to the bottom edge on
                    compact screens.
                  </div>
                </SheetContent>
              </Sheet>
            </StateTile>
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>

      <ShowcaseSection
        id="sheet-close-button"
        title="Close Button"
        description="Optional top-right close affordance for explicit action-driven sheets."
      >
        <ShowcaseCard>
          <StateTile label="Without top close">
            <Sheet>
              <SheetTrigger asChild>
                <Button>
                  <Sparkles />
                  Open no-close sheet
                </Button>
              </SheetTrigger>
              <SheetContent side="right" showCloseButton={false}>
                <SheetHeader>
                  <SheetTitle>Review actions</SheetTitle>
                  <SheetDescription>
                    This variant relies on footer actions instead of a
                    persistent close icon.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </StateTile>
        </ShowcaseCard>
      </ShowcaseSection>
    </div>
  );
};
