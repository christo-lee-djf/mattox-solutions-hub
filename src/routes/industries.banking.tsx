import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import aiImg from "@/assets/ai.jpg";

const offerings = [
  { tag: "01", title: "Retail Banking", desc: "Digital-first deposits, lending and everyday banking at scale." },
  { tag: "02", title: "Commercial Banking", desc: "Reinvent the relationship manager and the platform behind them." },
  { tag: "03", title: "Payments", desc: "Real-time rails, embedded finance and the next generation of payments." },
  { tag: "04", title: "Risk & Compliance", desc: "AI-powered controls, financial crime and capital optimization." },
  { tag: "05", title: "Wealth Management", desc: "Hybrid advice models that scale relationships and value." },
  { tag: "06", title: "Core Modernization", desc: "Replatform the core without disrupting the business." },
];

export const Route = createFileRoute("/industries/banking")({
  head: () => ({
    meta: [
      { title: "Banking — Mattox Solution" },
      { name: "description", content: "Reinvention for retail, commercial and corporate banks — digital core, AI, payments and risk." },
      { property: "og:title", content: "Banking — Mattox Solution" },
      { property: "og:description", content: "Reinventing the business of banking." },
      { property: "og:url", content: "/industries/banking" },
    ],
    links: [{ rel: "canonical", href: "/industries/banking" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Industries", to: "/industries" }, { label: "Banking" }]} />
      <PageHero
        eyebrow="Banking"
        title={<>Reinventing the <span className="text-primary">business of banking</span>.</>}
        intro="The leaders of the next decade will be the banks that turn their data, technology and people into a single competitive engine."
        image={aiImg}
        tone="dark"
      />
      <Section>
        <SectionHeader eyebrow="Where we focus" title="Capabilities for banking leaders." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Build the bank of the next decade." />
    </SiteShell>
  ),
});
