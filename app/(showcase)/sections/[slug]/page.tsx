import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ShowcaseSectionPage } from "@/views/ShowcaseSection";
import {
  showcaseSectionEntries,
  showcaseSectionEntryBySlug,
} from "@/views/ShowcaseSection/constants";
import { getAdjacentSections } from "@/views/ShowcaseSection/helpers/getAdjacentSections";

type ShowcaseSectionDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () => {
  return showcaseSectionEntries.map((entry) => ({ slug: entry.slug }));
};

export const generateMetadata = async ({
  params,
}: ShowcaseSectionDetailPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const entry = showcaseSectionEntryBySlug[slug];

  if (!entry) {
    return {
      title: "Section showcase not found",
    };
  }

  return {
    title: `${entry.title} | Section Showcase`,
    description: entry.description,
  };
};

export default async function Page({ params }: ShowcaseSectionDetailPageProps) {
  const { slug } = await params;
  const entry = showcaseSectionEntryBySlug[slug];

  if (!entry) {
    notFound();
  }

  const { previous, next } = getAdjacentSections(slug);

  return <ShowcaseSectionPage entry={entry} previous={previous} next={next} />;
}
