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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DSA & System Design by Anindya Dey",
    template: "%s | DSA & System Design",
  },
  description:
    "A pattern-driven reference for Data Structures & Algorithms and System Design, with brute-force to optimal solutions in C++.",
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
        <SiteHeader />
        <main className="flex-1 pb-16 sm:pb-24">{children}</main>
        <SiteFooter />
        <MobileTabBar />
      </body>
    </html>
  );
}
