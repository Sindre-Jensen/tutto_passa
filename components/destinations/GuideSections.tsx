import type { PlacePick } from "@/lib/types";

interface GuideSectionProps {
  title: string;
  children: React.ReactNode;
}

export function GuideSection({ title, children }: GuideSectionProps) {
  return (
    <section className="border-t border-soft-beige pt-10">
      <h2 className="font-display text-2xl text-deep-blue md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function PlaceList({ places }: { places: PlacePick[] }) {
  return (
    <ul className="space-y-6">
      {places.map((place) => (
        <li key={place.name} className="border-l-2 border-sage/40 pl-5">
          <p className="font-medium text-deep-blue">{place.name}</p>
          <p className="font-utility mt-1 text-[10px] text-sage">{place.neighbourhood}</p>
          <p className="mt-2 text-sm leading-relaxed text-navy/80">{place.note}</p>
          {place.tags && place.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {place.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-soft-beige px-3 py-0.5 text-xs text-sage"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ScoreSidebar({
  scores,
  walkabilityScore,
  costEstimate,
  bestSeasons,
}: {
  scores: {
    coffee: number;
    food: number;
    beaches: number;
    weather: number;
    walkability: number;
    atmosphere: number;
    overall: number;
  };
  walkabilityScore: number;
  costEstimate: { budget: string; mid: string; luxury: string };
  bestSeasons: string;
}) {
  const items = [
    { label: "Overall", value: scores.overall },
    { label: "Coffee", value: scores.coffee },
    { label: "Food", value: scores.food },
    { label: "Beaches", value: scores.beaches },
    { label: "Atmosphere", value: scores.atmosphere },
    { label: "Walkability", value: walkabilityScore },
  ];

  return (
    <aside className="rounded-2xl bg-soft-beige/50 p-6 md:sticky md:top-28">
      <p className="font-utility text-[10px] text-deep-blue">AT A GLANCE</p>
      <dl className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between text-sm">
            <dt className="text-sage">{item.label}</dt>
            <dd className="font-medium text-deep-blue">{item.value}/10</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 border-t border-soft-beige pt-6">
        <p className="font-utility text-[10px] text-deep-blue">BEST SEASONS</p>
        <p className="mt-2 text-sm text-navy/80">{bestSeasons}</p>
      </div>
      <div className="mt-6 border-t border-soft-beige pt-6">
        <p className="font-utility text-[10px] text-deep-blue">DAILY COST</p>
        <ul className="mt-2 space-y-1 text-sm text-navy/80">
          <li>Budget: {costEstimate.budget}</li>
          <li>Mid: {costEstimate.mid}</li>
          <li>Luxury: {costEstimate.luxury}</li>
        </ul>
      </div>
    </aside>
  );
}
