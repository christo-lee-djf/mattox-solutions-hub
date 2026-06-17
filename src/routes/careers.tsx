import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, CTABand } from "@/components/site/Page";
import { ArrowRight } from "lucide-react";
import peopleImg from "@/assets/people.jpg";

const pillars = [
  { tag: "01", title: "Search jobs", desc: "Find roles by skill, business or location across 120 countries.", to: "/careers/search-jobs" as const },
  { tag: "02", title: "Life at Mattox", desc: "Hear from our people about culture, growth and the work we do.", to: "/careers/life-at-mattox" as const },
  { tag: "03", title: "Early careers", desc: "Internships, apprenticeships and graduate programs that launch reinvention careers.", to: "/careers/search-jobs" as const },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Mattox Solution" },
      { name: "description", content: "Join 738,000 people building the future of business with the world's leading organizations." },
      { property: "og:title", content: "Careers — Mattox Solution" },
      { property: "og:description", content: "Bring your boldest ambition. Build the work that matters." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Careers"
        title={<>Bring your <span className="text-primary">boldest ambition</span>.</>}
        intro="Build alongside 738,000 people in 120 countries on the work that matters most to clients, communities and the planet."
        image={peopleImg}
      />
      <Section>
        <SectionHeader eyebrow="Start here" title="Explore careers at Mattox." />
        <CardGrid items={pillars} />
        <div className="mt-10">
          <Link to="/careers/search-jobs" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
            Browse open roles <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>
      <CTABand title="Stay close to careers that match your ambition." ctaLabel="Join talent network" />
    </SiteShell>
  ),
});
