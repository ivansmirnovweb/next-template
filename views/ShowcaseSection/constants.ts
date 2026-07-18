import { FooterColumnsSectionShowcase } from "./components/FooterColumnsSectionShowcase";
import { FooterSimpleSectionShowcase } from "./components/FooterSimpleSectionShowcase";
import { FooterWithContactsSectionShowcase } from "./components/FooterWithContactsSectionShowcase";
import { BenefitsContrastSectionShowcase } from "./components/BenefitsContrastSectionShowcase";
import { BenefitsOutcomesSectionShowcase } from "./components/BenefitsOutcomesSectionShowcase";
import { BenefitsVisualSectionShowcase } from "./components/BenefitsVisualSectionShowcase";
import { AboutOverviewSectionShowcase } from "./components/AboutOverviewSectionShowcase";
import { AboutPeopleSectionShowcase } from "./components/AboutPeopleSectionShowcase";
import { AboutStorySectionShowcase } from "./components/AboutStorySectionShowcase";
import { ServicesCatalogSectionShowcase } from "./components/ServicesCatalogSectionShowcase";
import { ServicesFeaturedSectionShowcase } from "./components/ServicesFeaturedSectionShowcase";
import { ServicesGuidedSectionShowcase } from "./components/ServicesGuidedSectionShowcase";
import { WorksCaseStudiesSectionShowcase } from "./components/WorksCaseStudiesSectionShowcase";
import { WorksFeaturedSectionShowcase } from "./components/WorksFeaturedSectionShowcase";
import { WorksGallerySectionShowcase } from "./components/WorksGallerySectionShowcase";
import { HeaderCenteredSectionShowcase } from "./components/HeaderCenteredSectionShowcase";
import { HeaderSimpleSectionShowcase } from "./components/HeaderSimpleSectionShowcase";
import { HeaderWithContactsSectionShowcase } from "./components/HeaderWithContactsSectionShowcase";
import { HeroOfferSectionShowcase } from "./components/HeroOfferSectionShowcase";
import { HeroPersonalSectionShowcase } from "./components/HeroPersonalSectionShowcase";
import { HeroProofSectionShowcase } from "./components/HeroProofSectionShowcase";
import { HeroShowcaseSectionShowcase } from "./components/HeroShowcaseSectionShowcase";
import { ProcessCollaborationSectionShowcase } from "./components/ProcessCollaborationSectionShowcase";
import { ProcessDeliverablesSectionShowcase } from "./components/ProcessDeliverablesSectionShowcase";
import { ProcessStepsSectionShowcase } from "./components/ProcessStepsSectionShowcase";
import type { ShowcaseSectionEntry, ShowcaseSectionGroup } from "./types";

export const showcaseSectionEntries: ShowcaseSectionEntry[] = [
  {
    slug: "header-simple",
    title: "HeaderSimple",
    description:
      "Compact product header with a centered nav rail, one CTA, and a sheet-based mobile menu.",
    group: "headers",
    Component: HeaderSimpleSectionShowcase,
  },
  {
    slug: "header-with-contacts",
    title: "HeaderWithContacts",
    description:
      "Two-tier service header that adds direct contact data without weakening the primary row.",
    group: "headers",
    Component: HeaderWithContactsSectionShowcase,
  },
  {
    slug: "header-centered",
    title: "HeaderCentered",
    description:
      "Editorial header with split navigation groups and a centered brand mark.",
    group: "headers",
    Component: HeaderCenteredSectionShowcase,
  },
  {
    slug: "hero-offer",
    title: "HeroOffer",
    description:
      "Offer-led hero that makes the audience, value, and next action immediately clear.",
    group: "heroes",
    Component: HeroOfferSectionShowcase,
  },
  {
    slug: "hero-personal",
    title: "HeroPersonal",
    description:
      "Portrait-led hero for a personal brand, combining a clear position, direct actions, and concise credibility signals.",
    group: "heroes",
    Component: HeroPersonalSectionShowcase,
  },
  {
    slug: "hero-proof",
    title: "HeroProof",
    description:
      "Evidence-led hero that reinforces one offer with outcomes, ratings, guarantees, and customer signals.",
    group: "heroes",
    Component: HeroProofSectionShowcase,
  },
  {
    slug: "hero-showcase",
    title: "HeroShowcase",
    description:
      "Demonstration-led hero that gives a product or result its own decisive visual stage.",
    group: "heroes",
    Component: HeroShowcaseSectionShowcase,
  },
  {
    slug: "about-overview",
    title: "AboutOverview",
    description:
      "A concise company introduction that connects its work, audience, and concrete difference.",
    group: "about",
    Component: AboutOverviewSectionShowcase,
  },
  {
    slug: "about-story",
    title: "AboutStory",
    description:
      "A compact origin story that connects the original problem to the way the work is done today.",
    group: "about",
    Component: AboutStorySectionShowcase,
  },
  {
    slug: "about-people",
    title: "AboutPeople",
    description:
      "Professional profiles that explain who leads the work and what each person brings to it.",
    group: "about",
    Component: AboutPeopleSectionShowcase,
  },
  {
    slug: "benefits-outcomes",
    title: "BenefitsOutcomes",
    description:
      "Outcome-led benefits that explain the concrete result and the mechanism behind it.",
    group: "benefits",
    Component: BenefitsOutcomesSectionShowcase,
  },
  {
    slug: "benefits-contrast",
    title: "BenefitsContrast",
    description:
      "Problem-to-solution benefits that make a familiar risk and its resolution easy to compare.",
    group: "benefits",
    Component: BenefitsContrastSectionShowcase,
  },
  {
    slug: "benefits-visual",
    title: "BenefitsVisual",
    description:
      "Visual benefits that use a meaningful image or interface fragment to make the value tangible.",
    group: "benefits",
    Component: BenefitsVisualSectionShowcase,
  },
  {
    slug: "services-catalog",
    title: "ServicesCatalog",
    description:
      "Equal-weight service cards for scanning a complete offer and opening the relevant detail.",
    group: "services",
    Component: ServicesCatalogSectionShowcase,
  },
  {
    slug: "services-guided",
    title: "ServicesGuided",
    description:
      "Need-led service choices that connect a visitor’s situation to a clear next direction.",
    group: "services",
    Component: ServicesGuidedSectionShowcase,
  },
  {
    slug: "services-featured",
    title: "ServicesFeatured",
    description:
      "A commercially focused service section with one lead offer and supporting directions.",
    group: "services",
    Component: ServicesFeaturedSectionShowcase,
  },
  {
    slug: "works-gallery",
    title: "WorksGallery",
    description:
      "An image-led portfolio grid that makes a varied body of work quick to browse without losing the story behind each project.",
    group: "works",
    Component: WorksGallerySectionShowcase,
  },
  {
    slug: "works-featured",
    title: "WorksFeatured",
    description:
      "A lead-project composition that gives the strongest work room for its visual, context, and contribution.",
    group: "works",
    Component: WorksFeaturedSectionShowcase,
  },
  {
    slug: "works-case-studies",
    title: "WorksCaseStudies",
    description:
      "A case-study pattern that makes the challenge, the response, and the result independently easy to evaluate.",
    group: "works",
    Component: WorksCaseStudiesSectionShowcase,
  },
  {
    slug: "process-steps",
    title: "ProcessSteps",
    description:
      "A clear customer journey that makes each step from first contact to result easy to scan.",
    group: "process",
    Component: ProcessStepsSectionShowcase,
  },
  {
    slug: "process-deliverables",
    title: "ProcessDeliverables",
    description:
      "A stage-by-stage process that keeps the concrete result for the client in focus.",
    group: "process",
    Component: ProcessDeliverablesSectionShowcase,
  },
  {
    slug: "process-collaboration",
    title: "ProcessCollaboration",
    description:
      "A shared process that separates client and team responsibilities without becoming a table.",
    group: "process",
    Component: ProcessCollaborationSectionShowcase,
  },
  {
    slug: "footer-simple",
    title: "FooterSimple",
    description:
      "Compact footer with brand, short navigation, social links, and a legal row.",
    group: "footers",
    Component: FooterSimpleSectionShowcase,
  },
  {
    slug: "footer-columns",
    title: "FooterColumns",
    description:
      "Navigation-heavy footer with dynamic link groups, contacts, and mobile accordions.",
    group: "footers",
    Component: FooterColumnsSectionShowcase,
  },
  {
    slug: "footer-with-contacts",
    title: "FooterWithContacts",
    description:
      "Contact-first footer that prioritizes direct outreach, hours, and a final CTA.",
    group: "footers",
    Component: FooterWithContactsSectionShowcase,
  },
];

export const showcaseSectionEntryBySlug: Record<string, ShowcaseSectionEntry> =
  Object.fromEntries(
    showcaseSectionEntries.map((entry) => [entry.slug, entry]),
  );

export const showcaseSectionEntriesByGroup = showcaseSectionEntries.reduce<
  Record<ShowcaseSectionGroup, ShowcaseSectionEntry[]>
>(
  (accumulator, entry) => {
    accumulator[entry.group].push(entry);
    return accumulator;
  },
  {
    headers: [],
    heroes: [],
    about: [],
    benefits: [],
    services: [],
    works: [],
    process: [],
    footers: [],
  },
);
