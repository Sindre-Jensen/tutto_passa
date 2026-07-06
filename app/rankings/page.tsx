import type { Metadata } from "next";
import Link from "next/link";
import { getAllRankings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rankings",
  description: "Original Tutto Passa scores for Mediterranean coastal towns — sortable by category.",
};

export default function RankingsIndexPage() {
  const rankings = getAllRankings();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <p className="font-utility text-[10px] text-sage">ORIGINAL SCORES</p>
      <h1 className="font-display mt-2 text-4xl text-deep-blue md:text-5xl">Rankings</h1>
      <p className="mt-4 max-w-xl text-navy/80">
        Our curated scores across coffee, food, beaches, weather, and more. Sortable tables
        to help you find your perfect coastal town.
      </p>
      <div className="mt-12 space-y-6">
        {rankings.map((ranking) => (
          <Link
            key={ranking.slug}
            href={`/rankings/${ranking.slug}`}
            className="block rounded-2xl border border-soft-beige bg-soft-beige/20 p-8 transition-shadow duration-300 hover:shadow-md"
          >
            <h2 className="font-display text-2xl text-deep-blue">{ranking.title}</h2>
            <p className="mt-2 text-sm text-navy/80">{ranking.description}</p>
            <p className="mt-4 text-sm text-sage">{ranking.entries.length} destinations</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
