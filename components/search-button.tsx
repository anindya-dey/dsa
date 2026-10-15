"use client";

import { useEffect, useState } from "react";
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
        aria-label="Search (Cmd+K)"
        className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-ink-faint transition-colors hover:border-accent hover:text-accent-deep"
      >
        Search
        <kbd className="rounded border border-line px-1 py-px text-[10px]">
          ⌘K
        </kbd>
      </button>
      <SearchDialog
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
