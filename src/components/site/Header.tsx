import { Link } from "@tanstack/react-router";
import { Search, Menu } from "lucide-react";

const NAV = [
  { label: "What we do", to: "/what-we-do" as const },
  { label: "What we think", to: "/what-we-think" as const },
  { label: "Industries", to: "/industries" as const },
  { label: "Who we are", to: "/who-we-are" as const },
  { label: "Careers", to: "/careers" as const },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-px flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <span className="text-[1.35rem] font-semibold tracking-tight purple-caret purple-caret-after">
            mattox
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">
            Solution
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Search" className="p-2 hover:text-primary"><Search className="size-5" /></button>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors"
          >
            Contact us
          </Link>
          <button aria-label="Menu" className="lg:hidden p-2"><Menu className="size-5" /></button>
        </div>
      </div>
    </header>
  );
}
