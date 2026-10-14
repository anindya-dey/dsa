"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { ChevronDownIcon } from "@/components/icons";
import type { Heading } from "@/lib/mdx";

const ACTIVE_OFFSET_PX = 112;

function useActiveHeading(headings: Heading[]): string | undefined {
  const [activeId, setActiveId] = useState<string | undefined>(headings[0]?.id);

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => element !== null);
    if (elements.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActiveId(elements[elements.length - 1].id);
        return;
      }

      let current = elements[0].id;
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= ACTIVE_OFFSET_PX) {
          current = element.id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [headings]);

  return activeId;
}

function TocLinks({
  headings,
  activeId,
  railIndicator,
  onNavigate,
}: {
  headings: Heading[];
  activeId: string | undefined;
  railIndicator: boolean;
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <ul className="space-y-0.5">
      {headings.map((heading) => {
        const active = heading.id === activeId;
        return (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={onNavigate}
              aria-current={active ? "location" : undefined}
              className={`relative block rounded-lg py-1.5 pr-2 text-sm leading-snug transition-colors duration-200 ${
                heading.depth === 3 ? "pl-5" : "pl-2"
              } ${
                active
                  ? "bg-accent-wash font-medium text-accent-deep"
                  : "text-ink-soft hover:bg-accent-wash/60 hover:text-accent-deep"
              } ${
                railIndicator
                  ? `before:absolute before:inset-y-1.5 before:-left-[17px] before:w-0.5 before:rounded-full before:transition-colors before:duration-200 ${
                      active ? "before:bg-accent" : "before:bg-transparent"
                    }`
                  : ""
              }`}
            >
              {heading.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function TocDesktop({ headings }: { headings: Heading[] }) {
  const activeId = useActiveHeading(headings);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-24 border-l border-line pl-4"
    >
      <p className="mb-2 pl-2 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
        On this page
      </p>
      <TocLinks headings={headings} activeId={activeId} railIndicator />
    </nav>
  );
}

export function TocMobile({ headings }: { headings: Heading[] }) {
  const activeId = useActiveHeading(headings);
  const activeText = headings.find((heading) => heading.id === activeId)?.text;

  const closePanel = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.closest("details")?.removeAttribute("open");
  };

  return (
    <details className="group mb-2 overflow-hidden rounded-2xl bg-accent-wash/60">
      <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3.5 [&::-webkit-details-marker]:hidden">
        <span className="shrink-0 text-sm font-semibold text-ink">
          On this page
        </span>
        {activeText && (
          <span className="min-w-0 flex-1 truncate font-mono text-xs text-ink-faint group-open:invisible">
            {activeText}
          </span>
        )}
        <ChevronDownIcon className="ml-auto size-4 shrink-0 text-ink-soft transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <nav aria-label="On this page" className="border-t border-accent/15 px-2 py-2">
        <TocLinks
          headings={headings}
          activeId={activeId}
          railIndicator={false}
          onNavigate={closePanel}
        />
      </nav>
    </details>
  );
}
