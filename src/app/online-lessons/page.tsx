import Image from "next/image";
import {
  ArrowRight,
  Video,
  Upload,
  MessageCircle,
  Calendar,
  Globe,
  Clock,
  Trophy,
  ShieldCheck,
} from "lucide-react";
import { CTA } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { CredentialsMarquee } from "@/components/CredentialsMarquee";
import { Magnetic } from "@/components/motion/Magnetic";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { site } from "@/lib/site";

export const metadata = {
  title: "Online Lessons",
  description:
    "Online golf coaching with David Bradshaw — Senior Leadbetter Instructor. Personalized video swing reviews, structured plans, and direct messaging through the Skillest app. Aspiring golfers aged 11+.",
};

const steps = [
  {
    icon: Video,
    title: "Record your swing",
    body:
      "Film from down-the-line and face-on with your phone. No special setup needed — David will guide you through framing on your first lesson.",
  },
  {
    icon: Upload,
    title: "Upload through Skillest",
    body:
      "Share your videos through the Skillest app — the platform David uses to coach players worldwide.",
  },
  {
    icon: MessageCircle,
    title: "Get personalized feedback",
    body:
      "Detailed video breakdowns, drill recommendations, and a clear focus for your next practice — direct from David.",
  },
  {
    icon: Calendar,
    title: "Track your progress",
    body:
      "Structured plans aligned to your goals. Compare swings over time and watch your fundamentals lock in.",
  },
];

const audience = [
  {
    icon: Trophy,
    title: "Competitive juniors (11+)",
    body:
      "Continue your development between in-person sessions — or train remotely with a senior Leadbetter coach.",
  },
  {
    icon: Globe,
    title: "Adults living abroad",
    body:
      "If you can't make it to Singapore, get the same structured coaching from anywhere in the world.",
  },
  {
    icon: Clock,
    title: "Busy schedules",
    body:
      "Submit swings when it suits you. Feedback arrives on a predictable cadence — no waiting for a lesson tee.",
  },
  {
    icon: ShieldCheck,
    title: "Players rebuilding",
    body:
      "Returning to the game after a layoff? Online coaching is a low-pressure way to rebuild from the fundamentals up.",
  },
];

export default function OnlineLessonsPage() {
  return (
    <>
      {/* HEADER — dark banner */}
      <section className="relative isolate overflow-hidden bg-background-dark pt-40 pb-20 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/onform-devices.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-50 animate-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/85 to-grass/40" />
        </div>
        <GradientMesh variant="dark" className="-z-10" />
        <div className="grain absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:px-10">
          <Reveal>
            <SectionLabel variant="light">A new era for golf</SectionLabel>
            <h1 className="font-display mt-8 text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[88px]">
              Online <span className="text-accent">Lessons</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
              Develop your game with an experienced senior coach — anywhere in the
              world. Personalized video reviews, structured drills, and a direct line
              to David through the Skillest app. Aspiring golfers aged 11 and up.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Magnetic>
                <CTA href={site.onlineLessonsUrl} variant="solid" size="lg">
                  Book Online Lesson <ArrowRight size={18} />
                </CTA>
              </Magnetic>
              <CTA
                href={`mailto:${site.email}?subject=${encodeURIComponent("Online lessons — enquiry")}`}
                variant="outline-light"
                size="lg"
              >
                Ask a question
              </CTA>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line-dark shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
              <Image
                src="/images/onform-devices.jpg"
                alt="On-Form swing analysis on phone and tablet"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/55 px-4 py-3 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Powered by</p>
                <p className="mt-1 font-display text-xl text-white">Skillest + On-Form</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CredentialsMarquee />

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal>
          <SectionLabel>How it works</SectionLabel>
          <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Coaching that fits <span className="text-accent">your schedule</span>, your course, your phone.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-foreground-muted">
            Four simple steps. No travel. The same structured Leadbetter coaching, delivered through the Skillest platform.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={idx * 0.08} as="li">
                <div className="group relative h-full rounded-3xl border border-line bg-white p-7 shadow-[0_20px_60px_-30px_rgba(10,10,10,0.18)] transition hover:shadow-[0_30px_80px_-30px_rgba(10,10,10,0.25)]">
                  <span className="absolute right-6 top-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent/70">
                    0{idx + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 text-accent transition group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display mt-6 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </section>

      {/* PLATFORM CALLOUT */}
      <section className="border-y border-line bg-background-2">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line shadow-[0_30px_80px_-40px_rgba(10,10,10,0.2)]">
              <Image
                src="/images/program-options.png"
                alt="Online lesson options"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>The platform</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Powered by <span className="text-accent">Skillest</span> — built for serious players.
            </h2>
            <p className="mt-6 text-lg text-foreground-muted">
              Skillest is the leading remote-coaching platform for golf. Combined with
              David's On-Form swing analysis, you get the same depth of feedback as an
              in-person Leadbetter lesson — without leaving your home course.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground-muted">
              {[
                "Subscription or pay-as-you-go lesson plans",
                "Side-by-side swing comparisons over time",
                "Drill libraries and structured progressions",
                "Direct messaging with David",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTA href={site.onlineLessonsUrl} variant="solid">
                Open Skillest <ArrowRight size={16} />
              </CTA>
              <CTA href="/coaching" variant="outline">
                Compare with in-person
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal>
          <SectionLabel>Who it's for</SectionLabel>
          <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Built for golfers who want to <span className="text-accent">keep improving</span> — wherever they are.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {audience.map(({ icon: Icon, title, body }, idx) => (
            <Reveal key={title} delay={idx * 0.06}>
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
      </section>

      {/* FAQ */}
      <section className="border-y border-line bg-background-2">
        <div className="mx-auto max-w-4xl px-6 py-28 lg:px-10">
          <Reveal>
            <SectionLabel>Common questions</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Before you book.
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {[
              {
                q: "What equipment do I need?",
                a: "A smartphone and somewhere to film your swing from down-the-line and face-on. That's it — David will walk you through framing and angles on your first lesson.",
              },
              {
                q: "How often do I get feedback?",
                a: "It depends on the plan you choose through Skillest. Most players upload swings weekly and receive detailed video reviews within a few days.",
              },
              {
                q: "Is this suitable for beginners?",
                a: "Online lessons work best for players aged 11+ who can self-record. Total beginners often benefit from a few in-person sessions first to lock in the fundamentals.",
              },
              {
                q: "Can I combine online and in-person?",
                a: "Yes. Many of David's players do exactly this — in-person blocks in Singapore plus online check-ins between trips.",
              },
            ].map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-foreground">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-foreground-muted transition group-open:rotate-45 group-open:border-accent group-open:text-accent">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-foreground-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark banner */}
      <section className="relative isolate overflow-hidden bg-background-dark text-white">
        <GradientMesh variant="dark" />
        <div className="grain absolute inset-0" />
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
          <Reveal>
            <SectionLabel variant="light" className="justify-center">Start training online</SectionLabel>
            <h2 className="font-display mt-6 text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl">
              Your next swing review is one upload <span className="text-accent">away.</span>
            </h2>
            <p className="mt-6 text-lg text-white/75">
              Join through Skillest — or message David first to talk about your goals.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <CTA href={site.onlineLessonsUrl} size="lg">
                  Open Skillest <ArrowRight size={18} />
                </CTA>
              </Magnetic>
              <CTA
                href={`mailto:${site.email}?subject=${encodeURIComponent("Online lessons — enquiry")}`}
                variant="outline-light"
                size="lg"
              >
                Email David
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
