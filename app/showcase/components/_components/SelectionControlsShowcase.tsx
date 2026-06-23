'use client';

import { useId, useState } from 'react';

import { FieldStack } from '@/app/showcase/components/_components/FieldStack';
import { ShowcaseCard } from '@/app/showcase/_components/ShowcaseCard';
import { ShowcaseSection } from '@/app/showcase/_components/ShowcaseSection';
import { StateGrid } from '@/app/showcase/components/_components/StateGrid';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';

export const SelectionControlsShowcase = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [radioValue, setRadioValue] = useState('starter');

  const checkboxId = useId();
  const radioStarterId = useId();
  const radioGrowthId = useId();
  const radioScaleId = useId();
  const switchId = useId();

  return (
    <ShowcaseSection
      id="interactive-controls"
      title="Interactive Controls"
      description="Checkbox, radio, and switch states with live local state and validation treatments."
    >
      <ShowcaseCard>
        <StateGrid>
          <FieldStack label="Checkbox">
            <div className="flex flex-wrap items-center gap-3">
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
              <div className="flex items-center gap-2">
                <Checkbox defaultChecked />
                <Label>Default checked</Label>
              </div>
            </div>
          </FieldStack>
          <FieldStack label="Checkbox states">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox />
                <Label>Unchecked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox defaultChecked />
                <Label>Checked</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox disabled />
                <Label>Disabled</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox aria-invalid defaultChecked />
                <Label>Invalid</Label>
              </div>
            </div>
          </FieldStack>
          <FieldStack label="Radio group">
            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
              <div className="flex items-center gap-2">
                <RadioGroupItem id={radioStarterId} value="starter" />
                <Label htmlFor={radioStarterId}>Starter</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id={radioGrowthId} value="growth" />
                <Label htmlFor={radioGrowthId}>Growth</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id={radioScaleId} value="scale" disabled />
                <Label htmlFor={radioScaleId}>Scale (disabled)</Label>
              </div>
            </RadioGroup>
          </FieldStack>
          <FieldStack label="Invalid radio group">
            <RadioGroup aria-invalid defaultValue="design">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="design" />
                <Label>Design</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="engineering" />
                <Label>Engineering</Label>
              </div>
            </RadioGroup>
          </FieldStack>
          <FieldStack label="Switch">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch
                  id={switchId}
                  checked={switchChecked}
                  onCheckedChange={setSwitchChecked}
                />
                <Label htmlFor={switchId}>Audit mode</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch size="sm" />
                <Label>Small</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch defaultChecked disabled />
                <Label>Disabled</Label>
              </div>
            </div>
          </FieldStack>
        </StateGrid>
      </ShowcaseCard>
    </ShowcaseSection>
  );
};
