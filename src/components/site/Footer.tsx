import { Link } from "@tanstack/react-router";

type Col = { title: string; items: { label: string; to?: string }[] };

const COLS: Col[] = [
  {
    title: "What we do",
    items: [
      { label: "Strategy & Consulting", to: "/what-we-do/strategy-consulting" },
      { label: "Technology", to: "/what-we-do/technology" },
      { label: "Artificial Intelligence", to: "/what-we-do/ai" },
      { label: "Operations", to: "/what-we-do/operations" },
      { label: "Industry X", to: "/what-we-do/industry-x" },
      { label: "Song", to: "/what-we-do/song" },
    ],
  },
  {
    title: "Who we are",
    items: [
      { label: "About", to: "/who-we-are" },
      { label: "Leadership", to: "/who-we-are/leadership" },
      { label: "Newsroom", to: "/who-we-are/newsroom" },
      { label: "Sustainability", to: "/who-we-are/sustainability" },
    ],
  },
  {
    title: "Careers",
    items: [
      { label: "Search jobs", to: "/careers/search-jobs" },
      { label: "Life at Mattox", to: "/careers/life-at-mattox" },
      { label: "Careers home", to: "/careers" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Contact", to: "/contact" },
      { label: "What we think", to: "/what-we-think" },
      { label: "Industries", to: "/industries" },
    ],
  },
];

export function Footer() {
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
            {COLS.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-semibold mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.items.map((i) => (
                    <li key={i.label}>
                      {i.to ? (
                        <Link to={i.to} className="text-sm text-background/65 hover:text-background transition">
                          {i.label}
                        </Link>
                      ) : (
                        <span className="text-sm text-background/65">{i.label}</span>
                      )}
                    </li>
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
