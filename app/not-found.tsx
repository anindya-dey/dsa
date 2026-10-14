import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-start justify-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-deep">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center rounded-full bg-ink px-5 font-display text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
        >
          Back home
        </Link>
      </div>
    </Container>
  );
}
