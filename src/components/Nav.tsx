"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { MobileMenu } from "@/components/MobileMenu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/85 backdrop-blur-lg border-b border-line"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <Link href="/" aria-label={site.name} className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="DB Golf Coaching"
              width={88}
              height={88}
              className={cn(
                "h-14 w-auto transition-[filter,transform] duration-500 lg:h-16",
                onDark ? "" : "logo-invert",
                scrolled ? "scale-90" : "scale-100",
              )}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative text-sm tracking-wide transition-colors",
                  onDark ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-foreground",
                )}
              >
                <span>{item.label}</span>
                <span
                  className={cn(
                    "pointer-events-none absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                    onDark ? "bg-accent" : "bg-accent-deep",
                  )}
                />
              </Link>
            ))}
            <a
              href={site.bookNowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_10px_30px_-10px_rgba(20,143,244,0.6)]"
            >
              <span className="relative z-10">Book Now</span>
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-hover to-accent transition-transform duration-500 ease-out group-hover:translate-x-0"
              />
            </a>
          </nav>

          <button
            aria-label="Open menu"
            aria-expanded={open}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden",
              onDark
                ? "border-white/25 text-white hover:border-accent hover:text-accent"
                : "border-line-strong text-foreground hover:border-accent-deep hover:text-accent-deep",
            )}
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
