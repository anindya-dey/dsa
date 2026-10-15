"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "@/components/icons";
import { SearchDialog } from "@/components/search-dialog";

export function SearchButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.key === "k" || event.key === "K") &&
          (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search (Command+K)"
        className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper/60 py-1.5 pr-1.5 pl-3 text-ink-faint transition-colors hover:border-accent/40 hover:text-ink-soft"
      >
        <SearchIcon className="size-4" />
        <span className="hidden font-mono text-xs sm:inline">Search</span>
        <kbd className="hidden rounded-full border border-line bg-accent-wash/50 px-2 py-0.5 font-mono text-[10px] text-ink-faint sm:inline">
          ⌘K
        </kbd>
      </button>
      <SearchDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
