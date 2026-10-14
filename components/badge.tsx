import type { ReactNode } from "react";

type Tone = "neutral" | "accent";

const TONES: Record<Tone, string> = {
  neutral: "border-line bg-paper text-ink-faint",
  accent: "border-accent/30 bg-accent-wash text-accent-deep",
};

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}
