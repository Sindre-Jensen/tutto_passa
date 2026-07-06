export interface PlacePick {
  name: string;
  neighbourhood: string;
  note: string;
  tags?: string[];
}

export interface Beach {
  name: string;
  note: string;
  tags?: string[];
}

export interface DayTrip {
  name: string;
  note: string;
}

export interface CostEstimate {
  budget: string;
  mid: string;
  luxury: string;
}

export interface CityScores {
  coffee: number;
  food: number;
  beaches: number;
  weather: number;
  walkability: number;
  atmosphere: number;
  cost: number;
  overall: number;
}

export interface DestinationFrontmatter {
  title: string;
  country: string;
  region: string;
  tagline: string;
  heroImage: string;
  gallery?: string[];
  whyVisit: string[];
  bestCafes: PlacePick[];
  bestRestaurants: PlacePick[];
  beaches: Beach[];
  sunsetSpots: PlacePick[];
  walkability: string;
  walkabilityScore: number;
  neighbourhoods: string[];
  costEstimate: CostEstimate;
  bestSeasons: string;
  localTips: string[];
  dayTrips: DayTrip[];
}

export interface Destination extends DestinationFrontmatter {
  slug: string;
  content: string;
  scores: CityScores;
}

export interface StoryFrontmatter {
  title: string;
  excerpt: string;
  heroImage: string;
  author: string;
  publishedAt: string;
}

export interface Story extends StoryFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export interface RankingCategory {
  key: keyof CityScores;
  label: string;
  description?: string;
}

export interface RankingEntry {
  slug: string;
  city: string;
  country: string;
  scores: CityScores;
}

export interface RankingList {
  slug: string;
  title: string;
  description: string;
  categories: RankingCategory[];
  entries: RankingEntry[];
}
