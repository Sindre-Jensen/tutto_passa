import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy",
  description: "The Tutto Passa way of life — everything passes, so pay attention.",
};

export default function PhilosophyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <p className="font-utility text-[10px] text-sage">OUR PHILOSOPHY</p>
      <h1 className="font-display mt-2 text-4xl text-deep-blue md:text-5xl">
        The Tutto Passa Way of Life
      </h1>

      <div className="prose-tutto mt-12 space-y-6 text-navy/90">
        <p>
          <em>Tutto passa</em> — everything passes. It is a phrase the Italians use as both a
          comfort and a philosophy. The difficult moment will pass. The perfect evening on a
          terrace above the sea will pass too. So you had better pay attention.
        </p>
        <p>
          We built this brand around that idea. Not travel for its own sake, but the cultivation
          of presence — the espresso taken standing at the bar, the afternoon that stretches into
          evening without apology, the conversation that begins at dinner and ends near midnight.
        </p>
        <p>
          The Mediterranean has been teaching this for millennia. We are simply students,
          recording what we find and pointing others toward places where time slows down on
          purpose.
        </p>
      </div>

      <p className="font-utility mt-16 text-[10px] text-sage">EST. 2024 · THE MEDITERRANEAN</p>
    </div>
  );
}
