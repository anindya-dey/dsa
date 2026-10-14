"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, activeNavHref } from "@/lib/nav";

export function DesktopNav() {
  const activeHref = activeNavHref(usePathname());

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
      {NAV_ITEMS.filter((item) => item.href !== "/").map((item) => {
        const active = item.href === activeHref;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-3.5 py-2 font-display text-sm font-semibold transition-colors ${
              active
                ? "bg-accent-wash text-accent-deep"
                : "text-ink-soft hover:bg-accent-wash/60 hover:text-accent-deep"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
