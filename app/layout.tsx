import type { Metadata } from "next";
import type { HeaderLinkItem } from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Compass } from "lucide-react";

import Providers from "./providers";
import "./globals.css";
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";
import { HeaderSimple } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Template",
  description:
    "Reusable Next.js template with SSR-safe providers and API patterns.",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground">
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
          <Footer />
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
