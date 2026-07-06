import Link from "next/link";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/rankings", label: "Rankings" },
  { href: "/stories", label: "Journal" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/newsletter", label: "Subscribe" },
  { href: "/privacy", label: "Privacy" },
];

const socialLinks = [
  { href: siteConfig.social.instagram, label: "Instagram" },
  { href: siteConfig.social.tiktok, label: "TikTok" },
  { href: siteConfig.social.pinterest, label: "Pinterest" },
  { href: siteConfig.social.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-dark-olive text-text-on-photo-warm">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-display text-2xl text-text-on-photo-warm">TUTTO PASSA</p>
            <p className="font-script mt-1 text-xl text-sage">everything passes</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-soft-beige/90">
              A premium guide to Mediterranean living — slow days, coastal towns, espresso
              rituals, and the art of enjoying life.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-utility text-[9px] text-soft-beige transition-opacity duration-200 hover:opacity-80"
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-utility mb-4 text-[10px] text-soft-beige">STAY IN THE LOOP</p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-soft-beige/20 pt-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-utility text-[9px] text-soft-beige transition-opacity duration-200 hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-soft-beige/60">
            &copy; {new Date().getFullYear()} Tutto Passa
          </p>
        </div>
      </div>
    </footer>
  );
}
