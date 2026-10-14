import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeftIcon } from "@/components/icons";

interface PageHeaderProps {
  back?: { href: string; label: string };
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({
  back,
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <header className="animate-rise pt-6 pb-8 sm:pt-10 sm:pb-10 lg:pt-14">
      {back && (
        <Link
          href={back.href}
          className="-ml-2 inline-flex items-center gap-1.5 rounded-full py-2 pr-3 pl-2 font-mono text-xs text-ink-faint transition-colors hover:bg-accent-wash hover:text-accent-deep"
        >
          <ArrowLeftIcon className="size-3.5" />
          {back.label}
        </Link>
      )}
      {eyebrow && (
        <p
          className={`font-mono text-xs uppercase tracking-[0.18em] text-accent-deep ${
            back ? "mt-4" : ""
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h1
        className={`text-[1.75rem] leading-tight font-semibold tracking-tight text-balance text-ink sm:text-4xl lg:text-[2.75rem] ${
          back || eyebrow ? "mt-2" : ""
        }`}
      >
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-pretty text-ink-soft sm:text-lg">
          {description}
        </p>
      )}
      {children && <div className="mt-4 flex flex-wrap gap-2">{children}</div>}
    </header>
  );
}
