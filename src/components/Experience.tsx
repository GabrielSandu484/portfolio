import { experiences } from "@/data/profile";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="font-mono text-sm text-accent mb-4 tracking-wider uppercase">
            Experience
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Professional journey
          </h3>
        </div>

        <div className="space-y-8">
          {experiences.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className="group relative rounded-2xl border border-border bg-surface p-6 sm:p-8 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-text-muted">
                      {job.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-1">{job.role}</h4>
                  <p className="text-accent font-medium">{job.company}</p>
                  <p className="text-sm text-text-muted mt-1">
                    {job.location}
                  </p>
                </div>
                <time className="font-mono text-sm text-text-muted shrink-0">
                  {job.period}
                </time>
              </div>

              <ul className="space-y-2">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm text-text-muted leading-relaxed"
                  >
                    <span className="text-accent shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
