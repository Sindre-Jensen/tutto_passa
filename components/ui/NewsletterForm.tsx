"use client";

import { useState } from "react";

interface NewsletterFormProps {
  variant?: "default" | "footer" | "inline";
}

export function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "You're on the list.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const isFooter = variant === "footer";

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        disabled={status === "loading" || status === "success"}
        className={`flex-1 rounded-full border px-5 py-3 text-sm outline-none transition-colors duration-200 focus:border-deep-blue ${
          isFooter
            ? "border-soft-beige/30 bg-dark-olive/50 text-text-on-photo-warm placeholder:text-soft-beige/50"
            : "border-soft-beige bg-cream text-navy placeholder:text-sage/60"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className={`shrink-0 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${
          isFooter
            ? "bg-lemon text-deep-blue hover:bg-soft-beige"
            : "bg-deep-blue text-cream hover:bg-navy"
        } disabled:opacity-60`}
      >
        {status === "loading" ? "Joining…" : status === "success" ? "Joined" : "Subscribe"}
      </button>
      {message && (
        <p
          className={`text-sm sm:basis-full ${status === "error" ? "text-accent-warm" : isFooter ? "text-soft-beige" : "text-sage"}`}
        >
          {message}
        </p>
      )}
      <p className={`text-xs sm:basis-full ${isFooter ? "text-soft-beige/60" : "text-sage/70"}`}>
        By subscribing you agree to our{" "}
        <a
          href="/privacy"
          className={`underline underline-offset-2 ${isFooter ? "hover:text-soft-beige" : "hover:text-deep-blue"}`}
        >
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
