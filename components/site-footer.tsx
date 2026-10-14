import { Container } from "@/components/container";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <Container className="flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between md:py-10">
        <Logo />
        <p className="font-mono text-xs text-ink-faint">
          Patterns over memorization &middot; Anindya Dey &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}
