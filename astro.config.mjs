// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	// Update `site` (and remove `base`) when the client's custom domain goes live.
	site: "https://pixelpusher829.github.io",
	base: "/flexfit",
	trailingSlash: "ignore",
	integrations: [sitemap({ filter: (page) => !page.includes("/404") })],
});
