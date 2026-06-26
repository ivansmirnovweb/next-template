'use client';

import { MousePointerClick, Sparkles } from 'lucide-react';

import { ShowcaseCard } from './ShowcaseCard';
import { ShowcaseSection } from './ShowcaseSection';
import { StateGrid } from './StateGrid';
import { StateTile } from './StateTile';
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

export const DialogShowcase = () => {
  return (
    <ShowcaseSection
      id="dialog-composition"
      title="Dialog Composition"
      description="Dialog layouts with footer actions and optional close affordance."
    >
      <ShowcaseCard>
        <StateGrid columns="xl:grid-cols-2">
          <StateTile label="Default dialog">
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
                  12 components changed, 3 of them include new invalid or
                  disabled states that should be reviewed in both themes.
                </div>
                <DialogFooter showCloseButton>
                  <Button>Publish changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </StateTile>
          <StateTile label="Without top close">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Sparkles />
                  Open compact dialog
                </Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>Review compact flow</DialogTitle>
                  <DialogDescription>
                    This variation relies on explicit footer actions instead of
                    the top-right close button.
                  </DialogDescription>
                </DialogHeader>
                <div className="text-sm text-muted-foreground">
                  Use this layout when the dialog should steer attention toward
                  a finite decision set.
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </StateTile>
        </StateGrid>
      </ShowcaseCard>
    </ShowcaseSection>
  );
};
