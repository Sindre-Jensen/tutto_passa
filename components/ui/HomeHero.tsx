import Link from "next/link";
import { MediterraneanPulse } from "@/components/mediterranean-pulse/MediterraneanPulse";

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/hero-coast.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Layered overlays for text legibility */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      <MediterraneanPulse />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 md:px-10 md:pb-28 md:pt-40">
        <p className="font-utility hero-text-shadow text-[10px] tracking-[0.22em] text-white/90 md:text-[11px]">
          MEDITERRANEAN LIFESTYLE — EST. 2024
        </p>

        <h1 className="hero-text-shadow mt-8 max-w-3xl font-display text-5xl leading-[1.05] text-white md:text-7xl lg:text-8xl">
          Everything passes.
          <br />
          <span className="italic">Nothing is forgotten.</span>
        </h1>

        <p className="hero-text-shadow mt-8 max-w-lg text-base leading-relaxed text-white/95 md:text-lg">
          A guide to slow living, coastal culture, and the art of being present across
          the Mediterranean.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/destinations"
            className="font-utility inline-flex items-center justify-center bg-white px-8 py-4 text-[11px] text-deep-blue transition-colors duration-200 hover:bg-soft-beige"
          >
            EXPLORE DESTINATIONS →
          </Link>
          <Link
            href="/stories"
            className="font-utility inline-flex items-center justify-center border border-white/80 px-8 py-4 text-[11px] text-white transition-colors duration-200 hover:bg-white/10"
          >
            READ THE JOURNAL →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-3 md:right-10 md:flex">
        <span className="font-utility text-[9px] tracking-[0.2em] text-white/70">SCROLL</span>
        <span className="block h-12 w-px animate-pulse bg-white/50" />
      </div>
    </section>
  );
}
