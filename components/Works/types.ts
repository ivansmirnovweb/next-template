import type { ImageProps } from "next/image";

export type WorksSectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export type WorksAction = {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "link";
};

export type WorksImageAspectRatio = "landscape" | "portrait" | "square";

export type WorksImage = {
  src: ImageProps["src"];
  alt: string;
  objectPosition?: string;
  aspectRatio?: WorksImageAspectRatio;
};

export type WorksGalleryItem = {
  id: string;
  title: string;
  image: WorksImage;
  category: string;
  description: string;
  tags?: string[];
  action?: WorksAction;
};

export type WorksGalleryProps = WorksSectionProps & {
  items: WorksGalleryItem[];
};

export type WorksFeaturedItem = {
  id: string;
  title: string;
  image: WorksImage;
  context: string;
  services: string[];
  result?: string;
  action?: WorksAction;
};

export type WorksFeaturedProps = WorksSectionProps & {
  items: WorksFeaturedItem[];
};

export type WorksCaseStudyItem = {
  id: string;
  title: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
  metric?: string;
  image?: WorksImage;
  duration?: string;
  industry?: string;
  services?: string[];
  action?: WorksAction;
};

export type WorksCaseStudiesProps = WorksSectionProps & {
  items: WorksCaseStudyItem[];
};
