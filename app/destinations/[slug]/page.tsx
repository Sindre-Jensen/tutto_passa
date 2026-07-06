import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  GuideSection,
  PlaceList,
  ScoreSidebar,
} from "@/components/destinations/GuideSections";
import {
  compileMdxContent,
  getAllDestinationSlugs,
  getDestinationBySlug,
} from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  return {
    title: destination.title,
    description: destination.tagline,
    openGraph: {
      title: `${destination.title} | Tutto Passa`,
      description: destination.tagline,
      images: [{ url: destination.heroImage }],
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const body = await compileMdxContent(destination.content);

  return (
    <article>
      <div className="relative flex min-h-[50vh] items-end md:min-h-[60vh]">
        <Image
          src={destination.heroImage}
          alt={destination.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-24 md:px-8 md:pb-16">
          <p className="font-utility text-[10px] text-text-on-photo-warm/80">
            {destination.country.toUpperCase()} · {destination.region.toUpperCase()}
          </p>
          <h1 className="font-display mt-2 text-4xl text-text-on-photo-warm md:text-6xl">
            {destination.title}
          </h1>
          <p className="font-script mt-2 text-2xl text-lemon md:text-3xl">{destination.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div className="prose-tutto text-navy/90">{body}</div>

            <GuideSection title="Why visit">
              <ul className="space-y-3">
                {destination.whyVisit.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy/80">
                    <span className="text-sage">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GuideSection>

            <GuideSection title="Best cafés">
              <PlaceList places={destination.bestCafes} />
            </GuideSection>

            <GuideSection title="Best restaurants">
              <PlaceList places={destination.bestRestaurants} />
            </GuideSection>

            <GuideSection title="Beaches">
              <ul className="space-y-6">
                {destination.beaches.map((beach) => (
                  <li key={beach.name} className="border-l-2 border-sage/40 pl-5">
                    <p className="font-medium text-deep-blue">{beach.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-navy/80">{beach.note}</p>
                    {beach.tags && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {beach.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-soft-beige px-3 py-0.5 text-xs text-sage"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </GuideSection>

            <GuideSection title="Sunset spots">
              <PlaceList places={destination.sunsetSpots} />
            </GuideSection>

            <GuideSection title="Walkability">
              <p className="text-sm leading-relaxed text-navy/80">{destination.walkability}</p>
            </GuideSection>

            <GuideSection title="Best neighbourhoods">
              <ul className="space-y-2">
                {destination.neighbourhoods.map((n) => (
                  <li key={n} className="text-sm text-navy/80">
                    {n}
                  </li>
                ))}
              </ul>
            </GuideSection>

            <GuideSection title="Local tips">
              <ul className="space-y-3">
                {destination.localTips.map((tip) => (
                  <li key={tip} className="text-sm leading-relaxed text-navy/80">
                    {tip}
                  </li>
                ))}
              </ul>
            </GuideSection>

            <GuideSection title="Day trips">
              <ul className="space-y-4">
                {destination.dayTrips.map((trip) => (
                  <li key={trip.name}>
                    <p className="font-medium text-deep-blue">{trip.name}</p>
                    <p className="mt-1 text-sm text-navy/80">{trip.note}</p>
                  </li>
                ))}
              </ul>
            </GuideSection>
          </div>

          <div>
            <ScoreSidebar
              scores={destination.scores}
              walkabilityScore={destination.walkabilityScore}
              costEstimate={destination.costEstimate}
              bestSeasons={destination.bestSeasons}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
