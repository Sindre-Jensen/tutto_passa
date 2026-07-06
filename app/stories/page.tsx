import type { Metadata } from "next";
import { StoryCard } from "@/components/ui/StoryCard";
import { getAllStories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stories",
  description: "Editorial stories about Mediterranean culture, slow living, and coastal life.",
};

export default function StoriesPage() {
  const stories = getAllStories();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <p className="font-utility text-[10px] text-sage">THE MAGAZINE</p>
      <h1 className="font-display mt-2 text-4xl text-deep-blue md:text-5xl">Stories</h1>
      <p className="mt-4 max-w-xl text-navy/80">
        Culture, rituals, and insight from around the Mediterranean — storytelling over
        listicles.
      </p>
      <div className="mt-16 space-y-20">
        {stories.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
    </div>
  );
}
