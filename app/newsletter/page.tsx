import type { Metadata } from "next";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe to Tutto Passa — new guides, rankings, and Mediterranean stories in your inbox.",
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-center md:px-8 md:py-24">
      <p className="font-utility text-[10px] text-sage">NEWSLETTER</p>
      <h1 className="font-display mt-2 text-4xl text-deep-blue md:text-5xl">Stay in the loop</h1>
      <p className="font-script -mt-1 text-2xl text-sage md:text-3xl">slow living, delivered</p>

      <div className="mt-10 space-y-6 text-left text-sm leading-relaxed text-navy/80">
        <p>Each month, we send:</p>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-sage">·</span>
            New city guides and updated rankings
          </li>
          <li className="flex gap-3">
            <span className="text-sage">·</span>
            One editorial story about Mediterranean culture
          </li>
          <li className="flex gap-3">
            <span className="text-sage">·</span>
            Seasonal recommendations — where to go, when
          </li>
        </ul>
        <p className="text-sage">No rush. No spam. Unsubscribe anytime.</p>
      </div>

      <div className="mt-10 flex justify-center">
        <NewsletterForm />
      </div>
    </div>
  );
}
