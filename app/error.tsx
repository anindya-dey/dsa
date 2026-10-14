"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-start justify-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-deep">
          Error
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
          An unexpected error occurred while rendering this page. You can try
          again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-11 items-center rounded-full bg-ink px-5 font-display text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-full border border-ink/15 px-5 font-display text-sm font-semibold text-ink transition-colors hover:border-accent hover:bg-accent-wash hover:text-accent-deep"
          >
            Back home
          </Link>
        </div>
      </div>
    </Container>
  );
}
