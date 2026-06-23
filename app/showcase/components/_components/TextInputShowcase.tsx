import { FieldStack } from '@/app/showcase/components/_components/FieldStack';
import { ShowcaseCard } from '@/app/showcase/_components/ShowcaseCard';
import { ShowcaseSection } from '@/app/showcase/_components/ShowcaseSection';
import { StateGrid } from '@/app/showcase/components/_components/StateGrid';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const TextInputShowcase = () => {
  return (
    <div className="space-y-8">
      <ShowcaseSection
        id="field-states"
        title="Field States"
        description="Single-line inputs in empty, filled, invalid, disabled, and labeled states."
      >
        <ShowcaseCard>
          <StateGrid>
            <FieldStack label="Empty">
              <Input placeholder="name@company.com" />
            </FieldStack>
            <FieldStack label="Filled">
              <Input defaultValue="ops@northstar.dev" />
            </FieldStack>
            <FieldStack label="Invalid">
              <Input aria-invalid defaultValue="missing-domain" />
            </FieldStack>
            <FieldStack label="Disabled">
              <Input disabled defaultValue="read-only@example.com" />
            </FieldStack>
            <FieldStack label="Paired label">
              <Label htmlFor="showcase-work-email">Work email</Label>
              <Input id="showcase-work-email" placeholder="hello@company.com" />
            </FieldStack>
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>

      <ShowcaseSection
        id="textarea"
        title="Textarea"
        description="Long-form input states for notes, comments, and supporting copy."
      >
        <ShowcaseCard>
          <StateGrid>
            <FieldStack label="Empty">
              <Textarea placeholder="Add release notes, comments, or context..." />
            </FieldStack>
            <FieldStack label="Filled">
              <Textarea defaultValue="Shipping audit mode for the component showcase with theme-aware states." />
            </FieldStack>
            <FieldStack label="Invalid">
              <Label htmlFor="showcase-notes">Notes</Label>
              <Textarea
                id="showcase-notes"
                aria-invalid
                defaultValue="Too short"
              />
            </FieldStack>
            <FieldStack label="Disabled">
              <Textarea disabled defaultValue="Archived sprint summary" />
            </FieldStack>
          </StateGrid>
        </ShowcaseCard>
      </ShowcaseSection>
    </div>
  );
};
