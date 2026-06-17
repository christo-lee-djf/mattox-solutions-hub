import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, Breadcrumbs, CTABand } from "@/components/site/Page";

const leaders = [
  { name: "Avery Mattox", role: "Chief Executive Officer", bio: "Two decades leading large-scale digital and operational reinventions for Fortune 100 clients." },
  { name: "Priya Iyer", role: "President & Chief Operating Officer", bio: "Architect of Mattox's intelligent operations business and global delivery network." },
  { name: "Diego Alarcón", role: "Chief Technology Officer", bio: "Sets the technology agenda across cloud, data, AI and security for the firm." },
  { name: "Hannah Okafor", role: "Group Chief Executive — Strategy & Consulting", bio: "Leads strategy work for boards and C-suite teams across every major sector." },
  { name: "Marc Lavoie", role: "Chief AI Officer", bio: "Industrializes generative and applied AI inside the world's largest enterprises." },
  { name: "Sana Rahman", role: "Chief People Officer", bio: "Designs the employee experience that powers 738,000 reinvention careers." },
];

export const Route = createFileRoute("/who-we-are/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Mattox Solution" },
      { name: "description", content: "Meet the leaders setting the direction of Mattox Solution." },
      { property: "og:title", content: "Leadership — Mattox Solution" },
      { property: "og:description", content: "The team leading Mattox Solution." },
      { property: "og:url", content: "/who-we-are/leadership" },
    ],
    links: [{ rel: "canonical", href: "/who-we-are/leadership" }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "Who we are", to: "/who-we-are" }, { label: "Leadership" }]} />
      <PageHero
        eyebrow="Leadership"
        title={<>The team setting the <span className="text-primary">direction</span>.</>}
        intro="Operators, technologists and creatives who've built and reinvented businesses at every scale."
      />
      <Section>
        <SectionHeader eyebrow="Executive Committee" title="Meet the leadership team." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {leaders.map((l) => (
            <div key={l.name} className="bg-background p-8">
              <div className="aspect-square mb-5 bg-gradient-to-br from-primary/30 to-accent/40" />
              <h3 className="text-xl font-medium tracking-tight">{l.name}</h3>
              <p className="text-sm text-primary mt-1">{l.role}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand title="Want to work with our leadership team?" />
    </SiteShell>
  ),
});
