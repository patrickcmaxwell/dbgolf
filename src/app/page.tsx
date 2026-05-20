import Image from "next/image";
import { ArrowRight, Sparkles, Target, BarChart3, Trophy, ChevronRight, Activity, LineChart } from "lucide-react";
import { CTA } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";
import { CredentialsMarquee } from "@/components/CredentialsMarquee";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Counter } from "@/components/motion/Counter";
import { Magnetic } from "@/components/motion/Magnetic";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO — dark banner */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-background-dark text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/experience-badge.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover object-center animate-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        </div>
        <GradientMesh variant="dark" className="-z-10" />
        <div className="grain absolute inset-0 -z-10" />

        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24 lg:px-10">
          <Reveal>
            <SectionLabel variant="light">{site.location}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-8 text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[88px]">
              Developing Players,
              <br />
              <span className="text-accent">Driving Performance</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
              Personalized coaching for adults and competitive junior golfers, led by
              David Bradshaw — Senior Leadbetter Instructor with over a decade of
              experience developing players across Asia.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Magnetic>
                <CTA href={site.bookNowUrl} variant="solid" size="lg">
                  Book a Session <ArrowRight size={18} />
                </CTA>
              </Magnetic>
              <CTA href="/coaching" variant="outline-light" size="lg">
                Explore Coaching
              </CTA>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-24 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-white/50">
              <span className="inline-flex h-8 w-px animate-pulse bg-accent" />
              Scroll to explore
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS — animated counters */}
      <section className="relative isolate border-y border-line bg-background-dark text-white">
        <GradientMesh variant="dark" className="-z-10" />
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/10 lg:px-10">
          {[
            { kind: "count", v: 15, suffix: "+", label: "Years coaching" },
            { kind: "count", v: 12, suffix: "+", label: "Years across Asia" },
            { kind: "count", v: 7, suffix: "", label: "Certifications" },
            { kind: "text", text: "1:1", label: "Personalised programs" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="px-2 sm:px-6 first:pl-0 last:pr-0">
              <p className="font-display text-5xl tracking-tight text-white sm:text-6xl">
                {s.kind === "count" ? (
                  <>
                    <Counter to={s.v!} />
                    <span className="text-accent">{s.suffix}</span>
                  </>
                ) : (
                  <span>
                    1<span className="text-accent">:1</span>
                  </span>
                )}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CredentialsMarquee />

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
              <Image
                src="/images/bio-photo.jpg"
                alt="David Bradshaw"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-[1500ms] hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between rounded-2xl bg-black/55 px-5 py-4 backdrop-blur">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">Senior Leadbetter Instructor</p>
                  <p className="mt-1 font-display text-xl text-white">David Bradshaw</p>
                </div>
                <Image src="/images/pga-badge.webp" alt="PGA" width={56} height={56} className="h-12 w-auto" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <SectionLabel>Meet David Bradshaw</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              15+ years building golfers who <span className="text-accent">last.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
              From beginner juniors to competitive amateurs and adults rebuilding their
              game, David delivers tailored programs grounded in fundamentals, modern
              technology, and a deep understanding of how each player learns.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground-muted">
              {["British PGA Member", "PGA of America Member", "Senior Leadbetter Certified Instructor"].map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTA href="/about" variant="outline">
                More about David <ArrowRight size={16} />
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-line bg-background-2">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <Reveal>
            <SectionLabel>What we offer</SectionLabel>
            <div className="mt-6 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <h2 className="font-display max-w-2xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Tailored coaching for <span className="text-accent">every</span> golfer.
              </h2>
              <p className="max-w-md text-foreground-muted">
                Whether you're chasing scholarships, breaking 90, or learning the game
                for the first time — every player gets a structured plan built around
                their goals.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Junior Development",
                img: "/images/junior-coaching.jpg",
                body:
                  "Decade-plus track record developing juniors across Asia — from first swings to college scholarships and international titles.",
                href: "/coaching#juniors",
              },
              {
                title: "Adult Coaching",
                img: "/images/adult-coaching.jpg",
                body:
                  "Refine swing mechanics, decision-making, and scoring. Programs tuned to your schedule, ability, and ambitions.",
                href: "/coaching#adults",
              },
              {
                title: "Online Lessons",
                img: "/images/program-options.png",
                body:
                  "Coach with David from anywhere — video swing reviews, structured drills, and a clear improvement plan via the Skillest app.",
                href: "/online-lessons",
              },
            ].map((s, idx) => (
              <Reveal key={s.title} delay={idx * 0.1}>
                <a
                  href={s.href}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-line bg-white shadow-[0_20px_60px_-30px_rgba(10,10,10,0.18)] transition hover:shadow-[0_30px_80px_-30px_rgba(10,10,10,0.25)]"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{s.body}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent transition group-hover:gap-3">
                      Explore <ChevronRight size={14} />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DAVID */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal>
          <SectionLabel>Why choose David</SectionLabel>
          <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Personalised coaching. <span className="text-accent">Proven results.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Target, title: "Personalised Coaching", body: "Lessons tailored to you, with a clear progress and improvement pathway." },
            { icon: BarChart3, title: "Structured Development", body: "Programs covering every part of the game — from drives to putting." },
            { icon: Sparkles, title: "Short Game Specialist", body: "Specialist help to lower scores and build real on-course confidence." },
            { icon: Trophy, title: "Proven Track Record", body: "12+ years coaching juniors, adults, and competitive players in Indonesia and Singapore." },
            { icon: Activity, title: "Technology-Driven", body: "Trackman launch monitor and On-Form swing analysis for evidence-based coaching." },
            { icon: LineChart, title: "Measurable Improvement", body: "Lesson notes, swing uploads, and data so you can see exactly what is improving." },
          ].map(({ icon: Icon, title, body }, idx) => (
            <Reveal key={title} delay={idx * 0.05}>
              <div className="group flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 text-accent transition group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="text-sm leading-relaxed text-foreground-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="border-y border-line bg-background-2">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <Reveal>
            <SectionLabel>Technology-driven insights</SectionLabel>
            <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Data and feedback that turn good rounds into <span className="text-accent">great ones.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="group relative overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-[0_20px_60px_-30px_rgba(10,10,10,0.15)]">
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image src="/images/onform-devices.jpg" alt="On-Form App" fill sizes="100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-accent">On-Form App</p>
                <h3 className="font-display mt-3 text-3xl">Swing analysis between lessons</h3>
                <p className="mt-4 text-foreground-muted">
                  Students upload swings, receive personalized lesson notes and video
                  feedback — keeping progress moving between sessions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-[0_20px_60px_-30px_rgba(10,10,10,0.15)]">
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image src="/images/trackman.jpg" alt="Trackman Launch Monitor" fill sizes="100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-accent">Trackman Launch Monitor</p>
                <h3 className="font-display mt-3 text-3xl">Evidence-based coaching</h3>
                <p className="mt-4 text-foreground-muted">
                  Precise data on ball flight, club path, spin rates, and launch
                  conditions — so every adjustment can be measured.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal>
          <div className="text-center">
            <SectionLabel className="justify-center">Player stories</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Real players. Real progress.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>

      {/* CTA + NEWSLETTER — dark banner */}
      <section className="relative isolate overflow-hidden bg-background-dark text-white">
        <GradientMesh variant="dark" />
        <div className="grain absolute inset-0" />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <SectionLabel variant="light">Learn with David</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl">
              Ready to take your game to the <span className="text-accent">next level?</span>
            </h2>
            <p className="mt-6 max-w-md text-white/75">
              Over a decade of coaching experience in Asia. Reach out to discuss session
              plans, scheduling, and which program is the right fit.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetic>
                <CTA href={site.bookNowUrl} size="lg">Book In-Person <ArrowRight size={18} /></CTA>
              </Magnetic>
              <CTA href="/online-lessons" variant="outline-light" size="lg">Online Lessons</CTA>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-line-dark bg-white/[0.04] p-8 backdrop-blur">
              <SectionLabel variant="light">Newsletter</SectionLabel>
              <h3 className="font-display mt-5 text-2xl text-white">Get exclusive golf tips, updates &amp; upcoming services.</h3>
              <p className="mt-3 text-sm text-white/70">No spam. Unsubscribe any time.</p>
              <div className="mt-7">
                <NewsletterForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
