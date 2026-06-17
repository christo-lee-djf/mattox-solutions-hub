import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, CTABand } from "@/components/site/Page";
import heroImg from "@/assets/hero.jpg";

const services = [
  { tag: "01", title: "Strategy & Consulting", desc: "Set direction, reshape the operating model, and unlock new sources of growth.", to: "/what-we-do/strategy-consulting" as const },
  { tag: "02", title: "Technology", desc: "Modernize the digital core with cloud, data, platforms and security built for change.", to: "/what-we-do/technology" as const },
  { tag: "03", title: "Artificial Intelligence", desc: "Industrialize generative and applied AI on responsible foundations.", to: "/what-we-do/ai" as const },
  { tag: "04", title: "Operations", desc: "Run intelligent operations that learn, adapt and create compounding value.", to: "/what-we-do/operations" as const },
  { tag: "05", title: "Industry X", desc: "Reinvent engineering, manufacturing and the connected product lifecycle.", to: "/what-we-do/industry-x" as const },
  { tag: "06", title: "Song", desc: "Design experiences that earn relevance — brand, commerce, content and service.", to: "/what-we-do/song" as const },
];

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What we do — Mattox Solution" },
      { name: "description", content: "Strategy, technology, AI, operations, Industry X and Song — capabilities that compound into measurable reinvention." },
      { property: "og:title", content: "What we do — Mattox Solution" },
      { property: "og:description", content: "End-to-end capabilities for total enterprise reinvention." },
      { property: "og:url", content: "/what-we-do" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do" }],
  }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="What we do"
        title={<>End-to-end capabilities for <span className="text-primary">total reinvention</span>.</>}
        intro="From the boardroom to the line of code, six interconnected services that work together so change sticks."
        image={heroImg}
      />
      <Section>
        <SectionHeader eyebrow="Services" title="Capabilities that compound." intro="Each capability stands on its own. Together they deliver the kind of change competitors can't match." />
        <CardGrid items={services} />
      </Section>
      <CTABand title="Let's design the reinvention your business needs." />
    </SiteShell>
  ),
});
