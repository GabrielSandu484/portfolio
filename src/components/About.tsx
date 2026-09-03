import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-mono text-sm text-accent mb-4 tracking-wider uppercase">
              About Me
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Building software that scales across borders
            </h3>
            <p className="text-text-muted leading-relaxed mb-4">
              {profile.summary}
            </p>
            <p className="text-text-muted leading-relaxed">
              {profile.summaryExtended}
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                What I Do
              </h4>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex gap-3">
                  <span className="text-accent font-mono shrink-0">01</span>
                  Full-stack web application development
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-mono shrink-0">02</span>
                  Cloud infrastructure & DevOps automation
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-mono shrink-0">03</span>
                  AI/LLM integration & RAG architectures
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-mono shrink-0">04</span>
                  Distributed systems & event-driven design
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Global Experience
              </h4>
              <div className="flex flex-wrap gap-2">
                {["USA", "Spain", "Sweden", "Romania", "Remote"].map((loc) => (
                  <span
                    key={loc}
                    className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
