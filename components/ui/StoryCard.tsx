import Image from "next/image";
import Link from "next/link";
import type { Story } from "@/lib/types";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group grid gap-6 md:grid-cols-2 md:items-center"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={story.heroImage}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div>
        <p className="font-utility text-[10px] text-sage">
          {story.readingTime.toUpperCase()} · {story.publishedAt}
        </p>
        <h3 className="font-display mt-2 text-2xl text-deep-blue md:text-3xl">
          {story.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy/80">{story.excerpt}</p>
        <span className="mt-4 inline-block text-sm text-deep-blue underline-offset-4 group-hover:underline">
          Read story
        </span>
      </div>
    </Link>
  );
}
