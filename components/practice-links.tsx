import type { PracticeLink } from "@/lib/content/dsa";

export function PracticeLinks({ links }: { links?: PracticeLink[] }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-line pt-6">
      <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
        Practice this on
      </span>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-ink-soft transition-colors hover:border-accent hover:bg-accent-wash hover:text-accent-deep"
        >
          {link.label} &nearr;
        </a>
      ))}
    </div>
  );
}
