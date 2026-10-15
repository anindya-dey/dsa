"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

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
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

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
    const onKey = (event: KeyboardEvent) => {
      if ((event.key === "k" || event.key === "K") &&
          (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onClick = (event: MouseEvent) => {
      if (dialogRef.current &&
          !dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open, onClose]);

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

  const showEmpty = index !== null && query.length > 1 && results.length === 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search the site"
      className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm ${
        open ? "" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        ref={dialogRef}
        className="mx-auto mt-[10vh] w-[92%] max-w-xl overflow-hidden rounded-2xl border border-line bg-paper shadow-xl"
      >
        <div className="flex items-center gap-2 border-b border-line px-4">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            Search
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search patterns, problems, topics…"
            className="h-12 flex-1 bg-transparent text-ink outline-none placeholder:text-ink-faint/70"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink-faint">
            esc
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {index === null && (
            <p className="px-3 py-6 text-sm text-ink-faint">Loading index…</p>
          )}

          {index !== null && tokens.length === 0 && (
            <p className="px-3 py-6 text-sm text-ink-faint">
              {index.length} published articles. Type to search.
            </p>
          )}

          {showEmpty && (
            <p className="px-3 py-6 text-sm text-ink-faint">
              No results for &ldquo;{query}&rdquo;.
            </p>
          )}

          {results.length > 0 && (
            <ul className="space-y-1">
              {results.map(({ entry, snippet }) => (
                <li key={entry.url}>
                  <Link
                    href={entry.url}
                    onClick={onClose}
                    className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-accent-wash"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent-deep">
                      {entry.section}
                    </p>
                    <p className="mt-0.5 font-display text-[0.95rem] font-semibold text-ink">
                      {entry.title}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-ink-soft">
                      {snippet}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
