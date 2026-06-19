import { useEffect, useRef } from "react";

/**
 * Subtle matrix-rain canvas background.
 * Low opacity so content stays readable.
 */
export function MatrixRain({ opacity = 0.18 }: { opacity?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];

    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノabcdef0123456789{}<>/$#@%&*+=";

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      columns = Math.ceil(w / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -50);
    };
    resize();
    window.addEventListener("resize", resize);

    let last = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 55) return; // ~18fps — keep light
      last = t;

      ctx.fillStyle = "rgba(8, 14, 11, 0.35)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle =
          Math.random() > 0.975 ? "rgba(255,176,0,0.95)" : "rgba(0,255,156,0.78)";
        ctx.fillText(ch, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ opacity }}
    />
  );
}
