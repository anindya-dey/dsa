import Link from "next/link";
import { Badge } from "@/components/badge";
import { TierBadge } from "@/components/tier-badge";
import { ArrowRightIcon } from "@/components/icons";
import type { Tier } from "@/lib/catalog/types";

export interface TopicListItem {
  href: string;
  title: string;
  summary: string;
  available: boolean;
  meta?: string;
  tier?: Tier;
}

export function TopicList({ items }: { items: TopicListItem[] }) {
  return (
    <ol className="-mx-3 sm:-mx-4">
      {items.map((item, index) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group grid grid-cols-[1.75rem_minmax(0,1fr)_1.25rem] gap-x-3 rounded-2xl px-3 py-4 transition-colors duration-200 hover:bg-accent-wash active:bg-accent-wash sm:grid-cols-[2rem_minmax(0,1fr)_1.25rem] sm:px-4"
          >
            <span className="pt-0.5 font-mono text-xs tabular-nums text-ink-faint transition-colors group-hover:text-accent-deep">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="min-w-0">
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span
                  className={`font-display text-base font-semibold leading-snug transition-colors group-hover:text-accent-deep ${
                    item.available ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {item.title}
                </span>
                {item.tier && <TierBadge tier={item.tier} />}
                {!item.available && <Badge>soon</Badge>}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                {item.summary}
              </span>
              {item.meta && (
                <span className="mt-2 block font-mono text-[11px] text-ink-faint">
                  {item.meta}
                </span>
              )}
            </span>

            <ArrowRightIcon className="mt-0.5 size-4 text-ink-faint/60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent-deep" />
          </Link>
        </li>
      ))}
    </ol>
  );
}
