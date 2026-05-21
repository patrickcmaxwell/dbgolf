import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Instagram } from "@/components/icons";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-background-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3 lg:px-10">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="DB"
              width={48}
              height={48}
              className="h-12 w-auto logo-invert"
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-foreground-muted">
            {site.tagline}
          </p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-muted">
            {site.pillars.join(" · ")}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 transition hover:text-accent-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.bookNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 transition hover:text-accent-deep"
              >
                Enquire about coaching
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted">Get in touch</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-foreground/80 transition hover:text-accent-deep"
              >
                <Mail size={16} /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/80 transition hover:text-accent-deep"
              >
                <Instagram size={16} /> @{site.instagram.handle}
              </a>
            </li>
            <li className="pt-2 text-foreground-muted">Based in {site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-foreground-muted lg:flex-row lg:items-center lg:px-10">
          <p>© {new Date().getFullYear()} David Bradshaw Golf Coaching. All rights reserved.</p>
          <p className="tracking-[0.18em] uppercase">{site.credentialLine}</p>
        </div>
      </div>
    </footer>
  );
}
