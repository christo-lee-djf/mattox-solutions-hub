import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import peopleImg from "@/assets/people.jpg";

const offerings = [
  { tag: "01", title: "Corporate Strategy", desc: "Where to play, how to win, what to do first — clarity that mobilizes the enterprise." },
  { tag: "02", title: "Operating Model", desc: "Design the organization, talent and processes required to run the future business." },
  { tag: "03", title: "Mergers & Acquisitions", desc: "From thesis to integration — capture value across the deal lifecycle." },
  { tag: "04", title: "Sustainability", desc: "Embed responsible growth in strategy, products and the value chain." },
  { tag: "05", title: "CFO & Enterprise Value", desc: "Plan, finance and govern reinvention with confidence." },
  { tag: "06", title: "Talent & Organization", desc: "Build the workforce that powers continuous change." },
];

export const Route = createFileRoute("/what-we-do/strategy-consulting")({
  head: () => ({
    meta: [
      { title: "Strategy & Consulting — Mattox Solution" },
      { name: "description", content: "Strategy and consulting that turns bold ambition into measurable enterprise value." },
      { property: "og:title", content: "Strategy & Consulting — Mattox Solution" },
      { property: "og:description", content: "Set direction, design the operating model, and outcompete." },
      { property: "og:url", content: "/what-we-do/strategy-consulting" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/strategy-consulting" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "What we do", to: "/what-we-do" }, { label: "Strategy & Consulting" }]} />
      <PageHero
        eyebrow="Strategy & Consulting"
        title={<>Bold strategy. <span className="text-primary">Measurable value.</span></>}
        intro="We help leaders make the choices that define the next decade — and build the muscle to execute them."
        image={peopleImg}
      />
      <Section>
        <SectionHeader eyebrow="Our offerings" title="Where we go deep." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Make the choices that define your next decade." />
    </SiteShell>
  ),
});
