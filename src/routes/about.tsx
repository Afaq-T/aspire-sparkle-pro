import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { profile, timeline } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Afaq Tahir" },
      {
        name: "description",
        content:
          "About Afaq Tahir: IT undergrad, CEH & CCNA certified, working toward cloud networking and cloud network security.",
      },
      { property: "og:title", content: "About — Afaq Tahir" },
      {
        property: "og:description",
        content:
          "From networking fundamentals to cloud network security — the journey, the labs, the trajectory.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
      <Header />
      <Manifesto />
      <Timeline />
    </section>
  );
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mono text-xs uppercase tracking-wider text-neon">
        $ cat about.md
      </div>
      <h1 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
        Network engineer in training — eyes on cloud security.
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        {profile.objective}
      </p>
    </motion.div>
  );
}

function Manifesto() {
  const items = [
    {
      icon: <BookOpen size={18} />,
      title: "Right now",
      body:
        "Wrapping up my BS IT at University of Gujrat and grinding hands-on labs in Cisco Packet Tracer, Wireshark and Kali Linux.",
    },
    {
      icon: <Award size={18} />,
      title: "What I bring",
      body:
        "CEH + CCNA training, solid OSI/TCP-IP foundation, comfortable in both Linux and Windows, and a habit of documenting what I do.",
    },
    {
      icon: <GraduationCap size={18} />,
      title: "Where I'm going",
      body:
        "Networking role → cloud networking → cloud network security. Each step builds on the last instead of jumping disciplines.",
    },
  ];
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="terminal-card p-5"
        >
          <div className="flex items-center gap-2.5 text-neon">
            <span className="grid h-9 w-9 place-items-center rounded-sm border-neon bg-background">
              {it.icon}
            </span>
            <span className="mono text-xs uppercase tracking-wider">
              {it.title}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {it.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function Timeline() {
  return (
    <div className="mt-16">
      <div className="mono text-xs uppercase tracking-wider text-neon">
        $ git log --oneline
      </div>
      <h2 className="mt-2 font-display text-3xl text-foreground">Timeline</h2>

      <ol className="relative mt-8 space-y-6 border-l border-neon/30 pl-6">
        {timeline.map((t, i) => (
          <motion.li
            key={t.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-neon bg-background">
              <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_6px_var(--neon)]" />
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip">{t.year}</span>
              <span className="chip chip-amber">{t.tag}</span>
            </div>
            <h3 className="mt-2 font-display text-lg text-foreground">
              {t.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              {t.detail}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
