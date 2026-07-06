export type PulseSlideType =
  | "weather"
  | "coffee"
  | "quote"
  | "fact"
  | "sunset";

export interface PulseLocation {
  id: string;
  name: string;
  region: string;
  latitude: number;
  longitude: number;
}

export interface LivePulseData {
  location: PulseLocation;
  airTempC: number;
  seaTempC: number | null;
  weatherEmoji: string;
  sunsetTime: string;
  fetchedAt: string;
}

export interface QuoteEntry {
  id: string;
  label: string;
  text: string;
}

export interface CoffeeFactEntry {
  id: string;
  title: string;
  text: string;
}

export interface MediterraneanFactEntry {
  id: string;
  title: string;
  text: string;
}

export interface WeatherSlide {
  type: "weather";
  location: string;
  region: string;
  airTempC: number;
  seaTempC: number | null;
  weatherEmoji: string;
}

export interface CoffeeSlide {
  type: "coffee";
  title: string;
  text: string;
}

export interface QuoteSlide {
  type: "quote";
  label: string;
  text: string;
}

export interface FactSlide {
  type: "fact";
  title: string;
  text: string;
}

export interface SunsetSlide {
  type: "sunset";
  location: string;
  time: string;
}

export type PulseSlide =
  | WeatherSlide
  | CoffeeSlide
  | QuoteSlide
  | FactSlide
  | SunsetSlide;

export interface EditorialPulseContent {
  quotes: QuoteEntry[];
  coffeeFacts: CoffeeFactEntry[];
  mediterraneanFacts: MediterraneanFactEntry[];
}
