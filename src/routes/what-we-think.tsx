import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero, Section, SectionHeader, CTABand } from "@/components/site/Page";
import { ArrowRight } from "lucide-react";
import industryImg from "@/assets/industry.jpg";
import peopleImg from "@/assets/people.jpg";
import aiImg from "@/assets/ai.jpg";
import heroImg from "@/assets/hero.jpg";

const insights = [
  { tag: "Report", img: industryImg, title: "The reinvention reset: building the next operating model", read: "12 min read", to: "/what-we-think/ai-reinvention" as const },
  { tag: "Research", img: peopleImg, title: "Total Enterprise Reinvention: a strategy for our times", read: "8 min read", to: "/what-we-think/ai-reinvention" as const },
  { tag: "Perspective", img: aiImg, title: "Generative AI and the future of enterprise productivity", read: "10 min read", to: "/what-we-think/ai-reinvention" as const },
  { tag: "Pulse", img: heroImg, title: "The CEO agenda: priorities for the year ahead", read: "6 min read", to: "/what-we-think/ai-reinvention" as const },
  { tag: "Report", img: industryImg, title: "Cloud continuum: where the next $1T of value gets created", read: "9 min read", to: "/what-we-think/ai-reinvention" as const },
  { tag: "Research", img: aiImg, title: "Talent reinvention in the age of generative AI", read: "11 min read", to: "/what-we-think/ai-reinvention" as const },
];

export const Route = createFileRoute("/what-we-think")({
  head: () => ({
    meta: [
      { title: "What we think — Mattox Solution" },
      { name: "description", content: "Research, reports and perspectives on enterprise reinvention, generative AI and the future of business." },
      { property: "og:title", content: "What we think — Mattox Solution" },
      { property: "og:description", content: "The latest research and perspectives from Mattox Solution." },
      { property: "og:url", content: "/what-we-think" },
    ],
    links: [{ rel: "canonical", href: "/what-we-think" }],
  }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="What we think"
        title={<>Ideas that <span className="text-primary">earn their keep</span>.</>}
        intro="Research, perspectives and signals from inside the world's most ambitious reinventions."
        image={aiImg}
        tone="dark"
      />
      <Section>
        <SectionHeader eyebrow="Latest" title="Latest thinking." />
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((p) => (
            <Link key={p.title} to={p.to} className="group block">
              <div className="aspect-[4/3] overflow-hidden mb-5">
                <img src={p.img} alt="" loading="lazy" width={1280} height={896} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="eyebrow text-primary mb-3">{p.tag}</p>
              <h3 className="text-xl font-medium leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex items-center gap-2">{p.read} <ArrowRight className="size-3.5" /></p>
            </Link>
          ))}
        </div>
      </Section>
      <CTABand title="Want our latest research in your inbox?" ctaLabel="Subscribe" />
    </SiteShell>
  ),
});
