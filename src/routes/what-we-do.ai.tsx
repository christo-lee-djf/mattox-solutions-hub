import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import aiImg from "@/assets/ai.jpg";

const offerings = [
  { tag: "01", title: "Generative AI", desc: "From pilot to platform — copilots, agents and gen-AI products engineered for scale." },
  { tag: "02", title: "Applied AI", desc: "Forecasting, optimization and decision intelligence inside critical operations." },
  { tag: "03", title: "Responsible AI", desc: "Governance, safety and assurance baked into every model and use case." },
  { tag: "04", title: "AI Foundations", desc: "Data, MLOps and platforms that make AI repeatable, observable and safe." },
  { tag: "05", title: "Talent & Adoption", desc: "Upskill the workforce and embed AI in the way people actually work." },
  { tag: "06", title: "Industry AI", desc: "Pretrained vertical solutions for banking, health, retail and the public sector." },
];

export const Route = createFileRoute("/what-we-do/ai")({
  head: () => ({
    meta: [
      { title: "Artificial Intelligence — Mattox Solution" },
      { name: "description", content: "Industrialize generative and applied AI with responsible foundations and proven outcomes." },
      { property: "og:title", content: "Artificial Intelligence — Mattox Solution" },
      { property: "og:description", content: "Generative and applied AI, engineered for enterprise scale." },
      { property: "og:url", content: "/what-we-do/ai" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do/ai" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "What we do", to: "/what-we-do" }, { label: "Artificial Intelligence" }]} />
      <PageHero
        eyebrow="Artificial Intelligence"
        title={<>From pilot to <span className="text-primary">platform</span>.</>}
        intro="Pilots are easy. Industrialization is the work. We design, build and run AI that becomes the way your enterprise operates."
        image={aiImg}
        tone="dark"
      />
      <Section>
        <SectionHeader eyebrow="Capabilities" title="What enterprise-scale AI looks like." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Turn your AI strategy into operating reality." />
    </SiteShell>
  ),
});
