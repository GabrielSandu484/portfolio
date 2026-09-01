import { education, languages } from "@/data/profile";

export function Education() {
  return (
    <section id="education" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="font-mono text-sm text-accent mb-4 tracking-wider uppercase">
            Education
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Academic background
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h4 className="text-xl font-bold mb-1">{education.degree}</h4>
                <p className="text-accent font-medium">{education.institution}</p>
                <p className="text-sm text-text-muted mt-1">
                  {education.location}
                </p>
              </div>
              <time className="font-mono text-sm text-text-muted shrink-0">
                {education.period}
              </time>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h4 className="text-xl font-bold mb-4">Languages</h4>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.name} className="flex justify-between items-center">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
