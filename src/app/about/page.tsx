import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { Instagram } from "@/components/icons";
import { CTA } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { site, credentials } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "About David Bradshaw — British PGA & PGA of America Professional and Senior Leadbetter Instructor with over 13 years of coaching experience in Asia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        bgImage="/images/adult-coaching.jpg"
        eyebrow="About"
        title={<>About <span className="text-accent">David</span></>}
        subhead={site.shortRole}
        credentialLine={site.credentialLine}
        description="British PGA & PGA of America Professional with over 13 years coaching juniors, competitive players and dedicated amateurs across Asia."
        cta={{ label: "Enquire About Coaching", href: site.bookNowUrl }}
      />

      {/* BIO */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line lg:sticky lg:top-28">
              <Image
                src="/images/bio-photo.jpg"
                alt="David Bradshaw"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionLabel>About David</SectionLabel>
            </Reveal>
            <div className="mt-10 space-y-8 text-xl leading-relaxed text-foreground sm:text-2xl">
              <Reveal delay={0.05}>
                <p>
                  David Bradshaw is a British PGA Professional and PGA of America Member
                  with over <span className="text-accent-deep">13 years</span> of coaching experience in Asia.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-foreground-muted sm:text-xl">
                  Since 2013, David has coached within the Leadbetter coaching environment,
                  becoming a fully qualified Senior Leadbetter Instructor while working
                  extensively with junior golfers, competitive players and dedicated
                  amateurs.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg leading-relaxed text-foreground-muted sm:text-xl">
                  His coaching is centred around long-term improvement, purposeful practice
                  and helping golfers perform better on the course.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg leading-relaxed text-foreground-muted sm:text-xl">
                  David works with players looking for structured coaching, clearer
                  development and sustainable long-term progress.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="border-y border-line bg-background-2">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <Reveal>
            <SectionLabel>Qualifications & Certifications</SectionLabel>
            <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Certified to coach the <span className="text-accent-deep">full game.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((c, idx) => (
              <Reveal key={c} delay={idx * 0.04}>
                <div className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-accent-deep/40">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-deep/30 text-accent-deep text-sm font-semibold">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-foreground">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-background-dark text-white">
        <GradientMesh variant="dark" />
        <div className="grain absolute inset-0" />
        <div className="mx-auto max-w-4xl px-6 py-32 text-center lg:px-10 lg:py-40">
          <Reveal>
            <SectionLabel variant="light" className="justify-center">Work with David</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to start? <span className="text-accent">Let's talk.</span>
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <CTA href={site.bookNowUrl} size="lg">
                Enquire About Coaching <ArrowRight size={18} />
              </CTA>
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
