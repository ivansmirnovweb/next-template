'use client';

import { useId, useState } from 'react';

import { FieldStack } from './FieldStack';
import { ShowcaseCard } from './ShowcaseCard';
import { ShowcaseSection } from './ShowcaseSection';
import { StateGrid } from './StateGrid';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export const CheckboxShowcase = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const checkboxId = useId();

  return (
    <ShowcaseSection
      id="checkbox-states"
      title="Checkbox States"
      description="Unchecked, checked, indeterminate, disabled, and invalid checkbox states with label pairings."
    >
      <ShowcaseCard>
        <StateGrid>
          <FieldStack label="Interactive">
            <div className="flex items-center gap-2">
              <Checkbox
                id={checkboxId}
                checked={checkboxChecked}
                onCheckedChange={(checked) =>
                  setCheckboxChecked(checked === true)
                }
              />
              <Label htmlFor={checkboxId}>Sync tokens automatically</Label>
            </div>
          </FieldStack>
          <FieldStack label="Unchecked">
            <div className="flex items-center gap-2">
              <Checkbox />
              <Label>Waiting for approval</Label>
            </div>
          </FieldStack>
          <FieldStack label="Checked">
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked />
              <Label>Enabled by default</Label>
            </div>
          </FieldStack>
          <FieldStack label="Indeterminate">
            <div className="flex items-center gap-2">
              <Checkbox checked="indeterminate" />
              <Label>Partially selected</Label>
            </div>
          </FieldStack>
          <FieldStack label="Disabled">
            <div className="flex items-center gap-2">
              <Checkbox disabled />
              <Label>Archived option</Label>
            </div>
          </FieldStack>
          <FieldStack label="Invalid">
            <div className="flex items-center gap-2">
              <Checkbox aria-invalid defaultChecked />
              <Label>Required acknowledgement</Label>
            </div>
          </FieldStack>
        </StateGrid>
      </ShowcaseCard>
    </ShowcaseSection>
  );
};
