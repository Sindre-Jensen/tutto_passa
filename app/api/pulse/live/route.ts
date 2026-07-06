import { pickRandomLocation, PULSE_LOCATIONS } from "@/lib/mediterranean-pulse/locations";
import { fetchLivePulseData } from "@/lib/mediterranean-pulse/live-data";
import { NextResponse } from "next/server";

export const revalidate = 1800;

export async function GET() {
  try {
    const weatherLocation = pickRandomLocation();
    const sunsetLocation =
      PULSE_LOCATIONS[Math.floor(Math.random() * PULSE_LOCATIONS.length)];

    const [weatherData, sunsetData] = await Promise.all([
      fetchLivePulseData(weatherLocation),
      fetchLivePulseData(sunsetLocation),
    ]);

    return NextResponse.json({
      weather: weatherData,
      sunset: {
        location: sunsetData.location,
        time: sunsetData.sunsetTime,
      },
    });
  } catch {
    return NextResponse.json({ error: "Live pulse unavailable" }, { status: 503 });
  }
}
