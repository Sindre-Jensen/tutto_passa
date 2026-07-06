import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { italianno, montserrat, playfair, sourceSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tuttopassa.com"),
  title: {
    default: "Tutto Passa — Mediterranean Lifestyle",
    template: "%s | Tutto Passa",
  },
  description:
    "Discover the Mediterranean way of life — curated coastal towns, cultural stories, and slow living.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Tutto Passa",
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
