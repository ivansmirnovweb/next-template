'use client';

import { useState } from 'react';

import { ShowcaseCard } from '@/app/showcase/_components/ShowcaseCard';
import { ShowcaseSection } from '@/app/showcase/_components/ShowcaseSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const TabsShowcase = () => {
  const [tabsValue, setTabsValue] = useState('tokens');
  const [tabsLineValue, setTabsLineValue] = useState('usage');

  return (
    <div className="space-y-8">
      <ShowcaseSection
        id="default-tabs"
        title="Default Tabs"
        description="Standard tabs with a filled list treatment for page-local section switching."
      >
        <ShowcaseCard>
          <Tabs value={tabsValue} onValueChange={setTabsValue}>
            <TabsList>
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="patterns">Patterns</TabsTrigger>
              <TabsTrigger value="states">States</TabsTrigger>
            </TabsList>
            <TabsContent
              value="tokens"
              className="rounded-xl border border-border/70 bg-background/75 p-4"
            >
              Foundation tokens, spacing scale, and semantic colors.
            </TabsContent>
            <TabsContent
              value="patterns"
              className="rounded-xl border border-border/70 bg-background/75 p-4"
            >
              Recurring component recipes and composition rules.
            </TabsContent>
            <TabsContent
              value="states"
              className="rounded-xl border border-border/70 bg-background/75 p-4"
            >
              Disabled, invalid, selected, and interactive feedback states.
            </TabsContent>
          </Tabs>
        </ShowcaseCard>
      </ShowcaseSection>

      <ShowcaseSection
        id="line-tabs"
        title="Line Tabs"
        description="A lighter navigation pattern for quieter surfaces."
      >
        <ShowcaseCard>
          <Tabs value={tabsLineValue} onValueChange={setTabsLineValue}>
            <TabsList variant="line">
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
              <TabsTrigger value="dos">Dos / Don&apos;ts</TabsTrigger>
            </TabsList>
            <TabsContent
              value="usage"
              className="pt-3 text-sm text-muted-foreground"
            >
              Use line tabs when the surface is already visually quiet and you
              need lightweight section switching.
            </TabsContent>
            <TabsContent
              value="anatomy"
              className="pt-3 text-sm text-muted-foreground"
            >
              Trigger, active indicator, and content panel should stay linked
              without competing with page structure.
            </TabsContent>
            <TabsContent
              value="dos"
              className="pt-3 text-sm text-muted-foreground"
            >
              Keep labels short and avoid mixing too many active states on the
              same surface.
            </TabsContent>
          </Tabs>
        </ShowcaseCard>
      </ShowcaseSection>
    </div>
  );
};
