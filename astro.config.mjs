// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://sherifdeenadebayo.com",
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        sitemap({
            changefreq: "weekly",
            priority: 0.7,
            lastmod: new Date(),
            // Exclude offline page from sitemap
            filter: (page) => !page.includes("offline"),
        }),
    ],
});
