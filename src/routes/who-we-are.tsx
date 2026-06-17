import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, CTABand } from "@/components/site/Page";
import peopleImg from "@/assets/people.jpg";

const pillars = [
  { tag: "01", title: "Leadership", desc: "Meet the people setting the direction of Mattox Solution.", to: "/who-we-are/leadership" as const },
  { tag: "02", title: "Newsroom", desc: "Latest announcements, results and stories from across our business.", to: "/who-we-are/newsroom" as const },
  { tag: "03", title: "Sustainability", desc: "How we're embedding responsibility in everything we do.", to: "/who-we-are/sustainability" as const },
];

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who we are — Mattox Solution" },
      { name: "description", content: "A global professional services company helping organizations create value through reinvention." },
      { property: "og:title", content: "Who we are — Mattox Solution" },
      { property: "og:description", content: "Meet Mattox Solution — our story, our leaders and our commitments." },
      { property: "og:url", content: "/who-we-are" },
    ],
    links: [{ rel: "canonical", href: "/who-we-are" }],
  }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Who we are"
        title={<>One <span className="text-primary">global team</span>, in service of reinvention.</>}
        intro="738,000 people. 120 countries. One purpose: deliver on the promise of technology and human ingenuity."
        image={peopleImg}
      />
      <Section>
        <SectionHeader eyebrow="About Mattox" title="Explore who we are." />
        <CardGrid items={pillars} />
      </Section>
      <CTABand title="Have a question for our team?" />
    </SiteShell>
  ),
});
