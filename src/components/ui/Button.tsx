import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "outline-light" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

const variants: Record<Variant, string> = {
  solid:
    "bg-accent text-white hover:bg-accent-hover shadow-[0_10px_30px_-12px_rgba(20,143,244,0.55)]",
  outline:
    "border border-foreground/25 text-foreground hover:border-accent-deep hover:text-accent-deep",
  "outline-light":
    "border border-white/40 text-white hover:bg-white hover:text-foreground",
  ghost: "text-foreground/80 hover:text-accent-deep",
};

export function CTA({
  children,
  href,
  external = false,
  variant = "solid",
  size = "md",
  className,
}: AnchorProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300",
    sizes[size],
    variants[variant],
    className,
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
