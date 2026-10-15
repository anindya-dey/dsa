import { tierLabels } from "@/lib/catalog/tiers";
import type { Tier } from "@/lib/catalog/types";

const TONE: Record<Tier, string> = {
  foundational: "border-line bg-paper text-ink-faint",
  intermediate: "border-line bg-accent-wash/50 text-ink-soft",
  advanced: "border-accent/30 bg-accent-wash text-accent-deep",
};

export function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide ${TONE[tier]}`}
    >
      {tierLabels[tier]}
    </span>
  );
}
