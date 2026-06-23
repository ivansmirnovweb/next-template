import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ShowcasePageShell } from '@/app/showcase/_components/ShowcasePageShell';
import {
  getAdjacentShowcaseEntries,
  getShowcaseEntry,
  getShowcaseStaticParams,
} from '@/app/showcase/components/_components/ShowcaseRegistry';

type ShowcaseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getShowcaseStaticParams();
}

export async function generateMetadata({
  params,
}: ShowcaseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getShowcaseEntry(slug);

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

const ShowcaseDetailPage = async ({ params }: ShowcaseDetailPageProps) => {
  const { slug } = await params;
  const entry = getShowcaseEntry(slug);

  if (!entry) {
    notFound();
  }

  const { previous, next } = getAdjacentShowcaseEntries(slug);
  const Component = entry.Component;

  return (
    <ShowcasePageShell entry={entry} previous={previous} next={next}>
      <Component anchors={entry.anchors} />
    </ShowcasePageShell>
  );
};

export default ShowcaseDetailPage;
