import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Breadcrumbs, CTABand } from "@/components/site/Page";
import aiImg from "@/assets/ai.jpg";

export const Route = createFileRoute("/what-we-think/ai-reinvention")({
  head: () => ({
    meta: [
      { title: "Total Enterprise Reinvention with AI — Mattox Solution" },
      { name: "description", content: "How leaders are turning generative AI from pilots into the new operating model of the enterprise." },
      { property: "og:title", content: "Total Enterprise Reinvention with AI — Mattox Solution" },
      { property: "og:description", content: "Our flagship perspective on enterprise reinvention with generative AI." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/what-we-think/ai-reinvention" },
    ],
    links: [{ rel: "canonical", href: "/what-we-think/ai-reinvention" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Total Enterprise Reinvention with AI",
        author: { "@type": "Organization", name: "Mattox Solution" },
        publisher: { "@type": "Organization", name: "Mattox Solution" },
      }),
    }],
  }),
  component: () => (
    <SiteShell>
      <Breadcrumbs items={[{ label: "What we think", to: "/what-we-think" }, { label: "AI Reinvention" }]} />
      <article className="container-px py-12 lg:py-20 max-w-3xl">
        <p className="eyebrow text-primary mb-5">Flagship Report · 12 min read</p>
        <h1 className="headline-lg text-ink">Total Enterprise Reinvention with AI.</h1>
        <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
          The companies pulling ahead aren't running AI pilots — they're rewiring how the enterprise operates around it. Here's what that looks like, and how to begin.
        </p>
        <img src={aiImg} alt="" loading="lazy" width={1280} height={896} className="mt-12 w-full aspect-[16/9] object-cover" />

        <div className="prose-styles mt-12 space-y-6 text-foreground/85 leading-relaxed">
          <h2 className="text-2xl font-medium tracking-tight text-ink mt-10">The pilot trap</h2>
          <p>For two years, leaders have invested aggressively in generative AI experiments. The use cases worked — and then most of them stalled. The pattern is familiar: a promising proof of concept that never quite reaches the operating P&L.</p>

          <h2 className="text-2xl font-medium tracking-tight text-ink mt-10">A new operating model</h2>
          <p>Reinvention requires more than models. It requires the data foundations, talent, governance, and product mindset that turn AI into the way work gets done. Done well, the result is an enterprise where every team is meaningfully more productive and every customer interaction is meaningfully better.</p>

          <h2 className="text-2xl font-medium tracking-tight text-ink mt-10">Three moves leaders are making</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Treat your data estate as the strategic asset it is — and modernize it accordingly.</li>
            <li>Pick a small number of reinvention domains and resource them like real businesses.</li>
            <li>Build a responsible-AI operating model from day one, not as a retrofit.</li>
          </ol>

          <h2 className="text-2xl font-medium tracking-tight text-ink mt-10">What comes next</h2>
          <p>The leaders we work with aren't waiting for the technology to settle. They're using this moment to redesign the parts of the business that matter most — and to build a competitive position that compounds.</p>
        </div>
      </article>
      <CTABand title="Ready to design your reinvention?" />
    </SiteShell>
  ),
});
