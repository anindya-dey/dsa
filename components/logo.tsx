import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="DSA and System Design, home"
      className="-mx-1 rounded-md px-1 py-1.5 font-mono text-base font-medium sm:text-lg"
    >
      <span className="text-ink">dsa</span>
      <span className="text-accent-deep">.and()</span>
      <span className="text-ink">.design</span>
    </Link>
  );
}
