import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import type {
  CityScores,
  Destination,
  DestinationFrontmatter,
  RankingList,
  Story,
  StoryFrontmatter,
} from "./types";

const contentDir = path.join(process.cwd(), "content");
const destinationsDir = path.join(contentDir, "destinations");
const storiesDir = path.join(contentDir, "stories");

function normalizeStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (typeof item === "string") return item;
    if (typeof item === "object" && item !== null) {
      const [key, val] = Object.entries(item)[0] ?? [];
      return key && val !== undefined ? `${key}: ${String(val)}` : String(item);
    }
    return String(item);
  });
}

function getScoresMap(): Map<string, CityScores> {
  const ranking = getRankingBySlug("coastal-towns");
  const map = new Map<string, CityScores>();
  if (!ranking) return map;
  for (const entry of ranking.entries) {
    map.set(entry.slug, entry.scores);
  }
  return map;
}

export function getRankingBySlug(slug: string): RankingList | null {
  const filePath = path.join(contentDir, "rankings", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as RankingList;
}

export function getAllRankings(): RankingList[] {
  const dir = path.join(contentDir, "rankings");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as RankingList);
}

export function getAllDestinationSlugs(): string[] {
  if (!fs.existsSync(destinationsDir)) return [];
  return fs
    .readdirSync(destinationsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getDestinationBySlug(slug: string): Destination | null {
  const filePath = path.join(destinationsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as DestinationFrontmatter;
  const scores = getScoresMap().get(slug);

  if (!scores) return null;

  return {
    slug,
    content,
    scores,
    ...frontmatter,
    whyVisit: normalizeStringList(frontmatter.whyVisit),
    neighbourhoods: normalizeStringList(frontmatter.neighbourhoods),
    localTips: normalizeStringList(frontmatter.localTips),
  };
}

export function getAllDestinations(): Destination[] {
  return getAllDestinationSlugs()
    .map((slug) => getDestinationBySlug(slug))
    .filter((d): d is Destination => d !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getFeaturedDestinations(count = 3): Destination[] {
  const ranking = getRankingBySlug("coastal-towns");
  if (!ranking) return getAllDestinations().slice(0, count);

  const top = [...ranking.entries]
    .sort((a, b) => b.scores.overall - a.scores.overall)
    .slice(0, count);

  return top
    .map((e) => getDestinationBySlug(e.slug))
    .filter((d): d is Destination => d !== null);
}

export function getAllStorySlugs(): string[] {
  if (!fs.existsSync(storiesDir)) return [];
  return fs
    .readdirSync(storiesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getStoryBySlug(slug: string): Story | null {
  const filePath = path.join(storiesDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as StoryFrontmatter;
  const stats = readingTime(content);

  const publishedAt = data.publishedAt;
  const publishedAtStr =
    publishedAt instanceof Date
      ? publishedAt.toISOString().slice(0, 10)
      : String(publishedAt);

  return {
    slug,
    content,
    readingTime: stats.text,
    ...frontmatter,
    publishedAt: publishedAtStr,
  };
}

export function getAllStories(): Story[] {
  return getAllStorySlugs()
    .map((slug) => getStoryBySlug(slug))
    .filter((s): s is Story => s !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function compileMdxContent(source: string) {
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: false },
  });
  return content;
}
