import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import industryImg from "@/assets/industry.jpg";

const offerings = [
  { tag: "01", title: "Energy Transition", desc: "Plan, finance and deliver the path to low-carbon operations." },
  { tag: "02", title: "Upstream", desc: "Autonomous operations and integrated production optimization." },
  { tag: "03", title: "Downstream", desc: "Reinvent refining, retail and the customer-facing energy business." },
  { tag: "04", title: "New Energies", desc: "Stand up hydrogen, biofuels, CCUS and renewables businesses." },
  { tag: "05", title: "Utilities", desc: "Grid modernization, customer experience and energy services." },
  { tag: "06", title: "Sustainability", desc: "Decarbonize portfolios with measurable, audit-ready data." },
];

export const Route = createFileRoute("/industries/energy")({
  head: () => ({
    meta: [
      { title: "Energy — Mattox Solution" },
      { name: "description", content: "Reinventing the energy industry for the transition — operations, new energies and customer experience." },
      { property: "og:title", content: "Energy — Mattox Solution" },
      { property: "og:description", content: "Powering the transition." },
      { property: "og:url", content: "/industries/energy" },
    ],
    links: [{ rel: "canonical", href: "/industries/energy" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Industries", to: "/industries" }, { label: "Energy" }]} />
      <PageHero
        eyebrow="Energy"
        title={<>Powering the <span className="text-primary">transition</span>.</>}
        intro="The energy companies that win the next decade will run two businesses at once — and reinvent both."
        image={industryImg}
      />
      <Section>
        <SectionHeader eyebrow="Where we focus" title="Capabilities for energy leaders." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Run today's energy business. Build tomorrow's." />
    </SiteShell>
  ),
});
