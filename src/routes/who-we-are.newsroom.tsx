import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, Breadcrumbs, CTABand } from "@/components/site/Page";

const news = [
  { date: "Jun 12, 2026", tag: "Press release", title: "Mattox Solution reports record full-year revenue, driven by AI demand" },
  { date: "May 28, 2026", tag: "Announcement", title: "Mattox launches new Center for Responsible AI in Singapore" },
  { date: "May 14, 2026", tag: "Partnership", title: "Mattox expands strategic alliance with leading cloud hyperscaler" },
  { date: "Apr 30, 2026", tag: "Acquisition", title: "Mattox acquires industrial AI specialist to scale Industry X capabilities" },
  { date: "Apr 09, 2026", tag: "Press release", title: "Mattox named a Leader in global digital transformation services" },
  { date: "Mar 22, 2026", tag: "Award", title: "Mattox recognized among the world's most admired companies" },
];

export const Route = createFileRoute("/who-we-are/newsroom")({
  head: () => ({
    meta: [
      { title: "Newsroom — Mattox Solution" },
      { name: "description", content: "News, announcements and press releases from Mattox Solution." },
      { property: "og:title", content: "Newsroom — Mattox Solution" },
      { property: "og:description", content: "The latest news from Mattox Solution." },
      { property: "og:url", content: "/who-we-are/newsroom" },
    ],
    links: [{ rel: "canonical", href: "/who-we-are/newsroom" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Who we are", to: "/who-we-are" }, { label: "Newsroom" }]} />
      <PageHero
        eyebrow="Newsroom"
        title={<>The <span className="text-primary">latest</span> from Mattox.</>}
        intro="Press releases, announcements, and reporting on what's happening across our business."
      />
      <Section>
        <SectionHeader eyebrow="Latest" title="Recent stories." />
        <ul className="border-t border-border">
          {news.map((n) => (
            <li key={n.title} className="group grid grid-cols-12 gap-6 py-6 border-b border-border hover:bg-surface transition-colors px-2">
              <div className="col-span-12 sm:col-span-3 text-sm text-muted-foreground">{n.date}</div>
              <div className="col-span-12 sm:col-span-2 text-xs uppercase tracking-[0.15em] text-primary">{n.tag}</div>
              <a href="#" className="col-span-12 sm:col-span-7 text-lg font-medium leading-snug group-hover:text-primary transition-colors">{n.title} →</a>
            </li>
          ))}
        </ul>
      </Section>
      <CTABand title="Media inquiry? Get in touch." />
    </SiteShell>
  ),
});
