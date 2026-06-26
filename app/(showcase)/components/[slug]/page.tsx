import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAdjacentComponents } from '@/views/showcaseComponent/helpers/getAdjacentComponents';
import { ShowcaseComponentPage } from '@/views/showcaseComponent';
import {
  showcaseEntries,
  showcaseEntryBySlug,
} from '@/views/showcaseComponent/constants';

type ShowcaseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return showcaseEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: ShowcaseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = showcaseEntryBySlug[slug];

  if (!entry) {
    return {
      title: 'Component showcase not found',
    };
  }

  return {
    title: `${entry.title} | Component Showcase`,
    description: entry.description,
  };
}

export default async function Page({ params }: ShowcaseDetailPageProps) {
  const { slug } = await params;
  const entry = showcaseEntryBySlug[slug];

  if (!entry) {
    notFound();
  }

  const { previous, next } = getAdjacentComponents(slug);

  return (
    <ShowcaseComponentPage entry={entry} previous={previous} next={next} />
  );
}
