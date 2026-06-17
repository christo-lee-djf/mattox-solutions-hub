import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import aiImg from "@/assets/ai.jpg";

const offerings = [
  { tag: "01", title: "Network Modernization", desc: "Cloud-native networks, 5G monetization and software-defined operations." },
  { tag: "02", title: "Customer Experience", desc: "Reinvent care, commerce and self-service across the lifecycle." },
  { tag: "03", title: "Content & Media", desc: "Streaming, advertising and IP businesses ready for the next platform shift." },
  { tag: "04", title: "B2B & Enterprise", desc: "New services and platforms for the enterprise buyer." },
  { tag: "05", title: "Network AI", desc: "Autonomous networks driven by data and machine learning." },
  { tag: "06", title: "New Growth", desc: "Build adjacent businesses beyond connectivity." },
];

export const Route = createFileRoute("/industries/communications-media")({
  head: () => ({
    meta: [
      { title: "Communications & Media — Mattox Solution" },
      { name: "description", content: "Reinvention for network, content and platform businesses — at the next platform shift." },
      { property: "og:title", content: "Communications & Media — Mattox Solution" },
      { property: "og:description", content: "Reinvention at the next platform shift." },
      { property: "og:url", content: "/industries/communications-media" },
    ],
    links: [{ rel: "canonical", href: "/industries/communications-media" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Industries", to: "/industries" }, { label: "Communications & Media" }]} />
      <PageHero
        eyebrow="Communications & Media"
        title={<>Reinvention at the <span className="text-primary">next platform shift</span>.</>}
        intro="Networks, content and platforms are converging again. We help leaders pick their lane and build to win it."
        image={aiImg}
        tone="dark"
      />
      <Section>
        <SectionHeader eyebrow="Where we focus" title="Capabilities for comms & media leaders." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Build the platform your next decade depends on." />
    </SiteShell>
  ),
});
