import type { ReactNode } from "react";

export type ContactMethod = {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon?: ReactNode;
};

export type ContactAction = {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
};

export type ContactChannel = ContactMethod & {
  kind: string;
  description?: string;
  availability?: string;
  contactPerson?: string;
};

export type ContactsChannelsProps = {
  channels: ContactChannel[];
  title?: string;
  description?: string;
  className?: string;
};

export type ContactLocation = {
  id: string;
  title: string;
  address: string;
  hours?: string;
  phone?: ContactMethod;
  landmark?: string;
  accessibility?: string;
  directions?: ContactAction;
  map?: ReactNode;
};

export type ContactsLocationProps = {
  locations: ContactLocation[];
  title?: string;
  description?: string;
  className?: string;
};

export type ContactRoute = {
  id: string;
  title: string;
  description: string;
  owner: string;
  contacts: [ContactMethod, ...ContactMethod[]];
  responseTime?: string;
  action?: ContactAction;
};

export type ContactsRoutingProps = {
  routes: ContactRoute[];
  title?: string;
  description?: string;
  className?: string;
};
