import type { ImageProps } from "next/image";

export type AboutAction = {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
};

export type AboutImage = {
  src: ImageProps["src"];
  alt: string;
  objectPosition?: string;
};

export type AboutFact = {
  id: string;
  value: string;
  label: string;
  description?: string;
};

export type AboutOverviewProps = {
  title: string;
  paragraphs: string[];
  image?: AboutImage;
  facts?: AboutFact[];
  action?: AboutAction;
  className?: string;
};

export type AboutStoryStage = {
  id: string;
  title: string;
  description: string;
  label?: string;
};

export type AboutStoryProps = {
  title: string;
  intro: string;
  problem: string;
  idea: string;
  stages: AboutStoryStage[];
  image?: AboutImage;
  action?: AboutAction;
  className?: string;
};

export type AboutPerson = {
  id: string;
  name: string;
  role: string;
  image: AboutImage;
  description: string;
  facts?: string[];
  action?: AboutAction;
};

export type AboutPeopleProps = {
  title: string;
  description?: string;
  people: AboutPerson[];
  className?: string;
};
