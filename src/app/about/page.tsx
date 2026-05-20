import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { Instagram } from "@/components/icons";
import { CTA } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { site, credentials } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "About David Bradshaw — Senior Leadbetter Instructor, British PGA Member, and over a decade coaching juniors and adults across Asia.",
};

const timeline = [
  {
    year: "2012",
    title: "Turned professional",
    body: "Began studies with the British PGA, training under Master Leadbetter Instructor Andrew Nicholson.",
  },
  {
    year: "2013",
    title: "Leadbetter Indonesia",
    body: "Joined the brand's Jakarta operations to support junior and amateur programs.",
  },
  {
    year: "2016–2018",
    title: "Academy Director, LGA Bali",
    body: "Coached amateur player Meva Schmit to Indonesia National Junior Champion and All-Age National Amateur runner-up (2018).",
  },
  {
    year: "2019",
    title: "LGA Singapore",
    body: "Joined the leadership of Leadbetter Singapore's junior development program.",
  },
  {
    year: "2022",
    title: "Senior Leadbetter Coach",
    body: "Achieved Senior Leadbetter Coach status, specializing in competitive junior and adult instruction.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HEADER — dark banner */}
      <section className="relative isolate overflow-hidden bg-background-dark pt-40 pb-20 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-grass/60 via-black to-black" />
        <GradientMesh variant="dark" className="-z-10" />
        <div className="grain absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-10">
          <Reveal>
            <SectionLabel variant="light">Senior Leadbetter Instructor</SectionLabel>
            <h1 className="font-display mt-8 text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl">
              Get to know <span className="text-accent">David Bradshaw</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
              British PGA Member and Senior Leadbetter Coach with over a decade
              developing players across Asia. David's mission: help golfers play
              better, gain confidence, and enjoy the game to its fullest.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line-dark shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
              <Image src="/images/bio-photo.jpg" alt="David Bradshaw" fill sizes="100vw" className="object-cover" priority />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-black/55 px-4 py-3 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">PGA Coach</p>
                <Image src="/images/pga-badge.webp" alt="PGA" width={48} height={48} className="h-10 w-auto" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BIO */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <Reveal>
          <SectionLabel>About David</SectionLabel>
          <div className="font-display mt-10 space-y-7 text-2xl leading-relaxed text-foreground sm:text-3xl">
            <p>
              David Bradshaw transitioned to professional golf in 2012 after beginning
              studies with the British PGA. He trained under Master Leadbetter
              Instructor Andrew Nicholson before establishing his coaching career.
            </p>
            <p>
              In 2013, David joined Leadbetter Indonesia to support the brand's
              Jakarta operations. From 2016 to 2018, he served as <span className="text-accent">Academy Director</span> at LGA Bali —
              coaching amateur player Meva Schmit to victory in the Indonesia National
              Junior Championship and a runner-up finish at the All-Age National
              Amateur Championship 2018.
            </p>
            <p>
              By 2019, David had joined LGA Singapore's junior development program
              leadership, and in 2022 he achieved <span className="text-accent">Senior Leadbetter Coach</span> status — specializing
              in competitive junior and adult instruction, with an emphasis on short
              game and comprehensive athlete development.
            </p>
          </div>
        </Reveal>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-line bg-background-2">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
          <Reveal>
            <SectionLabel>Career timeline</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              A decade of <span className="text-accent">building players.</span>
            </h2>
          </Reveal>

          <ol className="relative mt-14 space-y-12 border-l border-line-strong pl-10">
            {timeline.map((t, idx) => (
              <Reveal key={t.year} delay={idx * 0.08} as="li" className="relative">
                <span className="absolute -left-[46px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <p className="text-xs uppercase tracking-[0.22em] text-accent">{t.year}</p>
                <h3 className="font-display mt-2 text-2xl sm:text-3xl">{t.title}</h3>
                <p className="mt-2 max-w-xl text-foreground-muted">{t.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal>
          <SectionLabel>Coaching qualifications</SectionLabel>
          <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Certified to coach the <span className="text-accent">full game.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c, idx) => (
            <Reveal key={c} delay={idx * 0.05}>
              <div className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_10px_30px_-20px_rgba(10,10,10,0.15)] transition hover:border-accent/60 hover:shadow-[0_20px_40px_-20px_rgba(10,10,10,0.2)]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent text-sm font-semibold">
                  ✓
                </span>
                <p className="text-sm font-medium text-foreground">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA — dark banner */}
      <section className="relative isolate overflow-hidden bg-background-dark text-white">
        <GradientMesh variant="dark" />
        <div className="grain absolute inset-0" />
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
          <Reveal>
            <SectionLabel variant="light" className="justify-center">Learn With David</SectionLabel>
            <blockquote className="font-display mt-8 text-3xl leading-snug text-white sm:text-4xl">
              &ldquo;Over a decade of coaching experience in Asia — helping golfers play
              better, gain confidence, and <span className="text-accent">enjoy the game to its fullest.</span>&rdquo;
            </blockquote>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <CTA href={site.bookNowUrl} size="lg">Book a Session <ArrowRight size={18} /></CTA>
              </Magnetic>
              <CTA href={`mailto:${site.email}`} variant="outline-light" size="lg">
                <Mail size={16} /> Email David
              </CTA>
              <CTA href={site.instagram.url} variant="outline-light" size="lg">
                <Instagram size={16} /> Instagram
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
