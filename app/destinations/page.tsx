import type { Metadata } from "next";
import { CityCard } from "@/components/ui/CityCard";
import { getAllDestinations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Curated Mediterranean coastal towns and cities — cafés, beaches, and local tips.",
};

export default function DestinationsPage() {
  const destinations = getAllDestinations();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <p className="font-utility text-[10px] text-sage">EXPLORE</p>
      <h1 className="font-display mt-2 text-4xl text-deep-blue md:text-5xl">Destinations</h1>
      <p className="mt-4 max-w-xl text-navy/80">
        Hand-picked coastal towns across Italy, Spain, Portugal, Greece, Croatia, and France.
        Curated for coffee, food, beaches, and slow living.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <CityCard key={destination.slug} destination={destination} />
        ))}
      </div>
    </div>
  );
}
