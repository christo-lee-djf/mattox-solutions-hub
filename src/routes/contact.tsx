import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero, Section } from "@/components/site/Page";
import { MapPin, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mattox Solution" },
      { name: "description", content: "Get in touch with Mattox Solution. We'd love to hear about the change you're trying to make." },
      { property: "og:title", content: "Contact — Mattox Solution" },
      { property: "og:description", content: "Talk to Mattox Solution." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let's start the <span className="text-primary">conversation</span>.</>}
        intro="Tell us about the change you're trying to make. The right team will be in touch."
      />
      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          <form className="lg:col-span-7 space-y-6">
            {[
              { label: "Full name", type: "text", placeholder: "Jane Smith" },
              { label: "Work email", type: "email", placeholder: "jane@company.com" },
              { label: "Company", type: "text", placeholder: "Company name" },
              { label: "Country", type: "text", placeholder: "United States" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} className="w-full border-0 border-b border-border bg-transparent px-0 py-3 outline-none focus:border-primary transition-colors" />
              </div>
            ))}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Tell us about your priority</label>
              <textarea rows={4} placeholder="What's the change you're trying to make?" className="w-full border-0 border-b border-border bg-transparent px-0 py-3 outline-none focus:border-primary transition-colors resize-none" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
              Send message →
            </button>
          </form>
          <aside className="lg:col-span-5 space-y-8">
            <div>
              <p className="eyebrow mb-4">Global headquarters</p>
              <div className="space-y-3 text-foreground/80">
                <p className="flex items-start gap-3"><MapPin className="size-4 mt-1 text-primary" /> 1 Reinvention Plaza, Dublin, Ireland</p>
                <p className="flex items-center gap-3"><Phone className="size-4 text-primary" /> +1 (800) 555-0148</p>
                <p className="flex items-center gap-3"><Mail className="size-4 text-primary" /> hello@mattoxsolution.com</p>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Media inquiries</p>
              <p className="text-foreground/80">press@mattoxsolution.com</p>
            </div>
            <div>
              <p className="eyebrow mb-4">Investor relations</p>
              <p className="text-foreground/80">ir@mattoxsolution.com</p>
            </div>
          </aside>
        </div>
      </Section>
    </SiteShell>
  ),
});
