import type { Metadata } from "next";
import type { FooterLinkItem, FooterSocialLink } from "@/components/Footer";
import type { HeaderLinkItem } from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Compass, Globe, Layers3, Waypoints } from "lucide-react";

import Providers from "./providers";
import "./globals.css";
import { Toaster } from "sonner";
import { FooterSimple } from "@/components/Footer";
import { HeaderSimple } from "@/components/Header";
import { SITE_CONFIG, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: SITE_CONFIG.name,
    template: SITE_CONFIG.titleTemplate,
  },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: "/",
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WEBSITE_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_URL.toString(),
}).replace(/</g, "\\u003c");

const HEADER_NAVIGATION: HeaderLinkItem[] = [
  {
    label: "Components",
    href: "/components",
  },
  {
    label: "Sections",
    href: "/sections",
  },
];

const FOOTER_NAVIGATION: FooterLinkItem[] = [
  {
    label: "Components",
    href: "/components",
  },
  {
    label: "Sections",
    href: "/sections",
  },
  {
    label: "API health",
    href: "/api/health",
  },
];

const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <Waypoints className="size-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Globe className="size-4" />,
  },
  {
    label: "Stack",
    href: "/sections",
    icon: <Layers3 className="size-4" />,
  },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={SITE_CONFIG.language}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: WEBSITE_JSON_LD }}
        />
        <Providers>
          <HeaderSimple
            logo={{
              label: "Next Template",
              href: "/",
              subtitle: "Reusable App Router starter",
              icon: <Compass className="size-4" />,
            }}
            navigation={HEADER_NAVIGATION}
            cta={{
              label: "Browse sections",
              href: "/sections",
              variant: "outline",
            }}
            secondaryLinks={[{ label: "Home", href: "/" }]}
          />
          <main>{children}</main>
          <FooterSimple
            logo={{
              label: "Next Template",
              href: "/",
              subtitle: "Reusable App Router starter",
              icon: <Compass className="size-4" />,
            }}
            navigation={FOOTER_NAVIGATION}
            socialLinks={FOOTER_SOCIAL_LINKS}
            copyright={`© ${new Date().getFullYear()} Next Template. Built for maintainable App Router projects.`}
            legalLinks={[
              { label: "Privacy policy", href: "/" },
              { label: "Terms of use", href: "/sections" },
            ]}
          />
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
