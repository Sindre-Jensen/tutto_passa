import type { MetadataRoute } from "next";
import {
  getAllDestinationSlugs,
  getAllRankings,
  getAllStorySlugs,
} from "@/lib/content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tuttopassa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const destinations = getAllDestinationSlugs().map((slug) => ({
    url: `${baseUrl}/destinations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const stories = getAllStorySlugs().map((slug) => ({
    url: `${baseUrl}/stories/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const rankings = getAllRankings().map((r) => ({
    url: `${baseUrl}/rankings/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/destinations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/rankings`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/stories`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/newsletter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/philosophy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    ...destinations,
    ...stories,
    ...rankings,
  ];
}
