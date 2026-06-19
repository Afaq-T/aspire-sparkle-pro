import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Afaq Tahir" },
      {
        name: "description",
        content:
          "CEH, CCNA, network fundamentals and AI certifications earned by Afaq Tahir.",
      },
      { property: "og:title", content: "Certifications — Afaq Tahir" },
      {
        property: "og:description",
        content:
          "Verified certifications: CEH (EC-Council), CCNA, network fundamentals and AI.",
      },
    ],
  }),
  component: CertsPage,
});

function CertsPage() {
  const tagColor: Record<string, string> = {
    Networking: "var(--neon)",
    Cybersecurity: "var(--amber)",
    AI: "var(--cyan)",
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <div className="mono text-xs uppercase tracking-wider text-neon">
        $ verify --certificates
      </div>
      <h1 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
        Certified. Verifiable. Open the PDF.
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Every certificate below is a real PDF — click any card to open the
        original.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="terminal-card terminal-card-hover group flex flex-col p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-sm border bg-background"
                style={{
                  color: tagColor[c.tag] ?? "var(--neon)",
                  borderColor: `color-mix(in oklab, ${tagColor[c.tag] ?? "var(--neon)"} 45%, transparent)`,
                }}
              >
                <Award size={18} />
              </span>
              <span
                className="chip"
                style={{
                  color: tagColor[c.tag] ?? "var(--neon)",
                  background: `color-mix(in oklab, ${tagColor[c.tag] ?? "var(--neon)"} 8%, transparent)`,
                  borderColor: `color-mix(in oklab, ${tagColor[c.tag] ?? "var(--neon)"} 30%, transparent)`,
                }}
              >
                {c.tag}
              </span>
            </div>

            <h2 className="mt-4 font-display text-lg leading-snug text-foreground">
              {c.name}
            </h2>
            <p className="mt-1 mono text-xs text-muted-foreground">
              {c.issuer}
            </p>

            <div className="mt-5 flex items-center justify-between mono text-xs">
              <span className="text-muted-foreground">issued · {c.year}</span>
              <span className="flex items-center gap-1 text-neon group-hover:underline">
                view <ExternalLink size={12} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
