import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Github,
  Linkedin,
  Network,
  ShieldCheck,
  Terminal as TerminalIcon,
} from "lucide-react";
import { profile, stats } from "@/lib/portfolio-data";
import { Typewriter } from "@/components/portfolio/Typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afaq Tahir — Networking & Cybersecurity Engineer" },
      {
        name: "description",
        content:
          "Personal site of Afaq Tahir. CEH, CCNA, cloud foundations. Networking → cloud → cloud security.",
      },
      { property: "og:title", content: "Afaq Tahir — Portfolio" },
      {
        property: "og:description",
        content:
          "CEH · CCNA · Cloud foundations. Building toward cloud networking & cloud network security.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrackBanner />
      <FocusGrid />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-20 sm:px-8 md:grid-cols-[1.25fr_1fr] md:gap-16 md:pt-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_var(--neon)]" />
            available · entry-level network roles
          </div>

          <h1
            data-text={profile.name}
            className="glitch mt-6 font-display text-5xl font-bold leading-[1.02] text-foreground sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </h1>

          <div className="mt-5 mono text-sm text-muted-foreground sm:text-base">
            <span className="text-neon">~/$</span>{" "}
            <Typewriter
              lines={[
                "whoami → network & cybersecurity engineer",
                "trace → networking → cloud → cloud_security",
                "ping me → afaqpk2024@gmail.com",
                "cat skills.txt → CEH · CCNA · Wireshark · Kali",
              ]}
            />
          </div>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline} I work hands-on with{" "}
            <span className="text-foreground">Cisco</span>,{" "}
            <span className="text-foreground">Wireshark</span>,{" "}
            <span className="text-foreground">Kali</span> and{" "}
            <span className="text-foreground">Packet Tracer</span> in lab
            environments — and I'm pushing toward cloud networking and cloud
            network security next.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn-terminal">
              ./view_projects <ArrowRight size={14} />
            </Link>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              ./download_resume.pdf
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn-ghost"
            >
              <Github size={14} /> github
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn-ghost"
            >
              <Linkedin size={14} /> linkedin
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-4 gap-4 border-l-2 border-neon/50 pl-5">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-1 font-display text-2xl text-amber-glow">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <PortraitCard />
      </div>
    </section>
  );
}

function PortraitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-md md:max-w-none"
    >
      {/* Outer terminal frame */}
      <div className="terminal-card scanlines relative overflow-hidden">
        {/* title bar */}
        <div className="flex items-center justify-between border-b border-border/60 bg-background/40 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--danger)]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--amber)]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-neon/80" />
          </div>
          <span className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
            session://afaq@portfolio ~ ssh
          </span>
          <span className="mono text-[10px] text-neon">●live</span>
        </div>

        <div className="relative p-5">
          {/* pulse rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/30 pulse-ring" />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/30 pulse-ring"
            style={{ animationDelay: "1.1s" }}
          />

          <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full border-2 border-neon/60 shadow-[0_0_40px_color-mix(in_oklab,var(--neon)_35%,transparent)]">
            <img
              src="/afaq-portrait.jpg"
              alt={`${profile.name} portrait`}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.45))]" />
          </div>

          <div className="mt-5 grid gap-1.5 mono text-xs text-muted-foreground">
            <div>
              <span className="text-neon">user</span>: {profile.alias}
            </div>
            <div>
              <span className="text-neon">role</span>: {profile.role}
            </div>
            <div>
              <span className="text-neon">loc&nbsp;</span>: {profile.location}
            </div>
            <div>
              <span className="text-neon">stack</span>: cisco · kali · linux ·
              wireshark · burp
            </div>
            <div>
              <span className="text-amber-glow">goal</span>: {profile.trajectory}
            </div>
          </div>
        </div>
      </div>

      {/* corner ticks */}
      <Corners />
    </motion.div>
  );
}

function Corners() {
  const cls =
    "pointer-events-none absolute h-4 w-4 border-neon";
  return (
    <>
      <span className={`${cls} -left-1 -top-1 border-l-2 border-t-2`} />
      <span className={`${cls} -right-1 -top-1 border-r-2 border-t-2`} />
      <span className={`${cls} -left-1 -bottom-1 border-l-2 border-b-2`} />
      <span className={`${cls} -right-1 -bottom-1 border-r-2 border-b-2`} />
    </>
  );
}

function TrackBanner() {
  const items = [
    "CEH", "CCNA", "Wireshark", "Nmap", "Kali Linux", "Cisco Packet Tracer",
    "Subnetting", "VLANs", "OSI Model", "TCP/IP", "Cloud Foundations",
    "Burp Suite", "VirtualBox", "Static Routing", "VPN", "Firewall",
  ];
  return (
    <section className="border-y border-border/60 bg-background/40 py-4">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-10 mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {[...items, ...items].map((it, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="text-neon">/</span> {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FocusGrid() {
  const pillars = [
    {
      icon: <Network size={20} />,
      tag: "01",
      title: "Networking",
      blurb:
        "Designing, configuring and troubleshooting routed/switched networks. VLANs, subnetting, OSI, packet flow.",
      to: "/skills",
    },
    {
      icon: <ShieldCheck size={20} />,
      tag: "02",
      title: "Cybersecurity",
      blurb:
        "CEH-trained. Recon, vulnerability scanning, packet analysis and structured pentest reporting in lab.",
      to: "/projects",
    },
    {
      icon: <Cloud size={20} />,
      tag: "03",
      title: "Cloud — next",
      blurb:
        "Building cloud foundations now → moving toward cloud networking and cloud network security as the long-term goal.",
      to: "/about",
    },
    {
      icon: <TerminalIcon size={20} />,
      tag: "04",
      title: "Systems & Tools",
      blurb:
        "Comfortable on Linux & Windows, VirtualBox labs, Wireshark captures, Nmap sweeps, Burp Suite, Git.",
      to: "/skills",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="mono text-xs uppercase tracking-wider text-neon">
            // focus_areas
          </div>
          <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
            What I'm building toward.
          </h2>
        </div>
        <Link to="/about" className="hidden mono text-xs uppercase tracking-wider text-muted-foreground hover:text-neon md:inline-flex">
          read more →
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              to={p.to}
              className="terminal-card terminal-card-hover block p-5"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-sm border-neon bg-background text-neon">
                  {p.icon}
                </div>
                <span className="mono text-[10px] text-muted-foreground">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.blurb}
              </p>
              <div className="mt-4 mono text-[11px] uppercase tracking-wider text-neon">
                explore →
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
