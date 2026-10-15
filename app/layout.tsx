import type { Metadata, Viewport } from "next";
import "@fontsource-variable/quicksand/wght.css";
import "@fontsource-variable/nunito/wght.css";
import "@fontsource-variable/nunito/wght-italic.css";
import "@fontsource-variable/fira-code/wght.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileTabBar } from "@/components/mobile-tab-bar";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const siteDescription =
  "A pattern-driven reference for Data Structures & Algorithms, System Design, and AI/ML, with brute-force to optimal solutions in C++.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DSA, System Design & AI/ML by Anindya Dey",
    template: "%s | DSA, System Design & AI/ML",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "DSA, System Design & AI/ML",
    title: "DSA, System Design & AI/ML by Anindya Dey",
    description: siteDescription,
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSA, System Design & AI/ML by Anindya Dey",
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex min-h-dvh flex-col bg-paper font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1 pb-16 sm:pb-24">
          {children}
        </main>
        <SiteFooter />
        <MobileTabBar />
      </body>
    </html>
  );
}
