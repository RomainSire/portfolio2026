// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://romainsire.com",
	trailingSlash: "never",
	build: { format: "file", inlineStylesheets: "always" },
	integrations: [sitemap()],
	prefetch: { prefetchAll: true, defaultStrategy: "hover" },
	// i18n prêt : ajouter `locales: ["fr", "en"]` et `defaultLocale: "fr"` le jour venu.
	// Les routes FR vivent déjà à la racine, l'anglais se grefferait sous /en.
});
