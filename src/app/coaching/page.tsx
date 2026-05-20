import Image from "next/image";
import { ArrowRight, GraduationCap, Users, Globe, Trophy, Activity, MapPin } from "lucide-react";
import { CTA } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CredentialsMarquee } from "@/components/CredentialsMarquee";
import { Magnetic } from "@/components/motion/Magnetic";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { site } from "@/lib/site";

export const metadata = {
  title: "Coaching",
  description:
    "Personalized junior, adult, and online golf coaching with David Bradshaw — Senior Leadbetter Instructor. Programs built on structure, technology, and proven results.",
};

const programs = [
  {
    id: "juniors",
    eyebrow: "Young Golfers",
    title: "Junior Golf Development",
    intro:
      "Over a decade developing junior golfers across Asia — from first swings to competitive players earning international titles and college scholarships.",
    bullets: [
      "Academy lessons focused on fundamentals and advanced swing mechanics",
      "On-course sessions to build strategy, decision-making, and competition confidence",
      "Structured training plans tailored to age, experience, and individual goals",
    ],
    image: "/images/junior-coaching.jpg",
    icon: GraduationCap,
  },
  {
    id: "adults",
    eyebrow: "18+ Ages",
    title: "Adult Golf Coaching",
    intro:
      "Personalized 1:1 coaching blending technical instruction with practical, results-driven training for golfers of all abilities.",
    bullets: [
      "Academy lessons to refine swing mechanics and fundamentals",
      "On-course sessions to improve decision-making and scoring",
      "Structured plans aligned to your goals, ability, and schedule",
    ],
    image: "/images/adult-coaching.jpg",
    icon: Users,
  },
  {
    id: "online",
    eyebrow: "A New Era for Golf",
    title: "Online Coaching",
    intro:
      "Develop your game online with an experienced senior coach — anywhere in the world. Programs suit aspiring golfers aged 11+ through the Skillest app.",
    bullets: [
      "Personal review of your swing with detailed video feedback",
      "Structured drills and plans you can run at your home course",
      "Direct access to David through messaging and video uploads",
    ],
    image: "/images/program-options.png",
    icon: Globe,
    ctaUrl: "/online-lessons",
    ctaLabel: "Explore Online Lessons",
  },
];

export default function CoachingPage() {
  return (
    <>
      {/* HEADER — dark banner */}
      <section className="relative isolate overflow-hidden bg-background-dark pt-40 pb-20 text-white">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/junior-coaching.jpg" alt="" fill sizes="100vw" className="object-cover object-center animate-pan" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black" />
        </div>
        <GradientMesh variant="dark" className="-z-10" />
        <div className="grain absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <SectionLabel variant="light">PGA Coach</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-8 text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[88px]">
              Golf <span className="text-accent">Coaching</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
              David offers personalized coaching for junior and adult golfers at all
              levels — combining modern technology with a structured approach to drive
              measurable improvement.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-white/70">
              <MapPin size={16} className="text-accent" /> {site.location}
            </div>
          </Reveal>
        </div>
      </section>

      <CredentialsMarquee />

      {/* PROGRAMS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="space-y-36">
          {programs.map((p, idx) => {
            const Icon = p.icon;
            const reverse = idx % 2 === 1;
            return (
              <article
                key={p.id}
                id={p.id}
                className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={reverse ? "lg:order-2" : ""}>
                  <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line shadow-[0_30px_80px_-40px_rgba(10,10,10,0.25)]">
                    <Image src={p.image} alt={p.title} fill sizes="100vw" className="object-cover transition-transform duration-[1500ms] hover:scale-105" />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 text-accent">
                      <Icon size={18} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent">{p.eyebrow}</p>
                  </div>
                  <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl">{p.title}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-foreground-muted">{p.intro}</p>
                  <ul className="mt-8 space-y-4">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-foreground-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <CTA
                      href={"ctaUrl" in p && p.ctaUrl ? p.ctaUrl : site.bookNowUrl}
                      variant="solid"
                    >
                      {"ctaLabel" in p && p.ctaLabel ? p.ctaLabel : "Book a Session"}
                      <ArrowRight size={16} />
                    </CTA>
                    {p.id !== "online" && (
                      <CTA href={`mailto:${site.email}?subject=${encodeURIComponent(p.title + " — enquiry")}`} variant="outline">
                        Ask a question
                      </CTA>
                    )}
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHY DAVID */}
      <section className="border-y border-line bg-background-2">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <Reveal>
            <SectionLabel>Why choose David</SectionLabel>
            <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              An approach built on <span className="text-accent">structure</span>, evidence, and time on the lesson tee.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Trophy, title: "Proven Results", body: "Juniors developed to national-title and college-scholarship level." },
              { icon: Activity, title: "Technology-Driven", body: "Trackman launch data and On-Form video to back up every change." },
              { icon: Users, title: "All Levels", body: "From first lesson to competitive — programs scale with your ambition." },
              { icon: Globe, title: "Online or In-Person", body: "Coaching in Singapore or online through Skillest — anywhere in the world." },
            ].map(({ icon: Icon, title, body }) => (
              <Reveal key={title}>
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display mt-5 text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal>
          <SectionLabel>Technology-driven insights</SectionLabel>
          <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Modern tools, measurable improvement.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-line bg-background-2 p-8">
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image src="/images/onform-devices.jpg" alt="On-Form App" fill sizes="100vw" className="object-cover" />
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">On-Form App</p>
              <h3 className="font-display mt-3 text-3xl">Swing analysis & lesson notes</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
                <li>• Personalized analysis with notes per session</li>
                <li>• Upload swings between lessons for feedback</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-line bg-background-2 p-8">
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image src="/images/trackman.jpg" alt="Trackman" fill sizes="100vw" className="object-cover" />
              </div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Trackman</p>
              <h3 className="font-display mt-3 text-3xl">Launch monitor data</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
                <li>• Ball flight, club path, spin rates, launch</li>
                <li>• Evidence-based, measurable adjustments</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA — dark banner */}
      <section className="relative isolate overflow-hidden bg-background-dark text-white">
        <GradientMesh variant="dark" />
        <div className="grain absolute inset-0" />
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
          <Reveal>
            <SectionLabel variant="light" className="justify-center">Learn with David</SectionLabel>
            <h2 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl">
              Over a decade of coaching experience in <span className="text-accent">Asia.</span>
            </h2>
            <p className="mt-6 text-lg text-white/75">
              Contact David to discuss session plans and scheduling.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <CTA href={site.bookNowUrl} size="lg">Book In-Person <ArrowRight size={18} /></CTA>
              </Magnetic>
              <CTA href="/online-lessons" variant="outline-light" size="lg">Online Lessons</CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
