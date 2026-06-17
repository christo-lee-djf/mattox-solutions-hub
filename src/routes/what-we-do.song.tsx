import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import peopleImg from "@/assets/people.jpg";

const offerings = [
  { tag: "01", title: "Brand & Creative", desc: "Distinctive brands that earn attention and shift culture." },
  { tag: "02", title: "Customer Experience", desc: "Service design and CX strategy across every channel and moment." },
  { tag: "03", title: "Commerce", desc: "D2C, marketplaces and B2B commerce engineered for growth." },
  { tag: "04", title: "Marketing Transformation", desc: "Modern marketing operating model, martech and measurement." },
  { tag: "05", title: "Content & Production", desc: "Always-on content engines powered by gen-AI." },
  { tag: "06", title: "Service Design", desc: "Reinvent the service moments that decide loyalty." },
];

export const Route = createFileRoute("/what-we-do/song")({
  head: () => ({
    meta: [
      { title: "Song — Mattox Solution" },
      { name: "description", content: "Customer, brand, experience and content — the creative consultancy that helps brands earn relevance." },
      { property: "og:title", content: "Song — Mattox Solution" },
      { property: "og:description", content: "Earn relevance at every moment." },
      { property: "og:url", content: "/what-we-do/song" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/song" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "What we do", to: "/what-we-do" }, { label: "Song" }]} />
      <PageHero
        eyebrow="Song"
        title={<>Earn relevance — at <span className="text-primary">every moment</span>.</>}
        intro="The world's largest creative consultancy. We help brands grow by turning customer obsession into operating advantage."
        image={peopleImg}
      />
      <Section>
        <SectionHeader eyebrow="Capabilities" title="Where Song goes to work." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Make your brand the one customers choose." />
    </SiteShell>
  ),
});
