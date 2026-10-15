"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavGlyph } from "@/components/icons";
import { NAV_ITEMS, activeNavHref } from "@/lib/nav";

export function MobileTabBar() {
  const activeHref = activeNavHref(usePathname());

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-6">
        {NAV_ITEMS.map((item) => {
          const active = item.href === activeHref;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex h-14 flex-col items-center justify-center gap-0.5 font-display text-[10px] font-semibold transition-colors ${
                  active ? "text-accent-deep" : "text-ink-faint active:text-ink"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 mx-auto h-0.5 w-7 rounded-full bg-accent transition-opacity duration-200 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span
                  className={`flex h-7 w-10 items-center justify-center rounded-full transition-colors ${
                    active ? "bg-accent-wash" : ""
                  }`}
                >
                  <NavGlyph icon={item.icon} className="size-[18px]" />
                </span>
                <span className="max-w-full truncate px-0.5 whitespace-nowrap">
                  {item.shortLabel}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
