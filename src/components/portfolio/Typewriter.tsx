import { useEffect, useState } from "react";

interface TypewriterProps {
  lines: string[];
  speed?: number;
  startDelay?: number;
  loop?: boolean;
  className?: string;
}

/**
 * Single-line typewriter that cycles through lines.
 * Used for the hero subtitle.
 */
export function Typewriter({
  lines,
  speed = 55,
  startDelay = 400,
  loop = true,
  className,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing",
  );

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const current = lines[idx % lines.length];

    if (phase === "typing") {
      if (text.length < current.length) {
        t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          text.length === 0 ? startDelay : speed,
        );
      } else {
        t = setTimeout(() => setPhase("pausing"), 1600);
      }
    } else if (phase === "pausing") {
      t = setTimeout(
        () => setPhase(loop ? "deleting" : "pausing"),
        loop ? 1200 : 99999,
      );
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(current.slice(0, text.length - 1)), 28);
      } else {
        setIdx((i) => (i + 1) % lines.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(t);
  }, [text, phase, idx, lines, speed, loop, startDelay]);

  return (
    <span className={className}>
      {text}
      <span className="blink ml-0.5 text-neon">▍</span>
    </span>
  );
}
