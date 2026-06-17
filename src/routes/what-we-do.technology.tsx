import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import aiImg from "@/assets/ai.jpg";

const offerings = [
  { tag: "01", title: "Cloud", desc: "Migrate, modernize and operate at hyperscale across AWS, Azure and Google Cloud." },
  { tag: "02", title: "Data & Analytics", desc: "Turn raw signal into the trusted data foundation that powers AI." },
  { tag: "03", title: "Cybersecurity", desc: "Resilience by design — protect, detect and respond across the enterprise." },
  { tag: "04", title: "Enterprise Platforms", desc: "Re-platform on SAP, Oracle, Salesforce, ServiceNow and Workday for the next era." },
  { tag: "05", title: "Engineering", desc: "Product engineering, SRE and platform teams that ship reliably at speed." },
  { tag: "06", title: "Metaverse & Immersive", desc: "Spatial, AR/VR and digital twin experiences that change how work gets done." },
];

export const Route = createFileRoute("/what-we-do/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Mattox Solution" },
      { name: "description", content: "Modernize the digital core with cloud, data, security and platforms engineered for change." },
      { property: "og:title", content: "Technology — Mattox Solution" },
      { property: "og:description", content: "Build the digital core that change runs on." },
      { property: "og:url", content: "/what-we-do/technology" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/technology" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "What we do", to: "/what-we-do" }, { label: "Technology" }]} />
      <PageHero
        eyebrow="Technology"
        title={<>A <span className="text-primary">digital core</span> built for continuous change.</>}
        intro="The technology choices you make today determine how fast you can move tomorrow. We engineer for both."
        image={aiImg}
      />
      <Section>
        <SectionHeader eyebrow="Capabilities" title="Where we engineer the future." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Re-engineer your digital core for the next decade." />
    </SiteShell>
  ),
});
