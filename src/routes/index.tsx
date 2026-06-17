import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Search, Menu } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aiImg from "@/assets/ai.jpg";
import industryImg from "@/assets/industry.jpg";
import peopleImg from "@/assets/people.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mattox Solution | Let there be change" },
      { name: "description", content: "We help the world's leading businesses, governments and organizations reinvent through technology — strategy, AI, cloud and operations at scale." },
      { property: "og:title", content: "Mattox Solution | Let there be change" },
      { property: "og:description", content: "Reinvention starts here. Strategy, AI, cloud and operations at scale." },
    ],
  }),
  component: Home,
});

function Header() {
  const nav = ["What we do", "What we think", "Who we are", "Careers"];
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-px flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <span className="text-[1.35rem] font-semibold tracking-tight purple-caret purple-caret-after">
            mattox
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">
            Solution
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {nav.map((n) => (
            <a key={n} href="#" className="text-foreground/80 hover:text-primary transition-colors">
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Search" className="p-2 hover:text-primary"><Search className="size-5" /></button>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors">
            Contact us
          </a>
          <button aria-label="Menu" className="lg:hidden p-2"><Menu className="size-5" /></button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px grid lg:grid-cols-12 gap-10 pt-14 pb-20 lg:pt-24 lg:pb-32">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="eyebrow mb-6">Reinvention. Reimagined.</p>
          <h1 className="headline-xl text-ink">
            Let there be<br />
            <span className="text-primary">change</span><span className="text-primary">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            We partner with the world's leading companies to reinvent through technology — building digital cores, scaling AI, and turning bold strategy into measurable outcomes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
              See what we do <ArrowRight className="size-4" />
            </a>
            <a href="#careers" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
              Join us
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={heroImg} alt="Mattox Solution teams collaborating in a modern office" className="absolute inset-0 size-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background border border-border p-5 max-w-[240px] shadow-lg hidden md:block">
            <p className="eyebrow mb-2">Live</p>
            <p className="text-sm font-medium leading-snug">
              738,000+ people across 120+ countries reinventing with our clients.
            </p>
          </div>
        </div>
      </div>
      <div className="border-y border-border bg-surface">
        <div className="container-px py-5 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>Trusted by industry leaders</span>
          <div className="flex flex-wrap gap-x-10 gap-y-2 text-foreground/60 font-medium">
            <span>NORTHWIND</span><span>ACME CORP</span><span>UMBRA</span><span>HELIX BANK</span><span>VOLTAIC</span><span>STRATA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { title: "Strategy & Consulting", desc: "Set the direction. Reimagine the operating model. Outcompete with a clear plan for value.", tag: "01" },
  { title: "Technology", desc: "Modernize the digital core — cloud, data, platforms and security engineered for change.", tag: "02" },
  { title: "Artificial Intelligence", desc: "Industrialize generative AI from pilot to enterprise scale with responsible foundations.", tag: "03" },
  { title: "Operations", desc: "Run intelligent operations that learn, adapt and unlock new sources of growth.", tag: "04" },
  { title: "Industry X", desc: "Reinvent engineering, manufacturing and the connected product lifecycle.", tag: "05" },
  { title: "Song", desc: "Create relevance at every moment — brand, commerce, content and customer experience.", tag: "06" },
];

function Services() {
  return (
    <section id="services" className="container-px py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-10 mb-14">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5">What we do</p>
          <h2 className="headline-lg text-ink">Capabilities that compound.</h2>
        </div>
        <p className="lg:col-span-6 lg:col-start-7 text-lg text-muted-foreground leading-relaxed self-end">
          From boardroom strategy to the line of code, we work end-to-end so reinvention sticks — and keeps paying back.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-border">
        {services.map((s) => (
          <a key={s.title} href="#" className="group relative p-8 border-b border-r border-border last:border-r-0 hover:bg-surface transition-colors flex flex-col min-h-[280px]">
            <span className="eyebrow text-primary">{s.tag}</span>
            <h3 className="mt-6 text-2xl font-medium tracking-tight">{s.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            <ArrowUpRight className="mt-auto size-6 text-foreground/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Feature() {
  return (
    <section className="bg-ink text-background">
      <div className="container-px grid lg:grid-cols-12 gap-10 py-24 lg:py-32 items-center">
        <div className="lg:col-span-6 relative">
          <img src={aiImg} alt="Abstract AI data streams" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={896} />
        </div>
        <div className="lg:col-span-6">
          <p className="eyebrow text-accent">The AI imperative</p>
          <h2 className="headline-lg mt-5">Reinventing with generative AI — at scale, with confidence.</h2>
          <p className="mt-6 text-lg text-background/70 leading-relaxed">
            We help leaders move beyond pilots. Our engineers, scientists and strategists build the data foundations, talent, and governance that turn AI into durable advantage.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-background/15 pt-8">
            {[
              ["$3B", "invested in AI"],
              ["1,800+", "AI patents & applications"],
              ["72k", "AI & data professionals"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="text-3xl font-semibold tracking-tight">{k}</div>
                <div className="mt-1 text-sm text-background/60">{v}</div>
              </div>
            ))}
          </div>
          <a href="#" className="link-underline mt-10 text-background">Read the AI report <ArrowRight className="size-4" /></a>
        </div>
      </div>
    </section>
  );
}

const industries = [
  "Banking", "Capital Markets", "Insurance", "Health", "Life Sciences", "Public Service",
  "Consumer Goods", "Retail", "Energy", "Utilities", "Industrial", "Communications & Media",
];

function Industries() {
  return (
    <section className="container-px py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-10 mb-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5">Industries</p>
          <h2 className="headline-lg text-ink">Deep expertise in every sector we serve.</h2>
        </div>
        <p className="lg:col-span-6 lg:col-start-7 text-lg text-muted-foreground leading-relaxed self-end">
          We bring the knowledge of an industry insider and the perspective of a reinvention partner — together.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {industries.map((i) => (
          <a key={i} href="#" className="group bg-background p-6 flex items-center justify-between hover:bg-primary hover:text-primary-foreground transition-colors">
            <span className="text-lg font-medium">{i}</span>
            <ArrowUpRight className="size-5 opacity-60 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </section>
  );
}

const insights = [
  { tag: "Report", img: industryImg, title: "The reinvention reset: building the next operating model", read: "12 min read" },
  { tag: "Research", img: peopleImg, title: "Total Enterprise Reinvention: a strategy for our times", read: "8 min read" },
  { tag: "Perspective", img: aiImg, title: "Generative AI and the future of enterprise productivity", read: "10 min read" },
];

function Insights() {
  return (
    <section className="bg-surface">
      <div className="container-px py-24 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-5">What we think</p>
            <h2 className="headline-lg text-ink">Latest thinking.</h2>
          </div>
          <a href="#" className="link-underline text-foreground">All insights <ArrowRight className="size-4" /></a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((p) => (
            <a key={p.title} href="#" className="group block">
              <div className="aspect-[4/3] overflow-hidden mb-5">
                <img src={p.img} alt="" loading="lazy" width={1280} height={896} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="eyebrow text-primary mb-3">{p.tag}</p>
              <h3 className="text-xl font-medium leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.read}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section id="careers" className="container-px py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <p className="eyebrow mb-5">Careers</p>
          <h2 className="headline-lg text-ink">Bring your boldest ambition.</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            At Mattox Solution, you'll work alongside 738,000 people in 120 countries on the work that matters most — for our clients, our communities, and the planet.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
              Search jobs <ArrowRight className="size-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
              Life at Mattox
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <img src={peopleImg} alt="Mattox Solution colleagues collaborating" loading="lazy" width={1280} height={896} className="w-full aspect-[5/4] object-cover" />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="container-px py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <h2 className="lg:col-span-8 headline-lg">
          Ready to reinvent? Let's start the conversation.
        </h2>
        <div className="lg:col-span-4 lg:justify-self-end">
          <a href="#" className="inline-flex items-center gap-3 rounded-full bg-background text-foreground px-7 py-4 text-base font-medium hover:bg-ink hover:text-background transition">
            Contact Mattox <ArrowRight className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "What we do", items: ["Strategy", "Consulting", "Technology", "AI", "Operations", "Industry X"] },
    { title: "Who we are", items: ["About", "Leadership", "Newsroom", "Investors", "Sustainability"] },
    { title: "Careers", items: ["Search jobs", "Life at Mattox", "Students", "Experienced", "Locations"] },
    { title: "Connect", items: ["Contact", "Subscribe", "LinkedIn", "X / Twitter", "YouTube"] },
  ];
  return (
    <footer className="bg-ink text-background">
      <div className="container-px pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-background/15">
          <div className="lg:col-span-4">
            <div className="text-3xl font-semibold tracking-tight purple-caret purple-caret-after">mattox</div>
            <p className="mt-5 text-background/60 max-w-sm leading-relaxed">
              A global professional services company, partnering with the world's boldest organizations to create lasting value.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-semibold mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.items.map((i) => (
                    <li key={i}><a href="#" className="text-sm text-background/65 hover:text-background transition">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-background/55">
          <p>© {new Date().getFullYear()} Mattox Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="#" className="hover:text-background">Cookies</a>
            <a href="#" className="hover:text-background">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <Feature />
        <Industries />
        <Insights />
        <Careers />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
