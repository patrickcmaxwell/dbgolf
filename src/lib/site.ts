export const site = {
  name: "David Bradshaw Golf Coaching",
  shortName: "David Bradshaw",
  tagline: "Helping golfers develop skill, confidence and better scoring performance.",
  shortRole: "Short Game & Long-term Development Coach",
  credentialLine: "British PGA & PGA of America Professional · Senior Leadbetter Instructor",
  description:
    "Coaching from David Bradshaw — British PGA & PGA of America Professional, Senior Leadbetter Instructor. Short game and junior development coaching in Singapore.",
  email: "david@dbgolfcoach.com",
  instagram: {
    handle: "dbgolfcoach",
    url: "https://www.instagram.com/dbgolfcoach",
  },
  bookNowUrl: "https://ylcju24u4bi.typeform.com/to/CO0iX6YE",
  onlineLessonsUrl: "https://skillest.com/coach/dbgolfcoach",
  googleReviewsUrl:
    "https://www.google.com/search?sca_esv=bc9bdbf6b9739e40&hl=en-SG&q=David+Bradshaw+Golf+Coaching+Reviews#lrd=0x81db23984961a35:0x9748aedd160591ad,3",
  location: "Singapore",
  pillars: ["Skill", "Confidence", "Performance"] as const,
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Coaching", href: "/coaching" },
  { label: "Online Lessons", href: "/online-lessons" },
  { label: "About", href: "/about" },
] as const;

export const credentials = [
  "British PGA Professional",
  "PGA of America Member",
  "Senior Leadbetter Instructor",
  "TPI Level 1 Certified",
  "TPI Level 2 Junior Coach",
  "TrackMan Certified",
  "Harold Swash Accredited Instructor",
] as const;

export const services = [
  "Private Coaching",
  "Junior Development",
  "Online Coaching",
] as const;

export const testimonials = [
  {
    name: "Kenneth Sutianto",
    quote:
      "I began training with David when I was just 10 years old in Indonesia, and from the start, he made the game exciting and challenging in the best way. Even after I started travelling to Singapore for lessons, his commitment to my development never changed.",
  },
  {
    name: "Marc Gupilan",
    quote:
      "When I first started working with him, I was consistently shooting around 111. Fast forward to today, and I'm now playing in the 80s — consistently. That improvement didn't happen by accident. Coach David broke down every part of my game — from my full swing to my short game, from course strategy to mental approach.",
  },
  {
    name: "Chang Deng",
    quote:
      "My experience with coach David has been nothing short of spectacular. My one-on-one lessons with David allow him to give me step-by-step instructions and guides toward improvement. In 16 lessons I couldn't believe how much I had improved. Always excited for the next time I come for a lesson.",
  },
] as const;
