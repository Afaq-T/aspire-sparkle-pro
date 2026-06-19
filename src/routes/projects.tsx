import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects, profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Afaq Tahir" },
      {
        name: "description",
        content:
          "Network simulations, ethical hacking labs, subnetting and Wireshark traffic analysis projects by Afaq Tahir.",
      },
      { property: "og:title", content: "Projects — Afaq Tahir" },
      {
        property: "og:description",
        content:
          "Hands-on labs in Cisco Packet Tracer, Kali Linux, Wireshark, Nmap and Burp Suite.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <div className="mono text-xs uppercase tracking-wider text-neon">
        $ ls ~/projects/ --hands-on
      </div>
      <h1 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
        Things I've actually built & broken.
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Lab-scale, hands-on work — not tutorial clones. Each one solves a
        specific networking or security exercise end-to-end.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="terminal-card terminal-card-hover scanlines flex h-full flex-col p-6"
          >
            <header className="flex items-start justify-between gap-4">
              <div>
                <div className="mono text-[10px] uppercase tracking-wider text-neon">
                  // 0{i + 1} · {p.stack[0]}
                </div>
                <h2 className="mt-2 font-display text-2xl text-foreground">
                  {p.title}
                </h2>
              </div>
              <span className="mono text-xs text-amber-glow">
                ● ready
              </span>
            </header>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.summary}
            </p>

            <ul className="mt-4 space-y-1.5 mono text-xs text-muted-foreground">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-neon">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-end gap-2 pt-5">
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github size={14} /> source
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 terminal-card flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
        <div>
          <div className="mono text-xs uppercase tracking-wider text-neon">
            $ git remote -v
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            More repos and works-in-progress live on GitHub.
          </p>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-terminal"
        >
          <Github size={14} /> visit github <ExternalLink size={12} />
        </a>
      </div>
    </section>
  );
}
