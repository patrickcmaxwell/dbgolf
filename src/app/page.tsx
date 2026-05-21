import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Instagram } from "@/components/icons";
import { CTA } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { site, services } from "@/lib/site";

export default function Home() {
  return (
    <>
      <PageHero
        bgImage="/images/experience-badge.jpg"
        eyebrow={`Based in ${site.location}`}
        title={<>David <span className="text-accent">Bradshaw</span></>}
        subhead={site.shortRole}
        credentialLine={site.credentialLine}
        description={site.tagline}
        cta={{ label: "Enquire About Coaching", href: site.bookNowUrl }}
      />

      {/* INTRO — Developing Better Golfers */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
              <Image
                src="/images/bio-photo.jpg"
                alt="David Bradshaw"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1500ms] hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel>Developing Better Golfers</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              A structured approach to <span className="text-accent-deep">long-term improvement.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground-muted">
              <p>
                David Bradshaw is a British golf coach based in Singapore, specializing
                in short game coaching and junior development.
              </p>
              <p>
                Since 2013, David has coached within the Leadbetter coaching environment,
                becoming a fully qualified Senior Leadbetter Instructor while working with
                juniors, competitive players and dedicated golfers across Asia.
              </p>
            </div>
            <div className="mt-10">
              <CTA href="/about" variant="outline">
                More about David <ArrowRight size={16} />
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COACHING PHILOSOPHY */}
      <section className="border-y border-line bg-background-2">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid items-start gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
            <div>
              <Reveal>
                <SectionLabel>Coaching Philosophy</SectionLabel>
                <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                  Skill, performance and <span className="text-accent-deep">purposeful practice.</span>
                </h2>
              </Reveal>

              <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground-muted">
                <Reveal delay={0.05}>
                  <p>
                    David believes long-term improvement comes from developing strong scoring
                    skills, purposeful practice habits and a better understanding of how to
                    perform on the course.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    His coaching places particular emphasis on short game performance,
                    adaptability around the greens and helping players develop skills that
                    transfer from practice into competition.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p>
                    Working with juniors, competitive players and dedicated golfers, David
                    takes a structured approach to development — helping players build
                    confidence, improve performance and sustain progress over time.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="font-display text-2xl leading-snug text-foreground">
                    The focus is not simply creating better golf swings, but helping golfers
                    become <span className="text-accent-deep">more skilled, adaptable and complete players.</span>
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.15}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line lg:sticky lg:top-28">
                <Image
                  src="/images/trackman.jpg"
                  alt="Trackman launch monitor — purposeful, data-informed practice"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1500ms] hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SHORT GAME PILLAR */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal delay={0.1} className="lg:order-2">
            <SectionLabel>Short Game Coaching</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Better scoring starts from <span className="text-accent-deep">100 yards and in.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground-muted">
              <p>
                Most golfers spend too much time chasing swing positions and not enough
                time improving the skills that lower scores.
              </p>
              <p>
                David specializes in helping golfers develop the skills required to
                perform around the greens — combining technical coaching with creativity,
                adaptability and scoring-focused practice.
              </p>
            </div>
            <div className="mt-10">
              <CTA href="/coaching" variant="outline">
                Explore Coaching <ArrowRight size={16} />
              </CTA>
            </div>
          </Reveal>

          <Reveal className="lg:order-1">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line">
              <Image
                src="/images/adult-coaching.jpg"
                alt="Short game coaching"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1500ms] hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* JUNIOR DEVELOPMENT PILLAR */}
      <section className="border-t border-line bg-background-2">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line">
                <Image
                  src="/images/junior-coaching.jpg"
                  alt="Junior development coaching"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1500ms] hover:scale-105"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionLabel>Junior Development</SectionLabel>
              <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Strong long-term <span className="text-accent-deep">foundations.</span>
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground-muted">
                <p>
                  David works closely with junior golfers to build strong long-term
                  foundations through structured coaching, purposeful practice and skill
                  development.
                </p>
                <p>
                  His coaching philosophy focuses on helping young players develop into
                  more skilled, athletic and confident golfers over time — without rushing
                  long-term development.
                </p>
              </div>
              <div className="mt-10">
                <CTA href="/coaching#juniors" variant="outline">
                  Junior coaching <ArrowRight size={16} />
                </CTA>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ONLINE COACHING */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionLabel>Online Coaching</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Continued development, <span className="text-accent-deep">anywhere in the world.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground-muted">
              <p>
                Structured support for golfers wanting feedback, accountability and
                continued development away from in-person coaching.
              </p>
              <p>
                Online coaching is designed for players looking for ongoing guidance,
                clearer practice direction and long-term improvement.
              </p>
            </div>
            <div className="mt-10">
              <CTA href="/online-lessons" variant="outline" size="lg">
                Learn More <ArrowRight size={16} />
              </CTA>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line">
              <Image
                src="/images/program-options.png"
                alt="Online coaching plans and options"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1500ms] hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-line bg-background-2">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <Reveal>
            <div className="text-center">
              <SectionLabel className="justify-center">Player stories</SectionLabel>
              <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Real players. <span className="text-accent-deep">Real progress.</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-16">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative isolate overflow-hidden bg-background-dark text-white">
        <GradientMesh variant="dark" />
        <div className="grain absolute inset-0" />
        <div className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-10 lg:py-40">
          <Reveal>
            <SectionLabel variant="light" className="justify-center">Coaching Enquiries</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Start a conversation about <span className="text-accent">your game.</span>
            </h2>
            <p className="mt-8 text-lg text-white/75">
              {services.join(" · ")}
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <CTA href={site.bookNowUrl} size="lg">
                Enquire About Coaching <ArrowRight size={18} />
              </CTA>
              <CTA href={site.instagram.url} variant="outline-light" size="lg">
                <Instagram size={16} /> @{site.instagram.handle}
              </CTA>
            </div>
            <p className="mt-12 text-sm uppercase tracking-[0.24em] text-white/40">
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-accent"
              >
                Read reviews on Google <ExternalLink size={14} />
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
