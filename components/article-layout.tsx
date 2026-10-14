import type { ReactNode } from "react";
import { TocDesktop, TocMobile } from "@/components/table-of-contents";
import type { Heading } from "@/lib/mdx";
import { PROSE_CLASSES } from "@/lib/prose";

export function ArticleLayout({
  headings,
  aside,
  children,
}: {
  headings: Heading[];
  aside?: ReactNode;
  children: ReactNode;
}) {
  const hasToc = headings.length > 1;

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-14">
      <div className="min-w-0">
        {hasToc && (
          <div className="lg:hidden">
            <TocMobile headings={headings} />
          </div>
        )}

        <article className={`${PROSE_CLASSES} lg:max-w-[44rem]`}>{children}</article>

        {aside}
      </div>

      {hasToc && (
        <aside className="hidden lg:block">
          <TocDesktop headings={headings} />
        </aside>
      )}
    </div>
  );
}
