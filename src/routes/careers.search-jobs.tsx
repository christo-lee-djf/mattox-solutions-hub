import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, Breadcrumbs, CTABand } from "@/components/site/Page";
import { Search } from "lucide-react";

const jobs = [
  { title: "Senior AI Engineer", location: "New York, NY · Remote possible", business: "Artificial Intelligence" },
  { title: "Managing Director — Banking", location: "London, UK", business: "Strategy & Consulting" },
  { title: "Cloud Platform Architect", location: "Bengaluru, IN", business: "Technology" },
  { title: "Service Designer", location: "Berlin, DE", business: "Song" },
  { title: "Industrial AI Lead", location: "Detroit, MI", business: "Industry X" },
  { title: "Finance Operations Manager", location: "Manila, PH", business: "Operations" },
  { title: "Cybersecurity Principal", location: "Sydney, AU", business: "Technology" },
  { title: "Public Service Director", location: "Washington, DC", business: "Strategy & Consulting" },
];

export const Route = createFileRoute("/careers/search-jobs")({
  head: () => ({
    meta: [
      { title: "Search jobs — Mattox Solution" },
      { name: "description", content: "Browse open roles at Mattox Solution across 120 countries and every business." },
      { property: "og:title", content: "Search jobs — Mattox Solution" },
      { property: "og:description", content: "Find your role at Mattox Solution." },
      { property: "og:url", content: "/careers/search-jobs" },
    ],
    links: [{ rel: "canonical", href: "/careers/search-jobs" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Careers", to: "/careers" }, { label: "Search jobs" }]} />
      <PageHero
        eyebrow="Search jobs"
        title={<>Find <span className="text-primary">your role</span>.</>}
        intro="Filter by skill, business and location. New roles posted every day."
      />
      <Section>
        <div className="border border-border p-2 flex items-center gap-3 mb-10 max-w-2xl">
          <Search className="size-5 ml-3 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search by title, skill, or keyword"
            className="flex-1 bg-transparent border-0 outline-none px-2 py-3 text-base"
          />
          <button className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90">Search</button>
        </div>
        <ul className="border-t border-border">
          {jobs.map((j) => (
            <li key={j.title} className="group grid grid-cols-12 gap-4 py-6 px-2 border-b border-border hover:bg-surface transition-colors">
              <a href="#" className="col-span-12 md:col-span-6 text-lg font-medium leading-snug group-hover:text-primary transition-colors">{j.title} →</a>
              <p className="col-span-12 md:col-span-3 text-sm text-muted-foreground">{j.location}</p>
              <p className="col-span-12 md:col-span-3 text-xs uppercase tracking-[0.15em] text-primary self-center">{j.business}</p>
            </li>
          ))}
        </ul>
      </Section>
      <CTABand title="Don't see your role? Join our talent network." ctaLabel="Join now" />
    </SiteShell>
  ),
});
