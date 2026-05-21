import {
  ArrowRight,
  Video,
  Upload,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { CTA } from "@/components/ui/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { site } from "@/lib/site";

export const metadata = {
  title: "Online Lessons",
  description:
    "Online golf coaching with David Bradshaw — structured support for golfers wanting feedback, accountability and continued development away from in-person coaching.",
};

const steps = [
  {
    icon: Video,
    title: "Record your swing",
    body:
      "Film from down-the-line and face-on with your phone. David will guide you through framing on your first lesson.",
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

export default function OnlineLessonsPage() {
  return (
    <>
      <PageHero
        bgImage="/images/onform-devices.jpg"
        eyebrow="A new era for golf"
        title={<>Online <span className="text-accent">Coaching</span></>}
        subhead={site.shortRole}
        credentialLine={site.credentialLine}
        description="Structured support for golfers wanting feedback, accountability and continued development away from in-person coaching."
        cta={{ label: "Learn More", href: site.onlineLessonsUrl }}
      />

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-6 py-32 lg:px-10 lg:py-40">
        <Reveal>
          <SectionLabel>What it is</SectionLabel>
          <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            For players who want to <span className="text-accent-deep">keep improving.</span>
          </h2>
        </Reveal>
        <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground-muted">
          <Reveal delay={0.05}>
            <p>
              Online coaching is designed for players looking for ongoing guidance,
              clearer practice direction and long-term improvement.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Delivered through the Skillest platform, you get the same structured
              Leadbetter coaching as in-person — personalized video reviews, drill
              libraries, side-by-side swing comparisons, and direct messaging with
              David.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-line bg-background-2">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <Reveal>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Four steps. <span className="text-accent-deep">No travel.</span>
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={idx * 0.06} as="li">
                  <div className="group relative h-full rounded-3xl border border-line bg-white p-7 transition hover:border-accent-deep/30">
                    <span className="absolute right-6 top-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep/70">
                      0{idx + 1}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-deep/30 text-accent-deep transition group-hover:bg-accent-deep group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display mt-6 text-2xl">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-background-dark text-white">
        <GradientMesh variant="dark" />
        <div className="grain absolute inset-0" />
        <div className="mx-auto max-w-4xl px-6 py-32 text-center lg:px-10 lg:py-40">
          <Reveal>
            <SectionLabel variant="light" className="justify-center">Start training online</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your next swing review is one <span className="text-accent">upload away.</span>
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <CTA href={site.onlineLessonsUrl} size="lg">
                Learn More <ArrowRight size={18} />
              </CTA>
              <CTA href={site.bookNowUrl} variant="outline-light" size="lg">
                Enquire About Coaching
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
