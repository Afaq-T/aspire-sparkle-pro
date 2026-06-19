import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cloud, Network, ShieldCheck, Terminal as TerminalIcon } from "lucide-react";
import { skillGroups } from "@/lib/portfolio-data";

const iconMap = {
  network: <Network size={18} />,
  shield: <ShieldCheck size={18} />,
  cloud: <Cloud size={18} />,
  terminal: <TerminalIcon size={18} />,
} as const;

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Afaq Tahir" },
      {
        name: "description",
        content:
          "Networking, cybersecurity, cloud foundations and systems tooling — the stack Afaq Tahir works with.",
      },
      { property: "og:title", content: "Skills — Afaq Tahir" },
      {
        property: "og:description",
        content:
          "TCP/IP · VLANs · Wireshark · Nmap · Kali · Cisco Packet Tracer · Cloud foundations.",
      },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <div className="mono text-xs uppercase tracking-wider text-neon">
        $ ls -la ~/skills/
      </div>
      <h1 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
        The stack I build with.
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Four pillars I'm actively training in — each one feeds the next on the
        path to cloud network security.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="terminal-card terminal-card-hover p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-sm border-neon bg-background text-neon glow-neon">
                  {iconMap[g.icon as keyof typeof iconMap]}
                </span>
                <h2 className="font-display text-xl text-foreground">
                  {g.title}
                </h2>
              </div>
              <span className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
                module/0{i + 1}
              </span>
            </div>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 mono text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-neon shadow-[0_0_6px_var(--neon)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <Toolbelt />
    </section>
  );
}

function Toolbelt() {
  const tools = [
    "Cisco IOS", "Packet Tracer", "Wireshark", "Nmap", "Kali Linux",
    "Burp Suite", "VirtualBox", "VMware", "Ubuntu", "Windows Server",
    "Git", "GitHub", "Bash", "PowerShell", "OSI Model",
  ];
  return (
    <div className="mt-16">
      <div className="mono text-xs uppercase tracking-wider text-neon">
        $ which *
      </div>
      <h3 className="mt-2 font-display text-2xl text-foreground">Toolbelt</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {tools.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
    </div>
  );
}
