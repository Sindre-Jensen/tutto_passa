import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  compileMdxContent,
  getAllStorySlugs,
  getStoryBySlug,
} from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      images: [{ url: story.heroImage }],
    },
  };
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const body = await compileMdxContent(story.content);

  return (
    <article>
      <div className="relative aspect-[21/9] min-h-[280px] w-full md:min-h-[400px]">
        <Image
          src={story.heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/30" />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-8">
        <p className="font-utility text-[10px] text-sage">
          {story.readingTime.toUpperCase()} · {story.author} · {story.publishedAt}
        </p>
        <h1 className="font-display mt-4 text-4xl leading-tight text-deep-blue md:text-5xl">
          {story.title}
        </h1>
        <p className="mt-4 text-lg text-navy/70">{story.excerpt}</p>
        <div className="prose-tutto mt-12 text-navy/90">{body}</div>
      </div>
    </article>
  );
}
