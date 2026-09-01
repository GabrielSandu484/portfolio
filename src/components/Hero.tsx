import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-accent mb-4 tracking-wider uppercase">
            Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-muted mb-8 leading-relaxed">
            {profile.title} crafting scalable applications, cloud infrastructure,
            and AI-powered solutions for global teams.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#experience"
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background hover:bg-accent-light transition-all hover:scale-105 glow-accent"
            >
              View My Work
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-text hover:border-accent hover:text-accent transition-all"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-text-muted">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors group"
            >
              <span className="text-accent font-mono">→</span>
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors group"
            >
              <span className="text-accent font-mono">→</span>
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
          {[
            { label: "Years Experience", value: "10+" },
            { label: "Countries", value: "4" },
            { label: "Tech Stack", value: "30+" },
            { label: "Focus", value: "Full Stack" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface/50 p-4 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
