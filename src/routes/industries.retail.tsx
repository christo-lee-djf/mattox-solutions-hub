import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import industryImg from "@/assets/industry.jpg";

const offerings = [
  { tag: "01", title: "Omnichannel Commerce", desc: "Unified experience across store, app and marketplace." },
  { tag: "02", title: "Supply Chain", desc: "Predictive, resilient and sustainable from end to end." },
  { tag: "03", title: "Store of the Future", desc: "Reinvent the store as the most powerful channel in the network." },
  { tag: "04", title: "Customer Loyalty", desc: "Personalization and loyalty that actually move share of wallet." },
  { tag: "05", title: "Merchandising", desc: "AI-assisted assortment, pricing and promotion at category speed." },
  { tag: "06", title: "Sustainable Retail", desc: "Circular operations and transparent value chains." },
];

export const Route = createFileRoute("/industries/retail")({
  head: () => ({
    meta: [
      { title: "Retail — Mattox Solution" },
      { name: "description", content: "Reinventing retail end to end — from customer to commerce to supply chain." },
      { property: "og:title", content: "Retail — Mattox Solution" },
      { property: "og:description", content: "Where retail goes next." },
      { property: "og:url", content: "/industries/retail" },
    ],
    links: [{ rel: "canonical", href: "/industries/retail" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Industries", to: "/industries" }, { label: "Retail" }]} />
      <PageHero
        eyebrow="Retail"
        title={<>Where retail <span className="text-primary">goes next</span>.</>}
        intro="The winning retailers will run on living data, intelligent operations and a relentless focus on the customer."
        image={industryImg}
      />
      <Section>
        <SectionHeader eyebrow="Where we focus" title="Capabilities for retail leaders." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Build the retailer customers choose tomorrow." />
    </SiteShell>
  ),
});
