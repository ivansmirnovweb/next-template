'use client';

import { ChevronDown, MousePointerClick, PanelLeft } from 'lucide-react';

import { ShowcaseCard } from '@/app/showcase/_components/ShowcaseCard';
import { ShowcaseSection } from '@/app/showcase/_components/ShowcaseSection';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export const DialogSheetShowcase = () => {
  return (
    <ShowcaseSection
      id="overlay-behavior"
      title="Overlay Behavior"
      description="Real dialog and sheet interactions for layout, motion, and content-density checks."
    >
      <ShowcaseCard>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <MousePointerClick />
                Open dialog
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Publish component updates</DialogTitle>
                <DialogDescription>
                  Review the changed states before pushing new UI patterns to
                  the shared library.
                </DialogDescription>
              </DialogHeader>
              <div className="rounded-xl border border-border/70 bg-muted/35 p-4 text-sm text-muted-foreground">
                12 components changed, 3 of them include new invalid or disabled
                states that should be reviewed in both themes.
              </div>
              <DialogFooter showCloseButton>
                <Button>Publish changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <ChevronDown />
                Open right sheet
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Right sheet</SheetTitle>
                <SheetDescription>
                  Useful for inspector panels, filters, and secondary actions.
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
        </div>
      </ShowcaseCard>
    </ShowcaseSection>
  );
};
