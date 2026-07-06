import type { LivePulseData, PulseLocation } from "@/components/mediterranean-pulse/types";

const WEATHER_EMOJI: Record<number, string> = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌦️",
  55: "🌧️",
  61: "🌧️",
  63: "🌧️",
  65: "🌧️",
  80: "🌦️",
  95: "⛈️",
};

function weatherEmoji(code: number): string {
  if (WEATHER_EMOJI[code]) return WEATHER_EMOJI[code];
  if (code >= 1 && code <= 3) return "⛅";
  if (code >= 51 && code <= 67) return "🌧️";
  if (code >= 80) return "🌦️";
  return "☀️";
}

function formatSunset(isoTime: string): string {
  const date = new Date(isoTime);
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export async function fetchLivePulseData(location: PulseLocation): Promise<LivePulseData> {
  const { latitude, longitude } = location;

  const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
  weatherUrl.searchParams.set("latitude", String(latitude));
  weatherUrl.searchParams.set("longitude", String(longitude));
  weatherUrl.searchParams.set("current", "temperature_2m,weather_code");
  weatherUrl.searchParams.set("daily", "sunset");
  weatherUrl.searchParams.set("timezone", "auto");
  weatherUrl.searchParams.set("forecast_days", "1");

  const marineUrl = new URL("https://marine-api.open-meteo.com/v1/marine");
  marineUrl.searchParams.set("latitude", String(latitude));
  marineUrl.searchParams.set("longitude", String(longitude));
  marineUrl.searchParams.set("current", "sea_surface_temperature");
  marineUrl.searchParams.set("timezone", "auto");

  const [weatherRes, marineRes] = await Promise.all([
    fetch(weatherUrl.toString(), { next: { revalidate: 1800 } }),
    fetch(marineUrl.toString(), { next: { revalidate: 1800 } }).catch(() => null),
  ]);

  if (!weatherRes.ok) {
    throw new Error("Weather API unavailable");
  }

  const weather = await weatherRes.json();
  let seaTempC: number | null = null;

  if (marineRes?.ok) {
    const marine = await marineRes.json();
    const temp = marine?.current?.sea_surface_temperature;
    if (typeof temp === "number") {
      seaTempC = Math.round(temp);
    }
  }

  const code = weather.current?.weather_code ?? 0;
  const sunsetRaw = weather.daily?.sunset?.[0] ?? "";

  return {
    location,
    airTempC: Math.round(weather.current?.temperature_2m ?? 0),
    seaTempC,
    weatherEmoji: weatherEmoji(code),
    sunsetTime: sunsetRaw ? formatSunset(sunsetRaw) : "—",
    fetchedAt: new Date().toISOString(),
  };
}
