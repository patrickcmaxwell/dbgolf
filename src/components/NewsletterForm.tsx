"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [state, setState] = useState<"idle" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to mailer/CRM
        setState("sent");
      }}
      className="grid w-full gap-3 sm:grid-cols-[1fr_1fr_auto]"
    >
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="h-12 rounded-full border border-line bg-white px-5 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="h-12 rounded-full border border-line bg-white px-5 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent"
      />
      <button
        type="submit"
        disabled={state === "sent"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:opacity-70"
      >
        {state === "sent" ? (
          <>
            <Check size={16} /> Subscribed
          </>
        ) : (
          <>
            Subscribe <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}
