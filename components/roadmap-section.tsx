import type { ReactNode } from "react";

interface RoadmapSectionProps {
  id: string;
  index: number;
  title: string;
  description?: string;
  ready: number;
  total: number;
  children: ReactNode;
}

export function RoadmapSection({
  id,
  index,
  title,
  description,
  ready,
  total,
  children,
}: RoadmapSectionProps) {
  const percent = total === 0 ? 0 : Math.round((ready / total) * 100);

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="border-t border-line pt-6 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 lg:pt-8"
    >
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="flex items-baseline gap-3 lg:block">
          <span className="font-mono text-sm text-accent-deep lg:text-3xl lg:font-light">
            {String(index).padStart(2, "0")}
          </span>
          <h2
            id={`${id}-title`}
            className="text-lg font-semibold tracking-tight text-ink lg:mt-2 lg:text-xl"
          >
            {title}
          </h2>
        </div>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
        <div className="mt-3 flex items-center gap-3">
          <div
            className="h-1 w-24 overflow-hidden rounded-full bg-line"
            role="presentation"
          >
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="font-mono text-[11px] text-ink-faint">
            {ready}/{total} ready
          </span>
        </div>
      </div>

      <div className="mt-3 lg:mt-0">{children}</div>
    </section>
  );
}
