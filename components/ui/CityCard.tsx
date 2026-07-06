import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/types";

interface CityCardProps {
  destination: Destination;
  rank?: number;
}

export function CityCard({ destination, rank }: CityCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group block overflow-hidden rounded-2xl bg-soft-beige/40 transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={destination.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {rank !== undefined && (
          <span className="font-utility absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] text-deep-blue">
            #{rank}
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="font-utility text-[10px] text-sage">
          {destination.country.toUpperCase()}
        </p>
        <h3 className="font-display mt-1 text-2xl text-deep-blue">{destination.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/80">{destination.tagline}</p>
      </div>
    </Link>
  );
}
