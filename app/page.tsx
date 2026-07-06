import Link from "next/link";
import { CityCard } from "@/components/ui/CityCard";
import { HomeHero } from "@/components/ui/HomeHero";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { StoryCard } from "@/components/ui/StoryCard";
import {
  getAllStories,
  getFeaturedDestinations,
  getRankingBySlug,
} from "@/lib/content";

export default function HomePage() {
  const featured = getFeaturedDestinations(3);
  const stories = getAllStories().slice(0, 3);
  const ranking = getRankingBySlug("coastal-towns");
  const topRanked = ranking
    ? [...ranking.entries].sort((a, b) => b.scores.overall - a.scores.overall).slice(0, 5)
    : [];

  return (
    <>
      <HomeHero />

      <section className="bg-soft-beige/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="font-utility text-[10px] text-sage">CURATED</p>
              <h2 className="font-display mt-2 text-3xl text-deep-blue md:text-4xl">
                Featured Destinations
              </h2>
            </div>
            <Link
              href="/destinations"
              className="hidden text-sm text-deep-blue underline-offset-4 hover:underline md:inline"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featured.map((destination, i) => (
              <CityCard key={destination.slug} destination={destination} rank={i + 1} />
            ))}
          </div>
          <Link
            href="/destinations"
            className="mt-8 inline-block text-sm text-deep-blue underline-offset-4 hover:underline md:hidden"
          >
            View all destinations
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="mb-12">
          <p className="font-utility text-[10px] text-sage">FROM THE JOURNAL</p>
          <h2 className="font-display mt-2 text-3xl text-deep-blue md:text-4xl">The Journal</h2>
        </div>
        <div className="space-y-16">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
        <Link
          href="/stories"
          className="mt-12 inline-block text-sm text-deep-blue underline-offset-4 hover:underline"
        >
          Read all stories
        </Link>
      </section>

      {ranking && topRanked.length > 0 && (
        <section className="bg-sage/10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="font-utility text-[10px] text-sage">RANKINGS</p>
                <h2 className="font-display mt-2 text-3xl text-deep-blue md:text-4xl">
                  {ranking.title}
                </h2>
              </div>
              <Link
                href="/rankings/coastal-towns"
                className="text-sm text-deep-blue underline-offset-4 hover:underline"
              >
                Full table
              </Link>
            </div>
            <ol className="space-y-4">
              {topRanked.map((entry, i) => (
                <li key={entry.slug}>
                  <Link
                    href={`/destinations/${entry.slug}`}
                    className="flex items-center justify-between rounded-xl bg-cream/80 px-6 py-4 transition-colors duration-200 hover:bg-cream"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-utility text-[10px] text-sage">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="font-display text-lg text-deep-blue">{entry.city}</span>
                        <span className="ml-2 text-sm text-sage">{entry.country}</span>
                      </span>
                    </span>
                    <span className="font-medium text-deep-blue">{entry.scores.overall}/10</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:px-8 md:py-28">
        <p className="font-utility text-[10px] text-sage">NEWSLETTER</p>
        <h2 className="font-display mt-2 text-3xl text-deep-blue md:text-4xl">
          Slow living, in your inbox
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-navy/80">
          New city guides, rankings, and one story a month — the Mediterranean way of life,
          delivered without rush.
        </p>
        <div className="mx-auto mt-8 flex justify-center">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
