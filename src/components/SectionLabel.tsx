import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs uppercase tracking-[0.24em]",
        variant === "light" ? "text-white/80" : "text-accent-deep",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-8",
          variant === "light" ? "bg-white/50" : "bg-accent-deep/60",
        )}
      />
      <span>{children}</span>
    </div>
  );
}
