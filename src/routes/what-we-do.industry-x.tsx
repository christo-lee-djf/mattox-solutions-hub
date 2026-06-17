import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import industryImg from "@/assets/industry.jpg";

const offerings = [
  { tag: "01", title: "Product Engineering", desc: "Software-defined products, embedded systems and connected services." },
  { tag: "02", title: "Smart Manufacturing", desc: "Digital twins, edge AI and autonomous operations on the plant floor." },
  { tag: "03", title: "Digital Engineering", desc: "PLM, MBSE and the engineering toolchain modernized for the next product." },
  { tag: "04", title: "Sustainable Operations", desc: "Decarbonize value chains and design circular by default." },
  { tag: "05", title: "Connected Products", desc: "Build the platforms and data behind products that learn after they ship." },
  { tag: "06", title: "Industrial AI", desc: "Vision, anomaly detection and optimization tuned for physical systems." },
];

export const Route = createFileRoute("/what-we-do/industry-x")({
  head: () => ({
    meta: [
      { title: "Industry X — Mattox Solution" },
      { name: "description", content: "Reinvent engineering, manufacturing and the connected product lifecycle for the era of intelligent industry." },
      { property: "og:title", content: "Industry X — Mattox Solution" },
      { property: "og:description", content: "Intelligent industry, end to end." },
      { property: "og:url", content: "/what-we-do/industry-x" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/industry-x" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "What we do", to: "/what-we-do" }, { label: "Industry X" }]} />
      <PageHero
        eyebrow="Industry X"
        title={<>Engineering and manufacturing, <span className="text-primary">reinvented</span>.</>}
        intro="The convergence of digital and physical is the next frontier of competitive advantage. We engineer it end to end."
        image={industryImg}
      />
      <Section>
        <SectionHeader eyebrow="Capabilities" title="Building intelligent industry." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Reinvent how your products get made." />
    </SiteShell>
  ),
});
