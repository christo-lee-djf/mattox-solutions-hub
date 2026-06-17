import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/what-we-do", changefreq: "weekly", priority: "0.9" },
          { path: "/what-we-do/strategy-consulting" },
          { path: "/what-we-do/technology" },
          { path: "/what-we-do/ai" },
          { path: "/what-we-do/operations" },
          { path: "/what-we-do/industry-x" },
          { path: "/what-we-do/song" },
          { path: "/industries", changefreq: "weekly", priority: "0.9" },
          { path: "/industries/banking" },
          { path: "/industries/health" },
          { path: "/industries/public-service" },
          { path: "/industries/retail" },
          { path: "/industries/energy" },
          { path: "/industries/communications-media" },
          { path: "/what-we-think", changefreq: "weekly" },
          { path: "/what-we-think/ai-reinvention" },
          { path: "/who-we-are" },
          { path: "/who-we-are/leadership" },
          { path: "/who-we-are/newsroom", changefreq: "weekly" },
          { path: "/who-we-are/sustainability" },
          { path: "/careers" },
          { path: "/careers/search-jobs", changefreq: "weekly" },
          { path: "/careers/life-at-mattox" },
          { path: "/contact" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
