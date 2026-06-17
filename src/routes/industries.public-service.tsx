import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import heroImg from "@/assets/hero.jpg";

const offerings = [
  { tag: "01", title: "Citizen Services", desc: "Digital services citizens actually want to use." },
  { tag: "02", title: "Defense & Security", desc: "Mission-ready capability across the digital and physical domains." },
  { tag: "03", title: "Justice & Public Safety", desc: "Modernize courts, corrections and frontline policing technology." },
  { tag: "04", title: "Health & Human Services", desc: "Reach more people with personalized, eligibility-aware services." },
  { tag: "05", title: "Tax & Revenue", desc: "Modern tax administration, fraud detection and citizen experience." },
  { tag: "06", title: "Public Sector AI", desc: "Responsible, transparent AI built for the public good." },
];

export const Route = createFileRoute("/industries/public-service")({
  head: () => ({
    meta: [
      { title: "Public Service — Mattox Solution" },
      { name: "description", content: "Helping governments and public agencies deliver mission with modern technology and human-centered services." },
      { property: "og:title", content: "Public Service — Mattox Solution" },
      { property: "og:description", content: "Mission, modernized." },
      { property: "og:url", content: "/industries/public-service" },
    ],
    links: [{ rel: "canonical", href: "/industries/public-service" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Industries", to: "/industries" }, { label: "Public Service" }]} />
      <PageHero
        eyebrow="Public Service"
        title={<>Mission, <span className="text-primary">modernized</span>.</>}
        intro="Public outcomes at the speed of citizens' lives — that's the bar. We help agencies meet it."
        image={heroImg}
      />
      <Section>
        <SectionHeader eyebrow="Where we focus" title="Capabilities for public sector leaders." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Deliver the mission, at modern speed." />
    </SiteShell>
  ),
});
