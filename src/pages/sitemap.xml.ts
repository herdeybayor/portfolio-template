import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

function formatDate(date: Date) {
    return date.toISOString().split("T")[0];
}

const pages = [
    {
        url: "/",
        lastmod: new Date(),
        changefreq: "weekly",
        priority: 1.0,
    },
    {
        url: "/projects",
        lastmod: new Date(),
        changefreq: "weekly",
        priority: 0.8,
    },
];

export const GET: APIRoute = async () => {
    // Get all projects
    const projects = await getCollection("projects");

    // Create sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
        .map(
            (page) => `
    <url>
        <loc>https://sherifdeenadebayo.com${page.url}</loc>
        <lastmod>${formatDate(page.lastmod)}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`
        )
        .join("")}
    ${projects
        .map(
            (project) => `
    <url>
        <loc>https://sherifdeenadebayo.com/projects/${project.slug}</loc>
        <lastmod>${formatDate(new Date())}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`
        )
        .join("")}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
