import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Online Keel — Custom websites, built with direction", template: "%s — Online Keel" },
  description: site.description,
  keywords: ["author website design", "Orlando web design", "custom website design", "speaker website", "small business website"],
  openGraph: { type: "website", url: site.url, siteName: site.name, title: "Online Keel — Custom websites, built with direction", description: site.description, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Online Keel" }] },
  twitter: { card: "summary_large_image", title: "Online Keel — Custom websites, built with direction", description: site.description, images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
