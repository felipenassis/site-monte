import Link from "next/link";

import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre-mim", label: "Sobre mim" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center py-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <details className="relative md:hidden">
            <summary
              aria-label="Abrir menu"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-border [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-4">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <nav className="absolute right-0 z-50 mt-2 flex w-48 flex-col gap-1 rounded-lg border border-border bg-card p-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
