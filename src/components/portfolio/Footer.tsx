import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <div className="mono text-xs uppercase tracking-wider text-neon">
            $ whoami
          </div>
          <h3 className="mt-3 font-display text-2xl text-foreground">
            {profile.name}
          </h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {profile.role}. {profile.trajectory}.
          </p>
        </div>

        <div>
          <div className="mono text-xs uppercase tracking-wider text-neon">
            $ ping --where
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <MapPin size={14} className="text-neon" />
              {profile.location}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="text-neon" />
              <a className="hover:text-neon" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="mono text-xs uppercase tracking-wider text-neon">
            $ cat ~/.links
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              className="btn-ghost"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} /> github
            </a>
            <a
              className="btn-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={14} /> linkedin
            </a>
            <a className="btn-ghost" href={`mailto:${profile.email}`}>
              <Mail size={14} /> email
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-5 mono text-[11px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:px-8">
          <span>
            <span className="text-neon">●</span> sys.status: online ·
            uptime: continuous learning
          </span>
          <span>© {new Date().getFullYear()} {profile.name} — afaqt.me</span>
        </div>
      </div>
    </footer>
  );
}
