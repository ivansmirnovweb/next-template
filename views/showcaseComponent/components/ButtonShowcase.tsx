import { ArrowRight, MousePointerClick, Sparkles } from 'lucide-react';

import { ShowcaseCard } from './ShowcaseCard';
import { ShowcaseSection } from './ShowcaseSection';
import { StateGrid } from './StateGrid';
import { StateTile } from './StateTile';
import { Button } from '@/components/ui/button';

const buttonVariants = [
  'default',
  'outline',
  'secondary',
  'ghost',
  'destructive',
  'link',
] as const;

export const ButtonShowcase = () => {
  return (
    <div className="space-y-8">
      <ShowcaseSection
        id="variants"
        title="Variants"
        description="Core visual variants rendered side by side for quick comparison in both themes."
      >
        <ShowcaseCard>
          <StateGrid columns="md:grid-cols-2">
            {buttonVariants.map((variant) => (
              <StateTile key={variant} label={variant}>
                <Button variant={variant}>
                  {variant === 'link' ? 'Read guidelines' : 'Primary action'}
                </Button>
              </StateTile>
            ))}
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>

      <ShowcaseSection
        id="sizes-and-states"
        title="Sizes And States"
        description="Action density, icon treatments, and common disabled combinations."
      >
        <ShowcaseCard>
          <StateGrid columns="md:grid-cols-2">
            <StateTile label="Text sizes">
              {(['xs', 'sm', 'default', 'lg'] as const).map((size) => (
                <Button key={size} size={size}>
                  Continue
                </Button>
              ))}
            </StateTile>
            <StateTile label="Icon sizes">
              {(['icon-xs', 'icon-sm', 'icon', 'icon-lg'] as const).map(
                (size) => (
                  <Button key={size} size={size} variant="outline">
                    <MousePointerClick />
                  </Button>
                ),
              )}
            </StateTile>
            <StateTile label="With icon">
              <Button>
                Publish
                <ArrowRight />
              </Button>
              <Button variant="secondary">
                <Sparkles />
                Upgrade
              </Button>
            </StateTile>
            <StateTile label="Disabled">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>
                Disabled
              </Button>
              <Button size="icon" disabled>
                <MousePointerClick />
              </Button>
            </StateTile>
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>
    </div>
  );
};
