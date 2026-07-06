"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CityScores, RankingCategory, RankingEntry } from "@/lib/types";

interface RankingsTableProps {
  entries: RankingEntry[];
  categories: RankingCategory[];
}

type SortKey = keyof CityScores;
type SortDir = "asc" | "desc";

export function RankingsTable({ entries, categories }: RankingsTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("overall");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const sorted = useMemo(() => {
    return [...entries].sort((a, b) => {
      const av = a.scores[sortKey];
      const bv = b.scores[sortKey];
      return sortDir === "desc" ? bv - av : av - bv;
    });
  }, [entries, sortKey, sortDir]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  const displayCategories = categories.filter((c) => c.key !== "overall");

  return (
    <div className="overflow-x-auto rounded-2xl border border-soft-beige bg-cream">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-soft-beige bg-soft-beige/30">
            <th className="sticky left-0 z-10 bg-soft-beige/95 px-4 py-4 font-utility text-[10px] text-deep-blue backdrop-blur-sm">
              CITY
            </th>
            {displayCategories.map((cat) => (
              <th key={cat.key} className="px-3 py-4">
                <button
                  type="button"
                  onClick={() => handleSort(cat.key)}
                  className={`font-utility text-[10px] transition-colors duration-200 hover:text-sage ${
                    sortKey === cat.key ? "text-accent-warm" : "text-deep-blue"
                  }`}
                >
                  {cat.label}
                  {sortKey === cat.key && (sortDir === "desc" ? " ↓" : " ↑")}
                </button>
              </th>
            ))}
            <th className="px-3 py-4">
              <button
                type="button"
                onClick={() => handleSort("overall")}
                className={`font-utility text-[10px] transition-colors duration-200 hover:text-sage ${
                  sortKey === "overall" ? "text-accent-warm" : "text-deep-blue"
                }`}
              >
                OVERALL
                {sortKey === "overall" && (sortDir === "desc" ? " ↓" : " ↑")}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((entry, i) => (
            <tr
              key={entry.slug}
              className="border-b border-soft-beige/60 transition-colors duration-200 hover:bg-soft-beige/20"
            >
              <td className="sticky left-0 z-10 bg-cream px-4 py-4 backdrop-blur-sm">
                <Link
                  href={`/destinations/${entry.slug}`}
                  className="group block"
                >
                  <span className="font-utility mr-2 text-[10px] text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base text-deep-blue group-hover:text-sage">
                    {entry.city}
                  </span>
                  <span className="mt-0.5 block text-xs text-sage">{entry.country}</span>
                </Link>
              </td>
              {displayCategories.map((cat) => (
                <td key={cat.key} className="px-3 py-4 text-center text-navy/80">
                  {entry.scores[cat.key]}
                </td>
              ))}
              <td className="px-3 py-4 text-center font-medium text-deep-blue">
                {entry.scores.overall}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
