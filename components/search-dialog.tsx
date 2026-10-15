"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SearchIcon } from "@/components/icons";

interface SearchEntry {
  url: string;
  title: string;
  summary: string;
  body: string;
  section: string;
}

let indexPromise: Promise<SearchEntry[]> | undefined;

function loadIndex(): Promise<SearchEntry[]> {
  indexPromise ??= fetch("/search-index.json")
    .then((response) => response.json())
    .catch(() => [] as SearchEntry[]);
  return indexPromise;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9+#]+/)
    .filter((token) => token.length > 0);
}

function scoreEntry(entry: SearchEntry, tokens: string[]): number {
  const title = entry.title.toLowerCase();
  const summary = entry.summary.toLowerCase();
  const body = entry.body.toLowerCase();

  let score = 0;
  for (const token of tokens) {
    if (title.includes(token)) {
      score += title.startsWith(token) ? 12 : 8;
    }
    if (summary.includes(token)) {
      score += 4;
    }
    if (body.includes(token)) {
      score += 2;
    }
  }
  return score;
}

const SNIPPET_RADIUS = 70;

function snippetFor(entry: SearchEntry, tokens: string[]): string {
  const lower = entry.body.toLowerCase();
  const position = tokens
    .map((token) => lower.indexOf(token))
    .filter((index) => index >= 0)
    .sort((a, b) => a - b)[0];

  if (position === undefined) {
    return entry.body.slice(0, 140).trim();
  }

  const start = Math.max(0, position - SNIPPET_RADIUS);
  const end = Math.min(entry.body.length, position + SNIPPET_RADIUS + 40);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < entry.body.length ? "…" : "";
  return `${prefix}${entry.body.slice(start, end).trim()}${suffix}`;
}

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    loadIndex().then((entries) => {
      if (!cancelled) {
        setIndex(entries);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const frame = requestAnimationFrame(() => {
      setQuery("");
      setActiveIndex(0);
      inputRef.current?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const tokens = useMemo(
    () => tokenize(query).filter((token) => token.length > 1),
    [query],
  );

  const results = useMemo(() => {
    if (index === null || tokens.length === 0) {
      return [];
    }
    return index
      .map((entry) => ({ entry, score: scoreEntry(entry, tokens) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((item) => ({
        entry: item.entry,
        snippet: snippetFor(item.entry, tokens),
      }));
  }, [index, tokens]);

  const active =
    results.length > 0
      ? Math.min(activeIndex, results.length - 1)
      : -1;

  useEffect(() => {
    activeItemRef.current?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) {
    return null;
  }

  const showEmpty = index !== null && query.length > 1 && results.length === 0;

  const move = (delta: number) => {
    setActiveIndex((current) => {
      if (results.length === 0) {
        return 0;
      }
      const next = current + delta;
      if (next < 0) {
        return results.length - 1;
      }
      if (next >= results.length) {
        return 0;
      }
      return next;
    });
  };

  const openActive = () => {
    if (active >= 0) {
      const target = results[active].entry.url;
      onClose();
      router.push(target);
    }
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      openActive();
    }
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search the site"
      className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/50 px-4 pt-[12vh] backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default"
      />
      <div className="animate-rise relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-paper shadow-2xl">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <SearchIcon className="size-4 shrink-0 text-ink-faint" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onInputKeyDown}
            placeholder="Search patterns, problems, and topics…"
            autoComplete="off"
            spellCheck={false}
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls="search-results"
            aria-activedescendant={
              active >= 0 ? `search-option-${active}` : undefined
            }
            className="h-14 flex-1 bg-transparent text-base text-ink outline-none focus-visible:outline-none placeholder:text-ink-faint/70"
          />
          <kbd className="hidden shrink-0 rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink-faint sm:block">
            esc
          </kbd>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-2">
          {index === null && (
            <p className="px-3 py-8 text-center text-sm text-ink-faint">
              Loading index…
            </p>
          )}

          {index !== null && tokens.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-ink-faint">
              {index.length} published articles. Start typing to search.
            </p>
          )}

          {showEmpty && (
            <p className="px-3 py-8 text-center text-sm text-ink-faint">
              No results for &ldquo;{query}&rdquo;.
            </p>
          )}

          {results.length > 0 && (
            <ul id="search-results" role="listbox" className="space-y-0.5">
              {results.map(({ entry, snippet }, position) => {
                const isActive = position === active;
                return (
                  <li
                    key={entry.url}
                    id={`search-option-${position}`}
                    role="option"
                    aria-selected={isActive}
                  >
                    <Link
                      ref={isActive ? activeItemRef : undefined}
                      href={entry.url}
                      onClick={onClose}
                      onMouseEnter={() => setActiveIndex(position)}
                      className={`block rounded-xl px-3 py-2.5 outline-none transition-colors ${
                        isActive ? "bg-accent-wash" : ""
                      }`}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent-deep">
                        {entry.section}
                      </span>
                      <span className="mt-0.5 block font-display text-[0.95rem] font-semibold text-ink">
                        {entry.title}
                      </span>
                      <span className="mt-1 block text-sm leading-snug text-ink-soft">
                        {snippet}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-4 border-t border-line px-4 py-2 text-[11px] text-ink-faint">
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-line px-1 py-px font-mono text-[10px]">
              ↑↓
            </kbd>
            navigate
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-line px-1 py-px font-mono text-[10px]">
              ↵
            </kbd>
            open
          </span>
        </div>
      </div>
    </div>,
    document.body,
  );
}
