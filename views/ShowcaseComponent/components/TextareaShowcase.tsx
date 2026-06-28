import { FieldStack } from "./FieldStack";
import { ShowcaseCard } from "./ShowcaseCard";
import { ShowcaseSection } from "./ShowcaseSection";
import { StateGrid } from "./StateGrid";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const TextareaShowcase = () => {
  return (
    <ShowcaseSection
      id="textarea-states"
      title="Textarea States"
      description="Long-form field states for notes, review copy, and supporting content."
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
  );
};
