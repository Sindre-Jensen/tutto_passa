export const siteConfig = {
  name: "Tutto Passa",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tuttopassa.com",
  description:
    "Discover the Mediterranean way of life — curated coastal towns, cultural stories, and slow living.",
  social: {
    instagram: "https://instagram.com/tuttopassa",
    tiktok: "https://tiktok.com/@tuttopassa",
    pinterest: "https://pinterest.com/tuttopassa",
    youtube: "https://youtube.com/@tuttopassa",
  },
  contactEmail: "hello@tuttopassa.com",
} as const;
