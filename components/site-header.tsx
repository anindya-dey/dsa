import { Container } from "@/components/container";
import { DesktopNav } from "@/components/desktop-nav";
import { Logo } from "@/components/logo";
import { SearchButton } from "@/components/search-button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between md:h-16">
        <Logo />
        <div className="flex items-center gap-3 md:gap-4">
          <SearchButton />
          <DesktopNav />
        </div>
      </Container>
    </header>
  );
}
