"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  CoffeeSlide,
  FactSlide,
  LivePulseData,
  PulseSlide,
  QuoteSlide,
  SunsetSlide,
  WeatherSlide,
} from "./types";
import { getEditorialPulseContent, pickRandom } from "@/lib/mediterranean-pulse/editorial";

interface LivePulseResponse {
  weather: LivePulseData;
  sunset: {
    location: { name: string; region: string };
    time: string;
  };
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildSlides(live: LivePulseResponse): PulseSlide[] {
  const editorial = getEditorialPulseContent();
  const coffee = pickRandom(editorial.coffeeFacts);
  const quote = pickRandom(editorial.quotes);
  const fact = pickRandom(editorial.mediterraneanFacts);

  const weatherLoc = live.weather.location;

  const slides: PulseSlide[] = [
    {
      type: "weather",
      location: `${weatherLoc.name}, ${weatherLoc.region}`,
      region: weatherLoc.region,
      airTempC: live.weather.airTempC,
      seaTempC: live.weather.seaTempC,
      weatherEmoji: live.weather.weatherEmoji,
    },
    {
      type: "coffee",
      title: coffee.title,
      text: coffee.text,
    },
    {
      type: "quote",
      label: quote.label,
      text: quote.text,
    },
    {
      type: "fact",
      title: fact.title,
      text: fact.text,
    },
    {
      type: "sunset",
      location: live.sunset.location.name,
      time: live.sunset.time,
    },
  ];

  return shuffle(slides);
}

function buildFallbackSlides(): PulseSlide[] {
  const editorial = getEditorialPulseContent();
  return shuffle([
    {
      type: "coffee",
      title: pickRandom(editorial.coffeeFacts).title,
      text: pickRandom(editorial.coffeeFacts).text,
    },
    {
      type: "quote",
      label: pickRandom(editorial.quotes).label,
      text: pickRandom(editorial.quotes).text,
    },
    {
      type: "fact",
      title: pickRandom(editorial.mediterraneanFacts).title,
      text: pickRandom(editorial.mediterraneanFacts).text,
    },
  ]);
}

const ROTATION_MIN_MS = 8000;
const ROTATION_MAX_MS = 10000;

export function useMediterraneanPulse() {
  const [slides, setSlides] = useState<PulseSlide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/pulse/live");
        if (!res.ok) throw new Error("Live pulse unavailable");
        const data = (await res.json()) as LivePulseResponse;
        if (!cancelled) {
          setSlides(buildSlides(data));
        }
      } catch {
        if (!cancelled) {
          setSlides(buildFallbackSlides());
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const advance = useCallback(() => {
    setCurrentIndex((i) => (slides.length === 0 ? 0 : (i + 1) % slides.length));
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const schedule = () => {
      const delay =
        ROTATION_MIN_MS + Math.random() * (ROTATION_MAX_MS - ROTATION_MIN_MS);
      timeoutId = setTimeout(() => {
        advance();
        schedule();
      }, delay);
    };

    schedule();
    return () => clearTimeout(timeoutId);
  }, [slides.length, advance]);

  const currentSlide = useMemo(
    () => (slides.length > 0 ? slides[currentIndex] : null),
    [slides, currentIndex]
  );

  return {
    slides,
    currentSlide,
    currentIndex,
    isLoading,
  };
}

export type { WeatherSlide, CoffeeSlide, QuoteSlide, FactSlide, SunsetSlide };
