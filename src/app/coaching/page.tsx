import Image from "next/image";
import { ArrowRight, Target, GraduationCap, Users, Globe } from "lucide-react";
import { CTA } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { site } from "@/lib/site";

export const metadata = {
  title: "Coaching",
  description:
    "Private coaching with David Bradshaw — short game, junior development and adult coaching grounded in long-term improvement and purposeful practice.",
};

const programs = [
  {
    id: "short-game",
    eyebrow: "Short Game Coaching",
    title: "Better scoring from 100 yards and in.",
    intro:
      "David specializes in helping golfers develop the skills required to perform around the greens — combining technical coaching with creativity, adaptability and scoring-focused practice.",
    bullets: [
      "Wedge play, pitching, chipping and bunker technique",
      "Creativity, shot selection and feel around the greens",
      "Practice structures that transfer directly into scoring",
    ],
    image: "/images/adult-coaching.jpg",
    icon: Target,
  },
  {
    id: "juniors",
    eyebrow: "Junior Development",
    title: "Strong long-term foundations.",
    intro:
      "David works closely with junior golfers to build strong long-term foundations through structured coaching, purposeful practice and skill development — without rushing long-term development.",
    bullets: [
      "Age- and stage-appropriate technical foundations",
      "Athletic development and movement quality",
      "Confidence, competition skills and on-course strategy",
    ],
    image: "/images/junior-coaching.jpg",
    icon: GraduationCap,
  },
  {
    id: "private",
    eyebrow: "Private Coaching",
    title: "1:1 coaching for committed players.",
    intro:
      "Personalised coaching for competitive players and dedicated golfers who want structured progress, clearer practice direction and long-term improvement.",
    bullets: [
      "Custom development plans aligned to your goals",
      "On-course sessions for strategy and decision-making",
      "Trackman launch data and On-Form swing analysis",
    ],
    image: "/images/experience-badge.jpg",
    icon: Users,
  },
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        bgImage="/images/junior-coaching.jpg"
        eyebrow="Private Coaching"
        title={<>Coaching with <span className="text-accent">David</span></>}
        subhead={site.shortRole}
        credentialLine={site.credentialLine}
        description="A structured approach to long-term improvement — short game, junior development and private coaching for committed players."
        cta={{ label: "Enquire About Coaching", href: site.bookNowUrl }}
      />

      {/* PROGRAMS */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
        <div className="space-y-40">
          {programs.map((p, idx) => {
            const Icon = p.icon;
            const reverse = idx % 2 === 1;
            return (
              <article
                key={p.id}
                id={p.id}
                className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-24"
              >
                <Reveal className={reverse ? "lg:order-2" : ""}>
                  <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1500ms] hover:scale-105"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-deep/30 text-accent-deep">
                      <Icon size={18} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent-deep">{p.eyebrow}</p>
                  </div>
                  <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                    {p.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-foreground-muted">{p.intro}</p>
                  <ul className="mt-8 space-y-4">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-foreground-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-deep" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <CTA href={site.bookNowUrl} variant="outline">
                      Enquire About Coaching <ArrowRight size={16} />
                    </CTA>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* ONLINE CALLOUT */}
      <section className="border-y border-line bg-background-2">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-deep/30 text-accent-deep">
                  <Globe size={18} />
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-accent-deep">Online Coaching</p>
              </div>
              <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Continued development, <span className="text-accent-deep">anywhere in the world.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
                Structured support for golfers wanting feedback, accountability and
                continued development away from in-person coaching — delivered through
                the Skillest app.
              </p>
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
              Ready to take your game <span className="text-accent">further?</span>
            </h2>
            <p className="mt-8 text-lg text-white/75">
              Get in touch to talk about session plans, scheduling and the right
              program for you.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <CTA href={site.bookNowUrl} size="lg">
                Enquire About Coaching <ArrowRight size={18} />
              </CTA>
              <CTA href="/online-lessons" variant="outline-light" size="lg">
                Online Coaching
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
