import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import peopleImg from "@/assets/people.jpg";

const offerings = [
  { tag: "01", title: "Patient Experience", desc: "Care journeys redesigned around the patient, powered by digital." },
  { tag: "02", title: "Clinical Operations", desc: "AI-assisted clinical workflows that give time back to clinicians." },
  { tag: "03", title: "Payer Modernization", desc: "Claims, member experience and value-based care, modernized." },
  { tag: "04", title: "Health Data", desc: "Interoperable platforms that unlock the value of clinical data." },
  { tag: "05", title: "Population Health", desc: "Predict, prevent and engage entire populations of patients." },
  { tag: "06", title: "Connected Care", desc: "Virtual, home and hybrid care models that scale." },
];

export const Route = createFileRoute("/industries/health")({
  head: () => ({
    meta: [
      { title: "Health — Mattox Solution" },
      { name: "description", content: "Reinventing health systems and payers around outcomes, clinicians and digital experience." },
      { property: "og:title", content: "Health — Mattox Solution" },
      { property: "og:description", content: "Better outcomes, by design." },
      { property: "og:url", content: "/industries/health" },
    ],
    links: [{ rel: "canonical", href: "/industries/health" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Industries", to: "/industries" }, { label: "Health" }]} />
      <PageHero
        eyebrow="Health"
        title={<>Better outcomes, <span className="text-primary">by design</span>.</>}
        intro="We work with the world's leading providers and payers to make care more personal, predictive and accessible."
        image={peopleImg}
      />
      <Section>
        <SectionHeader eyebrow="Where we focus" title="Capabilities for health leaders." />
        <CardGrid items={offerings} />
      </Section>
      <CTABand title="Design the next era of care." />
    </SiteShell>
  ),
});
