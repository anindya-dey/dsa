export type NavIcon = "home" | "data" | "system" | "ai" | "matrix" | "code";

export interface NavItem {
  href: string;
  label: string;
  shortLabel: string;
  icon: NavIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", shortLabel: "Home", icon: "home" },
  { href: "/dsa", label: "DSA", shortLabel: "DSA", icon: "data" },
  {
    href: "/system-design",
    label: "System Design",
    shortLabel: "Design",
    icon: "system",
  },
  {
    href: "/ai-ml",
    label: "AI/ML",
    shortLabel: "AI/ML",
    icon: "ai",
  },
  {
    href: "/dsa/cheat-sheet",
    label: "Cheat Sheet",
    shortLabel: "Cheats",
    icon: "matrix",
  },
  {
    href: "/cpp",
    label: "C++ Toolkit",
    shortLabel: "C++",
    icon: "code",
  },
];

function matches(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function activeNavHref(pathname: string): string | undefined {
  return NAV_ITEMS.filter((item) => matches(item.href, pathname)).sort(
    (a, b) => b.href.length - a.href.length,
  )[0]?.href;
}
