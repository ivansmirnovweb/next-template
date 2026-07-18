import type { ImageProps } from "next/image";
import type { ReactNode } from "react";

export type TestimonialsSectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export type TestimonialsImage = {
  src: ImageProps["src"];
  alt: string;
  objectPosition?: string;
};

export type TestimonialsAuthor = {
  name: string;
  role?: string;
  company?: string;
  avatar?: TestimonialsImage;
};

export type TestimonialsSource = {
  label: string;
  href: string;
};

export type TestimonialsFeaturedMedia =
  | {
      type: "image";
      image: TestimonialsImage;
    }
  | {
      type: "content";
      content: ReactNode;
    };

export type TestimonialsCollectionItem = {
  id: string;
  quote: string;
  author: TestimonialsAuthor;
  rating?: 1 | 2 | 3 | 4 | 5;
  logo?: TestimonialsImage;
  source?: TestimonialsSource;
};

export type TestimonialsCollectionProps = TestimonialsSectionProps & {
  items: TestimonialsCollectionItem[];
};

export type TestimonialsFeaturedProps = TestimonialsSectionProps & {
  quote: string;
  author: TestimonialsAuthor;
  logo?: TestimonialsImage;
  result?: string;
  source?: TestimonialsSource;
  media?: TestimonialsFeaturedMedia;
};

export type TestimonialsStoryItem = {
  id: string;
  quote: string;
  author: TestimonialsAuthor;
  context: string;
  situation: string;
  outcome: string;
  metric?: string;
  image?: TestimonialsImage;
  source?: TestimonialsSource;
};

export type TestimonialsStoriesProps = TestimonialsSectionProps & {
  items: TestimonialsStoryItem[];
};
