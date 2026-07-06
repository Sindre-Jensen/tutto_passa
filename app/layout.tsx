import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { italianno, montserrat, playfair, sourceSans } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tutto Passa — Mediterranean Lifestyle",
    template: "%s | Tutto Passa",
  },
  description: siteConfig.description,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Tutto Passa",
    title: "Tutto Passa — Mediterranean Lifestyle",
    description: siteConfig.description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Tutto Passa — Mediterranean lifestyle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutto Passa — Mediterranean Lifestyle",
    description: siteConfig.description,
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${italianno.variable} ${montserrat.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
