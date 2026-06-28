'use client';

import { useId, useState } from 'react';

import { FieldStack } from './FieldStack';
import { ShowcaseCard } from './ShowcaseCard';
import { ShowcaseSection } from './ShowcaseSection';
import { StateGrid } from './StateGrid';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export const SwitchShowcase = () => {
  const [switchChecked, setSwitchChecked] = useState(true);
  const switchId = useId();

  return (
    <ShowcaseSection
      id="switch-states"
      title="Switch States"
      description="On, off, size scale, disabled, and invalid switch states for binary settings."
    >
      <ShowcaseCard>
        <StateGrid>
          <FieldStack label="Interactive">
            <div className="flex items-center gap-2">
              <Switch
                id={switchId}
                checked={switchChecked}
                onCheckedChange={setSwitchChecked}
              />
              <Label htmlFor={switchId}>Audit mode</Label>
            </div>
          </FieldStack>
          <FieldStack label="Off">
            <div className="flex items-center gap-2">
              <Switch />
              <Label>Disabled sync</Label>
            </div>
          </FieldStack>
          <FieldStack label="Small">
            <div className="flex items-center gap-2">
              <Switch size="sm" defaultChecked />
              <Label>Compact density</Label>
            </div>
          </FieldStack>
          <FieldStack label="Disabled">
            <div className="flex items-center gap-2">
              <Switch defaultChecked disabled />
              <Label>Managed externally</Label>
            </div>
          </FieldStack>
          <FieldStack label="Invalid">
            <div className="flex items-center gap-2">
              <Switch aria-invalid />
              <Label>Required system flag</Label>
            </div>
          </FieldStack>
        </StateGrid>
      </ShowcaseCard>
    </ShowcaseSection>
  );
};
