import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RankingsTable } from "@/components/rankings/RankingsTable";
import { getAllRankings, getRankingBySlug } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRankings().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = getRankingBySlug(slug);
  if (!ranking) return {};
  return {
    title: ranking.title,
    description: ranking.description,
  };
}

export default async function RankingPage({ params }: PageProps) {
  const { slug } = await params;
  const ranking = getRankingBySlug(slug);
  if (!ranking) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <p className="font-utility text-[10px] text-sage">RANKINGS</p>
      <h1 className="font-display mt-2 text-4xl text-deep-blue md:text-5xl">{ranking.title}</h1>
      <p className="mt-4 max-w-2xl text-navy/80">{ranking.description}</p>
      <p className="mt-2 text-sm text-sage">Click column headers to sort</p>
      <div className="mt-10">
        <RankingsTable entries={ranking.entries} categories={ranking.categories} />
      </div>
    </div>
  );
}
