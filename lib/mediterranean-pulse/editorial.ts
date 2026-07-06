import type {
  CoffeeFactEntry,
  EditorialPulseContent,
  MediterraneanFactEntry,
  QuoteEntry,
} from "@/components/mediterranean-pulse/types";
import coffeeFacts from "@/content/pulse/coffee-facts.json";
import mediterraneanFacts from "@/content/pulse/mediterranean-facts.json";
import quotes from "@/content/pulse/quotes.json";

export function getEditorialPulseContent(): EditorialPulseContent {
  return {
    quotes: quotes as QuoteEntry[],
    coffeeFacts: coffeeFacts as CoffeeFactEntry[],
    mediterraneanFacts: mediterraneanFacts as MediterraneanFactEntry[],
  };
}

export function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
