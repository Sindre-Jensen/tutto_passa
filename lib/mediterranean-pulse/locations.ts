import type { PulseLocation } from "@/components/mediterranean-pulse/types";

export const PULSE_LOCATIONS: PulseLocation[] = [
  { id: "palermo", name: "Palermo", region: "Sicily", latitude: 38.1157, longitude: 13.3615 },
  { id: "cefallu", name: "Cefalù", region: "Sicily", latitude: 38.0396, longitude: 14.0236 },
  { id: "positano", name: "Positano", region: "Amalfi Coast", latitude: 40.6281, longitude: 14.4849 },
  {
    id: "polignano",
    name: "Polignano a Mare",
    region: "Puglia",
    latitude: 40.9961,
    longitude: 17.225,
  },
  { id: "cadaques", name: "Cadaqués", region: "Catalonia", latitude: 42.2887, longitude: 3.2772 },
  { id: "split", name: "Split", region: "Dalmatia", latitude: 43.5081, longitude: 16.4402 },
  { id: "corfu", name: "Corfu", region: "Ionian Islands", latitude: 39.6243, longitude: 19.9217 },
  { id: "mallorca", name: "Mallorca", region: "Balearic Islands", latitude: 39.5696, longitude: 2.6502 },
  { id: "puglia", name: "Lecce", region: "Puglia", latitude: 40.3515, longitude: 18.175 },
  { id: "nice", name: "Nice", region: "French Riviera", latitude: 43.7102, longitude: 7.262 },
];

export function pickRandomLocation(): PulseLocation {
  return PULSE_LOCATIONS[Math.floor(Math.random() * PULSE_LOCATIONS.length)];
}
