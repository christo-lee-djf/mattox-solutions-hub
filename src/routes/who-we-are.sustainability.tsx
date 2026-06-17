import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import industryImg from "@/assets/industry.jpg";

const pillars = [
  { tag: "01", title: "Net Zero by 2030", desc: "On a science-based path to net-zero emissions across our operations and supply chain." },
  { tag: "02", title: "Inclusion & Diversity", desc: "Gender balance, equitable pay and representation at every level." },
  { tag: "03", title: "Responsible Business", desc: "Ethics, human rights and governance built into how we operate." },
  { tag: "04", title: "Sustainable Tech", desc: "Helping clients decarbonize through technology and intelligent operations." },
  { tag: "05", title: "Community Impact", desc: "Skilling and economic opportunity programs reaching millions worldwide." },
  { tag: "06", title: "Transparent Reporting", desc: "Audit-ready ESG disclosure that meets and exceeds emerging standards." },
];

export const Route = createFileRoute("/who-we-are/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Mattox Solution" },
      { name: "description", content: "How Mattox Solution is embedding responsibility in our operations, our clients and our communities." },
      { property: "og:title", content: "Sustainability — Mattox Solution" },
      { property: "og:description", content: "A responsible business, by design." },
      { property: "og:url", content: "/who-we-are/sustainability" },
    ],
    links: [{ rel: "canonical", href: "/who-we-are/sustainability" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Who we are", to: "/who-we-are" }, { label: "Sustainability" }]} />
      <PageHero
        eyebrow="Sustainability"
        title={<>A responsible business — <span className="text-primary">by design</span>.</>}
        intro="We measure success by the value we create for our clients, our people, our communities and the planet."
        image={industryImg}
      />
      <Section>
        <SectionHeader eyebrow="Our commitments" title="Where we focus." />
        <CardGrid items={pillars} />
      </Section>
      <CTABand title="Read our latest sustainability report." ctaLabel="Download" />
    </SiteShell>
  ),
});
