import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CardGrid, Breadcrumbs, CTABand } from "@/components/site/Page";
import peopleImg from "@/assets/people.jpg";

const pillars = [
  { tag: "01", title: "Learning", desc: "World-class training, certifications and AI fluency for every role." },
  { tag: "02", title: "Wellbeing", desc: "Programs and benefits that support whole-person, whole-family health." },
  { tag: "03", title: "Belonging", desc: "Employee networks, mentoring and inclusive leadership development." },
  { tag: "04", title: "Mobility", desc: "Move across businesses, geographies and skill domains — by design." },
  { tag: "05", title: "Recognition", desc: "Compensation, awards and recognition tied to outcomes for clients." },
  { tag: "06", title: "Impact", desc: "Volunteer time, skills-based giving and community partnerships." },
];

export const Route = createFileRoute("/careers/life-at-mattox")({
  head: () => ({
    meta: [
      { title: "Life at Mattox — Careers" },
      { name: "description", content: "Hear from our people about culture, growth and the work we do at Mattox Solution." },
      { property: "og:title", content: "Life at Mattox — Careers" },
      { property: "og:description", content: "Culture, growth and the work we do." },
      { property: "og:url", content: "/careers/life-at-mattox" },
    ],
    links: [{ rel: "canonical", href: "/careers/life-at-mattox" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Careers", to: "/careers" }, { label: "Life at Mattox" }]} />
      <PageHero
        eyebrow="Life at Mattox"
        title={<>A career with <span className="text-primary">range</span>.</>}
        intro="The kind of work, learning and people you only get inside the world's largest professional services company."
        image={peopleImg}
      />
      <Section>
        <SectionHeader eyebrow="What we offer" title="Built for the long career." />
        <CardGrid items={pillars} />
      </Section>
      <CTABand title="Ready to see open roles?" ctaLabel="Search jobs" ctaTo="/careers/search-jobs" />
    </SiteShell>
  ),
});
