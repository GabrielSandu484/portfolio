import { skillCategories } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="font-mono text-sm text-accent mb-4 tracking-wider uppercase">
            Skills
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technologies & expertise
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent/50 transition-colors duration-300"
            >
              <h4 className="font-semibold mb-4 text-sm group-hover:text-accent transition-colors">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-surface-elevated px-2.5 py-1 text-xs text-text-muted border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
