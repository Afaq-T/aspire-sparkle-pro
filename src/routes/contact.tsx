import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Afaq Tahir" },
      {
        name: "description",
        content:
          "Get in touch with Afaq Tahir — available for entry-level networking / system-monitoring roles.",
      },
      { property: "og:title", content: "Contact — Afaq Tahir" },
      {
        property: "og:description",
        content:
          "Email, LinkedIn and GitHub. Open to entry-level networking & monitoring opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const lines = [
    { icon: <Mail size={16} />, label: "email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone size={16} />, label: "phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: <MapPin size={16} />, label: "location", value: profile.location, href: undefined },
    { icon: <Linkedin size={16} />, label: "linkedin", value: "in/afaq-tahir", href: profile.linkedin },
    { icon: <Github size={16} />, label: "github", value: "@Afaq-T", href: profile.github },
  ];

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mono text-xs uppercase tracking-wider text-neon">
          $ ./initiate_handshake
        </div>
        <h1 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
          Let's connect a few packets.
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          I'm actively looking for entry-level network / system-monitoring
          roles. If you've got an opening — or a lab worth breaking — I'd love
          to hear from you.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="terminal-card scanlines p-6"
        >
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <span className="mono text-xs text-neon">contact.sh</span>
            <span className="mono text-[10px] text-muted-foreground">
              ssh afaq@portfolio
            </span>
          </div>
          <ul className="mt-5 space-y-3">
            {lines.map((l) => {
              const inner = (
                <>
                  <span className="grid h-9 w-9 place-items-center rounded-sm border-neon bg-background text-neon">
                    {l.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {l.label}
                    </div>
                    <div className="truncate mono text-sm text-foreground group-hover:text-neon">
                      {l.value}
                    </div>
                  </div>
                </>
              );
              return (
                <li key={l.label}>
                  {l.href ? (
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-sm border border-border/60 px-3 py-2.5 transition-colors hover:border-neon/60 hover:bg-neon/5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 rounded-sm border border-border/60 px-3 py-2.5">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href={`mailto:${profile.email}`} className="btn-terminal">
              <Mail size={14} /> send email
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              ./resume.pdf
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="terminal-card flex flex-col justify-between p-6"
        >
          <div>
            <div className="mono text-xs uppercase tracking-wider text-amber-glow">
              status.json
            </div>
            <pre className="mt-3 overflow-x-auto rounded-sm border border-border/60 bg-background/60 p-4 mono text-xs leading-relaxed text-muted-foreground">
{`{
  "name":      "Afaq Tahir",
  "status":    "open_to_work",
  "role":      "Network / System Monitoring",
  "level":     "Entry-level",
  "track":     "Networking → Cloud → CloudSec",
  "based_in":  "Rawalpindi, PK",
  "remote":    true,
  "relocate":  "open"
}`}
            </pre>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Prefer a quick read? Pull the resume — it's a single page, plain
            English, no buzzword soup.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
