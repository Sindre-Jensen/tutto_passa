import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Tutto Passa collects and uses your data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <p className="font-utility text-[10px] text-sage">LEGAL</p>
      <h1 className="font-display mt-2 text-4xl text-deep-blue md:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-sage">Last updated: July 2026</p>

      <div className="prose-tutto mt-12 space-y-8 text-navy/90">
        <section>
          <h2 className="font-display text-2xl text-deep-blue">Who we are</h2>
          <p>
            Tutto Passa ({siteConfig.url}) is a Mediterranean lifestyle publication. For
            privacy enquiries, contact us at{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-deep-blue underline">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-deep-blue">Newsletter</h2>
          <p>
            When you subscribe to our newsletter, we collect your email address. Emails are
            stored and processed by{" "}
            <a
              href="https://buttondown.com"
              className="text-deep-blue underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buttondown
            </a>
            , our email service provider. We use your email to send updates about new
            destinations, stories, and rankings.
          </p>
          <p>
            You can unsubscribe at any time using the link in any email we send. To request
            deletion of your data, email us at {siteConfig.contactEmail}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-deep-blue">Analytics</h2>
          <p>
            We may use privacy-focused analytics to understand how visitors use the site. No
            personal data is sold to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-deep-blue">Cookies</h2>
          <p>
            This site uses essential cookies required for basic functionality. Third-party
            services (such as Buttondown) may set their own cookies when you interact with
            newsletter forms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-deep-blue">Your rights</h2>
          <p>
            If you are in the EU/EEA, you have the right to access, correct, or delete your
            personal data. Contact {siteConfig.contactEmail} to exercise these rights.
          </p>
        </section>
      </div>

      <Link
        href="/"
        className="mt-12 inline-block text-sm text-deep-blue underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}
