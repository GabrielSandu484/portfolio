import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <h2 className="font-mono text-sm text-accent mb-4 tracking-wider uppercase">
            Contact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s build something together
          </h3>
          <p className="text-text-muted max-w-xl mx-auto mb-8">
            Open to discussing new opportunities, collaborations, and
            challenging engineering projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background hover:bg-accent-light transition-all hover:scale-105"
            >
              Connect on LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-text hover:border-accent hover:text-accent transition-all"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
