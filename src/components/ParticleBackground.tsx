import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W: number, H: number;
    const COUNT = 160;
    const mouse = { x: 0, y: 0 };

    class Particle {
      x: number; y: number; z: number;
      vx: number; vy: number; vz: number;
      col: string; baseR: number;
      pulse: number; pulseSpeed: number;

      constructor() {
        this.x = 0; this.y = 0; this.z = 0;
        this.vx = 0; this.vy = 0; this.vz = 0;
        this.col = ""; this.baseR = 0;
        this.pulse = 0; this.pulseSpeed = 0;
        this.init();
      }
      init() {
        this.x  = (Math.random() - 0.5) * window.innerWidth  * 2;
        this.y  = (Math.random() - 0.5) * window.innerHeight * 2;
        this.z  = Math.random() * 1000 + 100;
        this.vx = (Math.random() - 0.5) * 1.8;
        this.vy = (Math.random() - 0.5) * 1.8;
        this.vz = (Math.random() - 0.5) * 3.5;
        const r = Math.random();
        this.col = r < 0.55 ? "0,255,136" : r < 0.80 ? "123,94,167" : "150,180,255";
        this.baseR = Math.random() * 2.5 + 0.8;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.04 + Math.random() * 0.03;
      }
      update() {
        this.z  += this.vz;
        this.x  += this.vx + (mouse.x - W / 2) * 0.0003;
        this.y  += this.vy + (mouse.y - H / 2) * 0.0003;
        this.pulse += this.pulseSpeed;
        if (this.z > 1200 || this.z < 50) this.vz *= -1;
        if (this.x < -W)  this.x = W;
        if (this.x >  W)  this.x = -W;
        if (this.y < -H)  this.y = H;
        if (this.y >  H)  this.y = -H;
      }
      project() {
        const fov = 550, sc = fov / (fov + this.z);
        return { sx: this.x * sc + W / 2, sy: this.y * sc + H / 2, sc };
      }
    }

    let particles: Particle[] = [];
    let animId: number;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const onMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const fog = ctx.createRadialGradient(W/2,H/2,0, W/2,H/2, Math.max(W,H)*0.7);
      fog.addColorStop(0, "rgba(0,255,136,0.025)");
      fog.addColorStop(1, "transparent");
      ctx.fillStyle = fog;
      ctx.fillRect(0, 0, W, H);

      const proj = particles.map(p => ({ p, ...p.project() }));
      proj.sort((a, b) => b.p.z - a.p.z);

      // connections
      for (let i = 0; i < proj.length; i++) {
        for (let j = i + 1; j < proj.length; j++) {
          const dx = proj[i].sx - proj[j].sx;
          const dy = proj[i].sy - proj[j].sy;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < 120) {
            const alpha = (1 - d/120) * 0.3 * (1 - proj[i].p.z/1200);
            ctx.beginPath();
            ctx.moveTo(proj[i].sx, proj[i].sy);
            ctx.lineTo(proj[j].sx, proj[j].sy);
            ctx.strokeStyle = `rgba(${proj[i].p.col},${alpha})`;
            ctx.lineWidth   = 0.7 * proj[i].sc;
            ctx.stroke();
          }
        }
      }

      // dots
      proj.forEach(({ p, sx, sy, sc }) => {
        p.update();
        const alpha = Math.min(1, (1200 - p.z) / 900) * 0.9;
        const r     = Math.max(0.4, p.baseR * sc * (1 + 0.35 * Math.sin(p.pulse)));
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col},${alpha})`;
        ctx.fill();
        if (r > 0.8) {
          const g = ctx.createRadialGradient(sx,sy,0, sx,sy, r*6);
          g.addColorStop(0, `rgba(${p.col},${0.18*alpha})`);
          g.addColorStop(1, `rgba(${p.col},0)`);
          ctx.beginPath();
          ctx.arc(sx, sy, r*6, 0, Math.PI*2);
          ctx.fillStyle = g;
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    particles = Array.from({ length: COUNT }, () => new Particle());
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}