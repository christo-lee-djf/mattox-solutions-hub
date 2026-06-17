import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import industryImg from "@/assets/industry.jpg";

const offerings = [
  { tag: "01", title: "Finance & Accounting", desc: "Touchless close, intelligent controls, AI-enabled FP&A." },
  { tag: "02", title: "Supply Chain", desc: "Resilient, sustainable and predictive across plan, source, make and deliver." },
  { tag: "03", title: "Procurement", desc: "Sourcing and category management driven by data and digital workflows." },
  { tag: "04", title: "Marketing Operations", desc: "Content, campaigns and customer engagement at machine speed." },
  { tag: "05", title: "HR Operations", desc: "Employee experience and shared services reimagined around AI." },
  { tag: "06", title: "Industry Operations", desc: "Sector-specific intelligent operations for banking, insurance and health." },
];

export const Route = createFileRoute("/what-we-do/operations")({
  head: () => ({
    meta: [
      { title: "Operations — Mattox Solution" },
      { name: "description", content: "Intelligent operations that learn, adapt and create compounding value across the enterprise." },
      { property: "og:title", content: "Operations — Mattox Solution" },
      { property: "og:description", content: "Run smarter, run sustainable, run with AI." },
      { property: "og:url", content: "/what-we-do/operations" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/operations" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "What we do", to: "/what-we-do" }, { label: "Operations" }]} />
      <PageHero
        eyebrow="Operations"
        title={<>Intelligent operations, <span className="text-primary">compounding value</span>.</>}
        intro="We run mission-critical processes for the world's largest companies — and reinvent them every day with AI."
        image={industryImg}
      />
      <Section>
        <SectionHeader eyebrow="Capabilities" title="Where intelligent operations show up." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Reinvent the operations that run your business." />
    </SiteShell>
  ),
});
