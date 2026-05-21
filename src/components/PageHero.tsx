import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { CTA } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { GradientMesh } from "@/components/motion/GradientMesh";

type Props = {
  bgImage: string;
  imagePosition?: string;
  eyebrow: string;
  title: ReactNode;
  subhead?: string;
  credentialLine?: string;
  description: string;
  cta?: { label: string; href: string };
};

export function PageHero({
  bgImage,
  imagePosition = "object-center",
  eyebrow,
  title,
  subhead,
  credentialLine,
  description,
  cta,
}: Props) {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-background-dark text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          priority
          className={`object-cover ${imagePosition} animate-pan`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black" />
      </div>
      <GradientMesh variant="dark" className="-z-10" />
      <div className="grain absolute inset-0 -z-10" />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24 lg:px-10">
        <Reveal>
          <SectionLabel variant="light">{eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display mt-8 text-6xl leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[112px]">
            {title}
          </h1>
        </Reveal>
        {subhead ? (
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-white/90 sm:text-3xl">
              {subhead}
            </p>
          </Reveal>
        ) : null}
        {credentialLine ? (
          <Reveal delay={0.26}>
            <p className="mt-5 text-sm uppercase tracking-[0.22em] text-white/60">
              {credentialLine}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={0.34}>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/80">
            {description}
          </p>
        </Reveal>
        {cta ? (
          <Reveal delay={0.42}>
            <div className="mt-10">
              <CTA href={cta.href} variant="solid" size="lg">
                {cta.label} <ArrowRight size={18} />
              </CTA>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
