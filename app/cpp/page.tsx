import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { cppEntries } from "@/lib/catalog/cpp";
import { cppEntryHasContent } from "@/lib/content/cpp";

export const metadata: Metadata = {
  title: "C++ Toolkit",
  description:
    "Reference entries for the C++ containers, algorithms, and idioms this site uses.",
};

export default function CppPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Reference"
        title="C++ Toolkit"
        description="The C++ containers, algorithms, and idioms used across this site's solutions: what each does, what it costs, and the gotchas."
      />
      <ol className="-mx-3 mt-2 sm:-mx-4">
        {cppEntries.map((entry, index) => (
          <li key={entry.slug}>
            <Link
              href={`/cpp/${entry.slug}`}
              className="group grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 rounded-2xl px-3 py-4 transition-colors duration-200 hover:bg-accent-wash sm:grid-cols-[2rem_minmax(0,1fr)] sm:px-4"
            >
              <span className="pt-0.5 font-mono text-xs tabular-nums text-ink-faint transition-colors group-hover:text-accent-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-mono text-base font-semibold leading-snug transition-colors group-hover:text-accent-deep">
                    {entry.title}
                  </span>
                  {!cppEntryHasContent(entry.slug) && (
                    <span className="inline-flex items-center rounded-full border border-line bg-paper px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                      soon
                    </span>
                  )}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                  {entry.summary}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </Container>
  );
}
