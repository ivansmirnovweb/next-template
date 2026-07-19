import { env } from "@/lib/env";

type SiteConfig = {
  description: string;
  language: string;
  locale: string;
  name: string;
  titleTemplate: string;
};

export const SITE_CONFIG: SiteConfig = {
  name: "Next Template",
  description:
    "Reusable Next.js template with SSR-safe providers and API patterns.",
  language: "en",
  locale: "en_US",
  titleTemplate: "%s | Next Template",
};

export const SITE_URL = new URL(env.NEXT_PUBLIC_SITE_URL);
