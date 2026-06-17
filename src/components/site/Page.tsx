import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-px pt-8 text-xs uppercase tracking-[0.15em] text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.to ? (
              <Link to={c.to} className="hover:text-primary transition-colors">{c.label}</Link>
            ) : (
              <span className="text-foreground/80">{c.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="size-3 opacity-60" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section className={dark ? "bg-ink text-background" : "bg-background text-foreground"}>
      <div className="container-px grid lg:grid-cols-12 gap-10 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className={"eyebrow mb-5 " + (dark ? "text-accent" : "text-primary")}>{eyebrow}</p>
          <h1 className="headline-xl">{title}</h1>
          {intro && (
            <p className={"mt-7 max-w-2xl text-lg leading-relaxed " + (dark ? "text-background/75" : "text-muted-foreground")}>
              {intro}
            </p>
          )}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <img
              src={image}
              alt=""
              loading="lazy"
              width={1280}
              height={896}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={"container-px py-20 lg:py-28 " + className}>{children}</section>;
}

export function SectionHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="grid lg:grid-cols-12 gap-10 mb-12">
      <div className="lg:col-span-5">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h2 className="headline-lg text-ink">{title}</h2>
      </div>
      {intro && (
        <p className="lg:col-span-6 lg:col-start-7 text-lg text-muted-foreground leading-relaxed self-end">
          {intro}
        </p>
      )}
    </div>
  );
}

export function CardGrid({ items }: { items: { tag?: string; title: string; desc: string; to?: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-border">
      {items.map((s, i) => {
        const inner = (
          <>
            {s.tag && <span className="eyebrow text-primary">{s.tag}</span>}
            <h3 className="mt-5 text-2xl font-medium tracking-tight">{s.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            <span className="mt-auto inline-flex text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
              Learn more →
            </span>
          </>
        );
        const cls = "group p-8 border-b border-r border-border last:border-r-0 hover:bg-surface transition-colors flex flex-col min-h-[260px]";
        return s.to ? (
          <Link key={i} to={s.to} className={cls}>{inner}</Link>
        ) : (
          <div key={i} className={cls}>{inner}</div>
        );
      })}
    </div>
  );
}

export function CTABand({ title, ctaLabel, ctaTo = "/contact" }: { title: string; ctaLabel?: string; ctaTo?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-px py-16 lg:py-24 grid lg:grid-cols-12 gap-8 items-center">
        <h2 className="lg:col-span-8 headline-lg">{title}</h2>
        <div className="lg:col-span-4 lg:justify-self-end">
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-3 rounded-full bg-background text-foreground px-7 py-4 text-base font-medium hover:bg-ink hover:text-background transition"
          >
            {ctaLabel ?? "Contact Mattox"} →
          </Link>
        </div>
      </div>
    </section>
  );
}
