import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, CTABand } from "@/components/site/Page";
import industryImg from "@/assets/industry.jpg";

const industries = [
  { tag: "01", title: "Banking", desc: "Retail, commercial and corporate banks reinventing around digital and AI.", to: "/industries/banking" as const },
  { tag: "02", title: "Health", desc: "Providers and payers building the next era of patient outcomes.", to: "/industries/health" as const },
  { tag: "03", title: "Public Service", desc: "Governments and agencies delivering mission with modern technology.", to: "/industries/public-service" as const },
  { tag: "04", title: "Retail", desc: "Reinventing commerce, supply chain and the customer relationship.", to: "/industries/retail" as const },
  { tag: "05", title: "Energy", desc: "The transition demands new operating models — we help build them.", to: "/industries/energy" as const },
  { tag: "06", title: "Communications & Media", desc: "Network, content and platform businesses ready for what comes next.", to: "/industries/communications-media" as const },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Mattox Solution" },
      { name: "description", content: "Deep industry expertise across banking, health, public service, retail, energy and communications & media." },
      { property: "og:title", content: "Industries — Mattox Solution" },
      { property: "og:description", content: "Insider knowledge. Outsider perspective. Together." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Industries"
        title={<>An <span className="text-primary">insider's view</span> of every sector we serve.</>}
        intro="We bring deep operating knowledge of your industry and the outside perspective to challenge it."
        image={industryImg}
      />
      <Section>
        <SectionHeader eyebrow="Sectors" title="Where we work." />
        <CardGrid items={industries} />
      </Section>
      <CTABand title="Talk to an industry team that knows your business." />
    </SiteShell>
  ),
});
