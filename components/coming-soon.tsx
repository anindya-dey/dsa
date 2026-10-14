import Link from "next/link";
import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

interface ComingSoonProps {
  title: string;
  summary: string;
  backHref: string;
  backLabel: string;
}

export function ComingSoon({ title, summary, backHref, backLabel }: ComingSoonProps) {
  return (
    <Container>
      <PageHeader
        back={{ href: backHref, label: backLabel }}
        title={title}
        description={summary}
      >
        <Badge tone="accent">Coming soon</Badge>
      </PageHeader>

      <div className="max-w-2xl rounded-2xl bg-accent-wash/60 p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-ink-soft">
          This topic is on the roadmap but hasn&apos;t been written yet. The
          full catalog is published first so you can see where everything
          fits; content lands in later phases.
        </p>
        <Link
          href={backHref}
          className="mt-4 inline-flex items-center rounded-full bg-ink px-4 py-2.5 font-display text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
        >
          Browse what&apos;s ready
        </Link>
      </div>
    </Container>
  );
}
