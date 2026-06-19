import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const links = [
  { to: "/", label: "home", code: "01" },
  { to: "/about", label: "about", code: "02" },
  { to: "/skills", label: "skills", code: "03" },
  { to: "/projects", label: "projects", code: "04" },
  { to: "/certifications", label: "certs", code: "05" },
  { to: "/contact", label: "contact", code: "06" },
] as const;

export function Nav() {
  const { location } = useRouterState();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2.5 mono text-sm"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-sm border border-neon bg-background text-neon shadow-[0_0_18px_color-mix(in_oklab,var(--neon)_35%,transparent)]">
            <span className="text-base font-bold">~</span>
          </span>
          <span className="text-foreground/90">
            <span className="text-neon">afaq</span>
            <span className="text-muted-foreground">.</span>
            <span>tahir</span>
            <span className="blink ml-0.5 text-neon">_</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={[
                  "group relative rounded-sm px-3 py-2 mono text-xs uppercase tracking-wider transition-colors",
                  active
                    ? "text-neon"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                <span className="text-neon/60 mr-1.5">{l.code}.</span>
                {l.label}
                {active && (
                  <span className="absolute -bottom-[1px] left-2 right-2 h-px bg-neon shadow-[0_0_8px_var(--neon)]" />
                )}
              </Link>
            );
          })}
        </nav>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden btn-terminal md:inline-flex"
        >
          ./resume.pdf
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-sm border border-border text-foreground md:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3 sm:px-8">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={[
                    "flex items-center gap-3 rounded-sm px-3 py-2.5 mono text-sm",
                    active
                      ? "bg-neon/10 text-neon"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  ].join(" ")}
                >
                  <span className="text-neon/60 text-xs">{l.code}.</span>
                  {l.label}
                </Link>
              );
            })}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal mt-2 justify-center"
            >
              ./resume.pdf
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
