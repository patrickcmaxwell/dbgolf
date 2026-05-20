import { credentials } from "@/lib/site";

export function CredentialsMarquee() {
  const list = [...credentials, ...credentials];
  return (
    <div className="relative overflow-hidden border-y border-line bg-background-2 py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-sm uppercase tracking-[0.2em] text-foreground-muted">
        {list.map((c, i) => (
          <span key={`${c}-${i}`} className="flex items-center gap-12">
            {c}
            <span aria-hidden className="text-accent/70">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
